import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-muted-foreground">Made with Love</span>
          <Heart 
            className="text-primary animate-pulse-heart" 
            size={20} 
            fill="currentColor" 
          />
          <span className="text-muted-foreground">just for you</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
