import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  BarChart3, 
  Zap, 
  FileText, 
  Settings, 
  Users,
  Brain,
  Database,
  Shield,
  Menu,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useAuth } from "@/contexts/AuthContext";

interface NavItem {
  title: string;
  url: string;
  icon: React.ElementType;
  badge?: string;
  subItems?: {
    title: string;
    url: string;
  }[];
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + '/');
  
  const getNavCls = (isActive: boolean) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/50";

  // Main navigation sections
  const navSections: NavSection[] = [
    {
      title: "Core Dashboards",
      items: [
        {
          title: "Main Dashboard",
          url: "/app/dashboard", 
          icon: Home
        },
        {
          title: "SEO Dashboard",
          url: "/app/seo",
          icon: BarChart3,
          badge: "Premium"
        },
        {
          title: "Automation Hub", 
          url: "/app/automation",
          icon: Zap,
          badge: "New"
        },
        {
          title: "Navigation Center",
          url: "/app/navigation",
          icon: Menu,
          badge: "360°"
        },
        {
          title: "Routing Audit",
          url: "/app/audit",
          icon: Shield,
          badge: "System"
        }
      ]
    },
    {
      title: "AI Services",
      items: [
        {
          title: "All Services",
          url: "/services",
          icon: Brain,
          subItems: [
            { title: "Marketing Automation", url: "/services/ai-automation-solutions/marketing-automation" },
            { title: "Workflow Automation", url: "/services/ai-automation-solutions/workflow-automation" },
            { title: "Customer Service AI", url: "/services/ai-automation-solutions/customer-service-automation" },
            { title: "AI Strategy", url: "/services/ai-consultation/ai-strategy-development" },
            { title: "AI Readiness", url: "/services/ai-consultation/ai-readiness-assessment" },
            { title: "Implementation", url: "/services/ai-consultation/implementation-support" }
          ]
        },
        {
          title: "Web Development",
          url: "/web-app-development",
          icon: Database
        },
        {
          title: "AI Agency",
          url: "/done-for-you-ai-agency", 
          icon: Users,
          badge: "Premium"
        }
      ]
    },
    {
      title: "Resources",
      items: [
        {
          title: "Resource Library",
          url: "/resources",
          icon: FileText,
          subItems: [
            { title: "Blog Articles", url: "/resources/blog" },
            { title: "Case Studies", url: "/resources/case-studies" },
            { title: "AI Tools", url: "/resources/tools" },
            { title: "Templates", url: "/resources/templates" }
          ]
        },
        {
          title: "Training Courses",
          url: "/courses",
          icon: Brain,
          badge: "Beta"
        }
      ]
    }
  ];

  // Admin section (only for admin users)
  const adminSection: NavSection = {
    title: "Administration",
    items: [
      {
        title: "Admin Console",
        url: "/admin/dashboard",
        icon: Shield
      },
      {
        title: "User Management", 
        url: "/admin/settings",
        icon: Users
      }
    ]
  };

  // Add admin section for admin users
  const allSections = user?.role === 'admin' 
    ? [...navSections, adminSection]
    : navSections;

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"}>
      <SidebarContent>
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            {!collapsed && (
              <>
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div>
                  <p className="font-semibold text-sm">HowAIConnects</p>
                  <p className="text-xs text-muted-foreground">{user?.role || 'Member'}</p>
                </div>
              </>
            )}
            {collapsed && (
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            )}
          </div>
        </div>

        {/* Navigation Sections */}
        {allSections.map((section, sectionIndex) => (
          <SidebarGroup key={sectionIndex}>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-medium text-muted-foreground">
                {section.title}
              </SidebarGroupLabel>
            )}
            
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item, itemIndex) => (
                  <SidebarMenuItem key={itemIndex}>
                    {item.subItems ? (
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className={getNavCls(isActive(item.url))}>
                            <item.icon className="h-4 w-4" />
                            {!collapsed && (
                              <>
                                <span>{item.title}</span>
                                {item.badge && (
                                  <span className="ml-auto text-xs bg-primary/10 text-primary px-1 rounded">
                                    {item.badge}
                                  </span>
                                )}
                                <ChevronRight className="ml-auto h-3 w-3" />
                              </>
                            )}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        
                        {!collapsed && (
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.subItems.map((subItem, subIndex) => (
                                <SidebarMenuSubItem key={subIndex}>
                                  <SidebarMenuSubButton asChild>
                                    <Link 
                                      to={subItem.url}
                                      className={getNavCls(isActive(subItem.url))}
                                    >
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        )}
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild>
                        <Link 
                          to={item.url} 
                          className={getNavCls(isActive(item.url))}
                        >
                          <item.icon className="h-4 w-4" />
                          {!collapsed && (
                            <>
                              <span>{item.title}</span>
                              {item.badge && (
                                <span className="ml-auto text-xs bg-primary/10 text-primary px-1 rounded">
                                  {item.badge}
                                </span>
                              )}
                            </>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {/* Account Section */}
        <SidebarGroup className="mt-auto">
          {!collapsed && (
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground">
              Account
            </SidebarGroupLabel>
          )}
          
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link 
                    to="/account" 
                    className={getNavCls(isActive('/account'))}
                  >
                    <Settings className="h-4 w-4" />
                    {!collapsed && <span>Account Settings</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}