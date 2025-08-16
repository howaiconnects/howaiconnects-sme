
import { Link } from "react-router-dom";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, Mail } from "lucide-react";

const AdminNav = () => {
  const { logout } = useAdminAuth();
  
  return (
    <div className="bg-white border-b mb-6 py-3">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <Settings className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-medium">Admin Dashboard</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/admin/email" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
              <Mail className="h-4 w-4 mr-1" />
              <span>Email Settings</span>
            </Link>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={logout} 
              className="text-red-600 hover:text-red-800 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-1" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
