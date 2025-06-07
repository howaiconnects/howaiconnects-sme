# SME Boost Platform - System Architecture

## System Overview Diagram

```mermaid
graph TB
    subgraph Frontend ["Frontend Layer"]
        LP[Landing Page]
        UD[User Dashboard]
        AD[Admin Dashboard]
        ACD[Airtable Control Dashboard]
    end

    subgraph Integration ["Integration Layer"]
        API[API Gateway]
        WS[WebSocket Server]
        Queue[Message Queue]
        Cache[Redis Cache]
    end

    subgraph MCP ["MCP Servers"]
        BS[Bedrock Server]
        SS[Supabase Server]
        RS[Redis Server]
        AS[Airtable Server]
    end

    subgraph External ["External Services"]
        AWS[AWS Bedrock]
        AT[Airtable]
        SB[Supabase]
    end

    %% Frontend connections
    LP --> API
    UD --> API
    AD --> API
    ACD --> API
    ACD --> WS

    %% Integration layer connections
    API --> Queue
    API --> Cache
    WS --> Cache
    Queue --> MCP
    Cache --> MCP

    %% MCP Server connections
    BS --> AWS
    SS --> SB
    AS --> AT

    %% Styling
    classDef frontend fill:#a8d5e5,stroke:#156b87,stroke-width:2px
    classDef integration fill:#d5e8d4,stroke:#82b366,stroke-width:2px
    classDef mcp fill:#ffe6cc,stroke:#d79b00,stroke-width:2px
    classDef external fill:#f5f5f5,stroke:#666666,stroke-width:2px

    class LP,UD,AD,ACD frontend
    class API,WS,Queue,Cache integration
    class BS,SS,RS,AS mcp
    class AWS,AT,SB external
```

Note: The "Frontend Layer" also includes a Prompt Management Dashboard (PMD), which is based on the Latitude platform. The local codebase and detailed documentation for Latitude can be found in the project root at `/latitude-llm-docs-source/`. For a more detailed architecture including the PMD, please refer to the `COMPLETE_PROJECT_OVERVIEW.md` document.

## Detailed Component Architecture

### Landing Page Structure

```mermaid
graph TB
    subgraph Landing ["Landing Page Components"]
        Hero[Hero Section]
        Features[Features Grid]
        Demo[Interactive Demo]
        CTA[Call to Action]
        
        subgraph Integration ["Integration Showcase"]
            AT[Airtable Demo]
            AI[AI Capabilities]
            Auto[Automation Flow]
        end
        
        subgraph Validation ["Project Validation"]
            Case[Case Studies]
            Stats[Success Stats]
            Test[Testimonials]
        end
    end

    Hero --> Features
    Features --> Demo
    Demo --> Integration
    Integration --> Validation
    Validation --> CTA

    classDef section fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
    classDef component fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    classDef validation fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px

    class Hero,Features,Demo,CTA component
    class AT,AI,Auto section
    class Case,Stats,Test validation
```

### Airtable Control Dashboard

```mermaid
graph TB
    subgraph Dashboard ["Airtable Control Dashboard"]
        Nav[Navigation]
        Main[Main Content Area]
        Side[Sidebar]

        subgraph Controls ["Control Panel"]
            Sync[Sync Manager]
            Import[Import/Export]
            Schema[Schema Editor]
        end

        subgraph Data ["Data Management"]
            Tables[Table Browser]
            Records[Record Editor]
            Fields[Field Manager]
        end

        subgraph Monitor ["Monitoring"]
            Status[Sync Status]
            Logs[Activity Logs]
            Metrics[Performance Metrics]
        end
    end

    Nav --> Main
    Nav --> Side
    Side --> Controls
    Main --> Data
    Side --> Monitor

    classDef layout fill:#bbdefb,stroke:#1976d2,stroke-width:2px
    classDef controls fill:#c8e6c9,stroke:#388e3c,stroke-width:2px
    classDef data fill:#fff9c4,stroke:#fbc02d,stroke-width:2px
    classDef monitor fill:#ffccbc,stroke:#e64a19,stroke-width:2px

    class Nav,Main,Side layout
    class Sync,Import,Schema controls
    class Tables,Records,Fields data
    class Status,Logs,Metrics monitor
```

## Data Flow Architecture

```mermaid
sequenceDiagram
    participant User
    participant FE as Frontend
    participant API as API Gateway
    participant MCP as MCP Servers
    participant Cache as Redis Cache
    participant Queue as Message Queue
    participant AT as Airtable
    participant AWS as AWS Bedrock

    User->>FE: Interact with UI
    FE->>API: API Request
    API->>Cache: Check Cache
    
    alt Cache Hit
        Cache-->>API: Return Cached Data
        API-->>FE: Response
    else Cache Miss
        API->>MCP: Forward Request
        MCP->>Queue: Queue Operation
        Queue->>AT: Airtable Operation
        AT-->>Queue: Response
        Queue->>AWS: AI Processing
        AWS-->>Queue: Enhanced Data
        Queue->>Cache: Update Cache
        Cache-->>API: Return Data
        API-->>FE: Response
    end
```

