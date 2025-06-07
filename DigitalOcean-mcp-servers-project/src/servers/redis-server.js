const express = require('express');
const redis = require('redis');

const router = express.Router();

// Initialize Redis client
const client = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    password: process.env.REDIS_PASSWORD,
    socket: {
        reconnectStrategy: (retries) => Math.min(retries * 50, 500)
    }
});

client.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

client.on('connect', () => {
    console.log('Connected to Redis');
});

// Connect to Redis
client.connect().catch(console.error);

// Health check endpoint
router.get('/health', async (req, res) => {
    try {
        await client.ping();
        res.json({ status: 'healthy', service: 'redis-mcp' });
    } catch (error) {
        res.status(500).json({ status: 'unhealthy', service: 'redis-mcp', error: error.message });
    }
});

// Basic key-value operations
router.get('/get/:key', async (req, res) => {
    try {
        const { key } = req.params;
        const value = await client.get(key);

        res.json({
            success: true,
            key,
            value: value ? JSON.parse(value) : null
        });
    } catch (error) {
        console.error('Error getting key:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.post('/set', async (req, res) => {
    try {
        const { key, value, ttl } = req.body;

        if (!key || value === undefined) {
            return res.status(400).json({
                success: false,
                error: 'Key and value are required'
            });
        }

        const serializedValue = JSON.stringify(value);
        
        if (ttl) {
            await client.setEx(key, ttl, serializedValue);
        } else {
            await client.set(key, serializedValue);
        }

        res.json({
            success: true,
            message: 'Key set successfully',
            key,
            ttl: ttl || null
        });
    } catch (error) {
        console.error('Error setting key:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.delete('/delete/:key', async (req, res) => {
    try {
        const { key } = req.params;
        const result = await client.del(key);

        res.json({
            success: true,
            message: result > 0 ? 'Key deleted successfully' : 'Key not found',
            deleted: result > 0
        });
    } catch (error) {
        console.error('Error deleting key:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Hash operations
router.post('/hash/set', async (req, res) => {
    try {
        const { key, field, value } = req.body;

        if (!key || !field || value === undefined) {
            return res.status(400).json({
                success: false,
                error: 'Key, field, and value are required'
            });
        }

        await client.hSet(key, field, JSON.stringify(value));

        res.json({
            success: true,
            message: 'Hash field set successfully',
            key,
            field
        });
    } catch (error) {
        console.error('Error setting hash field:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.get('/hash/get/:key/:field', async (req, res) => {
    try {
        const { key, field } = req.params;
        const value = await client.hGet(key, field);

        res.json({
            success: true,
            key,
            field,
            value: value ? JSON.parse(value) : null
        });
    } catch (error) {
        console.error('Error getting hash field:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.get('/hash/getall/:key', async (req, res) => {
    try {
        const { key } = req.params;
        const hash = await client.hGetAll(key);

        // Parse JSON values
        const parsedHash = {};
        for (const [field, value] of Object.entries(hash)) {
            try {
                parsedHash[field] = JSON.parse(value);
            } catch {
                parsedHash[field] = value;
            }
        }

        res.json({
            success: true,
            key,
            hash: parsedHash
        });
    } catch (error) {
        console.error('Error getting hash:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// List operations
router.post('/list/push', async (req, res) => {
    try {
        const { key, values, direction = 'right' } = req.body;

        if (!key || !Array.isArray(values)) {
            return res.status(400).json({
                success: false,
                error: 'Key and values array are required'
            });
        }

        const serializedValues = values.map(v => JSON.stringify(v));
        let length;

        if (direction === 'left') {
            length = await client.lPush(key, serializedValues);
        } else {
            length = await client.rPush(key, serializedValues);
        }

        res.json({
            success: true,
            message: 'Values pushed to list',
            key,
            length
        });
    } catch (error) {
        console.error('Error pushing to list:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.get('/list/range/:key', async (req, res) => {
    try {
        const { key } = req.params;
        const { start = 0, stop = -1 } = req.query;

        const values = await client.lRange(key, parseInt(start), parseInt(stop));
        const parsedValues = values.map(v => {
            try {
                return JSON.parse(v);
            } catch {
                return v;
            }
        });

        res.json({
            success: true,
            key,
            values: parsedValues
        });
    } catch (error) {
        console.error('Error getting list range:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Set operations
router.post('/set/add', async (req, res) => {
    try {
        const { key, members } = req.body;

        if (!key || !Array.isArray(members)) {
            return res.status(400).json({
                success: false,
                error: 'Key and members array are required'
            });
        }

        const serializedMembers = members.map(m => JSON.stringify(m));
        const added = await client.sAdd(key, serializedMembers);

        res.json({
            success: true,
            message: 'Members added to set',
            key,
            added
        });
    } catch (error) {
        console.error('Error adding to set:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.get('/set/members/:key', async (req, res) => {
    try {
        const { key } = req.params;
        const members = await client.sMembers(key);
        const parsedMembers = members.map(m => {
            try {
                return JSON.parse(m);
            } catch {
                return m;
            }
        });

        res.json({
            success: true,
            key,
            members: parsedMembers
        });
    } catch (error) {
        console.error('Error getting set members:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Session management
router.post('/session/create', async (req, res) => {
    try {
        const { sessionId, userId, data, ttl = 3600 } = req.body;

        if (!sessionId || !userId) {
            return res.status(400).json({
                success: false,
                error: 'Session ID and user ID are required'
            });
        }

        const sessionData = {
            userId,
            createdAt: new Date().toISOString(),
            lastAccessed: new Date().toISOString(),
            ...data
        };

        await client.setEx(`session:${sessionId}`, ttl, JSON.stringify(sessionData));

        res.json({
            success: true,
            message: 'Session created successfully',
            sessionId,
            ttl
        });
    } catch (error) {
        console.error('Error creating session:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.get('/session/:sessionId', async (req, res) => {
    try {
        const { sessionId } = req.params;
        const sessionData = await client.get(`session:${sessionId}`);

        if (!sessionData) {
            return res.status(404).json({
                success: false,
                error: 'Session not found'
            });
        }

        // Update last accessed time
        const parsed = JSON.parse(sessionData);
        parsed.lastAccessed = new Date().toISOString();
        await client.set(`session:${sessionId}`, JSON.stringify(parsed));

        res.json({
            success: true,
            sessionId,
            data: parsed
        });
    } catch (error) {
        console.error('Error getting session:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.delete('/session/:sessionId', async (req, res) => {
    try {
        const { sessionId } = req.params;
        const result = await client.del(`session:${sessionId}`);

        res.json({
            success: true,
            message: result > 0 ? 'Session deleted successfully' : 'Session not found',
            deleted: result > 0
        });
    } catch (error) {
        console.error('Error deleting session:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Cache management
router.post('/cache/set', async (req, res) => {
    try {
        const { key, value, ttl = 3600 } = req.body;

        if (!key || value === undefined) {
            return res.status(400).json({
                success: false,
                error: 'Key and value are required'
            });
        }

        const cacheKey = `cache:${key}`;
        await client.setEx(cacheKey, ttl, JSON.stringify(value));

        res.json({
            success: true,
            message: 'Cache set successfully',
            key,
            ttl
        });
    } catch (error) {
        console.error('Error setting cache:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.get('/cache/:key', async (req, res) => {
    try {
        const { key } = req.params;
        const cacheKey = `cache:${key}`;
        const value = await client.get(cacheKey);

        res.json({
            success: true,
            key,
            value: value ? JSON.parse(value) : null,
            cached: value !== null
        });
    } catch (error) {
        console.error('Error getting cache:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Statistics and monitoring
router.get('/stats', async (req, res) => {
    try {
        const info = await client.info();
        const dbSize = await client.dbSize();
        const memory = await client.memoryUsage('stats');

        res.json({
            success: true,
            stats: {
                dbSize,
                memory,
                info: info.split('\r\n').reduce((acc, line) => {
                    if (line.includes(':')) {
                        const [key, value] = line.split(':');
                        acc[key] = value;
                    }
                    return acc;
                }, {})
            }
        });
    } catch (error) {
        console.error('Error getting stats:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
