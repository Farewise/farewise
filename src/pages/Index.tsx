import { Plane, Globe, TrendingDown, ArrowRight, Flame, Zap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featuredDeals = [
  { from: "Delhi", to: "Bangkok", price: "₹8,499", original: "₹18,000", airline: "IndiGo", tag: "HOT", tagColor: "bg-deal-hot" },
  { from: "Mumbai", to: "Dubai", price: "₹11,999", original: "₹22,000", airline: "Air Arabia", tag: "SALE", tagColor: "bg-deal-warm" },
  { from: "Bangalore", to: "Singapore", price: "₹13,500", original: "₹25,000", airline: "Scoot", tag: "DEAL", tagColor: "bg-deal-good" },
  { from: "Delhi", to: "Bali", price: "₹16,999", original: "₹35,000", airline: "AirAsia", tag: "HOT", tagColor: "bg-deal-hot" },
  { from: "Chennai", to: "Kuala Lumpur", price: "₹9,800", original: "₹19,500", airline: "AirAsia", tag: "SALE", tagColor: "bg-deal-warm" },
  { from: "Kolkata", to: "Phuket", price: "₹10,200", original: "₹20,000", airline: "Thai Smile", tag: "DEAL", tagColor: "bg-deal-good" },
];

const popularDestinations = [
  { country: "Thailand", flag: "🇹🇭", visa: "Visa on Arrival", deals: 24 },
  { country: "Dubai (UAE)", flag: "🇦🇪", visa: "Visa on Arrival", deals: 18 },
  { country: "Singapore", flag: "🇸🇬", visa: "eVisa Available", deals: 12 },
  { country: "Bali (Indonesia)", flag: "🇮🇩", visa: "Visa Free", deals: 15 },
  { country: "Malaysia", flag: "🇲🇾", visa: "eNTRI / eVisa", deals: 20 },
  { country: "Sri Lanka", flag: "🇱🇰", visa: "ETA Online", deals: 8 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--hero-gradient)] opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Badge className="bg-secondary text-secondary-foreground mb-6 text-sm px-4 py-1.5">
              <Flame className="w-3.5 h-3.5 mr-1.5" /> Updated Daily
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Cheap Flights from
              <br />
              <span className="text-secondary">India</span> to Anywhere
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
              Hand-picked flight deals, visa guides & travel tips — so you can explore the world without burning your wallet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/deals">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8">
                  Browse Deals <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link to="/visa-hub">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
                  <Globe className="w-4 h-4 mr-1" /> Visa Guide
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: TrendingDown, label: "Avg. Savings", value: "45%", desc: "vs regular fares" },
            { icon: Plane, label: "Deals Today", value: "32+", desc: "fresh routes curated" },
            { icon: Globe, label: "Countries", value: "25+", desc: "visa guides available" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Card className="border-border bg-card shadow-lg">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Deals */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Today's Top Deals</h2>
            <p className="text-muted-foreground mt-2">Curated daily — these won't last long</p>
          </div>
          <Link to="/deals">
            <Button variant="outline">View All <ArrowRight className="w-4 h-4 ml-1" /></Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredDeals.map((deal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${deal.tagColor} text-primary-foreground text-xs font-bold`}>
                      {deal.tag === "HOT" && <Flame className="w-3 h-3 mr-1" />}
                      {deal.tag === "SALE" && <Zap className="w-3 h-3 mr-1" />}
                      {deal.tag}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{deal.airline}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-heading font-semibold text-foreground">{deal.from}</span>
                    <div className="flex-1 flex items-center">
                      <div className="flex-1 h-px bg-border" />
                      <Plane className="w-4 h-4 text-primary mx-2 rotate-0" />
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <span className="font-heading font-semibold text-foreground">{deal.to}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">{deal.original}</span>
                      <p className="text-2xl font-heading font-bold text-primary">{deal.price}</p>
                    </div>
                    <Button size="sm" className="group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      Book Now <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Popular Destinations</h2>
            <p className="text-muted-foreground mt-2">Quick visa info + active deals count</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularDestinations.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to="/visa-hub">
                  <Card className="text-center hover:shadow-lg transition-all duration-300 border-border bg-card cursor-pointer group">
                    <CardContent className="p-5">
                      <span className="text-4xl block mb-3">{dest.flag}</span>
                      <h3 className="font-heading font-semibold text-sm text-foreground mb-1">{dest.country}</h3>
                      <p className="text-xs text-accent font-medium mb-2">{dest.visa}</p>
                      <Badge variant="secondary" className="text-xs">{dest.deals} deals</Badge>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-primary border-none overflow-hidden relative">
          <div className="absolute inset-0 bg-[var(--hero-gradient)] opacity-90" />
          <CardContent className="relative p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Never Miss a Deal ✈️
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Get the cheapest flight deals from India delivered to your inbox — free, no spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-12 rounded-lg px-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button className="h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6">
                Subscribe Free
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
