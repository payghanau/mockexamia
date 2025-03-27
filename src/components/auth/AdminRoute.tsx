
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // Check if user is authenticated and has admin role
  // User role is stored in user.app_metadata.role for Supabase
  const userRole = user?.app_metadata?.role || 'user';
  
  if (!isAuthenticated || userRole !== 'admin') {
    // Redirect users who aren't admins
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
