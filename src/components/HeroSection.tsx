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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Social Proof Bar */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-white/90 font-medium">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-white/90 font-medium">3000+ Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-white/90 font-medium">13+ Years</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Unlock Your
              <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                Executive Presence
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              World-class accent coaching for global leaders. Transform your communication, 
              elevate your career, and command respect in every room.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "90-Day Guaranteed Results",
                "1-on-1 Executive Sessions", 
                "Custom Leadership Program",
                "Lifetime Speaking Confidence"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center">
                    <Trophy className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="premium-button-gold text-xl px-12 py-5 animate-premium-glow group">
                Apply for VIP Consultation
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <div className="text-white/80 text-sm">
                <div className="font-semibold">🔥 Only 3 spots available this quarter</div>
                <div>Investment starts at $4,997</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional Executive Coach Andy"
                className="w-full h-[600px] object-cover rounded-3xl shadow-luxury"
              />
              <div className="absolute -bottom-6 -left-6 premium-card bg-white">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">13+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 premium-card bg-white">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3000+</div>
                  <div className="text-sm text-muted-foreground">Executives Coached</div>
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