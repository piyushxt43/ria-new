import HeroSection from "@/components/HeroSection";
import AwardsSection from "@/components/AwardsSection";
import AIFeaturesPreview from "@/components/AIFeaturesPreview";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ScienceSection from "@/components/ScienceSection";
import FAQSection from "@/components/FAQSection";
import CommunitySection from "@/components/CommunitySection";
import BottomCTASection from "@/components/BottomCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/60 to-slate-100">
      <HeroSection />
      <AwardsSection />
      <AIFeaturesPreview />
      <FeaturesSection />
      <AboutSection />
      <ScienceSection />
      <FAQSection />
      <CommunitySection />
      <BottomCTASection />
      <Footer />
    </div>
  );
}
