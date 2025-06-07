const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const router = express.Router();

// Initialize Supabase client
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ status: 'healthy', service: 'supabase-mcp' });
});

// Authentication endpoints
router.post('/auth/signup', async (req, res) => {
    try {
        const { email, password, metadata } = req.body;

        const { data, error } = await supabase.auth.admin.createUser({
            email,
            password,
            user_metadata: metadata || {},
            email_confirm: true
        });

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            user: data.user
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.post('/auth/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            session: data.session,
            user: data.user
        });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.post('/auth/signout', async (req, res) => {
    try {
        const { jwt } = req.body;

        const { error } = await supabase.auth.admin.signOut(jwt);

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            message: 'User signed out successfully'
        });
    } catch (error) {
        console.error('Error signing out:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Database operations
router.get('/data/:table', async (req, res) => {
    try {
        const { table } = req.params;
        const { select, filter, order, limit } = req.query;

        let query = supabase.from(table);

        if (select) {
            query = query.select(select);
        } else {
            query = query.select('*');
        }

        if (filter) {
            const filters = JSON.parse(filter);
            Object.entries(filters).forEach(([key, value]) => {
                query = query.eq(key, value);
            });
        }

        if (order) {
            const [column, direction] = order.split(':');
            query = query.order(column, { ascending: direction !== 'desc' });
        }

        if (limit) {
            query = query.limit(parseInt(limit));
        }

        const { data, error } = await query;

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.post('/data/:table', async (req, res) => {
    try {
        const { table } = req.params;
        const { data: insertData } = req.body;

        const { data, error } = await supabase
            .from(table)
            .insert(insertData)
            .select();

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.put('/data/:table/:id', async (req, res) => {
    try {
        const { table, id } = req.params;
        const { data: updateData } = req.body;

        const { data, error } = await supabase
            .from(table)
            .update(updateData)
            .eq('id', id)
            .select();

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.delete('/data/:table/:id', async (req, res) => {
    try {
        const { table, id } = req.params;

        const { error } = await supabase
            .from(table)
            .delete()
            .eq('id', id);

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            message: 'Record deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Real-time subscriptions
router.post('/realtime/subscribe', async (req, res) => {
    try {
        const { table, event, filter } = req.body;

        // Note: This is a simplified example. In a real implementation,
        // you'd need to handle WebSocket connections properly
        const channel = supabase
            .channel(`${table}-changes`)
            .on('postgres_changes', {
                event: event || '*',
                schema: 'public',
                table: table,
                filter: filter
            }, (payload) => {
                console.log('Change received!', payload);
                // In a real implementation, you'd emit this to connected clients
            })
            .subscribe();

        res.json({
            success: true,
            message: 'Subscription created',
            channelId: channel.topic
        });
    } catch (error) {
        console.error('Error creating subscription:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Storage operations
router.post('/storage/:bucket/upload', async (req, res) => {
    try {
        const { bucket } = req.params;
        const { fileName, fileData, contentType } = req.body;

        const { data, error } = await supabase.storage
            .from(bucket)
            .upload(fileName, fileData, {
                contentType: contentType || 'application/octet-stream'
            });

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.get('/storage/:bucket/:fileName', async (req, res) => {
    try {
        const { bucket, fileName } = req.params;

        const { data, error } = await supabase.storage
            .from(bucket)
            .download(fileName);

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
