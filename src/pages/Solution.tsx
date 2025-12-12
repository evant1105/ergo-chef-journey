import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Camera, MessageSquare, ChefHat, ExternalLink } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI-Powered Posture Tracking",
    description: "Uses your device's camera and computer vision to detect inefficient movements (like bending or reaching) in real-time without requiring wearables.",
  },
  {
    icon: MessageSquare,
    title: "Smart Kitchen Assistant",
    description: "An intelligent chat interface that helps with ingredient substitutions, technique tips, and health advice while you cook.",
  },
  {
    icon: ChefHat,
    title: "Guided Cooking Sessions",
    description: "Step-by-step recipe walkthroughs with integrated timers and progress tracking to keep your workflow smooth and organized.",
  },
];

const benefits = [
  "Reduces physical strain and musculoskeletal risks",
  "Optimizes cooking workflow for efficiency",
  "Adapts to elderly, professionals, and home cooks",
  "Non-intrusive monitoring (no wearables)",
  "Promotes long-term healthy habits",
  "Enhances safety in the kitchen",
];

export default function Solution() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">The Final Product</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Solution</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ErgoChef+: An AI-Enhanced Kitchen Ergonomic Assistant designed to 
              make cooking easier, safer, and more efficient.
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Solution Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">The ErgoChef+ System</h2>
              <p className="text-muted-foreground mb-6">
                ErgoChef+ combines artificial intelligence with Computer Vision technology to create a 
                smart and comfortable cooking experience. Unlike traditional smart appliances 
                that focus on automation, ErgoChef+ addresses the root causes of physical strain.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300 group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-10 aspect-video flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6 text-lg">Interactive Prototype</p>
                  <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <a href="https://ergo-chef-health.lovable.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Try ErgoChef+ Prototype
                    </a>
                  </Button>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Key Benefits</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors group">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Adapted for Every User</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="mb-4 font-bold text-xl">Busy Parents</div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "ErgoChef+ reminds me to gather all ingredients first, saving me trips 
                  across the kitchen when I'm in a rush."
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="mb-4 font-bold text-xl">Older Adults</div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "It suggests where to place my heavy pots so I don't have to bend 
                  down, which helps my back immensely."
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="mb-4 font-bold text-xl">Professional Chefs</div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "The posture report showed me I was leaning too much. Correcting that 
                  has reduced my fatigue during long shifts."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}