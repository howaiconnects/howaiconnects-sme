"""
Latitude AI Service for prompt management and version control
"""

import aiohttp
import logging
from typing import Dict, Any, Optional, List
import json
from datetime import datetime
import os

logger = logging.getLogger(__name__)

class LatitudeService:
    """Service for interacting with Latitude AI for prompt management"""
    
    def __init__(self):
        self.base_url = "https://api.latitude.so"
        self.api_key = os.getenv("LATITUDE_API_KEY")
        self.project_id = os.getenv("LATITUDE_PROJECT_ID")
        self.session = None
        self.prompt_cache = {}
        self.fallback_prompts = self._initialize_fallback_prompts()
        self.initialize_service()
    
    def initialize_service(self):
        """Initialize Latitude service"""
        try:
            if not self.api_key or not self.project_id:
                logger.warning("Latitude API credentials not found - using fallback prompts")
            else:
                logger.info("Latitude service initialized with API credentials")
        except Exception as e:
            logger.error(f"Failed to initialize Latitude service: {str(e)}")
    
    async def health_check(self) -> bool:
        """Check if Latitude service is available"""
        try:
            if not self.api_key:
                return True  # Fallback mode is always available
            
            async with aiohttp.ClientSession() as session:
                headers = {
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                }
                
                async with session.get(
                    f"{self.base_url}/api/v1/projects/{self.project_id}",
                    headers=headers
                ) as response:
                    return response.status == 200
                    
        except Exception as e:
            logger.error(f"Latitude health check failed: {str(e)}")
            return True  # Return True to use fallback prompts
    
    async def get_prompt(
        self,
        prompt_name: str,
        variables: Optional[Dict[str, Any]] = None,
        version: Optional[str] = None
    ) -> str:
        """
        Get a prompt from Latitude AI with variable substitution
        """
        try:
            # Check cache first
            cache_key = f"{prompt_name}_{version or 'latest'}"
            if cache_key in self.prompt_cache:
                prompt_template = self.prompt_cache[cache_key]
            else:
                # Try to fetch from Latitude API
                if self.api_key:
                    prompt_template = await self._fetch_prompt_from_api(prompt_name, version)
                    if prompt_template:
                        self.prompt_cache[cache_key] = prompt_template
                    else:
                        prompt_template = self._get_fallback_prompt(prompt_name)
                else:
                    prompt_template = self._get_fallback_prompt(prompt_name)
            
            # Substitute variables
            if variables:
                prompt_template = self._substitute_variables(prompt_template, variables)
            
            return prompt_template
            
        except Exception as e:
            logger.error(f"Error getting prompt {prompt_name}: {str(e)}")
            return self._get_fallback_prompt(prompt_name)
    
    async def _fetch_prompt_from_api(
        self,
        prompt_name: str,
        version: Optional[str] = None
    ) -> Optional[str]:
        """
        Fetch prompt from Latitude API
        """
        try:
            async with aiohttp.ClientSession() as session:
                headers = {
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                }
                
                url = f"{self.base_url}/api/v1/projects/{self.project_id}/prompts/{prompt_name}"
                if version:
                    url += f"/versions/{version}"
                
                async with session.get(url, headers=headers) as response:
                    if response.status == 200:
                        data = await response.json()
                        return data.get("content", "")
                    else:
                        logger.warning(f"Failed to fetch prompt {prompt_name}: {response.status}")
                        return None
                        
        except Exception as e:
            logger.error(f"Error fetching prompt from API: {str(e)}")
            return None
    
    def _get_fallback_prompt(self, prompt_name: str) -> str:
        """
        Get fallback prompt when Latitude API is unavailable
        """
        return self.fallback_prompts.get(prompt_name, self.fallback_prompts["default"])
    
    def _substitute_variables(self, template: str, variables: Dict[str, Any]) -> str:
        """
        Substitute variables in prompt template
        """
        try:
            for key, value in variables.items():
                placeholder = f"{{{key}}}"
                if isinstance(value, list):
                    value = ", ".join(str(v) for v in value)
                elif isinstance(value, dict):
                    value = json.dumps(value, indent=2)
                template = template.replace(placeholder, str(value))
            return template
        except Exception as e:
            logger.error(f"Error substituting variables: {str(e)}")
            return template
    
    def _initialize_fallback_prompts(self) -> Dict[str, str]:
        """
        Initialize fallback prompts for when Latitude API is unavailable
        """
        return {
            "website_analysis_comprehensive": """
Analyze the website for {domain} in the {industry} industry targeting {target_audience}.

Perform a comprehensive SEO audit focusing on:

1. **Technical SEO Analysis**
   - Site structure and navigation
   - Page load speed and Core Web Vitals
   - Mobile responsiveness
   - URL structure and canonicalization
   - Internal linking strategy

2. **Content Analysis**
   - Content quality and relevance
   - Keyword optimization opportunities
   - Content gaps and opportunities
   - Meta tags and descriptions
   - Header structure (H1, H2, etc.)

3. **Competitive Positioning**
   - Market position analysis
   - Competitor content gaps
   - Unique value proposition clarity
   - Brand messaging effectiveness

4. **User Experience Assessment**
   - Navigation usability
   - Conversion path optimization
   - Call-to-action effectiveness
   - Trust signals and credibility

5. **SEO Opportunities**
   - High-impact keyword opportunities
   - Content creation recommendations
   - Technical improvements needed
   - Link building opportunities

Provide specific, actionable recommendations with:
- Expected impact (High/Medium/Low)
- Implementation difficulty (Easy/Medium/Hard)
- Priority level (Critical/Important/Nice-to-have)
- Estimated timeline for implementation

Format your response with clear sections and bullet points for easy implementation.
""",

            "keyword_analysis_ai": """
Analyze the following keywords for SEO opportunities: {seed_keywords}

Industry Focus: {industry_focus}
Intent Filter: {intent_filter}

For each keyword, provide:

1. **Search Intent Classification**
   - Informational, Navigational, Commercial, or Transactional
   - User journey stage (Awareness, Consideration, Decision)

2. **Content Recommendations**
   - Optimal content type (blog post, landing page, guide, etc.)
   - Recommended content length
   - Key topics to cover
   - Content structure suggestions

3. **Competitive Analysis**
   - Difficulty assessment
   - Competitor gap opportunities
   - Ranking potential

4. **Strategic Value**
   - Business relevance score (1-10)
   - Conversion potential
   - Traffic opportunity
   - Long-tail expansion possibilities

5. **Implementation Strategy**
   - Content creation priority
   - Internal linking opportunities
   - Optimization tactics

Provide 3-5 compelling title ideas for each high-value keyword and suggest related topics for content clusters.
""",

            "content_strategy_generation": """
Create a comprehensive content strategy for a {business_type} business.

Target Keywords: {target_keywords}
Competitor Analysis: {competitor_analysis}

Develop a strategy that includes:

1. **Content Pillars** (3-5 main themes)
   - Core topics that align with business goals
   - Keyword clusters for each pillar
   - Content types for each pillar

2. **Content Calendar Framework**
   - Publishing frequency recommendations
   - Content mix (educational, promotional, entertaining)
   - Seasonal content opportunities

3. **SEO Integration**
   - Keyword targeting strategy
   - Internal linking plan
   - Meta optimization approach

4. **Content Types & Formats**
   - Blog posts and articles
   - Landing pages
   - Resource pages
   - Interactive content

5. **Distribution Strategy**
   - Primary channels
   - Social media integration
   - Email marketing alignment

6. **Performance Metrics**
   - KPIs to track
   - Success benchmarks
   - Optimization triggers

7. **Implementation Timeline**
   - Phase 1: Foundation (Weeks 1-4)
   - Phase 2: Content Creation (Weeks 5-12)
   - Phase 3: Optimization (Ongoing)

Provide specific, actionable recommendations with timelines and resource requirements.
""",

            "content_seo_analysis": """
Analyze the following content for SEO optimization:

Content Type: {content_type}
Target Keywords: {target_keywords}
Analysis Depth: {analysis_depth}

Evaluate:

1. **Keyword Optimization**
   - Primary keyword usage and density
   - Secondary keyword integration
   - Keyword cannibalization risks
   - LSI keyword opportunities

2. **Content Structure**
   - Header hierarchy (H1, H2, H3)
   - Paragraph length and readability
   - Bullet points and lists usage
   - Content flow and organization

3. **Technical SEO Elements**
   - Meta title optimization
   - Meta description effectiveness
   - URL structure
   - Image alt text
   - Internal linking opportunities

4. **User Experience Factors**
   - Content readability score
   - Engagement potential
   - Call-to-action placement
   - Mobile optimization

5. **Content Quality Assessment**
   - Expertise, Authority, Trust (E-A-T)
   - Uniqueness and value proposition
   - Comprehensiveness
   - Factual accuracy

Provide specific recommendations for:
- Immediate improvements (quick wins)
- Strategic enhancements (long-term value)
- Content expansion opportunities
- Performance optimization tactics

Rate each area on a scale of 1-100 and provide an overall SEO score.
""",

            "content_generation_seo": """
Create SEO-optimized content based on this brief: {brief}

Content Specifications:
- Content Type: {content_type}
- Target Keywords: {target_keywords}
- Target Word Count: {target_word_count}
- Tone: {tone}
- Target Audience: {target_audience}

Generate:

1. **Meta Elements**
   - SEO-optimized meta title (under 60 characters)
   - Compelling meta description (under 160 characters)
   - Focus keyword integration

2. **Content Structure**
   - Engaging H1 tag with primary keyword
   - Logical H2 and H3 subheadings
   - Well-organized content sections

3. **Main Content**
   - Introduction with hook and keyword
   - Body content with natural keyword integration
   - Conclusion with call-to-action

4. **SEO Enhancements**
   - Internal linking suggestions (3-5 relevant links)
   - Related keyword integration
   - Schema markup recommendations

5. **Engagement Elements**
   - Compelling call-to-action
   - Social sharing hooks
   - User engagement triggers

Ensure the content:
- Maintains natural keyword density (1-2% for primary keyword)
- Provides genuine value to readers
- Follows E-A-T guidelines
- Is optimized for featured snippets
- Includes semantic keywords and LSI terms

Format the output with clear sections for easy implementation.
""",

            "competitor_analysis_ai": """
Analyze competitors: {competitor_domains}
Analysis Type: {analysis_type}

Perform comprehensive competitive intelligence:

1. **Content Gap Analysis**
   - Topics competitors cover that we don't
   - Content formats they use effectively
   - Content depth and quality comparison
   - Update frequency and consistency

2. **Keyword Opportunities**
   - Keywords competitors rank for that we don't
   - Keyword gaps in our content strategy
   - Low-competition, high-value opportunities
   - Long-tail keyword possibilities

3. **Technical Advantages**
   - Site speed and performance comparison
   - Mobile optimization differences
   - Technical SEO implementations
   - User experience advantages

4. **Content Strategy Insights**
   - Content themes and pillars
   - Publishing frequency and timing
   - Content promotion strategies
   - Social media integration

5. **Link Building Opportunities**
   - Competitor backlink sources
   - Link gap analysis
   - Potential link targets
   - Relationship building opportunities

6. **Market Positioning**
   - Unique value propositions
   - Brand messaging differences
   - Target audience overlap
   - Competitive advantages

Provide actionable recommendations for:
- Content creation priorities
- SEO improvement opportunities
- Competitive differentiation strategies
- Market positioning enhancements

Include specific examples and implementation steps.
""",

            "social_media_generation": """
Create engaging social media content for: {content_summary}

Target Keywords: {target_keywords}
Platforms: {platforms}
Brand Voice: {brand_voice}

Generate platform-specific content:

1. **LinkedIn** (Professional/B2B)
   - Thought leadership angle
   - Industry insights
   - Professional tone
   - 1-3 paragraphs with engaging hook

2. **Twitter/X** (Concise/Viral)
   - Key takeaway in 280 characters
   - Relevant hashtags (3-5)
   - Thread potential
   - Engagement hooks

3. **Facebook** (Community/Engagement)
   - Community-focused messaging
   - Conversation starters
   - Visual content suggestions
   - Shareable format

4. **Instagram** (Visual/Lifestyle)
   - Visual storytelling approach
   - Caption with personality
   - Story-friendly format
   - Hashtag strategy (10-15)

For each platform, include:
- Primary post content
- Hashtag recommendations
- Optimal posting time suggestions
- Engagement prediction
- Call-to-action variations

Ensure content:
- Maintains brand voice consistency
- Includes relevant keywords naturally
- Encourages engagement and sharing
- Drives traffic to main content
- Aligns with platform best practices
""",

            "default": """
Analyze the provided content and generate SEO recommendations focusing on:

1. Content optimization opportunities
2. Keyword integration improvements
3. Technical SEO enhancements
4. User experience factors
5. Competitive positioning

Provide specific, actionable recommendations with implementation priorities.
"""
        }
    
    async def create_prompt(
        self,
        name: str,
        content: str,
        description: Optional[str] = None,
        tags: Optional[List[str]] = None
    ) -> Dict[str, Any]:
        """
        Create a new prompt in Latitude
        """
        try:
            if not self.api_key:
                logger.warning("Cannot create prompt - Latitude API not configured")
                return {"success": False, "error": "API not configured"}
            
            async with aiohttp.ClientSession() as session:
                headers = {
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                }
                
                payload = {
                    "name": name,
                    "content": content,
                    "description": description or "",
                    "tags": tags or []
                }
                
                async with session.post(
                    f"{self.base_url}/api/v1/projects/{self.project_id}/prompts",
                    headers=headers,
                    json=payload
                ) as response:
                    if response.status == 201:
                        data = await response.json()
                        return {"success": True, "prompt_id": data.get("id")}
                    else:
                        error_text = await response.text()
                        return {"success": False, "error": error_text}
                        
        except Exception as e:
            logger.error(f"Error creating prompt: {str(e)}")
            return {"success": False, "error": str(e)}
    
    async def update_prompt(
        self,
        prompt_id: str,
        content: str,
        description: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Update an existing prompt in Latitude
        """
        try:
            if not self.api_key:
                return {"success": False, "error": "API not configured"}
            
            async with aiohttp.ClientSession() as session:
                headers = {
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                }
                
                payload = {
                    "content": content,
                    "description": description
                }
                
                async with session.put(
                    f"{self.base_url}/api/v1/projects/{self.project_id}/prompts/{prompt_id}",
                    headers=headers,
                    json=payload
                ) as response:
                    if response.status == 200:
                        return {"success": True}
                    else:
                        error_text = await response.text()
                        return {"success": False, "error": error_text}
                        
        except Exception as e:
            logger.error(f"Error updating prompt: {str(e)}")
            return {"success": False, "error": str(e)}
    
    async def list_prompts(self) -> List[Dict[str, Any]]:
        """
        List all prompts in the project
        """
        try:
            if not self.api_key:
                return []
            
            async with aiohttp.ClientSession() as session:
                headers = {
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                }
                
                async with session.get(
                    f"{self.base_url}/api/v1/projects/{self.project_id}/prompts",
                    headers=headers
                ) as response:
                    if response.status == 200:
                        data = await response.json()
                        return data.get("prompts", [])
                    else:
                        return []
                        
        except Exception as e:
            logger.error(f"Error listing prompts: {str(e)}")
            return []
    
    async def get_prompt_versions(self, prompt_id: str) -> List[Dict[str, Any]]:
        """
        Get all versions of a specific prompt
        """
        try:
            if not self.api_key:
                return []
            
            async with aiohttp.ClientSession() as session:
                headers = {
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                }
                
                async with session.get(
                    f"{self.base_url}/api/v1/projects/{self.project_id}/prompts/{prompt_id}/versions",
                    headers=headers
                ) as response:
                    if response.status == 200:
                        data = await response.json()
                        return data.get("versions", [])
                    else:
                        return []
                        
        except Exception as e:
            logger.error(f"Error getting prompt versions: {str(e)}")
            return []
    
    def clear_cache(self):
        """Clear the prompt cache"""
        self.prompt_cache.clear()
        logger.info("Prompt cache cleared")
    
    async def get_service_info(self) -> Dict[str, Any]:
        """
        Get service information and status
        """
        return {
            "service": "Latitude AI",
            "status": "connected" if self.api_key else "fallback_mode",
            "project_id": self.project_id,
            "cached_prompts": len(self.prompt_cache),
            "fallback_prompts": len(self.fallback_prompts),
            "api_configured": bool(self.api_key)
        }
