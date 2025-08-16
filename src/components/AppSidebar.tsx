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

  // Main navigation sections - All under /app/*
  const navSections: NavSection[] = [
    {
      title: "AI Platform",
      items: [
        {
          title: "Analytics Dashboard",
          url: "/app", 
          icon: BarChart3,
          badge: "Main"
        },
        {
          title: "User Dashboard",
          url: "/app/dashboard",
          icon: Home
        },
        {
          title: "Automation Hub", 
          url: "/app/automation",
          icon: Zap,
          badge: "Live"
        },
        {
          title: "Navigation Center",
          url: "/app/navigation",
          icon: Menu,
          badge: "360°"
        },
        {
          title: "System Audit",
          url: "/app/audit",
          icon: Shield,
          badge: "System"
        }
      ]
    },
    {
      title: "Integrations",
      items: [
        {
          title: "Airtable",
          url: "/app/automation#airtable",
          icon: Database,
          badge: "Beta"
        },
        {
          title: "Zapier",
          url: "/app/automation#zapier",
          icon: Zap,
          badge: "Coming"
        },
        {
          title: "API Center",
          url: "/app/api",
          icon: Brain
        }
      ]
    },
    {
      title: "Data & Analytics",
      items: [
        {
          title: "Activity Feed",
          url: "/app/automation#activity",
          icon: FileText,
          badge: "Live"
        },
        {
          title: "Performance",
          url: "/app/analytics",
          icon: BarChart3
        },
        {
          title: "Reports",
          url: "/app/reports",
          icon: FileText
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
        url: "/app/admin",
        icon: Shield
      },
      {
        title: "User Management", 
        url: "/app/admin/users",
        icon: Users
      },
      {
        title: "System Settings",
        url: "/app/admin/settings",
        icon: Settings
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
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">HowAIConnects</p>
                  <p className="text-xs text-gray-600">{user?.role || 'Member'}</p>
                </div>
              </>
            )}
            {collapsed && (
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center mx-auto">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
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
                    to="/app/account" 
                    className={getNavCls(isActive('/app/account'))}
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