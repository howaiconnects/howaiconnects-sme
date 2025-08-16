import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';

const UserNav = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <Link 
        to="/auth" 
        className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent text-white hover:from-brand-primary/90 hover:to-brand-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Access Platform
      </Link>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <Button variant="outline" size="sm" asChild>
        <Link to="/dashboard">
          <User className="h-4 w-4 mr-2" />
          Dashboard
        </Link>
      </Button>
      <Button variant="outline" size="sm" onClick={signOut}>
        <LogOut className="h-4 w-4 mr-2" />
        Sign Out
      </Button>
    </div>
  );
};

export default UserNav;