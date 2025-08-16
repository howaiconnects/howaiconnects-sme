
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Shield, AlertCircle, Clock } from "lucide-react";
import { adminLoginSchema, type AdminLoginData } from "@/schemas/validationSchemas";
import { sanitizeInput } from "@/utils/security";

const AdminLogin = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, remainingLockoutTime } = useAdminAuth();
  const navigate = useNavigate();
  
  const form = useForm<AdminLoginData>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      password: ""
    }
  });
  
  const onSubmit = async (data: AdminLoginData) => {
    setIsLoading(true);
    setError("");
    
    try {
      // Sanitize input
      const sanitizedPassword = sanitizeInput(data.password);
      
      const result = await login(sanitizedPassword);
      
      if (result.success) {
        navigate("/admin/email");
      } else {
        setError(result.error || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error('Login error:', error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const formatRemainingTime = (timeMs: number): string => {
    const minutes = Math.ceil(timeMs / 1000 / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Admin Login | HowAIConnects</title>
        <meta name="description" content="Secure admin login for HowAIConnects." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-12 flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-brand-primary" />
              <CardTitle className="text-2xl">Admin Login</CardTitle>
            </div>
            <CardDescription>
              Enter your admin password to access the dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            {remainingLockoutTime > 0 && (
              <Alert variant="destructive" className="mb-4">
                <Clock className="h-4 w-4" />
                <AlertDescription>
                  Account temporarily locked due to multiple failed attempts. 
                  Please try again in {formatRemainingTime(remainingLockoutTime)}.
                </AlertDescription>
              </Alert>
            )}
            
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Admin Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Enter admin password"
                          disabled={isLoading || remainingLockoutTime > 0}
                          autoComplete="current-password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading || remainingLockoutTime > 0}
                >
                  {isLoading ? "Logging in..." : "Login to Admin"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminLogin;
