# MCP Servers Project

A comprehensive setup for hosting multiple MCP (Model Context Protocol) servers on cloud VPS with VS Code integration and Replit.com compatibility.

## Project Structure

```
mcp-servers-project/
├── configs/                    # MCP server configurations
│   ├── development/           # Development environment configs
│   ├── production/            # Production environment configs
│   └── shared/                # Shared configurations
├── servers/                   # Individual MCP server implementations
├── docker/                    # Docker configurations for cloud deployment
├── scripts/                   # Deployment and management scripts
├── .vscode/                   # VS Code workspace settings
├── .replit/                   # Replit.com configuration
├── docs/                      # Documentation
└── environments/              # Environment-specific settings
```

## Quick Start

1. **Development Setup**:
   ```bash
   npm install
   npm run setup:dev
   ```

2. **VS Code Integration**:
   - Open workspace: `code mcp-servers.code-workspace`
   - Install recommended extensions
   - Configure MCP client settings

3. **Cloud VPS Deployment**:
   ```bash
   npm run deploy:production
   ```

4. **Replit.com Setup**:
   - Import project to Replit
   - Configure environment variables
   - Run `npm run setup:replit`

## Configuration Management

### Environment-Based Configs
- **Development**: Local testing with mock data
- **Staging**: Cloud testing environment
- **Production**: Live cloud VPS deployment

### MCP Client Configuration
All MCP servers are configured through centralized config files that can be easily imported into VS Code MCP client settings.

## Supported MCP Servers

- **Database Server**: PostgreSQL/SQLite operations
- **File System Server**: File management and operations
- **API Gateway Server**: External API integrations
- **Authentication Server**: User management and auth
- **Workflow Server**: Task automation and workflows
- **Analytics Server**: Data analysis and reporting

## Cloud VPS Deployment

The project includes Docker configurations optimized for cloud VPS deployment with:
- Load balancing
- Health monitoring
- Auto-scaling
- Backup strategies
- Security hardening

## VS Code Integration

Pre-configured workspace with:
- MCP client settings
- Debug configurations
- Task runners
- Extension recommendations

## Replit.com Compatibility

Includes Replit-specific configurations for:
- Environment setup
- Package management
- Port forwarding
- Database connections

## Documentation

See the `docs/` directory for detailed documentation on:
- Server setup and configuration
- Deployment procedures
- Troubleshooting guides
- API references
