
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <AlertTriangle className="h-24 w-24 text-primary mx-auto" />
        <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
