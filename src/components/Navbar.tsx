import { Plane, Globe, TrendingDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Plane className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-heading font-bold text-xl text-foreground">FlyDeals</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link to="/deals" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          ✈️ Flight Deals
        </Link>
        <Link to="/visa-hub" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          🌍 Visa Hub
        </Link>
        <Link to="/deals">
          <Button size="sm">Find Deals</Button>
        </Link>
      </div>
      <div className="md:hidden flex items-center gap-4">
        <Link to="/deals">
          <Button size="sm">Deals</Button>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
