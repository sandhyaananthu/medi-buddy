import { Link, useLocation } from "react-router-dom";
import { Pill } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl transition-transform group-hover:scale-110">
              <Pill className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MediTrack
            </span>
          </Link>

          <nav className="flex gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/set-reminder"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/set-reminder") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Set Reminder
            </Link>
            <Link
              to="/my-medications"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/my-medications") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              My Medications
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
