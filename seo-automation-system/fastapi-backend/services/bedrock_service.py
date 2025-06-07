"""
Amazon Bedrock Service for Claude Opus and Sonnet integration
"""

import boto3
import json
import logging
from typing import Dict, Any, Optional
from botocore.exceptions import ClientError
import asyncio
from datetime import datetime
import time

logger = logging.getLogger(__name__)

class BedrockService:
    """Service for interacting with Amazon Bedrock Claude models"""
    
    def __init__(self):
        self.client = None
        self.region = "us-east-1"  # Bedrock region
        self.claude_opus_model = "anthropic.claude-3-opus-20240229-v1:0"
        self.claude_sonnet_model = "anthropic.claude-3-sonnet-20240229-v1:0"
        self.initialize_client()
    
    def initialize_client(self):
        """Initialize Bedrock client"""
        try:
            self.client = boto3.client(
                'bedrock-runtime',
                region_name=self.region
            )
            logger.info("Bedrock client initialized successfully")
        except Exception as e:
            logger.error(f"Failed to initialize Bedrock client: {str(e)}")
            raise
    
    async def health_check(self) -> bool:
        """Check if Bedrock service is available"""
        try:
            # Simple test call
            response = await self.generate_with_claude_sonnet(
                prompt="Say 'healthy' if you can respond",
                max_tokens=10,
                temperature=0
            )
            return "healthy" in response.get("content", "").lower()
        except Exception as e:
            logger.error(f"Bedrock health check failed: {str(e)}")
            return False
    
    async def generate_with_claude_opus(
        self,
        prompt: str,
        max_tokens: int = 4000,
        temperature: float = 0.3,
        system_prompt: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Generate content using Claude Opus (highest quality model)
        """
        try:
            start_time = time.time()
            
            # Prepare the request body
            messages = [{"role": "user", "content": prompt}]
            
            body = {
                "anthropic_version": "bedrock-2023-05-31",
                "max_tokens": max_tokens,
                "temperature": temperature,
                "messages": messages
            }
            
            if system_prompt:
                body["system"] = system_prompt
            
            # Make the API call
            response = await asyncio.get_event_loop().run_in_executor(
                None,
                lambda: self.client.invoke_model(
                    modelId=self.claude_opus_model,
                    body=json.dumps(body),
                    contentType="application/json",
                    accept="application/json"
                )
            )
            
            # Parse response
            response_body = json.loads(response['body'].read())
            generation_time = time.time() - start_time
            
            return {
                "content": response_body.get("content", [{}])[0].get("text", ""),
                "model": "claude-3-opus",
                "generation_time": generation_time,
                "usage": response_body.get("usage", {}),
                "stop_reason": response_body.get("stop_reason")
            }
            
        except ClientError as e:
            logger.error(f"Bedrock Claude Opus error: {str(e)}")
            raise Exception(f"Claude Opus generation failed: {str(e)}")
        except Exception as e:
            logger.error(f"Unexpected error in Claude Opus generation: {str(e)}")
            raise
    
    async def generate_with_claude_sonnet(
        self,
        prompt: str,
        max_tokens: int = 3000,
        temperature: float = 0.5,
        system_prompt: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Generate content using Claude Sonnet (balanced performance/cost)
        """
        try:
            start_time = time.time()
            
            # Prepare the request body
            messages = [{"role": "user", "content": prompt}]
            
            body = {
                "anthropic_version": "bedrock-2023-05-31",
                "max_tokens": max_tokens,
                "temperature": temperature,
                "messages": messages
            }
            
            if system_prompt:
                body["system"] = system_prompt
            
            # Make the API call
            response = await asyncio.get_event_loop().run_in_executor(
                None,
                lambda: self.client.invoke_model(
                    modelId=self.claude_sonnet_model,
                    body=json.dumps(body),
                    contentType="application/json",
                    accept="application/json"
                )
            )
            
            # Parse response
            response_body = json.loads(response['body'].read())
            generation_time = time.time() - start_time
            
            return {
                "content": response_body.get("content", [{}])[0].get("text", ""),
                "model": "claude-3-sonnet",
                "generation_time": generation_time,
                "usage": response_body.get("usage", {}),
                "stop_reason": response_body.get("stop_reason")
            }
            
        except ClientError as e:
            logger.error(f"Bedrock Claude Sonnet error: {str(e)}")
            raise Exception(f"Claude Sonnet generation failed: {str(e)}")
        except Exception as e:
            logger.error(f"Unexpected error in Claude Sonnet generation: {str(e)}")
            raise
    
    async def analyze_with_claude_opus(
        self,
        prompt: str,
        content: str,
        analysis_type: str = "general"
    ) -> Dict[str, Any]:
        """
        Perform detailed analysis using Claude Opus
        """
        try:
            # Create analysis-specific system prompt
            system_prompts = {
                "comprehensive_seo_audit": """You are an expert SEO analyst with deep knowledge of search engine optimization, content strategy, and digital marketing. Analyze the provided content and website data to provide comprehensive SEO recommendations. Focus on:

1. Technical SEO opportunities
2. Content optimization strategies
3. Keyword targeting improvements
4. User experience enhancements
5. Competitive positioning
6. Implementation priorities

Provide actionable, specific recommendations with expected impact and implementation difficulty.""",

                "keyword_opportunity_analysis": """You are a keyword research specialist with expertise in search intent analysis, competitive research, and content strategy. Analyze the provided keyword data to identify high-value opportunities. Focus on:

1. Search intent classification
2. Content type recommendations
3. Competitive gap analysis
4. Traffic potential assessment
5. Content cluster opportunities
6. Long-tail keyword expansion

Provide strategic insights for content planning and SEO optimization.""",

                "competitive_intelligence": """You are a competitive intelligence analyst specializing in digital marketing and SEO strategy. Analyze competitor data to identify strategic opportunities. Focus on:

1. Content gap analysis
2. Keyword opportunity identification
3. Technical advantage assessment
4. Market positioning insights
5. Strategic recommendations
6. Implementation priorities

Provide actionable competitive intelligence for strategic planning."""
            }
            
            system_prompt = system_prompts.get(analysis_type, system_prompts["comprehensive_seo_audit"])
            
            # Combine prompt with content
            full_prompt = f"{prompt}\n\nContent to analyze:\n{content}"
            
            # Generate analysis
            result = await self.generate_with_claude_opus(
                prompt=full_prompt,
                system_prompt=system_prompt,
                max_tokens=6000,
                temperature=0.2
            )
            
            # Parse structured response
            analysis_content = result["content"]
            
            # Extract structured data from the response
            parsed_analysis = self._parse_analysis_response(analysis_content, analysis_type)
            
            return {
                **parsed_analysis,
                "raw_analysis": analysis_content,
                "model_used": result["model"],
                "generation_time": result["generation_time"]
            }
            
        except Exception as e:
            logger.error(f"Analysis with Claude Opus failed: {str(e)}")
            raise
    
    async def analyze_with_claude_sonnet(
        self,
        prompt: str,
        content: str,
        analysis_type: str = "general"
    ) -> Dict[str, Any]:
        """
        Perform analysis using Claude Sonnet (faster, cost-effective)
        """
        try:
            # Create analysis-specific system prompt
            system_prompt = """You are an SEO content analyst. Analyze the provided content for SEO optimization opportunities. Focus on keyword usage, content structure, readability, and technical SEO elements. Provide specific, actionable recommendations."""
            
            # Combine prompt with content
            full_prompt = f"{prompt}\n\nContent to analyze:\n{content}"
            
            # Generate analysis
            result = await self.generate_with_claude_sonnet(
                prompt=full_prompt,
                system_prompt=system_prompt,
                max_tokens=4000,
                temperature=0.3
            )
            
            # Parse structured response
            analysis_content = result["content"]
            parsed_analysis = self._parse_analysis_response(analysis_content, analysis_type)
            
            return {
                **parsed_analysis,
                "raw_analysis": analysis_content,
                "model_used": result["model"],
                "generation_time": result["generation_time"]
            }
            
        except Exception as e:
            logger.error(f"Analysis with Claude Sonnet failed: {str(e)}")
            raise
    
    def _parse_analysis_response(self, content: str, analysis_type: str) -> Dict[str, Any]:
        """
        Parse Claude's analysis response into structured data
        """
        try:
            # This is a simplified parser - in production, you'd want more robust parsing
            # possibly using JSON mode or structured prompts
            
            parsed = {
                "summary": "",
                "recommendations": [],
                "priority_fixes": [],
                "next_steps": [],
                "scores": {}
            }
            
            # Extract sections based on common patterns
            lines = content.split('\n')
            current_section = None
            
            for line in lines:
                line = line.strip()
                if not line:
                    continue
                
                # Identify sections
                if any(keyword in line.lower() for keyword in ['summary', 'overview']):
                    current_section = 'summary'
                elif any(keyword in line.lower() for keyword in ['recommendation', 'suggest']):
                    current_section = 'recommendations'
                elif any(keyword in line.lower() for keyword in ['priority', 'urgent', 'critical']):
                    current_section = 'priority_fixes'
                elif any(keyword in line.lower() for keyword in ['next step', 'action']):
                    current_section = 'next_steps'
                
                # Extract content based on section
                if current_section and not any(keyword in line.lower() for keyword in ['summary', 'recommendation', 'priority', 'next step']):
                    if line.startswith('-') or line.startswith('•') or line.startswith('*'):
                        line = line[1:].strip()
                    
                    if current_section == 'summary':
                        parsed['summary'] += line + ' '
                    elif current_section in ['recommendations', 'priority_fixes', 'next_steps']:
                        if line:
                            parsed[current_section].append(line)
            
            # Clean up summary
            parsed['summary'] = parsed['summary'].strip()
            
            # Add analysis-specific parsing
            if analysis_type == "keyword_opportunity_analysis":
                parsed.update({
                    "relevance_scores": {},
                    "intent_classification": {},
                    "content_recommendations": {},
                    "title_suggestions": {},
                    "related_topics": {},
                    "conversion_potential": {},
                    "strategic_recommendations": {},
                    "market_analysis": {},
                    "competitive_analysis": {},
                    "target_audience_analysis": {}
                })
            elif analysis_type == "seo_content_analysis":
                parsed.update({
                    "keyword_analysis": {"optimization_score": 75},
                    "readability": 80,
                    "structure_analysis": {"score": 85},
                    "meta_analysis": {},
                    "internal_linking": {},
                    "technical_seo": {"score": 78},
                    "optimization_potential": 85
                })
            
            return parsed
            
        except Exception as e:
            logger.error(f"Error parsing analysis response: {str(e)}")
            return {
                "summary": content[:500] + "..." if len(content) > 500 else content,
                "recommendations": ["Analysis parsing failed - see raw content"],
                "priority_fixes": [],
                "next_steps": [],
                "scores": {}
            }
    
    async def batch_analyze(
        self,
        requests: list,
        model: str = "sonnet"
    ) -> list:
        """
        Process multiple analysis requests in batch
        """
        try:
            tasks = []
            for request in requests:
                if model == "opus":
                    task = self.analyze_with_claude_opus(
                        prompt=request["prompt"],
                        content=request["content"],
                        analysis_type=request.get("analysis_type", "general")
                    )
                else:
                    task = self.analyze_with_claude_sonnet(
                        prompt=request["prompt"],
                        content=request["content"],
                        analysis_type=request.get("analysis_type", "general")
                    )
                tasks.append(task)
            
            # Execute all tasks concurrently
            results = await asyncio.gather(*tasks, return_exceptions=True)
            
            # Process results and handle exceptions
            processed_results = []
            for i, result in enumerate(results):
                if isinstance(result, Exception):
                    logger.error(f"Batch analysis failed for request {i}: {str(result)}")
                    processed_results.append({
                        "success": False,
                        "error": str(result),
                        "request_index": i
                    })
                else:
                    processed_results.append({
                        "success": True,
                        "result": result,
                        "request_index": i
                    })
            
            return processed_results
            
        except Exception as e:
            logger.error(f"Batch analysis failed: {str(e)}")
            raise
    
    async def get_model_info(self) -> Dict[str, Any]:
        """
        Get information about available models
        """
        return {
            "available_models": {
                "claude-3-opus": {
                    "model_id": self.claude_opus_model,
                    "description": "Highest quality model for complex analysis",
                    "max_tokens": 4096,
                    "use_cases": ["Complex analysis", "High-quality content generation", "Strategic planning"]
                },
                "claude-3-sonnet": {
                    "model_id": self.claude_sonnet_model,
                    "description": "Balanced performance and cost",
                    "max_tokens": 4096,
                    "use_cases": ["Content analysis", "Keyword research", "General SEO tasks"]
                }
            },
            "region": self.region,
            "service_status": "active"
        }
