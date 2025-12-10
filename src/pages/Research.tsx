import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, AlertTriangle, TrendingUp } from "lucide-react";

const insights = [
  {
    stat: "78%",
    label: "of chefs report chronic back pain",
  },
  {
    stat: "6-12",
    label: "hours standing daily in professional kitchens",
  },
  {
    stat: "65%",
    label: "experience repetitive strain injuries",
  },
  {
    stat: "3x",
    label: "higher injury rate than other professions",
  },
];

const personas = [
  {
    name: "Maria Chen",
    role: "Professional Chef",
    age: "42 years old",
    pain: "Chronic lower back pain from 20 years of standing",
    goal: "Continue her passion without physical limitations",
  },
  {
    name: "James Wilson",
    role: "Home Cook Enthusiast",
    age: "58 years old",
    pain: "Shoulder strain from poor kitchen ergonomics",
    goal: "Cook comfortably for his family without discomfort",
  },
];

export default function Research() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Problem & Research</h1>
            <p className="text-xl text-muted-foreground">
              Understanding the ergonomic challenges faced by culinary professionals 
              through comprehensive user research and analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Professional chefs and home cooks face significant physical strain due to 
                poorly designed kitchen environments. Extended periods of standing, 
                repetitive motions, and inadequate workstation heights contribute to 
                chronic pain and career-ending injuries.
              </p>
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6">
                  <p className="font-medium">
                    "I love cooking, but after 15 years, my body is paying the price. 
                    Some days, the pain is unbearable."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    — Research Participant, Executive Chef
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {insights.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Research Methods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>User Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Conducted 25+ in-depth interviews with professional chefs, 
                  home cooks, and occupational therapists to understand pain points 
                  and daily challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Contextual Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Observed users in their natural kitchen environments for 50+ hours, 
                  documenting postures, workflows, and moments of discomfort.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Analyzed industry injury reports, ergonomic studies, and survey 
                  data to quantify the scope and impact of kitchen-related injuries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">User Personas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {personas.map((persona, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-2 bg-primary" />
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                      {persona.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{persona.name}</h3>
                      <p className="text-muted-foreground">{persona.role}</p>
                      <p className="text-sm text-muted-foreground">{persona.age}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-destructive">Pain Point:</span>
                      <p className="text-sm text-muted-foreground">{persona.pain}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Goal:</span>
                      <p className="text-sm text-muted-foreground">{persona.goal}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Key Research Findings</h2>
          <div className="max-w-3xl space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">1. Workstation Height Mismatch</h3>
                <p className="text-muted-foreground">
                  Standard counter heights (36") don't accommodate the range of user heights, 
                  forcing taller and shorter users into uncomfortable postures.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">2. Lack of Movement Variety</h3>
                <p className="text-muted-foreground">
                  Users spend 90%+ of cooking time in static standing positions, 
                  with limited opportunities for postural variety or rest.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">3. Tool Design Limitations</h3>
                <p className="text-muted-foreground">
                  Many kitchen tools require excessive grip force or awkward wrist 
                  positions, contributing to repetitive strain injuries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
