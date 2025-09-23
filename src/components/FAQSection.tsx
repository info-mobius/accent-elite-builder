import { useState } from "react";
import { ChevronDown, Shield, Clock, DollarSign, Users, Award, Zap } from "lucide-react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Clock,
      question: "How quickly will I see results?",
      answer: "Most executives notice significant improvement within the first 2-3 sessions. Complete transformation typically occurs within 90 days with consistent practice. Our VIP clients often report breakthrough moments as early as week 2."
    },
    {
      icon: DollarSign,
      question: "What's the ROI of accent coaching for executives?",
      answer: "Our clients typically see career advancement within 6-12 months. Recent outcomes include promotions worth $50K-200K salary increases, successful funding rounds worth millions, and board appointments. The communication confidence alone is invaluable."
    },
    {
      icon: Users,
      question: "Who is this program designed for?",
      answer: "Senior professionals, executives, entrepreneurs, and high-achievers who need to communicate with authority. Perfect for C-suite leaders, VPs, directors, startup founders, and anyone whose career depends on executive presence."
    },
    {
      icon: Shield,
      question: "What if I don't see improvement?",
      answer: "We offer a 100% satisfaction guarantee. If you don't see measurable improvement in your communication confidence within 30 days, we'll refund your investment completely. However, this has never happened with committed clients."
    },
    {
      icon: Award,
      question: "What makes Andy different from other coaches?",
      answer: "13+ years of exclusive focus on executive communication, 3000+ professionals coached, and a proven system that combines accent refinement with executive presence training. Andy works only with serious professionals, not general audiences."
    },
    {
      icon: Zap,
      question: "Is this just accent reduction?",
      answer: "No - this is complete communication transformation. We work on accent clarity, executive presence, vocal authority, presentation skills, and commanding respect in high-stakes situations. It's leadership communication mastery."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury mb-4 lg:mb-6">
            Executive FAQ
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions from high-achieving professionals
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-3 lg:space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index}
                className="premium-card border hover:shadow-luxury transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex items-center justify-between text-left p-1"
                >
                  <div className="flex items-center gap-3 lg:gap-4 min-w-0 flex-1">
                    <div className="luxury-gradient w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-semibold text-luxury leading-tight">{faq.question}</h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 lg:w-6 lg:h-6 text-muted-foreground transition-transform flex-shrink-0 ${
                      isActive ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isActive && (
                  <div className="mt-4 lg:mt-6 pl-12 lg:pl-16 animate-fade-in">
                    <p className="text-sm lg:text-base text-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 lg:mt-12">
          <p className="text-muted-foreground mb-4 lg:mb-6 text-sm lg:text-base">Still have questions?</p>
          <button className="premium-button-primary w-full sm:w-auto">
            Book Your Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;