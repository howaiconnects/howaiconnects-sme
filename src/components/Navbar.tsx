
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/37aaff7e-a1cb-4b50-b3a6-29614da5fd71.png" 
                alt="HowAIConnects Logo" 
                className="h-8 w-auto mr-2" 
              />
              <span className="text-brand-primary font-bold text-xl">HowAIConnects</span>
            </Link>
          </div>

          {/* Desktop menu - updated with dropdown navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Featured Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-brand-accent">Featured Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                      <li className="col-span-1">
                        <NavigationMenuLink asChild>
                          <Link to="/web-app-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                  <polyline points="16 18 22 12 16 6"></polyline>
                                  <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium leading-none">Web App Development</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Custom web applications for small and medium businesses</p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="col-span-1">
                        <NavigationMenuLink asChild>
                          <Link to="/done-for-you-ai-agency" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-brand-accent to-brand-lightAccent flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                  <path d="M22 2L11 13"></path>
                                  <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium leading-none">Done-for-You AI Agency</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Launch your own AI agency with zero upfront cost</p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-brand-accent">AI Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">All Solutions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">View our complete AI-powered solution portfolio</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/services/ai-automation-solutions/marketing-automation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Marketing Intelligence</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">AI-powered marketing systems</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/services/ai-automation-solutions/customer-service-automation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Customer Intelligence</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">AI-driven customer experience</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/early-access" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Early Access</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Join our early adopter program</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/projects/howaiconnects-platform" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Platform Architecture</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Explore our AI infrastructure</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-brand-accent">Our Web Apps</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/projects/howaiconnects-platform" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">HowAIConnects Platform</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Unified AI framework for enterprise solutions</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/projects/dealstream" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">DealStream</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Real estate wholesaling intelligence platform</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/projects/ost2pst" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">OST2PST.com</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">AI-powered enterprise email converter</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/web-apps/path-to-canada" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">AI Immigration Assistant</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Intelligent guide for Canadian immigration</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-brand-accent">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link to="/resources" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">All Resources</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Browse all our resources and educational content</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/courses" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Courses</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Learn AI implementation for your business</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/resources/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Blog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Latest insights on AI for small businesses</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/resources/case-studies" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Case Studies</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Success stories from our clients</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/resources/tools" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Tools</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Free tools for AI implementation</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/resources/templates" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Templates</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Ready-to-use automation templates</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className="text-gray-700 hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="text-gray-700 hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-2 ml-4">
              <Link to="/account">
                <Button variant="outline" size="sm" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {user ? 'Account' : 'Sign In'}
                </Button>
              </Link>
              
              <Link to="/services/ai-consultation/ai-readiness-assessment">
                <Button className="bg-brand-accent hover:bg-brand-lightAccent text-white" size="sm">
                  Get Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-accent hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="py-2 border-b border-gray-100">
              <h3 className="text-xs font-semibold text-gray-500 px-3 py-1">FEATURED SERVICES</h3>
              <Link to="/web-app-development" onClick={closeMenu} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                Web App Development
              </Link>
              <Link to="/done-for-you-ai-agency" onClick={closeMenu} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                Done-for-You AI Agency
              </Link>
            </div>
            <div className="py-2 border-b border-gray-100">
              <h3 className="text-xs font-semibold text-gray-500 px-3 py-1">WEB APPS</h3>
              <Link to="/web-apps/path-to-canada" onClick={closeMenu} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                PathtoCanada.ca
              </Link>
              <Link to="/web-apps/ai-data-gem" onClick={closeMenu} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                AIDataGem.com
              </Link>
            </div>
            <div className="py-2 border-b border-gray-100">
              <h3 className="text-xs font-semibold text-gray-500 px-3 py-1">AI SERVICES</h3>
              <Link to="/services" onClick={closeMenu} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                All Services
              </Link>
            </div>
            <Link to="/resources" onClick={closeMenu} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Resources
            </Link>
            <Link to="/about" onClick={closeMenu} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/contact" onClick={closeMenu} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link to="/account" onClick={closeMenu} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              {user ? 'Account' : 'Sign In'}
            </Link>
            <Link to="/services/ai-consultation/ai-readiness-assessment" onClick={closeMenu} className="block mt-3">
              <Button className="bg-brand-accent hover:bg-brand-lightAccent text-white w-full" size="sm">
                Get Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
