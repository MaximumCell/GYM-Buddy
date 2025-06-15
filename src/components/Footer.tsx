import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded">
                <ZapIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono">
                Gym<span className="text-primary">Buddy</span>.ai
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GymBuddy.ai - All rights reserved
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/help"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Help
            </Link>
          </div>

          
        </div>
        {/* Footer with Dynamic Technology Logos */}
        <div className="flex items-center justify-center gap-4 px-3 py-2 mt-4 border-t border-border text-xs font-mono text-muted-foreground">
  <span className="mr-2">Built with:</span>
  <div className="flex items-center gap-2">
    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-200">
      <img src="/next.png" alt="Next.js Logo" className="w-4 h-4" />
      <span>Next.js</span>
    </a>
  </div>
  <div className="flex items-center gap-2">
    <a href="https://www.convex.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-200">
      <img src="/convex.png" alt="Convex Logo" className="w-4 h-4" />
      <span>Convex</span>
      <span className="italic text-muted-foreground">(Database)</span>
    </a>
  </div>
  <div className="flex items-center gap-2">
    <a href="https://clerk.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-200">
      <img src="/clerk.png" alt="Clerk Logo" className="w-4 h-4" />
      <span>Clerk</span>
      <span className="italic text-muted-foreground">(Auth)</span>
    </a>
  </div>
  <div className="flex items-center gap-2">
    <a href="https://www.vapi.ai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-200">
      <img src="https://hamming.ai/_next/image?url=/_next/static/media/vapi-logo-public.15b86191.png&w=128&q=75" alt="Vapi Logo" className="w-4 h-4" />
      <span>Vapi</span>
      <span className="italic text-muted-foreground">(AI Voice)</span>
    </a>
  </div>
  <div className="flex items-center gap-2">
    <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-200">
      <img src="https://svgl.app/library/shadcn-ui_dark.svg" alt="Shadcn UI Logo" className="w-4 h-4" />
      <span>Shadcn UI</span>
    </a>
  </div>
</div>
      </div>
    </footer>
  );
};
export default Footer;
