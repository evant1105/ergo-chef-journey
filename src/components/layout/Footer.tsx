import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(24,95%,53%)]">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold italic text-foreground">ErgoChef+</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-Powered Cooking with Posture Care.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/research" className="hover:text-foreground transition-colors">Research</Link></li>
              <li><Link to="/process" className="hover:text-foreground transition-colors">Design Process</Link></li>
              <li><Link to="/solution" className="hover:text-foreground transition-colors">Solution</Link></li>
              <li><Link to="/resources" className="hover:text-foreground transition-colors">Resources</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Live Prototype</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Experience our interactive prototype:
            </p>
            <a 
              href="https://ergo-chef-health.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Launch Prototype →
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ErgoChef+ Design Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
