import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Lightbulb, Wrench, CheckCircle } from "lucide-react";

const highlights = [
  {
    icon: Search,
    title: "User Research",
    description: "In-depth surveys and interviews with home cooks and professionals.",
  },
  {
    icon: Lightbulb,
    title: "AI Integration",
    description: "Leveraging computer vision to detect and correct inefficient postures.",
  },
  {
    icon: Wrench,
    title: "Prototyping",
    description: "Developing camera-focused designs for non-intrusive monitoring.",
  },
  {
    icon: CheckCircle,
    title: "Final Solution",
    description: "An AI-Enhanced Kitchen Assistant for health and productivity.",
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
              CSC3024 Design Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              ErgoChef+
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif">
              AI-Powered Cooking with Posture Care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/research">
                  Explore Our Process <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/solution">
                  View Solution
                </Link>
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
              Cooking is a fundamental task that often involves repetitive actions like chopping, 
              stirring, and bending, leading to physical strain and long-term musculoskeletal problems. 
              ErgoChef+ aims to address these ergonomic issues by combining artificial intelligence 
              with IoT technology to provide a smarter, safer, and more comfortable cooking experience.
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
                Our team followed a rigorous human-computer interaction design process. 
                From identifying the limitations of current smart kitchen technologies 
                to developing an AI-driven solution that respects user privacy and 
                workflow preferences.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Targeted busy adults, seniors, and professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Identified key pain points: standing, bending, and repetition</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Prioritized non-intrusive, camera-based sensing over wearables</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Developed real-time feedback systems for posture correction</span>
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
                <div className="text-5xl font-bold text-primary mb-2">Passive</div>
                <p className="text-muted-foreground text-lg">Sensing Technology</p>
                <p className="text-sm text-muted-foreground mt-4">No wearables required</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
