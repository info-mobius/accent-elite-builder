import { ArrowRight, Star, Users, Clock, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-coach.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      
      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-20">
          {/* Left Content */}
          <div className="animate-fade-in text-center lg:text-left">
            {/* Social Proof Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 lg:w-5 lg:h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-white/90 font-medium text-sm lg:text-base">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                <span className="text-white/90 font-medium text-sm lg:text-base">3000+ Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                <span className="text-white/90 font-medium text-sm lg:text-base">13+ Years</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 lg:mb-6">
              Unlock Your
              <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                Executive Presence
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
              World-class accent coaching for global leaders. Transform your communication, 
              elevate your career, and command respect in every room.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-8 lg:mb-10 max-w-lg mx-auto lg:max-w-none lg:mx-0">
              {[
                "90-Day Guaranteed Results",
                "1-on-1 Executive Sessions", 
                "Custom Leadership Program",
                "Lifetime Speaking Confidence"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                  </div>
                  <span className="text-white/90 font-medium text-sm lg:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <button className="premium-button-gold text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-5 animate-premium-glow group w-full sm:w-auto">
                Apply for VIP Consultation
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <div className="text-white/80 text-xs lg:text-sm text-center lg:text-left">
                <div className="font-semibold">🔥 Only 3 spots available this quarter</div>
                <div>Investment starts at $4,997</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-2 animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <img 
                src={heroImage} 
                alt="Professional Executive Coach Andy"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl lg:rounded-3xl shadow-luxury"
              />
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 premium-card bg-white">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">13+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 premium-card bg-white">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">3000+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Executives Coached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;