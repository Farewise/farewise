import { useState } from "react";
import { Plane, ArrowRight, Flame, Zap, Filter, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allDeals = [
  { from: "Delhi", to: "Bangkok", price: "₹8,499", original: "₹18,000", airline: "IndiGo", tag: "HOT", date: "Mar 15-22", stops: "Non-stop" },
  { from: "Mumbai", to: "Dubai", price: "₹11,999", original: "₹22,000", airline: "Air Arabia", tag: "SALE", date: "Mar 10-17", stops: "Non-stop" },
  { from: "Bangalore", to: "Singapore", price: "₹13,500", original: "₹25,000", airline: "Scoot", tag: "DEAL", date: "Apr 1-8", stops: "Non-stop" },
  { from: "Delhi", to: "Bali", price: "₹16,999", original: "₹35,000", airline: "AirAsia", tag: "HOT", date: "Mar 20-28", stops: "1 stop" },
  { from: "Chennai", to: "Kuala Lumpur", price: "₹9,800", original: "₹19,500", airline: "AirAsia", tag: "SALE", date: "Mar 12-19", stops: "Non-stop" },
  { from: "Kolkata", to: "Phuket", price: "₹10,200", original: "₹20,000", airline: "Thai Smile", tag: "DEAL", date: "Apr 5-12", stops: "1 stop" },
  { from: "Delhi", to: "Colombo", price: "₹7,200", original: "₹14,000", airline: "SriLankan", tag: "HOT", date: "Mar 18-25", stops: "Non-stop" },
  { from: "Mumbai", to: "Maldives", price: "₹14,500", original: "₹28,000", airline: "IndiGo", tag: "SALE", date: "Apr 10-15", stops: "Non-stop" },
  { from: "Hyderabad", to: "Kathmandu", price: "₹6,800", original: "₹13,000", airline: "Buddha Air", tag: "DEAL", date: "Mar 22-29", stops: "1 stop" },
  { from: "Delhi", to: "Tokyo", price: "₹24,999", original: "₹55,000", airline: "ANA", tag: "HOT", date: "May 1-10", stops: "1 stop" },
  { from: "Bangalore", to: "Vietnam", price: "₹12,300", original: "₹24,000", airline: "VietJet", tag: "SALE", date: "Apr 15-22", stops: "1 stop" },
  { from: "Mumbai", to: "Tbilisi", price: "₹18,999", original: "₹38,000", airline: "FlyDubai", tag: "DEAL", date: "Apr 20-28", stops: "1 stop" },
];

const tagColors: Record<string, string> = {
  HOT: "bg-deal-hot",
  SALE: "bg-deal-warm",
  DEAL: "bg-deal-good",
};

const Deals = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = allDeals.filter((d) => {
    const matchSearch = `${d.from} ${d.to} ${d.airline}`.toLowerCase().includes(search.toLowerCase());
    const matchFilter = !filter || d.tag === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-8 container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-2">
          ✈️ Flight Deals
        </h1>
        <p className="text-muted-foreground mb-8">Hand-picked cheap flights from India, updated daily.</p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by city or airline..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {["HOT", "SALE", "DEAL"].map((t) => (
              <Button
                key={t}
                size="sm"
                variant={filter === t ? "default" : "outline"}
                onClick={() => setFilter(filter === t ? null : t)}
              >
                {t === "HOT" && <Flame className="w-3 h-3 mr-1" />}
                {t === "SALE" && <Zap className="w-3 h-3 mr-1" />}
                {t}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((deal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${tagColors[deal.tag]} text-primary-foreground text-xs font-bold`}>
                      {deal.tag === "HOT" && <Flame className="w-3 h-3 mr-1" />}
                      {deal.tag === "SALE" && <Zap className="w-3 h-3 mr-1" />}
                      {deal.tag}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{deal.airline}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading font-semibold text-foreground">{deal.from}</span>
                    <div className="flex-1 flex items-center">
                      <div className="flex-1 h-px bg-border" />
                      <Plane className="w-4 h-4 text-primary mx-2" />
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <span className="font-heading font-semibold text-foreground">{deal.to}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{deal.date}</span>
                    <span>{deal.stops}</span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">{deal.original}</span>
                      <p className="text-2xl font-heading font-bold text-primary">{deal.price}</p>
                    </div>
                    <Button size="sm" asChild>
                      <a href="https://www.skyscanner.co.in/" target="_blank" rel="noopener noreferrer nofollow">
                        Book Now <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No deals found matching your search.</p>
          </div>
        )}

        <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border text-center">
          <p className="text-sm text-muted-foreground">
            💡 Prices are indicative. Click "Book Now" to check the latest fare on our partner sites.
            We may earn an affiliate commission — at no cost to you.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Deals;
