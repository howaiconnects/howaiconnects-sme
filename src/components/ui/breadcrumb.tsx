import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ComponentType<{ className?: string }>
  }
>(({ className, separator: Separator = ChevronRight, ...props }, ref) => (
  <nav ref={ref} aria-label="breadcrumb" className={className} {...props} />
))
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn("transition-colors hover:text-foreground", className)}
    {...props}
  />
))
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

// Auto-generating breadcrumb component
const AutoBreadcrumb: React.FC<{ className?: string }> = ({ className }) => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  // Route label mapping
  const routeLabels: { [key: string]: string } = {
    'services': 'Services',
    'ai-automation-solutions': 'AI Automation Solutions',
    'ai-consultation': 'AI Consultation',
    'marketing-automation': 'Marketing Automation',
    'workflow-automation': 'Workflow Automation',
    'customer-service-automation': 'Customer Service Automation',
    'ai-readiness-assessment': 'AI Readiness Assessment',
    'ai-strategy-development': 'AI Strategy Development',
    'implementation-support': 'Implementation Support',
    'resources': 'Resources',
    'blog': 'Blog',
    'case-studies': 'Case Studies',
    'tools': 'Tools',
    'templates': 'Templates',
    'automation-templates': 'Automation Templates',
    'courses': 'Courses',
    'about': 'About',
    'contact': 'Contact',
    'web-apps': 'Web Apps',
    'path-to-canada': 'PathtoCanada.ca',
    'ai-data-gem': 'AIDataGem.com',
    'web-app-development': 'Web App Development',
    'done-for-you-ai-agency': 'Done-for-You AI Agency',
  }

  if (pathnames.length === 0) return null

  return (
    <Breadcrumb className={cn("py-3 px-4 sm:px-6 lg:px-8", className)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink to="/">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {pathnames.map((pathname, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const label = routeLabels[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1)

          return (
            <React.Fragment key={to}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink to={to}>{label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  AutoBreadcrumb,
}