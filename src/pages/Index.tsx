import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import TransformationStories from "@/components/TransformationStories";
import PremiumPrograms from "@/components/PremiumPrograms";
import FAQSection from "@/components/FAQSection";
import VIPConsultationForm from "@/components/VIPConsultationForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AuthoritySection />
      <TransformationStories />
      <PremiumPrograms />
      <FAQSection />
      <VIPConsultationForm />
    </div>
  );
};

export default Index;