## Frontend Component Details

### Landing Page Components

```typescript
// Hero Section
interface HeroSection {
  headline: string;
  subheadline: string;
  ctaButton: {
    text: string;
    action: () => void;
  };
  demoVideo: {
    url: string;
    thumbnail: string;
  };
}

// Features Grid
interface Feature {
  icon: string;
  title: string;
  description: string;
  demoLink?: string;
}

// Interactive Demo
interface DemoComponent {
  steps: Array<{
    title: string;
    description: string;
    action: () => void;
    validation: () => boolean;
  }>;
  livePreview: boolean;
  resetDemo: () => void;
}

// Project Validation
interface ValidationSection {
  caseStudies: Array<{
    company: string;
    challenge: string;
    solution: string;
    results: string[];
  }>;
  statistics: Array<{
    metric: string;
    value: number;
    change: number;
  }>;
  testimonials: Array<{
    quote: string;
    author: string;
    company: string;
    image: string;
  }>;
}
```

### Dashboard Components

```typescript
// Main Dashboard Layout
interface DashboardLayout {
  navigation: {
    primary: MenuItem[];
    secondary: MenuItem[];
  };
  sidebar: {
    width: number;
    collapsible: boolean;
  };
  content: {
    maxWidth: number;
    padding: number;
  };
}

// Control Panel
interface ControlPanel {
  syncManager: {
    status: SyncStatus;
    controls: SyncControls;
    history: SyncHistory[];
  };
  importExport: {
    supported: FileFormat[];
    mapping: FieldMapping;
    validation: ValidationRules;
  };
  schemaEditor: {
    tables: TableSchema[];
    relationships: Relationship[];
    validation: SchemaValidation;
  };
}

// Data Management
interface DataManagement {
  tableBrowser: {
    view: 'grid' | 'kanban' | 'calendar';
    filters: Filter[];
    sorting: Sort[];
    pagination: Pagination;
  };
  recordEditor: {
    mode: 'single' | 'bulk';
    validation: ValidationRules;
    history: ChangeHistory[];
  };
  fieldManager: {
    types: FieldType[];
    options: FieldOptions;
    computed: ComputedField[];
  };
}
```

## Style Guide

### Color Palette
```scss
// Primary Colors
$primary-50: #e3f2fd;
$primary-100: #bbdefb;
$primary-500: #2196f3;
$primary-700: #1976d2;
$primary-900: #0d47a1;

// Secondary Colors
$secondary-50: #e8f5e9;
$secondary-100: #c8e6c9;
$secondary-500: #4caf50;
$secondary-700: #388e3c;
$secondary-900: #1b5e20;

// Accent Colors
$accent-50: #fff3e0;
$accent-100: #ffe0b2;
$accent-500: #ff9800;
$accent-700: #f57c00;
$accent-900: #e65100;

// Neutral Colors
$neutral-50: #fafafa;
$neutral-100: #f5f5f5;
$neutral-500: #9e9e9e;
$neutral-700: #616161;
$neutral-900: #212121;
```

### Typography
```scss
// Font Families
$font-primary: 'Inter', sans-serif;
$font-secondary: 'Poppins', sans-serif;
$font-mono: 'JetBrains Mono', monospace;

// Font Sizes
$text-xs: 0.75rem;    // 12px
$text-sm: 0.875rem;   // 14px
$text-base: 1rem;     // 16px
$text-lg: 1.125rem;   // 18px
$text-xl: 1.25rem;    // 20px
$text-2xl: 1.5rem;    // 24px
$text-3xl: 1.875rem;  // 30px
$text-4xl: 2.25rem;   // 36px
```

### Component Spacing
```scss
// Spacing Scale
$space-1: 0.25rem;   // 4px
$space-2: 0.5rem;    // 8px
$space-3: 0.75rem;   // 12px
$space-4: 1rem;      // 16px
$space-6: 1.5rem;    // 24px
$space-8: 2rem;      // 32px
$space-12: 3rem;     // 48px
$space-16: 4rem;     // 64px
```

## Responsive Design

### Breakpoints
```scss
$breakpoints: (
  'sm': 640px,   // Mobile devices
  'md': 768px,   // Tablets
  'lg': 1024px,  // Laptops
  'xl': 1280px,  // Desktops
  '2xl': 1536px  // Large screens
);
```

### Grid System
```scss
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: $space-4;

  @media (max-width: map-get($breakpoints, 'md')) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: map-get($breakpoints, 'sm')) {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

This architecture document provides a comprehensive overview of the system's structure, with special focus on the frontend components and their relationships. The Mermaid diagrams help visualize the connections between different parts of the system, while the detailed component specifications ensure consistent implementation across the platform.
