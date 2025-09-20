import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative text-center space-y-8 max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-2xl text-muted-foreground mb-4">Oops! Page not found</p>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            🏠 Home
          </Link>
          <Link 
            to="/projects" 
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
          >
            🚀 Projects
          </Link>
          <Link 
            to="/about" 
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
          >
            👤 About
          </Link>
          <Link 
            to="/media" 
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
          >
            📰 Media
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Or <a href="mailto:michaelallenkuykendall@gmail.com" className="text-primary hover:underline">contact us</a> if you think this is an error
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
