import { useState } from "react";
import { Globe, Search, Clock, DollarSign, FileText, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type VisaType = "Visa Free" | "Visa on Arrival" | "eVisa" | "Sticker Visa";

interface CountryVisa {
  country: string;
  flag: string;
  visaType: VisaType;
  duration: string;
  cost: string;
  processingTime: string;
  requirements: string[];
  tips: string[];
}

const countries: CountryVisa[] = [
  {
    country: "Thailand", flag: "🇹🇭", visaType: "Visa on Arrival",
    duration: "15 days", cost: "2,000 THB (~₹4,800)", processingTime: "At airport",
    requirements: ["Passport valid 6 months", "Return ticket", "Hotel booking", "20,000 THB cash proof", "2 passport photos"],
    tips: ["Arrive early — VoA queues can be long", "Carry printed hotel confirmations", "Bangkok has the longest queues — consider eVisa"]
  },
  {
    country: "Singapore", flag: "🇸🇬", visaType: "eVisa",
    duration: "30 days", cost: "₹2,500 approx", processingTime: "3-5 working days",
    requirements: ["Valid passport", "Confirmed return ticket", "Hotel booking", "Bank statements (3 months)", "Employment proof"],
    tips: ["Apply through authorized agents only", "Approval is not guaranteed", "Having previous travel history helps"]
  },
  {
    country: "Dubai (UAE)", flag: "🇦🇪", visaType: "eVisa",
    duration: "30 days", cost: "₹5,000 - ₹8,000", processingTime: "3-4 working days",
    requirements: ["Passport copy", "Photo", "Confirmed return ticket", "Hotel booking", "Bank statement"],
    tips: ["Many airlines offer transit visas for free", "Apply through airline or travel agent", "96-hour transit visa is free with Emirates"]
  },
  {
    country: "Indonesia (Bali)", flag: "🇮🇩", visaType: "Visa on Arrival",
    duration: "30 days", cost: "500,000 IDR (~₹2,700)", processingTime: "At airport",
    requirements: ["Passport valid 6 months", "Return ticket", "Blank passport pages"],
    tips: ["VoA is extendable for another 30 days", "Pay in IDR for better rate", "E-VoA available online — skip the queue"]
  },
  {
    country: "Malaysia", flag: "🇲🇾", visaType: "eVisa",
    duration: "30 days", cost: "₹1,500 - ₹2,500", processingTime: "2-3 working days",
    requirements: ["Passport valid 6 months", "Return ticket", "Hotel booking", "Bank statement", "Passport-size photo"],
    tips: ["eNTRI (electronic travel registration) for shorter stays", "Very fast processing", "Print eVisa before travel"]
  },
  {
    country: "Sri Lanka", flag: "🇱🇰", visaType: "eVisa",
    duration: "30 days", cost: "Free (ETA)", processingTime: "24-48 hours",
    requirements: ["Valid passport", "Return ticket", "Proof of funds"],
    tips: ["Currently free ETA for Indian nationals", "Apply at eta.gov.lk", "Very straightforward process"]
  },
  {
    country: "Nepal", flag: "🇳🇵", visaType: "Visa Free",
    duration: "Unlimited", cost: "Free", processingTime: "Instant",
    requirements: ["Valid Indian passport or voter ID", "No visa needed for Indians"],
    tips: ["Indians can enter with just voter ID", "No visa stamp needed", "Direct flights from many Indian cities"]
  },
  {
    country: "Japan", flag: "🇯🇵", visaType: "Sticker Visa",
    duration: "15-90 days", cost: "Free (no fee)", processingTime: "5-7 working days",
    requirements: ["Passport valid 6 months", "Bank statements (6 months)", "ITR for 3 years", "Employment letter", "Detailed itinerary", "Hotel bookings"],
    tips: ["Japan visa is free but documentation heavy", "Strong financials help", "Apply through VFS Global", "Cherry blossom season = apply early"]
  },
];

const visaTypeColors: Record<VisaType, string> = {
  "Visa Free": "bg-deal-good text-primary-foreground",
  "Visa on Arrival": "bg-deal-warm text-primary-foreground",
  "eVisa": "bg-primary text-primary-foreground",
  "Sticker Visa": "bg-deal-hot text-primary-foreground",
};

const VisaHub = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<VisaType | null>(null);

  const filtered = countries.filter((c) => {
    const matchSearch = c.country.toLowerCase().includes(search.toLowerCase());
    const matchType = !typeFilter || c.visaType === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-8 container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-2">
          🌍 Visa & Travel Hub
        </h1>
        <p className="text-muted-foreground mb-8">
          Everything Indian travellers need to know — visa requirements, costs & pro tips.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["Visa Free", "Visa on Arrival", "eVisa", "Sticker Visa"] as VisaType[]).map((t) => (
              <Button
                key={t}
                size="sm"
                variant={typeFilter === t ? "default" : "outline"}
                onClick={() => setTypeFilter(typeFilter === t ? null : t)}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="border-border bg-card overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{country.flag}</span>
                      <CardTitle className="font-heading text-xl">{country.country}</CardTitle>
                    </div>
                    <Badge className={visaTypeColors[country.visaType]}>
                      {country.visaType}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm font-medium text-foreground">{country.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Cost</p>
                        <p className="text-sm font-medium text-foreground">{country.cost}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Processing</p>
                        <p className="text-sm font-medium text-foreground">{country.processingTime}</p>
                      </div>
                    </div>
                  </div>

                  <Tabs defaultValue="requirements" className="w-full">
                    <TabsList className="w-full">
                      <TabsTrigger value="requirements" className="flex-1 text-xs">Requirements</TabsTrigger>
                      <TabsTrigger value="tips" className="flex-1 text-xs">Pro Tips</TabsTrigger>
                    </TabsList>
                    <TabsContent value="requirements" className="mt-3">
                      <ul className="space-y-1.5">
                        {country.requirements.map((req, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="tips" className="mt-3">
                      <ul className="space-y-1.5">
                        {country.tips.map((tip, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <AlertTriangle className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No countries found matching your search.</p>
          </div>
        )}

        <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border text-center">
          <p className="text-sm text-muted-foreground">
            ⚠️ Visa rules change frequently. Always verify with the official embassy/consulate before travel.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisaHub;
