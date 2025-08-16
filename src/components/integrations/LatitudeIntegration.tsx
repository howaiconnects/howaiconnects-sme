import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, Bot, Brain, CheckCircle, Clock, Copy, Play, RefreshCw, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { latitudeService, type LatitudePromptRequest, type LatitudePromptResponse } from '@/services/latitudeService';

interface ContentGenerationRequest {
  topic: string;
  keywords: string[];
  tone: string;
  wordCount: number;
  targetAudience: string;
}

interface AIWorkflowStage {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'error';
  output?: any;
  error?: string;
}

export const LatitudeIntegration: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prompts, setPrompts] = useState<any[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<string>('');
  const [promptVariables, setPromptVariables] = useState<Record<string, string>>({});
  const [executionResult, setExecutionResult] = useState<LatitudePromptResponse | null>(null);
  const [workflowStages, setWorkflowStages] = useState<AIWorkflowStage[]>([]);
  const [contentRequest, setContentRequest] = useState<ContentGenerationRequest>({
    topic: '',
    keywords: [],
    tone: 'professional',
    wordCount: 1000,
    targetAudience: 'business professionals'
  });

  useEffect(() => {
    checkConnection();
    loadPrompts();
  }, []);

  const checkConnection = async () => {
    try {
      const connected = await latitudeService.testConnection();
      setIsConnected(connected);
      if (connected) {
        toast.success('Latitude.so connected successfully');
      }
    } catch (error) {
      console.error('Latitude connection failed:', error);
      setIsConnected(false);
    }
  };

  const loadPrompts = async () => {
    try {
      const promptList = await latitudeService.getPrompts();
      setPrompts(promptList);
    } catch (error) {
      console.error('Failed to load prompts:', error);
      toast.error('Failed to load prompts');
    }
  };

  const executePrompt = async () => {
    if (!selectedPrompt) {
      toast.error('Please select a prompt');
      return;
    }

    setIsLoading(true);
    try {
      const request: LatitudePromptRequest = {
        promptId: selectedPrompt,
        variables: promptVariables
      };

      const result = await latitudeService.executePrompt(request);
      setExecutionResult(result);
      toast.success('Prompt executed successfully');
    } catch (error) {
      console.error('Prompt execution failed:', error);
      toast.error('Failed to execute prompt');
    } finally {
      setIsLoading(false);
    }
  };

  const runContentWorkflow = async () => {
    if (!contentRequest.topic || contentRequest.keywords.length === 0) {
      toast.error('Please provide topic and keywords');
      return;
    }

    const stages: AIWorkflowStage[] = [
      {
        id: 'research',
        name: 'Keyword Research',
        description: 'Analyzing keywords and competition',
        status: 'pending'
      },
      {
        id: 'generation',
        name: 'Content Generation',
        description: 'Creating article content',
        status: 'pending'
      },
      {
        id: 'optimization',
        name: 'SEO Optimization',
        description: 'Optimizing for search engines',
        status: 'pending'
      },
      {
        id: 'review',
        name: 'Quality Review',
        description: 'Checking quality and compliance',
        status: 'pending'
      }
    ];

    setWorkflowStages(stages);
    setIsLoading(true);

    try {
      // Stage 1: Keyword Research
      await runWorkflowStage('research', stages, async () => {
        return await latitudeService.generateKeywordResearch({
          topic: contentRequest.topic,
          industry: 'AI and automation',
          targetAudience: contentRequest.targetAudience,
        });
      });

      // Stage 2: Content Generation
      await runWorkflowStage('generation', stages, async () => {
        return await latitudeService.generateContent({
          keywords: contentRequest.keywords,
          title: contentRequest.topic,
          outline: 'Auto-generated outline',
          wordCount: contentRequest.wordCount,
          tone: contentRequest.tone,
          targetAudience: contentRequest.targetAudience
        });
      });

      // Stage 3: SEO Optimization
      await runWorkflowStage('optimization', stages, async () => {
        return await latitudeService.optimizeForSEO({
          content: 'Generated content', // Would use actual content from stage 2
          primaryKeyword: contentRequest.keywords[0] || contentRequest.topic,
          secondaryKeywords: contentRequest.keywords.slice(1),
          targetUrl: `/${contentRequest.topic.toLowerCase().replace(/\s+/g, '-')}`
        });
      });

      // Stage 4: Quality Review
      await runWorkflowStage('review', stages, async () => {
        return await latitudeService.rewriteContent({
          originalContent: 'Generated content', // Would use actual content
          improvementGoals: ['clarity', 'engagement', 'accuracy'],
          targetKeywords: contentRequest.keywords,
          tone: contentRequest.tone
        });
      });

      toast.success('Content workflow completed successfully');
    } catch (error) {
      console.error('Workflow failed:', error);
      toast.error('Content workflow failed');
    } finally {
      setIsLoading(false);
    }
  };

  const runWorkflowStage = async (
    stageId: string, 
    stages: AIWorkflowStage[], 
    executor: () => Promise<LatitudePromptResponse>
  ) => {
    // Update stage to running
    setWorkflowStages(prev => prev.map(stage => 
      stage.id === stageId 
        ? { ...stage, status: 'running' }
        : stage
    ));

    try {
      const result = await executor();
      
      // Update stage to completed
      setWorkflowStages(prev => prev.map(stage => 
        stage.id === stageId 
          ? { ...stage, status: 'completed', output: result }
          : stage
      ));
    } catch (error) {
      // Update stage to error
      setWorkflowStages(prev => prev.map(stage => 
        stage.id === stageId 
          ? { ...stage, status: 'error', error: error instanceof Error ? error.message : 'Unknown error' }
          : stage
      ));
      throw error;
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  const getStageIcon = (status: AIWorkflowStage['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'running': return <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" />;
      case 'error': return <AlertCircle className="h-4 w-4 text-red-500" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStageProgress = () => {
    const completed = workflowStages.filter(stage => stage.status === 'completed').length;
    return (completed / workflowStages.length) * 100;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Latitude.so AI Integration</h2>
          <p className="text-muted-foreground">Native AI-powered content generation and optimization</p>
          <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              🚀 <strong>Azure Container Apps Ready:</strong> Deploy your own Latitude.so instance with serverless scaling. Check the <code>azure-deployment/</code> folder for complete setup instructions.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={isConnected ? "default" : "destructive"}>
            {isConnected ? "Connected" : "Disconnected"}
          </Badge>
          <Button onClick={checkConnection} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Test Connection
          </Button>
        </div>
      </div>

      <Tabs defaultValue="workflow" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="workflow">AI Workflow</TabsTrigger>
          <TabsTrigger value="prompts">Prompt Manager</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="workflow" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Content Generation Workflow
              </CardTitle>
              <CardDescription>
                End-to-end content creation from ideation to publication
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="topic">Content Topic</Label>
                  <Input
                    id="topic"
                    placeholder="AI automation for small businesses"
                    value={contentRequest.topic}
                    onChange={(e) => setContentRequest(prev => ({ ...prev, topic: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                  <Input
                    id="keywords"
                    placeholder="AI automation, small business, efficiency"
                    value={contentRequest.keywords.join(', ')}
                    onChange={(e) => setContentRequest(prev => ({ 
                      ...prev, 
                      keywords: e.target.value.split(',').map(k => k.trim()).filter(Boolean)
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tone">Content Tone</Label>
                  <Input
                    id="tone"
                    placeholder="professional, friendly, technical"
                    value={contentRequest.tone}
                    onChange={(e) => setContentRequest(prev => ({ ...prev, tone: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wordCount">Word Count</Label>
                  <Input
                    id="wordCount"
                    type="number"
                    value={contentRequest.wordCount}
                    onChange={(e) => setContentRequest(prev => ({ ...prev, wordCount: parseInt(e.target.value) || 1000 }))}
                  />
                </div>
              </div>

              <Button onClick={runContentWorkflow} disabled={isLoading} className="w-full">
                <Zap className="h-4 w-4 mr-2" />
                {isLoading ? 'Running Workflow...' : 'Start AI Content Workflow'}
              </Button>

              {workflowStages.length > 0 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Workflow Progress</span>
                      <span>{Math.round(getStageProgress())}%</span>
                    </div>
                    <Progress value={getStageProgress()} className="w-full" />
                  </div>

                  <div className="space-y-3">
                    {workflowStages.map((stage) => (
                      <div key={stage.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {getStageIcon(stage.status)}
                          <div>
                            <h4 className="font-medium">{stage.name}</h4>
                            <p className="text-sm text-muted-foreground">{stage.description}</p>
                            {stage.error && (
                              <p className="text-sm text-red-500">{stage.error}</p>
                            )}
                          </div>
                        </div>
                        <Badge variant={stage.status === 'completed' ? 'default' : 'secondary'}>
                          {stage.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prompts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Prompt Manager
              </CardTitle>
              <CardDescription>
                Execute and manage AI prompts directly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="promptSelect">Select Prompt</Label>
                  <select
                    id="promptSelect"
                    className="w-full p-2 border rounded-md"
                    value={selectedPrompt}
                    onChange={(e) => setSelectedPrompt(e.target.value)}
                  >
                    <option value="">Choose a prompt...</option>
                    {prompts.map((prompt) => (
                      <option key={prompt.id} value={prompt.id}>
                        {prompt.name} - {prompt.description}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Prompt Variables</Label>
                  <Textarea
                    placeholder='{"variable1": "value1", "variable2": "value2"}'
                    value={JSON.stringify(promptVariables, null, 2)}
                    onChange={(e) => {
                      try {
                        setPromptVariables(JSON.parse(e.target.value));
                      } catch {
                        // Invalid JSON, ignore
                      }
                    }}
                    className="font-mono text-sm"
                  />
                </div>
              </div>

              <Button onClick={executePrompt} disabled={isLoading || !selectedPrompt}>
                <Play className="h-4 w-4 mr-2" />
                {isLoading ? 'Executing...' : 'Execute Prompt'}
              </Button>

              {executionResult && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Execution Result</h4>
                    <Button 
                      onClick={() => copyToClipboard(executionResult.content)} 
                      variant="outline" 
                      size="sm"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm">{executionResult.content}</pre>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Model:</span> {executionResult.model}
                    </div>
                    <div>
                      <span className="font-medium">Tokens:</span> {executionResult.usage.totalTokens}
                    </div>
                    <div>
                      <span className="font-medium">Finish Reason:</span> {executionResult.finishReason}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Usage Analytics</CardTitle>
              <CardDescription>Monitor AI model usage and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-sm text-muted-foreground">Total Executions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2.3s</div>
                  <div className="text-sm text-muted-foreground">Avg Response Time</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Latitude Configuration</CardTitle>
              <CardDescription>Manage API settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>API Connection Status</Label>
                <div className="flex items-center gap-2">
                  <Badge variant={isConnected ? "default" : "destructive"}>
                    {isConnected ? "Connected" : "Disconnected"}
                  </Badge>
                  <Button onClick={checkConnection} variant="outline" size="sm">
                    Refresh
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Available Providers</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Azure OpenAI</Badge>
                  <Badge variant="outline">OpenAI</Badge>
                  <Badge variant="outline">MiniMax</Badge>
                  <Badge variant="outline">Anthropic</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Workflow Integration</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">Connect Zapier</Button>
                  <Button variant="outline" size="sm">Connect Airtable</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};