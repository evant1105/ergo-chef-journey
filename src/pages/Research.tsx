import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, AlertTriangle, TrendingUp } from "lucide-react";

const insights = [
  {
    stat: "High",
    label: "Risk of musculoskeletal disorders in kitchens",
  },
  {
    stat: "No",
    label: "Adoption of preventive habits by most home cooks",
  },
  {
    stat: "Passive",
    label: "Feedback preferred over constant alerts",
  },
  {
    stat: "Privacy",
    label: "Is a major concern for camera-based systems",
  },
];

const personas = [
  {
    name: "The Busy Professional",
    role: "Working Adult",
    age: "25-40 years old",
    pain: "Wants to finish cooking with speed rather than comfort; ignores strain.",
    goal: "Save time and effort while maintaining a healthy routine.",
  },
  {
    name: "The Senior Home Cook",
    role: "Elderly Individual",
    age: "65+ years old",
    pain: "Finds repetitive motions and bending down uncomfortable or difficult.",
    goal: "Cook independently without risking injury or severe fatigue.",
  },
  {
    name: "The Culinary Pro",
    role: "Professional Chef",
    age: "VARIES",
    pain: "Suffers from fatigue and wrist/back strain after long shifts.",
    goal: "Maximize efficiency and avoid long-term injury.",
  },
];

export default function Research() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Discovery Phase</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Design Research</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Investigating ergonomic challenges in cooking tasks to inform the 
              development of ErgoChef+.
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
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
                Traditional kitchen layouts like the "work triangle" reduce walking distance but 
                fail to address micro-repetitive actions. Our research confirms that repetitive 
                movements (chopping, stirring) and awkward postures (bending, reaching) lead 
                to physical strain. Most users lack ergonomic awareness and prioritize speed 
                over comfort.
              </p>
              <Card className="border-destructive/20 bg-destructive/5 shadow-md">
                <CardContent className="pt-6 italic">
                  <p className="font-medium">
                    "Tasks were something that they wanted to finish with speed rather 
                    than comfort, and breaks were rarely considered even when physical 
                    discomfort arose."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    — User Research Insight
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {insights.map((item, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
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
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Surveys & Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Gathered in-depth data from 6 participants representing young adults, 
                  students, and home cooks to understand daily cooking habits.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Task Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Analyzed specific cooking workflows to identify pain points like 
                  prolonged standing, lifting, and repetitive wrist motions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Literature Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Studied existing research on musculoskeletal disorders in kitchen 
                  workers and the influence of smart appliances on technology acceptance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Target Audience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-1.5 bg-gradient-to-r from-primary to-primary/60" />
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                      {persona.name.charAt(4)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{persona.name}</h3>
                      <p className="text-sm text-muted-foreground">{persona.role}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-medium text-destructive uppercase tracking-wider">Pain Point</span>
                      <p className="text-sm text-muted-foreground mt-1">{persona.pain}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">Goal</span>
                      <p className="text-sm text-muted-foreground mt-1">{persona.goal}</p>
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
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-primary">01</span>
                  <div>
                    <h3 className="font-semibold mb-2">Discomfort with Wearables</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Participants expressed concerns about heat, comfort, and hygiene regarding 
                      wearable sensors. They prefer non-contact or ambient sensing (cameras) 
                      integrated into the environment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-primary">02</span>
                  <div>
                    <h3 className="font-semibold mb-2">Low Ergonomic Awareness</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Most users rarely consider their posture. They view discomfort as a normal 
                      part of cooking and prioritize speed over health.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-primary">03</span>
                  <div>
                    <h3 className="font-semibold mb-2">Preference for Passive Feedback</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Users favor gentle visual or audio reminders (e.g., "Time to stretch") 
                      rather than constant, intrusive alerts that disrupt the cooking flow.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}