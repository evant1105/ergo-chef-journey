import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  FileText, 
  Video, 
  ExternalLink, 
  Download, 
  Play, 
  Folder, 
  Eye, 
  CheckSquare, 
  Rocket
} from "lucide-react";

export default function Resources() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="container relative z-10 animate-in fade-in zoom-in duration-700">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Downloads & Links</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access our project documentation, video prototype, and additional 
              materials showcasing the ErgoChef+ design journey.
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-in fade-in duration-1000" />
      </section>

      {/* Main Resources */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Folder className="h-4 w-4" /> Project Deliverables
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Poster Card */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-in slide-in-from-bottom-8 fade-in duration-700 fill-mode-backwards" style={{ animationDelay: '0ms' }}>
              <div className="h-1.5 bg-gradient-to-r from-primary to-primary/60" />
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Project Poster</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  Our comprehensive project poster summarizing the entire design 
                  journey, key findings, and final solution.
                </p>
                
                {/* Poster Preview Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="bg-muted/50 rounded-xl mb-6 overflow-hidden shadow-inner cursor-pointer relative group/image">
                      <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors flex items-center justify-center">
                        <Eye className="text-white opacity-0 group-hover/image:opacity-100 transition-opacity drop-shadow-md" />
                      </div>
                      <img
                        src="/ErgoChef-Poster.jpg"
                        alt="ErgoChef Project Poster"
                        className="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-[90vh] p-0 overflow-hidden bg-black/90 border-none">
                    <img
                      src="/ErgoChef-Poster.jpg"
                      alt="ErgoChef Project Poster Full"
                      className="w-full h-full object-contain"
                    />
                  </DialogContent>
                </Dialog>

                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1">
                        <Eye className="mr-2 h-4 w-4" /> Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[90vh] p-0 overflow-hidden bg-black/90 border-none">
                      <img
                        src="/ErgoChef-Poster.jpg"
                        alt="ErgoChef Project Poster Full"
                        className="w-full h-full object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                  <Button className="flex-1 shadow-sm hover:shadow-md transition-all" asChild>
                    <a href="/ErgoChef-Poster.pdf" download="ErgoChef-Poster.pdf">
                      <Download className="mr-2 h-4 w-4" /> PDF
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Video Prototype Card */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-in slide-in-from-bottom-8 fade-in duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
              <div className="h-1.5 bg-gradient-to-r from-primary to-primary/60" />
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Video className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Video Prototype</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  Watch our video prototype demonstrating the ErgoChef+ system 
                  in action, including user interactions.
                </p>
                
                {/* Video Facade */}
                <div className="rounded-xl mb-4 overflow-hidden aspect-video shadow-inner bg-black relative">
                  {!isVideoPlaying ? (
                    <div className="w-full h-full relative cursor-pointer group/video" onClick={() => setIsVideoPlaying(true)}>
                      <img 
                        src="https://img.youtube.com/vi/-QOms8I-tbM/maxresdefault.jpg" 
                        alt="Video Thumbnail" 
                        className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform shadow-lg">
                          <Play className="h-8 w-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src="https://www.youtube.com/embed/-QOms8I-tbM?autoplay=1"
                      className="w-full h-full"
                      title="ErgoChef Video Prototype"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>

                {/* Key Moments */}
                <div className="bg-muted/30 rounded-lg p-3 text-sm">
                  <span className="font-semibold text-primary block mb-2 text-xs uppercase tracking-wider">Key Moments</span>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex justify-between"><span>App Navigation & Recipes</span> <span className="font-mono text-xs">0:00</span></li>
                    <li className="flex justify-between"><span>Smart Chat Interaction</span> <span className="font-mono text-xs">0:15</span></li>
                    <li className="flex justify-between"><span>Posture Analysis Demo</span> <span className="font-mono text-xs">0:35</span></li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Prototype */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 animate-in slide-in-from-bottom-4 fade-in duration-700">
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Try It Now</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Prototype</h2>
              <p className="text-muted-foreground text-lg">
                Experience the ErgoChef+ system firsthand through our interactive 
                web prototype built with Lovable.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-start">
              {/* Prototype Image */}
              <div className="md:col-span-3">
                <Card className="border-none shadow-xl overflow-hidden animate-in slide-in-from-left-8 fade-in duration-700">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10" />
                    <img
                      src="/prototype-thumbnail.png"
                      alt="ErgoChef+ Interactive Prototype"
                      className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Card>
              </div>

              {/* Prototype Actions & Missions */}
              <div className="md:col-span-2 space-y-6 animate-in slide-in-from-right-8 fade-in duration-700">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      Things to Try
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckSquare className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Ask the AI assistant for a healthy recipe idea.
                      </li>
                      <li className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckSquare className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Start a "Cooking Session" to see the timer.
                      </li>
                      <li className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckSquare className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Use the camera to check your standing posture.
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Button asChild size="lg" className="w-full shadow-lg hover:shadow-xl transition-all duration-300 group text-lg h-14">
                  <a href="https://ergo-chef-health.lovable.app/" target="_blank" rel="noopener noreferrer">
                    Launch Prototype 
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 animate-in fade-in zoom-in duration-500 delay-1000">
        <Button asChild size="lg" className="rounded-full shadow-2xl h-14 w-14 p-0 bg-primary hover:bg-primary/90">
          <a href="https://ergo-chef-health.lovable.app/" target="_blank" rel="noopener noreferrer" aria-label="Launch Prototype">
            <Rocket className="h-6 w-6 text-white" />
          </a>
        </Button>
      </div>
    </Layout>
  );
}