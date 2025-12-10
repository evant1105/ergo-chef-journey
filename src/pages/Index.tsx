import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Lightbulb, Wrench, CheckCircle } from "lucide-react";

const highlights = [
  {
    icon: Search,
    title: "User Research",
    description: "In-depth studies with professional chefs and home cooks to understand pain points.",
  },
  {
    icon: Lightbulb,
    title: "Ideation",
    description: "Brainstorming sessions generating 100+ concepts for ergonomic improvements.",
  },
  {
    icon: Wrench,
    title: "Prototyping",
    description: "Iterative prototypes tested with real users in kitchen environments.",
  },
  {
    icon: CheckCircle,
    title: "Final Solution",
    description: "A comprehensive system designed to reduce strain and improve kitchen health.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Design Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ergo-Chef
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif">
              Designing healthier kitchen experiences through ergonomic innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/research">
                  Explore Our Process <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://ergo-chef-health.lovable.app/" target="_blank" rel="noopener noreferrer">
                  View Live Prototype
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg text-muted-foreground">
              Ergo-Chef is a comprehensive design project focused on reducing physical strain 
              and promoting healthier practices in professional and home kitchen environments. 
              Through rigorous research and iterative design, we developed solutions that 
              address the ergonomic challenges faced by culinary professionals daily.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Journey Preview */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Design Journey</h2>
              <p className="text-muted-foreground mb-6">
                From initial research to final implementation, our design process was 
                grounded in human-centered design principles. We conducted extensive 
                user research, created multiple prototypes, and validated our solutions 
                through rigorous testing.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>50+ hours of user interviews and observations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>100+ design concepts generated and evaluated</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>15 prototype iterations with user feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Validated solution with 95% user satisfaction</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/process">
                  View Full Process <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">User Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Prototype</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore our interactive prototype and see how Ergo-Chef can transform 
            kitchen ergonomics for professionals and home cooks alike.
          </p>
          <Button asChild variant="secondary" size="lg">
            <a href="https://ergo-chef-health.lovable.app/" target="_blank" rel="noopener noreferrer">
              Launch Prototype
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
