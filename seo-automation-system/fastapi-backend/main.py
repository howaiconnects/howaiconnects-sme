"""
HowAIConnects SEO Automation FastAPI Backend
Enterprise-level API layer for SEO automation workflows
"""

from fastapi import FastAPI, HTTPException, Depends, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional
import asyncio
import logging
from datetime import datetime
import os
from contextlib import asynccontextmanager

# Import our custom modules
from services.bedrock_service import BedrockService
from services.latitude_service import LatitudeService
from services.airtable_service import AirtableService
from services.semrush_service import SEMrushService
from services.google_analytics_service import GoogleAnalyticsService
from services.hootsuite_service import HootsuiteService
from models.seo_models import *
from utils.logging_config import setup_logging
from utils.rate_limiter import RateLimiter
from config.settings import Settings

# Setup logging
setup_logging()
logger = logging.getLogger(__name__)

# Initialize settings
settings = Settings()

# Security
security = HTTPBearer()

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan management"""
    logger.info("Starting SEO Automation API...")
    
    # Initialize services
    app.state.bedrock = BedrockService()
    app.state.latitude = LatitudeService()
    app.state.airtable = AirtableService()
    app.state.semrush = SEMrushService()
    app.state.google_analytics = GoogleAnalyticsService()
    app.state.hootsuite = HootsuiteService()
    app.state.rate_limiter = RateLimiter()
    
    # Health check for all services
    await app.state.bedrock.health_check()
    await app.state.latitude.health_check()
    
    logger.info("All services initialized successfully")
    yield
    
    # Cleanup
    logger.info("Shutting down SEO Automation API...")

# Create FastAPI app
app = FastAPI(
    title="HowAIConnects SEO Automation API",
    description="Enterprise SEO automation system with AI-powered optimization",
    version="1.0.0",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Authentication dependency
async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """Validate API token"""
    if credentials.credentials != settings.API_TOKEN:
        raise HTTPException(status_code=401, detail="Invalid authentication token")
    return credentials.credentials

# Health check endpoint
@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "version": "1.0.0"
    }

# ============================================================================
# PHASE 1: INITIAL WEBSITE SETUP ENDPOINTS
# ============================================================================

@app.post("/api/v1/setup/analyze-website")
async def analyze_website(
    request: WebsiteAnalysisRequest,
    background_tasks: BackgroundTasks,
    token: str = Depends(get_current_user)
):
    """
    Phase 1: Comprehensive website analysis for initial setup
    """
    try:
        logger.info(f"Starting website analysis for: {request.domain}")
        
        # Rate limiting
        await app.state.rate_limiter.check_rate_limit("website_analysis", request.domain)
        
        # Get AI-powered analysis prompt from Latitude
        analysis_prompt = await app.state.latitude.get_prompt(
            "website_analysis_comprehensive",
            variables={
                "domain": request.domain,
                "industry": request.industry,
                "target_audience": request.target_audience
            }
        )
        
        # Perform analysis using Claude Opus via Bedrock
        analysis_result = await app.state.bedrock.analyze_with_claude_opus(
            prompt=analysis_prompt,
            content=request.existing_content,
            analysis_type="comprehensive_seo_audit"
        )
        
        # Store results in Airtable
        airtable_record = await app.state.airtable.create_record(
            table="websiteAnalysis",
            fields={
                "Domain": request.domain,
                "Analysis Date": datetime.utcnow().isoformat(),
                "Analysis Results": analysis_result,
                "Status": "Completed",
                "Phase": "Initial Setup"
            }
        )
        
        # Schedule background tasks for detailed analysis
        background_tasks.add_task(
            perform_detailed_seo_analysis,
            request.domain,
            analysis_result["recommendations"]
        )
        
        return {
            "success": True,
            "analysis_id": airtable_record["id"],
            "summary": analysis_result["summary"],
            "recommendations": analysis_result["recommendations"],
            "next_steps": analysis_result["next_steps"]
        }
        
    except Exception as e:
        logger.error(f"Website analysis failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")

@app.post("/api/v1/setup/generate-content-strategy")
async def generate_content_strategy(
    request: ContentStrategyRequest,
    token: str = Depends(get_current_user)
):
    """
    Phase 1: Generate initial content strategy using AI
    """
    try:
        # Get content strategy prompt from Latitude
        strategy_prompt = await app.state.latitude.get_prompt(
            "content_strategy_generation",
            variables={
                "business_type": request.business_type,
                "target_keywords": request.target_keywords,
                "competitor_analysis": request.competitor_analysis
            }
        )
        
        # Generate strategy using Claude Sonnet via Bedrock
        strategy_result = await app.state.bedrock.generate_with_claude_sonnet(
            prompt=strategy_prompt,
            max_tokens=4000,
            temperature=0.7
        )
        
        # Store in Airtable
        strategy_record = await app.state.airtable.create_record(
            table="contentStrategy",
            fields={
                "Business Type": request.business_type,
                "Strategy": strategy_result["content"],
                "Keywords": request.target_keywords,
                "Created Date": datetime.utcnow().isoformat(),
                "Status": "Active"
            }
        )
        
        return {
            "success": True,
            "strategy_id": strategy_record["id"],
            "content_strategy": strategy_result["content"],
            "implementation_timeline": strategy_result["timeline"],
            "priority_actions": strategy_result["priority_actions"]
        }
        
    except Exception as e:
        logger.error(f"Content strategy generation failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Strategy generation failed: {str(e)}")

@app.post("/api/v1/setup/initialize-airtable-schema")
async def initialize_airtable_schema(
    request: AirtableSchemaRequest,
    token: str = Depends(get_current_user)
):
    """
    Phase 1: Initialize Airtable schema for SEO automation
    """
    try:
        # Create all necessary tables and fields
        schema_results = await app.state.airtable.initialize_seo_schema(
            base_id=request.base_id,
            schema_config=request.schema_config
        )
        
        return {
            "success": True,
            "tables_created": schema_results["tables"],
            "fields_created": schema_results["fields"],
            "relationships_established": schema_results["relationships"]
        }
        
    except Exception as e:
        logger.error(f"Airtable schema initialization failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Schema initialization failed: {str(e)}")

# ============================================================================
# PHASE 2: CONTINUOUS SEO OPTIMIZATION ENDPOINTS
# ============================================================================

@app.post("/api/v1/seo/keywords/research")
async def ai_keyword_research(
    request: KeywordResearchRequest,
    token: str = Depends(get_current_user)
):
    """
    Phase 2: AI-powered keyword research with competitive analysis
    """
    try:
        logger.info(f"Starting AI keyword research for: {request.seed_keywords}")
        
        # Get keyword research data from SEMrush
        semrush_data = await app.state.semrush.get_keyword_data(
            keywords=request.seed_keywords,
            competitor_domains=request.competitor_domains,
            database=request.database or "us"
        )
        
        # Get AI analysis prompt from Latitude
        analysis_prompt = await app.state.latitude.get_prompt(
            "keyword_analysis_ai",
            variables={
                "seed_keywords": request.seed_keywords,
                "industry_focus": request.industry_focus,
                "intent_filter": request.intent_filter
            }
        )
        
        # Analyze keywords with Claude Opus
        ai_analysis = await app.state.bedrock.analyze_with_claude_opus(
            prompt=analysis_prompt,
            content=semrush_data,
            analysis_type="keyword_opportunity_analysis"
        )
        
        # Process and score opportunities
        opportunities = []
        for keyword_data in semrush_data.get("keywords", []):
            if (keyword_data.get("search_volume", 0) >= request.volume_min and 
                keyword_data.get("difficulty", 100) <= request.difficulty_max):
                
                opportunity_score = calculate_opportunity_score(
                    keyword_data,
                    ai_analysis.get("relevance_scores", {})
                )
                
                opportunities.append({
                    "keyword": keyword_data["keyword"],
                    "search_volume": keyword_data["search_volume"],
                    "difficulty": keyword_data["difficulty"],
                    "competition_level": keyword_data.get("competition", "unknown"),
                    "search_intent": ai_analysis.get("intent_classification", {}).get(keyword_data["keyword"], "informational"),
                    "opportunity_score": opportunity_score,
                    "ai_analysis": {
                        "recommended_content_type": ai_analysis.get("content_recommendations", {}).get(keyword_data["keyword"]),
                        "title_ideas": ai_analysis.get("title_suggestions", {}).get(keyword_data["keyword"], []),
                        "related_topics": ai_analysis.get("related_topics", {}).get(keyword_data["keyword"], []),
                        "seasonal_data": keyword_data.get("seasonal_trends"),
                        "conversion_likelihood": ai_analysis.get("conversion_potential", {}).get(keyword_data["keyword"], "medium")
                    },
                    "competitor_analysis": {
                        "gap_opportunity": keyword_data.get("competitor_gap", False),
                        "ranking_difficulty": keyword_data.get("ranking_difficulty", "medium")
                    },
                    "traffic_projection": {
                        "monthly_estimate": calculate_traffic_projection(keyword_data)
                    }
                })
        
        # Sort by opportunity score
        opportunities.sort(key=lambda x: x["opportunity_score"], reverse=True)
        
        return {
            "success": True,
            "total_keywords_analyzed": len(semrush_data.get("keywords", [])),
            "opportunities": opportunities[:50],  # Top 50 opportunities
            "ai_analysis": {
                "strategic_recommendations": ai_analysis.get("strategic_recommendations", {}),
                "market_analysis": ai_analysis.get("market_analysis", {}),
                "competitive_analysis": ai_analysis.get("competitive_analysis", {}),
                "target_audience_analysis": ai_analysis.get("target_audience_analysis", {})
            }
        }
        
    except Exception as e:
        logger.error(f"Keyword research failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Keyword research failed: {str(e)}")

@app.post("/api/v1/seo/analyze")
async def analyze_content_seo(
    request: ContentAnalysisRequest,
    token: str = Depends(get_current_user)
):
    """
    Phase 2: Analyze content for SEO optimization opportunities
    """
    try:
        # Get content analysis prompt from Latitude
        analysis_prompt = await app.state.latitude.get_prompt(
            "content_seo_analysis",
            variables={
                "content_type": request.content_type,
                "target_keywords": request.target_keywords,
                "analysis_depth": request.analysis_depth
            }
        )
        
        # Analyze with Claude Sonnet
        seo_analysis = await app.state.bedrock.analyze_with_claude_sonnet(
            prompt=analysis_prompt,
            content=request.content,
            analysis_type="seo_content_analysis"
        )
        
        # Calculate SEO score
        seo_score = calculate_seo_score(seo_analysis, request.target_keywords)
        
        return {
            "success": True,
            "content_id": request.content_id,
            "analysis": {
                "seo_score": seo_score,
                "keyword_density": seo_analysis.get("keyword_analysis", {}),
                "readability_score": seo_analysis.get("readability", 0),
                "content_structure": seo_analysis.get("structure_analysis", {}),
                "meta_analysis": seo_analysis.get("meta_analysis", {}),
                "internal_linking": seo_analysis.get("internal_linking", {}),
                "technical_seo": seo_analysis.get("technical_seo", {})
            },
            "recommendations": seo_analysis.get("recommendations", []),
            "priority_fixes": seo_analysis.get("priority_fixes", []),
            "optimization_potential": seo_analysis.get("optimization_potential", 0)
        }
        
    except Exception as e:
        logger.error(f"Content analysis failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Content analysis failed: {str(e)}")

@app.post("/api/v1/seo/generate")
async def generate_optimized_content(
    request: ContentGenerationRequest,
    token: str = Depends(get_current_user)
):
    """
    Phase 2: Generate SEO-optimized content using AI
    """
    try:
        # Get content generation prompt from Latitude
        generation_prompt = await app.state.latitude.get_prompt(
            "content_generation_seo",
            variables={
                "brief": request.brief,
                "content_type": request.content_type,
                "target_keywords": request.target_keywords,
                "target_word_count": request.target_word_count,
                "tone": request.tone,
                "target_audience": request.target_audience
            }
        )
        
        # Generate content with Claude Opus for high quality
        if request.quality_level == "high":
            content_result = await app.state.bedrock.generate_with_claude_opus(
                prompt=generation_prompt,
                max_tokens=8000,
                temperature=0.3
            )
        else:
            content_result = await app.state.bedrock.generate_with_claude_sonnet(
                prompt=generation_prompt,
                max_tokens=6000,
                temperature=0.5
            )
        
        # Analyze generated content for SEO
        seo_analysis = await analyze_generated_content_seo(
            content_result["content"],
            request.target_keywords
        )
        
        return {
            "success": True,
            "content": {
                "meta_title": content_result.get("meta_title"),
                "meta_description": content_result.get("meta_description"),
                "h1": content_result.get("h1"),
                "body": content_result.get("body"),
                "internal_links": content_result.get("internal_links", []),
                "call_to_action": content_result.get("call_to_action"),
                "schema_markup": content_result.get("schema_markup")
            },
            "seo_analysis": seo_analysis,
            "model_used": "claude-3-opus" if request.quality_level == "high" else "claude-3-sonnet",
            "generation_time": content_result.get("generation_time", 0),
            "word_count": len(content_result.get("body", "").split())
        }
        
    except Exception as e:
        logger.error(f"Content generation failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Content generation failed: {str(e)}")

@app.post("/api/v1/competitors/analyze")
async def analyze_competitors(
    request: CompetitorAnalysisRequest,
    token: str = Depends(get_current_user)
):
    """
    Phase 2: Comprehensive competitor analysis with AI insights
    """
    try:
        # Get competitor data from SEMrush
        competitor_data = {}
        for domain in request.competitor_domains:
            competitor_data[domain] = await app.state.semrush.get_domain_analysis(
                domain=domain,
                analysis_type=request.analysis_type,
                timeframe=request.timeframe
            )
        
        # Get AI analysis prompt from Latitude
        analysis_prompt = await app.state.latitude.get_prompt(
            "competitor_analysis_ai",
            variables={
                "competitor_domains": request.competitor_domains,
                "analysis_type": request.analysis_type
            }
        )
        
        # Analyze with Claude Opus
        ai_insights = await app.state.bedrock.analyze_with_claude_opus(
            prompt=analysis_prompt,
            content=competitor_data,
            analysis_type="competitive_intelligence"
        )
        
        return {
            "success": True,
            "competitor_analysis": competitor_data,
            "ai_insights": ai_insights,
            "content_gaps": ai_insights.get("content_gaps", []),
            "keyword_opportunities": ai_insights.get("keyword_opportunities", []),
            "technical_advantages": ai_insights.get("technical_advantages", []),
            "strategic_recommendations": ai_insights.get("strategic_recommendations", [])
        }
        
    except Exception as e:
        logger.error(f"Competitor analysis failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Competitor analysis failed: {str(e)}")

# ============================================================================
# SOCIAL MEDIA AUTOMATION ENDPOINTS
# ============================================================================

@app.post("/api/v1/social/generate-posts")
async def generate_social_posts(
    request: SocialPostGenerationRequest,
    token: str = Depends(get_current_user)
):
    """
    Generate optimized social media posts for multiple platforms
    """
    try:
        # Get social media prompt from Latitude
        social_prompt = await app.state.latitude.get_prompt(
            "social_media_generation",
            variables={
                "content_summary": request.content_summary,
                "target_keywords": request.target_keywords,
                "platforms": request.platforms,
                "brand_voice": request.brand_voice
            }
        )
        
        # Generate posts with Claude Sonnet
        social_content = await app.state.bedrock.generate_with_claude_sonnet(
            prompt=social_prompt,
            max_tokens=2000,
            temperature=0.7
        )
        
        # Schedule posts via Hootsuite
        scheduled_posts = []
        if request.auto_schedule:
            for platform, content in social_content.get("posts", {}).items():
                if platform in request.platforms:
                    post_result = await app.state.hootsuite.schedule_post(
                        platform=platform,
                        content=content["text"],
                        schedule_time=request.schedule_time,
                        media_urls=request.media_urls
                    )
                    scheduled_posts.append(post_result)
        
        return {
            "success": True,
            "generated_posts": social_content.get("posts", {}),
            "scheduled_posts": scheduled_posts,
            "hashtag_suggestions": social_content.get("hashtags", []),
            "engagement_predictions": social_content.get("engagement_predictions", {})
        }
        
    except Exception as e:
        logger.error(f"Social post generation failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Social post generation failed: {str(e)}")

# ============================================================================
# UTILITY FUNCTIONS
# ============================================================================

def calculate_opportunity_score(keyword_data: Dict, relevance_scores: Dict) -> float:
    """Calculate keyword opportunity score"""
    volume = keyword_data.get("search_volume", 0)
    difficulty = keyword_data.get("difficulty", 100)
    relevance = relevance_scores.get(keyword_data["keyword"], 0.5)
    
    # Opportunity score formula
    if difficulty == 0:
        difficulty = 1
    
    base_score = (volume / difficulty) * relevance * 100
    return min(100, max(0, base_score))

def calculate_traffic_projection(keyword_data: Dict) -> int:
    """Calculate estimated monthly traffic"""
    volume = keyword_data.get("search_volume", 0)
    difficulty = keyword_data.get("difficulty", 100)
    
    # Simplified CTR estimation based on difficulty
    if difficulty <= 30:
        ctr = 0.15
    elif difficulty <= 60:
        ctr = 0.08
    else:
        ctr = 0.03
    
    return int(volume * ctr)

def calculate_seo_score(analysis: Dict, target_keywords: List[str]) -> float:
    """Calculate overall SEO score"""
    scores = []
    
    # Keyword optimization score
    keyword_score = analysis.get("keyword_analysis", {}).get("optimization_score", 0)
    scores.append(keyword_score * 0.3)
    
    # Content structure score
    structure_score = analysis.get("structure_analysis", {}).get("score", 0)
    scores.append(structure_score * 0.2)
    
    # Readability score
    readability_score = analysis.get("readability", 0)
    scores.append(readability_score * 0.2)
    
    # Technical SEO score
    technical_score = analysis.get("technical_seo", {}).get("score", 0)
    scores.append(technical_score * 0.3)
    
    return sum(scores)

async def analyze_generated_content_seo(content: str, target_keywords: List[str]) -> Dict:
    """Analyze generated content for SEO metrics"""
    # This would implement actual SEO analysis
    # For now, return mock data
    return {
        "seo_score": 85,
        "keyword_density": {kw: 2.5 for kw in target_keywords},
        "readability_score": 78,
        "confidence_score": 0.9
    }

async def perform_detailed_seo_analysis(domain: str, recommendations: List[str]):
    """Background task for detailed SEO analysis"""
    logger.info(f"Performing detailed SEO analysis for {domain}")
    # Implementation would go here
    pass

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
