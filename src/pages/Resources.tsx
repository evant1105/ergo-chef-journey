import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, ExternalLink, Download, Play } from "lucide-react";

export default function Resources() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-muted-foreground">
              Access our project documentation, video prototype, and additional 
              materials showcasing the Ergo-Chef design journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Resources */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Poster */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Project Poster</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our comprehensive project poster summarizing the entire design 
                  journey, key findings, and final solution in a visual format.
                </p>
                <div className="bg-muted rounded-lg p-8 mb-6 flex items-center justify-center min-h-[200px]">
                  <div className="text-center text-muted-foreground">
                    <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">PDF Preview</p>
                    <p className="text-xs">Coming Soon</p>
                  </div>
                </div>
                <Button className="w-full" variant="outline" disabled>
                  <Download className="mr-2 h-4 w-4" />
                  Download Poster (PDF)
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  * PDF will be available once uploaded
                </p>
              </CardContent>
            </Card>

            {/* Video Prototype */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-accent" />
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Video Prototype</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Watch our video prototype demonstrating the Ergo-Chef system 
                  in action, including user interactions and key features.
                </p>
                <div className="bg-muted rounded-lg p-8 mb-6 flex items-center justify-center min-h-[200px]">
                  <div className="text-center text-muted-foreground">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Video Preview</p>
                    <p className="text-xs">Coming Soon</p>
                  </div>
                </div>
                <Button className="w-full" variant="outline" disabled>
                  <Play className="mr-2 h-4 w-4" />
                  Watch Video
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  * Video will be embedded once available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Prototype */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Interactive Prototype</h2>
            <p className="text-muted-foreground mb-8">
              Experience the Ergo-Chef system firsthand through our interactive 
              web prototype built with Lovable.
            </p>
            <Card className="p-8">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-12 mb-6">
                <ExternalLink className="h-12 w-12 mx-auto text-primary mb-4" />
                <p className="font-semibold text-lg">ergo-chef-health.lovable.app</p>
              </div>
              <Button asChild size="lg">
                <a href="https://ergo-chef-health.lovable.app/" target="_blank" rel="noopener noreferrer">
                  Launch Prototype <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Additional Materials</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Research Summary</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed documentation of our user research findings and insights.
                </p>
                <Button variant="ghost" size="sm" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Design Specifications</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Technical specifications and design guidelines for implementation.
                </p>
                <Button variant="ghost" size="sm" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">User Testing Report</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete results from our user testing and validation sessions.
                </p>
                <Button variant="ghost" size="sm" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
