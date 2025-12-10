import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, PenTool, FlaskConical, Users, RefreshCw, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    phase: "Phase 1",
    title: "Ideation",
    duration: "2 weeks",
    description: "Generated 100+ concepts through brainstorming sessions, sketching, and design thinking workshops.",
    activities: [
      "Brainstorming sessions with cross-functional team",
      "Competitive analysis of existing solutions",
      "Concept sketching and rapid visualization",
      "Affinity mapping to identify patterns",
    ],
  },
  {
    icon: PenTool,
    phase: "Phase 2",
    title: "Concept Development",
    duration: "3 weeks",
    description: "Refined top 10 concepts into detailed designs with specifications and feasibility assessments.",
    activities: [
      "Detailed design specifications",
      "Technical feasibility studies",
      "Cost-benefit analysis",
      "Stakeholder feedback sessions",
    ],
  },
  {
    icon: FlaskConical,
    phase: "Phase 3",
    title: "Prototyping",
    duration: "4 weeks",
    description: "Created low to high fidelity prototypes for testing and validation with target users.",
    activities: [
      "Paper prototypes and wireframes",
      "3D printed physical models",
      "Interactive digital prototypes",
      "Functional proof-of-concept builds",
    ],
  },
  {
    icon: Users,
    phase: "Phase 4",
    title: "User Testing",
    duration: "3 weeks",
    description: "Conducted extensive testing with professional chefs and home cooks in real kitchen environments.",
    activities: [
      "Usability testing sessions",
      "A/B testing of design variants",
      "Ergonomic assessments",
      "Feedback collection and synthesis",
    ],
  },
  {
    icon: RefreshCw,
    phase: "Phase 5",
    title: "Iteration",
    duration: "4 weeks",
    description: "Incorporated user feedback to refine designs through multiple iteration cycles.",
    activities: [
      "Design revisions based on feedback",
      "Re-testing with improved prototypes",
      "Performance optimization",
      "Final design validation",
    ],
  },
  {
    icon: CheckCircle2,
    phase: "Phase 6",
    title: "Final Design",
    duration: "2 weeks",
    description: "Finalized design specifications and documentation for implementation.",
    activities: [
      "Complete design documentation",
      "Implementation guidelines",
      "User manuals and guides",
      "Launch preparation",
    ],
  },
];

export default function Process() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Design Process</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive look at our human-centered design methodology, 
              from initial ideation to final implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">18</div>
                <p className="text-muted-foreground">Weeks Total</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <p className="text-muted-foreground">Design Phases</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground">Prototype Iterations</p>
              </CardContent>
            </Card>
          </div>

          {/* Process Timeline */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 p-6 bg-muted/50 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">{step.phase}</span>
                          <h3 className="font-semibold text-lg">{step.title}</h3>
                        </div>
                      </div>
                      <span className="text-sm text-primary font-medium">Duration: {step.duration}</span>
                    </div>
                    <CardContent className="md:w-2/3 pt-6">
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <h4 className="font-medium mb-2">Key Activities:</h4>
                      <ul className="space-y-1">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-1/6 -bottom-4 w-0.5 h-8 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Guiding Design Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Human-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every decision was guided by real user needs and validated through testing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Evidence-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Design choices backed by ergonomic research and user feedback data.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Iterative</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Continuous refinement through multiple cycles of testing and improvement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Inclusive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Designed to accommodate diverse body types, abilities, and use cases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
