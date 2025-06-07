"""
Pydantic models for SEO automation API
"""

from pydantic import BaseModel, Field, validator
from typing import List, Dict, Any, Optional
from datetime import datetime
from enum import Enum

# ============================================================================
# ENUMS
# ============================================================================

class AnalysisDepth(str, Enum):
    BASIC = "basic"
    STANDARD = "standard"
    COMPREHENSIVE = "comprehensive"

class ContentType(str, Enum):
    BLOG_POST = "blog_post"
    LANDING_PAGE = "landing_page"
    PRODUCT_PAGE = "product_page"
    CATEGORY_PAGE = "category_page"
    GUIDE = "guide"
    FAQ = "faq"
    TUTORIAL = "tutorial"

class QualityLevel(str, Enum):
    STANDARD = "standard"
    HIGH = "high"
    PREMIUM = "premium"

class SocialPlatform(str, Enum):
    LINKEDIN = "linkedin"
    TWITTER = "twitter"
    FACEBOOK = "facebook"
    INSTAGRAM = "instagram"

class AnalysisType(str, Enum):
    COMPREHENSIVE = "comprehensive"
    KEYWORD_GAPS = "keyword_gaps"
    CONTENT_GAPS = "content_gaps"
    TECHNICAL = "technical"

# ============================================================================
# PHASE 1: INITIAL SETUP MODELS
# ============================================================================

class WebsiteAnalysisRequest(BaseModel):
    domain: str = Field(..., description="Website domain to analyze")
    industry: str = Field(..., description="Business industry")
    target_audience: str = Field(..., description="Primary target audience")
    existing_content: Optional[str] = Field(None, description="Existing website content")
    competitor_domains: Optional[List[str]] = Field(default=[], description="Competitor domains")
    analysis_goals: Optional[List[str]] = Field(default=[], description="Specific analysis goals")
    
    @validator('domain')
    def validate_domain(cls, v):
        if not v or len(v.strip()) == 0:
            raise ValueError('Domain cannot be empty')
        return v.strip().lower()

class ContentStrategyRequest(BaseModel):
    business_type: str = Field(..., description="Type of business")
    target_keywords: List[str] = Field(..., description="Primary target keywords")
    competitor_analysis: Optional[Dict[str, Any]] = Field(default={}, description="Competitor analysis data")
    content_goals: Optional[List[str]] = Field(default=[], description="Content marketing goals")
    budget_range: Optional[str] = Field(None, description="Budget range for content creation")
    timeline: Optional[str] = Field(None, description="Implementation timeline")

class AirtableSchemaRequest(BaseModel):
    base_id: str = Field(..., description="Airtable base ID")
    schema_config: Dict[str, Any] = Field(..., description="Schema configuration")
    existing_tables: Optional[List[str]] = Field(default=[], description="Existing table names")
    backup_existing: Optional[bool] = Field(default=True, description="Backup existing data")

# ============================================================================
# PHASE 2: CONTINUOUS OPTIMIZATION MODELS
# ============================================================================

class KeywordResearchRequest(BaseModel):
    seed_keywords: List[str] = Field(..., description="Seed keywords for research")
    competitor_domains: Optional[List[str]] = Field(default=[], description="Competitor domains")
    database: Optional[str] = Field(default="us", description="SEMrush database")
    volume_min: Optional[int] = Field(default=100, description="Minimum search volume")
    difficulty_max: Optional[int] = Field(default=70, description="Maximum keyword difficulty")
    intent_filter: Optional[str] = Field(default="all", description="Search intent filter")
    industry_focus: Optional[str] = Field(None, description="Industry focus area")
    use_ai_analysis: Optional[bool] = Field(default=True, description="Use AI for analysis")
    
    @validator('seed_keywords')
    def validate_keywords(cls, v):
        if not v or len(v) == 0:
            raise ValueError('At least one seed keyword is required')
        return [kw.strip().lower() for kw in v if kw.strip()]

class ContentAnalysisRequest(BaseModel):
    content: str = Field(..., description="Content to analyze")
    content_id: Optional[str] = Field(None, description="Content identifier")
    target_keywords: List[str] = Field(..., description="Target keywords")
    content_type: ContentType = Field(default=ContentType.BLOG_POST, description="Type of content")
    analysis_depth: AnalysisDepth = Field(default=AnalysisDepth.STANDARD, description="Analysis depth")
    competitor_urls: Optional[List[str]] = Field(default=[], description="Competitor URLs for comparison")
    optimization_goals: Optional[List[str]] = Field(default=[], description="Optimization goals")

