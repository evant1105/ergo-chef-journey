import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowUpDown, Timer, Smartphone, ExternalLink } from "lucide-react";

const features = [
  {
    icon: ArrowUpDown,
    title: "Adjustable Workstations",
    description: "Height-adjustable counter systems that adapt to any user, reducing back strain and promoting proper posture.",
  },
  {
    icon: Timer,
    title: "Movement Reminders",
    description: "Smart system that prompts users to change positions and take micro-breaks throughout cooking sessions.",
  },
  {
    icon: Smartphone,
    title: "Digital Health Companion",
    description: "Mobile app providing personalized ergonomic guidance, exercises, and posture tracking.",
  },
];

const benefits = [
  "Reduces lower back strain by up to 60%",
  "Decreases repetitive motion injuries",
  "Increases cooking comfort and enjoyment",
  "Extends professional career longevity",
  "Adaptable to any kitchen environment",
  "Easy integration with existing setups",
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
              A comprehensive ergonomic system designed to transform kitchen 
              health for professionals and home cooks alike.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">The Ergo-Chef System</h2>
              <p className="text-muted-foreground mb-6">
                Ergo-Chef is an integrated solution combining physical adjustments, 
                smart technology, and behavioral guidance to create healthier kitchen 
                experiences. Our approach addresses the root causes of kitchen-related 
                strain through three interconnected components.
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
                    Try Live Demo
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

      {/* Results */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Validation Results</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-sm text-muted-foreground">User Satisfaction</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <p className="text-sm text-muted-foreground">Pain Reduction</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-sm text-muted-foreground">Productivity Increase</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">8/10</div>
                <p className="text-sm text-muted-foreground">Ease of Use Score</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">What Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "After 20 years in professional kitchens, I thought pain was just 
                  part of the job. Ergo-Chef changed everything. I can cook longer 
                  with less discomfort."
                </p>
                <p className="text-sm opacity-80">— Executive Chef, Test Participant</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "The movement reminders seem simple, but they've made a huge 
                  difference. I no longer end my cooking sessions feeling exhausted."
                </p>
                <p className="text-sm opacity-80">— Home Cook, Test Participant</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
