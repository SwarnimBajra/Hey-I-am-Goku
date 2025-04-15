
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-torrex-light">
      <div className="text-center p-6">
        <h1 className="text-8xl font-bold text-torrex-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! This page doesn't seem to exist</p>
        <Button asChild className="bg-torrex-primary hover:bg-torrex-secondary">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