class ContentGenerationRequest(BaseModel):
    brief: str = Field(..., description="Content brief")
    content_type: ContentType = Field(..., description="Type of content to generate")
    target_keywords: List[str] = Field(..., description="Target keywords")
    target_word_count: Optional[int] = Field(default=1000, description="Target word count")
    tone: Optional[str] = Field(default="professional", description="Content tone")
    target_audience: Optional[str] = Field(default="general", description="Target audience")
    quality_level: QualityLevel = Field(default=QualityLevel.STANDARD, description="Quality level")
    optimization_focus: Optional[List[str]] = Field(default=[], description="Optimization focus areas")
    
    @validator('target_word_count')
    def validate_word_count(cls, v):
        if v and (v < 100 or v > 10000):
            raise ValueError('Word count must be between 100 and 10000')
        return v

class CompetitorAnalysisRequest(BaseModel):
    competitor_domains: List[str] = Field(..., description="Competitor domains to analyze")
    analysis_type: AnalysisType = Field(default=AnalysisType.COMPREHENSIVE, description="Type of analysis")
    include_content_gaps: Optional[bool] = Field(default=True, description="Include content gap analysis")
    include_keyword_gaps: Optional[bool] = Field(default=True, description="Include keyword gap analysis")
    include_technical_analysis: Optional[bool] = Field(default=False, description="Include technical analysis")
    timeframe: Optional[str] = Field(default="30d", description="Analysis timeframe")
    
    @validator('competitor_domains')
    def validate_domains(cls, v):
        if not v or len(v) == 0:
            raise ValueError('At least one competitor domain is required')
        return [domain.strip().lower() for domain in v if domain.strip()]

# ============================================================================
# SOCIAL MEDIA MODELS
# ============================================================================

class SocialPostGenerationRequest(BaseModel):
    content_summary: str = Field(..., description="Summary of content to promote")
    target_keywords: List[str] = Field(..., description="Target keywords")
    platforms: List[SocialPlatform] = Field(..., description="Social media platforms")
    brand_voice: Optional[str] = Field(default="professional", description="Brand voice")
    auto_schedule: Optional[bool] = Field(default=False, description="Auto-schedule posts")
    schedule_time: Optional[datetime] = Field(None, description="Schedule time for posts")
    media_urls: Optional[List[str]] = Field(default=[], description="Media URLs to include")
    hashtag_strategy: Optional[str] = Field(default="moderate", description="Hashtag strategy")

# ============================================================================
# RESPONSE MODELS
# ============================================================================

class KeywordOpportunity(BaseModel):
    keyword: str
    search_volume: int
    difficulty: int
    competition_level: str
    search_intent: str
    opportunity_score: float
    ai_analysis: Dict[str, Any]
    competitor_analysis: Dict[str, Any]
    traffic_projection: Dict[str, Any]

class ContentAnalysisResponse(BaseModel):
    success: bool
    content_id: Optional[str]
    analysis: Dict[str, Any]
    recommendations: List[str]
    priority_fixes: List[str]
    optimization_potential: float

class ContentGenerationResponse(BaseModel):
    success: bool
    content: Dict[str, Any]
    seo_analysis: Dict[str, Any]
    model_used: str
    generation_time: float
    word_count: int

class CompetitorAnalysisResponse(BaseModel):
    success: bool
    competitor_analysis: Dict[str, Any]
    ai_insights: Dict[str, Any]
    content_gaps: List[str]
    keyword_opportunities: List[str]
    technical_advantages: List[str]
    strategic_recommendations: List[str]

# ============================================================================
# AIRTABLE INTEGRATION MODELS
# ============================================================================

class AirtableRecord(BaseModel):
    table: str = Field(..., description="Airtable table name")
    fields: Dict[str, Any] = Field(..., description="Record fields")
    record_id: Optional[str] = Field(None, description="Record ID for updates")

class AirtableBatchRequest(BaseModel):
    table: str = Field(..., description="Airtable table name")
    records: List[Dict[str, Any]] = Field(..., description="Records to create/update")
    operation: str = Field(default="create", description="Operation type: create, update, upsert")

# ============================================================================
# WORKFLOW MODELS
# ============================================================================

class WorkflowTrigger(BaseModel):
    trigger_type: str = Field(..., description="Type of trigger")
    conditions: Dict[str, Any] = Field(default={}, description="Trigger conditions")
    schedule: Optional[str] = Field(None, description="Schedule for time-based triggers")

class WorkflowAction(BaseModel):
    action_type: str = Field(..., description="Type of action")
    parameters: Dict[str, Any] = Field(..., description="Action parameters")
    retry_config: Optional[Dict[str, Any]] = Field(None, description="Retry configuration")

