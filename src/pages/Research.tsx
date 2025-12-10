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
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solution</h1>
            <p className="text-xl text-muted-foreground">
              ErgoChef+: An AI-Enhanced Kitchen Ergonomic Assistant designed to 
              make cooking easier, safer, and more efficient.
            </p>
          </div>
        </div>
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
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Interactive Prototype</p>
                <Button asChild size="lg">
                  <a href="https://ergo-chef-health.lovable.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Try ErgoChef+ Prototype
                  </a>
                </Button>
              </div>
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
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>{benefit}</span>
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
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 font-bold text-lg">Busy Parents</div>
                <p className="text-sm text-muted-foreground">
                  "ErgoChef+ reminds me to gather all ingredients first, saving me trips 
                  across the kitchen when I'm in a rush."
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 font-bold text-lg">Older Adults</div>
                <p className="text-sm text-muted-foreground">
                  "It suggests where to place my heavy pots so I don't have to bend 
                  down, which helps my back immensely."
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 font-bold text-lg">Professional Chefs</div>
                <p className="text-sm text-muted-foreground">
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
