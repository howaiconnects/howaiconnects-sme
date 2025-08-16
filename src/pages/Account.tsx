import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  LogOut, 
  LogIn, 
  Settings, 
  Key,
  Shield,
  Mail,
  Calendar,
  AlertCircle
} from 'lucide-react';

const Account = () => {
  const { user, userProfile, signIn, signOut, loading, refreshProfile } = useAuth();
  const { toast } = useToast();
  
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loadingAction, setLoadingAction] = useState<string | null>(null);

  // Debug logging
  React.useEffect(() => {
    console.log('🏠 Account Page - Auth State:', {
      loading,
      hasUser: !!user,
      userId: user?.id,
      hasProfile: !!userProfile,
      profileRole: userProfile?.role
    });
  }, [loading, user, userProfile]);

  // Clear cache and refresh on mount
  React.useEffect(() => {
    console.log('🧹 Account Page - Clearing cache and refreshing...');
    
    // Clear browser cache
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
    
    // Force refresh profile if user is logged in
    if (user && !loading) {
      console.log('🔄 Refreshing user profile...');
      refreshProfile();
    }
  }, [user, loading, refreshProfile]);

  // Add timeout fallback to prevent infinite loading
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        console.log('⚠️ Account Page - Loading timeout reached, forcing reload...');
        window.location.reload();
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [loading]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingAction('login');

    try {
      const { error } = await signIn(loginData.email, loginData.password);
      
      if (error) {
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Welcome Back!",
          description: "You have successfully logged in.",
        });
        setLoginData({ email: '', password: '' });
      }
    } catch (error) {
      toast({
        title: "Login Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingAction(null);
    }
  };

  const handleLogout = async () => {
    setLoadingAction('logout');
    try {
      await signOut();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      toast({
        title: "Logout Error",
        description: "An error occurred while logging out.",
        variant: "destructive",
      });
    } finally {
      setLoadingAction(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  // If not logged in, show login form only
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Helmet>
          <title>Sign In | HowAIConnects</title>
          <meta name="description" content="Sign in to access your HowAIConnects account and premium features." />
        </Helmet>

        <div className="container mx-auto px-4 py-12 max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sign In Required</h1>
            <p className="text-xl text-gray-600">
              Please sign in to access your account
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <LogIn className="h-5 w-5" />
                <span>Sign In</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={loadingAction === 'login'}
                >
                  {loadingAction === 'login' ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  ) : (
                    <LogIn className="h-4 w-4 mr-2" />
                  )}
                  Sign In
                </Button>
              </form>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 text-blue-800">
                  <AlertCircle className="h-4 w-4" />
                  <p className="text-xs">
                    Need an account? Contact our team to get access to premium features.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Authenticated User View
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Account | HowAIConnects</title>
        <meta name="description" content="Manage your HowAIConnects account, access premium features, and view your profile information." />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Account Management</h1>
          <p className="text-xl text-gray-600">
            Manage your account and access premium features
          </p>
        </div>

        <div className="space-y-8">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Profile Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                  </div>
                  {userProfile?.full_name && (
                    <div className="flex items-center space-x-3">
                      <User className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">{userProfile.full_name}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <Badge variant={userProfile?.role === 'admin' ? 'default' : 'secondary'}>
                        {userProfile?.role || 'User'}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p className="font-medium">
                        {userProfile?.created_at 
                          ? new Date(userProfile.created_at).toLocaleDateString()
                          : 'N/A'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Account Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="justify-start"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  <User className="h-4 w-4 mr-2" />
                  View Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start"
                  onClick={() => window.location.href = '/app'}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  SEO Dashboard
                </Button>
                {userProfile?.role === 'admin' && (
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => window.location.href = '/admin/dashboard'}
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Admin Dashboard
                  </Button>
                )}
              </div>
              
              <Separator className="my-6" />
              
              <Button 
                variant="destructive" 
                onClick={handleLogout}
                disabled={loadingAction === 'logout'}
                className="w-full"
              >
                {loadingAction === 'logout' ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                ) : (
                  <LogOut className="h-4 w-4 mr-2" />
                )}
                Sign Out
              </Button>
            </CardContent>
          </Card>

          {/* Premium Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Key className="h-5 w-5" />
                <span>Premium Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">SEO Dashboard</h4>
                  <p className="text-sm text-gray-600 mb-3">AI-powered SEO automation platform</p>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Resource Downloads</h4>
                  <p className="text-sm text-gray-600 mb-3">Access to premium templates and tools</p>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Course Access</h4>
                  <p className="text-sm text-gray-600 mb-3">Exclusive AI automation courses</p>
                  <Badge variant="default">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Account;