class WorkflowDefinition(BaseModel):
    name: str = Field(..., description="Workflow name")
    description: Optional[str] = Field(None, description="Workflow description")
    trigger: WorkflowTrigger = Field(..., description="Workflow trigger")
    actions: List[WorkflowAction] = Field(..., description="Workflow actions")
    enabled: bool = Field(default=True, description="Whether workflow is enabled")

# ============================================================================
# PERFORMANCE TRACKING MODELS
# ============================================================================

class PerformanceMetrics(BaseModel):
    metric_name: str
    metric_value: float
    metric_unit: str
    timestamp: datetime
    source: str
    metadata: Optional[Dict[str, Any]] = Field(default={})

class SEOPerformanceReport(BaseModel):
    domain: str
    report_date: datetime
    organic_traffic: int
    keyword_rankings: Dict[str, int]
    conversion_rate: float
    bounce_rate: float
    page_speed_score: int
    mobile_usability_score: int
    content_performance: List[Dict[str, Any]]
    recommendations: List[str]

# ============================================================================
# ERROR MODELS
# ============================================================================

class APIError(BaseModel):
    error_code: str
    error_message: str
    details: Optional[Dict[str, Any]] = Field(default={})
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class ValidationError(BaseModel):
    field: str
    message: str
    invalid_value: Any

# ============================================================================
# CONFIGURATION MODELS
# ============================================================================

class ServiceConfiguration(BaseModel):
    service_name: str
    api_key: Optional[str] = Field(None, description="API key for the service")
    base_url: Optional[str] = Field(None, description="Base URL for the service")
    rate_limit: Optional[int] = Field(None, description="Rate limit per minute")
    timeout: Optional[int] = Field(default=30, description="Request timeout in seconds")
    retry_attempts: Optional[int] = Field(default=3, description="Number of retry attempts")
    enabled: bool = Field(default=True, description="Whether service is enabled")

class SystemConfiguration(BaseModel):
    environment: str = Field(default="production", description="Environment name")
    debug_mode: bool = Field(default=False, description="Debug mode enabled")
    log_level: str = Field(default="INFO", description="Logging level")
    services: Dict[str, ServiceConfiguration] = Field(default={}, description="Service configurations")
    features: Dict[str, bool] = Field(default={}, description="Feature flags")

# ============================================================================
# BATCH PROCESSING MODELS
# ============================================================================

class BatchJobRequest(BaseModel):
    job_type: str = Field(..., description="Type of batch job")
    input_data: List[Dict[str, Any]] = Field(..., description="Input data for processing")
    parameters: Dict[str, Any] = Field(default={}, description="Job parameters")
    priority: int = Field(default=5, description="Job priority (1-10)")
    callback_url: Optional[str] = Field(None, description="Callback URL for job completion")

class BatchJobStatus(BaseModel):
    job_id: str
    status: str  # pending, running, completed, failed
    progress: float  # 0.0 to 1.0
    created_at: datetime
    started_at: Optional[datetime] = None
    completed_at: Optional[datetime] = None
    error_message: Optional[str] = None
    results: Optional[List[Dict[str, Any]]] = None

# ============================================================================
# ANALYTICS MODELS
# ============================================================================

class AnalyticsQuery(BaseModel):
    metric: str = Field(..., description="Metric to query")
    start_date: datetime = Field(..., description="Start date for query")
    end_date: datetime = Field(..., description="End date for query")
    filters: Dict[str, Any] = Field(default={}, description="Query filters")
    group_by: Optional[List[str]] = Field(default=[], description="Group by dimensions")
    limit: Optional[int] = Field(default=1000, description="Result limit")

class AnalyticsResult(BaseModel):
    query: AnalyticsQuery
    data: List[Dict[str, Any]]
    total_rows: int
    execution_time: float
    cached: bool = False

# ============================================================================
# NOTIFICATION MODELS
# ============================================================================

class NotificationRequest(BaseModel):
    notification_type: str = Field(..., description="Type of notification")
    recipient: str = Field(..., description="Notification recipient")
    subject: str = Field(..., description="Notification subject")
    message: str = Field(..., description="Notification message")
    priority: str = Field(default="normal", description="Notification priority")
    metadata: Dict[str, Any] = Field(default={}, description="Additional metadata")

class AlertRule(BaseModel):
    rule_name: str = Field(..., description="Alert rule name")
    condition: str = Field(..., description="Alert condition")
    threshold: float = Field(..., description="Alert threshold")
    notification_channels: List[str] = Field(..., description="Notification channels")
    enabled: bool = Field(default=True, description="Whether rule is enabled")
    cooldown_minutes: int = Field(default=60, description="Cooldown period in minutes")
