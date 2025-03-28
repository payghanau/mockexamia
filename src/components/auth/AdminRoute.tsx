import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';

interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [checkingAdmin, setCheckingAdmin] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!isAuthenticated || !user) {
        setCheckingAdmin(false);
        return;
      }

      try {
        // First, check if the user has admin role in Supabase
        const userRole = user?.app_metadata?.role || 'user';
        
        if (userRole === 'admin') {
          setIsAdmin(true);
          setCheckingAdmin(false);
          return;
        }

        // If not, check if user's email matches the admin email
        if (user.email === 'akashpayghan2001@gmail.com') {
          setIsAdmin(true);
          setCheckingAdmin(false);
          return;
        }

        setIsAdmin(false);
        setCheckingAdmin(false);
      } catch (error) {
        console.error('Error checking admin status:', error);
        toast({
          variant: 'destructive',
          title: 'Authentication Error',
          description: 'Failed to verify admin status',
        });
        setIsAdmin(false);
        setCheckingAdmin(false);
      }
    };

    checkAdminStatus();
  }, [isAuthenticated, user, toast]);

  if (isLoading || checkingAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated || !isAdmin) {
    // Redirect users who aren't admins
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
