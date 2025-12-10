import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, PenTool, FlaskConical, Users, RefreshCw, CheckCircle2, Search, MonitorPlay } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    phase: "Weeks 1-2",
    title: "Discovery & Planning",
    duration: "2 weeks",
    description: "Defining the problem space and planning the research approach to identify ergonomic challenges and AI opportunities.",
    activities: [
      "Defining realistic human-centered design challenges",
      "Identifying AI opportunities for ergonomics in daily life",
      "Developing an initial design research plan",
      "Exploring AI applications for ergonomic challenges",
    ],
  },
  {
    icon: Search,
    phase: "Week 3",
    title: "Research & Analysis",
    duration: "1 week",
    description: "Conducting user research, analyzing findings, and identifying key themes to guide task design.",
    activities: [
      "Conducting design research sessions",
      "Reflecting on first participant interactions",
      "Refining research plans based on initial findings",
      "Synthesizing findings into thematic insights",
    ],
  },
  {
    icon: PenTool,
    phase: "Week 4",
    title: "Ideation & Task Design",
    duration: "1 week",
    description: "Developing core user tasks and generating diverse initial design concepts.",
    activities: [
      "Developing a set of tasks to explore in designs",
      "Generating three distinct initial design ideas",
      "Aligning designs with identified user tasks",
      "Brainstorming AI-driven ergonomic solutions",
    ],
  },
  {
    icon: Users,
    phase: "Week 5",
    title: "Design Consolidation",
    duration: "1 week",
    description: "Synthesizing research, ideation, and sketches into a cohesive design narrative.",
    activities: [
      "Consolidating ideation, research, and task development",
      "Creating storyboards for the proposed solution",
      "Communicating the full design process",
      "Preparing Milestone 2 presentation",
    ],
  },
  {
    icon: FlaskConical,
    phase: "Week 6",
    title: "Prototyping & Evaluation",
    duration: "1 week",
    description: "Building the initial paper prototype and conducting heuristic evaluations to identify early usability issues.",
    activities: [
      "Developing initial paper prototypes",
      "Testing system support for primary tasks",
      "Conducting usability heuristic evaluations",
      "Assessing against ergonomic design principles",
    ],
  },
  {
    icon: RefreshCw,
    phase: "Week 7",
    title: "Iteration & Digitalization",
    duration: "1 week",
    description: "Refining the design based on evaluations, conducting usability testing, and creating high-fidelity digital mockups.",
    activities: [
      "Documenting design revisions from heuristic feedback",
      "Conducting 3 usability tests with real participants",
      "Finalizing paper prototype based on user feedback",
      "Translating prototype into a digital mockup",
    ],
  },
  {
    icon: MonitorPlay,
    phase: "Week 8",
    title: "Process Presentation",
    duration: "1 week",
    description: "Presenting the iterative journey from paper to digital, highlighting user-centered design decisions.",
    activities: [
      "Demonstrating design evolution and iteration",
      "Showcasing AI and ergonomic integration",
      "Presenting application of user-centered design",
      "Highlighting heuristic and usability testing results",
    ],
  },
  {
    icon: CheckCircle2,
    phase: "Weeks 9-10",
    title: "Final Delivery & Showcase",
    duration: "2 weeks",
    description: "Finalizing the project portfolio website and creating a compelling video showcase of the solution.",
    activities: [
      "Publishing professional project website/portfolio",
      "Creating a 2-minute creative concept video",
      "Visual and verbal project summary",
      "Communicating design impact to stakeholders",
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
              A comprehensive look at our 10-week human-centered design journey, 
              from initial discovery to final digital implementation.
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
                <div className="text-4xl font-bold text-primary mb-2">10</div>
                <p className="text-muted-foreground">Weeks Total</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <p className="text-muted-foreground">Design Phases</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <p className="text-muted-foreground">Major Iterations</p>
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
                          <span className="text-sm text-muted-foreground font-semibold">{step.phase}</span>
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
