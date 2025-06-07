const express = require('express');
const { BedrockRuntimeClient, InvokeModelCommand } = require('@aws-sdk/client-bedrock-runtime');

const router = express.Router();
const client = new BedrockRuntimeClient({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ status: 'healthy', service: 'bedrock-mcp' });
});

// Invoke Sonnet 4 model
router.post('/invoke', async (req, res) => {
    try {
        const { prompt, max_tokens = 1000, temperature = 0.7 } = req.body;

        const input = {
            modelId: process.env.BEDROCK_MODEL_ID || 'anthropic.claude-3-sonnet-20240229-v1:0',
            contentType: 'application/json',
            accept: 'application/json',
            body: JSON.stringify({
                anthropic_version: "bedrock-2023-05-31",
                max_tokens: max_tokens,
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: temperature
            })
        };

        const command = new InvokeModelCommand(input);
        const response = await client.send(command);

        // Parse the response
        const responseBody = JSON.parse(new TextDecoder().decode(response.body));

        res.json({
            success: true,
            response: responseBody
        });
    } catch (error) {
        console.error('Error invoking Bedrock model:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Batch processing endpoint
router.post('/batch', async (req, res) => {
    try {
        const { prompts } = req.body;
        
        if (!Array.isArray(prompts)) {
            return res.status(400).json({
                success: false,
                error: 'prompts must be an array'
            });
        }

        const results = await Promise.all(prompts.map(async (prompt) => {
            try {
                const input = {
                    modelId: process.env.BEDROCK_MODEL_ID || 'anthropic.claude-3-sonnet-20240229-v1:0',
                    contentType: 'application/json',
                    accept: 'application/json',
                    body: JSON.stringify({
                        anthropic_version: "bedrock-2023-05-31",
                        max_tokens: 1000,
                        messages: [
                            {
                                role: "user",
                                content: prompt
                            }
                        ],
                        temperature: 0.7
                    })
                };

                const command = new InvokeModelCommand(input);
                const response = await client.send(command);
                return {
                    success: true,
                    prompt,
                    response: JSON.parse(new TextDecoder().decode(response.body))
                };
            } catch (error) {
                return {
                    success: false,
                    prompt,
                    error: error.message
                };
            }
        }));

        res.json({
            success: true,
            results
        });
    } catch (error) {
        console.error('Error in batch processing:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
