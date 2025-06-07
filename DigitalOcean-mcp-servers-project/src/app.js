const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const morgan = require('morgan');
require('dotenv').config();

// Import MCP servers
const bedrockServer = require('./servers/bedrock-server');
const supabaseServer = require('./servers/supabase-server');
const redisServer = require('./servers/redis-server');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}));

// CORS configuration
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'https://smeboost.howaiconnects.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key']
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: process.env.RATE_LIMIT_MAX || 100, // limit each IP to 100 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false
});

app.use(limiter);

// Compression and parsing middleware
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// API Key middleware for protected routes
const apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'] || req.query.apiKey;
    
    if (!apiKey) {
        return res.status(401).json({
            success: false,
            error: 'API key required'
        });
    }

    if (apiKey !== process.env.MCP_API_KEY) {
        return res.status(403).json({
            success: false,
            error: 'Invalid API key'
        });
    }

    next();
};

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: process.env.npm_package_version || '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        services: {
            bedrock: 'available',
            supabase: 'available',
            redis: 'available'
        }
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'SME Boost MCP Servers',
        version: process.env.npm_package_version || '1.0.0',
        documentation: '/api/docs',
        health: '/health',
        services: {
            bedrock: '/api/bedrock',
            supabase: '/api/supabase',
            redis: '/api/redis'
        }
    });
});

// Mount MCP servers with API key protection
app.use('/api/bedrock', apiKeyAuth, bedrockServer);
app.use('/api/supabase', apiKeyAuth, supabaseServer);
app.use('/api/redis', apiKeyAuth, redisServer);

// API documentation endpoint
app.get('/api/docs', (req, res) => {
    res.json({
        title: 'SME Boost MCP Servers API',
        version: '1.0.0',
        description: 'Model Context Protocol servers for SME Boost platform',
        baseUrl: `${req.protocol}://${req.get('host')}`,
        authentication: {
            type: 'API Key',
            header: 'X-API-Key',
            description: 'Include your API key in the X-API-Key header'
        },
        endpoints: {
            bedrock: {
                base: '/api/bedrock',
                endpoints: {
                    'POST /invoke': 'Invoke AI model with prompt',
                    'POST /batch': 'Batch process multiple prompts',
                    'GET /health': 'Check Bedrock service health'
                }
            },
            supabase: {
                base: '/api/supabase',
                endpoints: {
                    'POST /auth/signup': 'Create new user account',
                    'POST /auth/signin': 'Sign in user',
                    'POST /auth/signout': 'Sign out user',
                    'GET /data/:table': 'Fetch data from table',
                    'POST /data/:table': 'Insert data into table',
                    'PUT /data/:table/:id': 'Update record by ID',
                    'DELETE /data/:table/:id': 'Delete record by ID',
                    'POST /storage/:bucket/upload': 'Upload file to storage',
                    'GET /storage/:bucket/:fileName': 'Download file from storage',
                    'GET /health': 'Check Supabase service health'
                }
            },
            redis: {
                base: '/api/redis',
                endpoints: {
                    'GET /get/:key': 'Get value by key',
                    'POST /set': 'Set key-value pair',
                    'DELETE /delete/:key': 'Delete key',
                    'POST /hash/set': 'Set hash field',
                    'GET /hash/get/:key/:field': 'Get hash field',
                    'GET /hash/getall/:key': 'Get all hash fields',
                    'POST /list/push': 'Push to list',
                    'GET /list/range/:key': 'Get list range',
                    'POST /set/add': 'Add to set',
                    'GET /set/members/:key': 'Get set members',
                    'POST /session/create': 'Create session',
                    'GET /session/:sessionId': 'Get session data',
                    'DELETE /session/:sessionId': 'Delete session',
                    'POST /cache/set': 'Set cache value',
                    'GET /cache/:key': 'Get cache value',
                    'GET /stats': 'Get Redis statistics',
                    'GET /health': 'Check Redis service health'
                }
            }
        },
        examples: {
            bedrock_invoke: {
                url: 'POST /api/bedrock/invoke',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'your-api-key'
                },
                body: {
                    prompt: 'Explain the benefits of AI for small businesses',
                    max_tokens: 1000,
                    temperature: 0.7
                }
            },
            supabase_auth: {
                url: 'POST /api/supabase/auth/signup',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'your-api-key'
                },
                body: {
                    email: 'user@example.com',
                    password: 'securepassword',
                    metadata: {
                        firstName: 'John',
                        lastName: 'Doe'
                    }
                }
            },
            redis_cache: {
                url: 'POST /api/redis/cache/set',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'your-api-key'
                },
                body: {
                    key: 'user_preferences_123',
                    value: {
                        theme: 'dark',
                        language: 'en'
                    },
                    ttl: 3600
                }
            }
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    
    res.status(err.status || 500).json({
        success: false,
        error: process.env.NODE_ENV === 'production' 
            ? 'Internal server error' 
            : err.message,
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint not found',
        path: req.originalUrl,
        method: req.method,
        timestamp: new Date().toISOString()
    });
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 SME Boost MCP Servers running on port ${PORT}`);
    console.log(`📚 API Documentation: http://localhost:${PORT}/api/docs`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/health`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
