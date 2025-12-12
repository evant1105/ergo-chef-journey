import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, ExternalLink, Download, Play, Folder } from "lucide-react";

export default function Resources() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Downloads & Links</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access our project documentation, video prototype, and additional 
              materials showcasing the ErgoChef+ design journey.
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Main Resources */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Folder className="h-4 w-4" /> Project Deliverables
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Poster */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-1.5 bg-gradient-to-r from-primary to-primary/60" />
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Project Poster</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our comprehensive project poster summarizing the entire design 
                  journey, key findings, and final solution in a visual format.
                </p>
                <div className="bg-muted/50 rounded-xl mb-6 overflow-hidden shadow-inner">
                  <img
                    src="/ErgoChef-Poster.jpg"
                    alt="ErgoChef Project Poster"
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <Button className="w-full shadow-md hover:shadow-lg transition-all duration-300" variant="outline" asChild>
                  <a href="/ErgoChef-Poster.pdf" download="ErgoChef-Poster.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download Poster (PDF)
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Video Prototype */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-1.5 bg-gradient-to-r from-accent to-accent/60" />
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                  <Video className="h-7 w-7 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Video Prototype</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Watch our video prototype demonstrating the ErgoChef+ system 
                  in action, including user interactions and key features.
                </p>
                <div className="rounded-xl mb-6 overflow-hidden aspect-video shadow-inner">
                  <iframe
                    src="https://www.youtube.com/embed/-QOms8I-tbM"
                    className="w-full h-full"
                    title="ErgoChef Video Prototype"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <Button className="w-full shadow-md hover:shadow-lg transition-all duration-300" variant="outline" asChild>
                  <a href="https://www.youtube.com/watch?v=-QOms8I-tbM" target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-4 w-4" />
                    Watch on YouTube
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Prototype */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Try It Now</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interactive Prototype</h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Experience the ErgoChef+ system firsthand through our interactive 
              web prototype built with Lovable.
            </p>
            <Card className="p-8 border-none shadow-xl">
              <div className="rounded-xl mb-8 overflow-hidden shadow-lg">
                <img
                  src="/prototype-thumbnail.png"
                  alt="ErgoChef+ Interactive Prototype"
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 group">
                <a href="https://ergo-chef-health.lovable.app/" target="_blank" rel="noopener noreferrer">
                  Launch Prototype 
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
