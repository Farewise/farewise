import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Plane className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">FlyDeals</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Curated cheap flight deals from India. Save up to 60% on international flights.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/deals" className="hover:text-foreground transition-colors">Flight Deals</Link></li>
            <li><Link to="/visa-hub" className="hover:text-foreground transition-colors">Visa Hub</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Popular Routes</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Delhi → Bangkok</li>
            <li>Mumbai → Dubai</li>
            <li>Bangalore → Singapore</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Disclaimer</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Prices shown are indicative and may change. We earn commissions from affiliate partners at no extra cost to you.
          </p>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © 2026 FlyDeals. All rights reserved. Affiliate links may earn us a commission.
      </div>
    </div>
  </footer>
);

export default Footer;
