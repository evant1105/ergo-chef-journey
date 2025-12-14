import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Lightbulb, Wrench, CheckCircle, Sparkles } from "lucide-react";

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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 min-h-[80vh] flex items-center">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              HCI 1-1 Design Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text animate-fade-in">
              ErgoChef+
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-serif animate-fade-in">
              AI-Powered Cooking with Posture Care
            </p>
            
            {/* Buttons removed from here */}
            
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">About The Project</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cooking is a fundamental task that often involves repetitive actions like chopping, 
              stirring, and bending, leading to physical strain and long-term musculoskeletal problems. 
              ErgoChef+ aims to address these ergonomic issues by combining artificial intelligence 
              with Computer Vision technology to provide a smarter, safer, and more comfortable cooking experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Journey Preview */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Design Journey</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Our team followed a rigorous human-computer interaction design process. 
                From identifying the limitations of current smart kitchen technologies 
                to developing an AI-driven solution that respects user privacy and 
                workflow preferences.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Targeted busy adults, seniors, and professionals",
                  "Identified key pain points: standing, bending, and repetition",
                  "Prioritized non-intrusive, camera-based sensing over wearables",
                  "Developed real-time feedback systems for posture correction",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="group shadow-md hover:shadow-lg transition-all duration-300">
                <Link to="/process">
                  View Full Process 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-10 aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-primary mb-4">Passive</div>
                  <p className="text-muted-foreground text-xl mb-2">Sensing Technology</p>
                  <p className="text-sm text-muted-foreground">No wearables required</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}