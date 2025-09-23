import { Check, Crown, Zap, Shield, Calendar } from "lucide-react";

const PremiumPrograms = () => {
  const programs = [
    {
      name: "Executive",
      price: "$4,997",
      period: "3-Month Program",
      description: "Perfect for senior professionals ready to elevate their executive presence",
      features: [
        "12 One-on-One Sessions (60 min each)",
        "Custom Communication Assessment",
        "Personalized Accent Refinement Plan", 
        "Professional Recording Analysis",
        "Email & Text Support",
        "Progress Tracking Dashboard",
        "30-Day Money-Back Guarantee"
      ],
      popular: false,
      icon: Crown
    },
    {
      name: "VIP Platinum",
      price: "$9,997", 
      period: "6-Month Intensive",
      description: "Ultimate transformation for C-suite executives and high-stakes professionals",
      features: [
        "24 One-on-One Sessions (90 min each)",
        "Complete Communication Overhaul",
        "Media Training & Interview Prep",
        "Presentation Coaching Included",
        "24/7 WhatsApp Access to Andy",
        "Quarterly Progress Reviews",
        "Lifetime Alumni Support",
        "100% Transformation Guarantee"
      ],
      popular: true,
      icon: Zap
    },
    {
      name: "Corporate",
      price: "Custom",
      period: "Team Programs",
      description: "Comprehensive solutions for organizations investing in leadership communication",
      features: [
        "Multi-Executive Group Sessions",
        "Custom Organizational Assessment", 
        "Leadership Communication Workshop",
        "Team Presentation Training",
        "Ongoing Support Package",
        "ROI Measurement & Reporting",
        "Flexible Scheduling Options"
      ],
      popular: false,
      icon: Shield
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury mb-6">
            Choose Your Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Premium coaching programs designed for serious professionals who demand results
          </p>
          
          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 border border-red-200 rounded-full text-red-700 font-medium">
            <Calendar className="w-4 h-4" />
            Only 3 Executive openings available this quarter
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={index}
                className={`premium-card relative ${
                  program.popular 
                    ? 'ring-2 ring-accent shadow-gold transform scale-105' 
                    : 'hover:shadow-luxury'
                } transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="gold-gradient px-6 py-2 rounded-full text-white font-bold text-sm shadow-gold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="luxury-gradient w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-luxury mb-2">{program.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{program.price}</div>
                  <div className="text-muted-foreground mb-4">{program.period}</div>
                  <p className="text-foreground">{program.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    program.popular
                      ? 'premium-button-gold'
                      : 'premium-button-primary'
                  }`}
                >
                  {program.name === 'Corporate' ? 'Get Custom Quote' : 'Apply Now'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Section */}
        <div className="text-center premium-card bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20">
          <div className="gold-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-luxury mb-4">100% Satisfaction Guarantee</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you don't see measurable improvement in your communication confidence within 30 days, 
            we'll refund your investment completely. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumPrograms;