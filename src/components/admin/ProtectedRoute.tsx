
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "@/contexts/SecureAdminAuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAdminAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/admin/secure-login" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
