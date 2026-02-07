import FloatingHearts from '@/components/FloatingHearts';
import HeroSection from '@/components/HeroSection';
import ReasonsSection from '@/components/ReasonsSection';
import PhotoGallery from '@/components/PhotoGallery';
import LoveLetter from '@/components/LoveLetter';
import FinalQuestion from '@/components/FinalQuestion';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <ReasonsSection />
        <PhotoGallery />
        <LoveLetter />
        <FinalQuestion />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
