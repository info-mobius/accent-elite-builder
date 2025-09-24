import { Check, Crown, Zap, Shield, Calendar } from "lucide-react";

const PremiumPrograms = () => {
  const programs = [
    {
      name: "Starter Package",
      price: "$90",
      originalPrice: "$590",
      period: "per session",
      description: "Perfect for getting started",
      features: [
        "1-hour individual session",
        "Initial assessment",
        "Personalized feedback",
        "Practice materials",
        "Email support"
      ],
      popular: false,
      icon: Crown,
      buttonText: "Book Single Session"
    },
    {
      name: "Professional Package",
      price: "$550",
      originalPrice: "$1050", 
      period: "6 sessions ($92/session)",
      description: "Comprehensive training program",
      features: [
        "6 one-hour sessions",
        "Comprehensive assessment",
        "Custom learning plan",
        "Recording analysis",
        "Progress tracking",
        "24/7 chat support"
      ],
      popular: true,
      icon: Zap,
      buttonText: "Start Program"
    },
    {
      name: "Executive Package",
      price: "$2200",
      originalPrice: "$2700",
      period: "12 sessions ($183/session)",
      description: "Complete transformation program",
      features: [
        "12 one-hour sessions",
        "Detailed speech analysis",
        "Business presentation training",
        "Mock interview sessions",
        "Monthly progress reviews",
        "Priority scheduling",
        "Lifetime resource access"
      ],
      popular: false,
      icon: Shield,
      buttonText: "Transform Now"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury mb-4 lg:mb-6">
            Choose Your Transformation
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 lg:mb-8">
            Premium coaching programs designed for serious professionals who demand results
          </p>
          
          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-full text-red-700 dark:text-red-300 font-medium text-sm lg:text-base">
            <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
            Only 3 Executive openings available this quarter
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={index}
                className={`premium-card relative ${
                  program.popular 
                    ? 'ring-2 ring-accent shadow-gold lg:transform lg:scale-105' 
                    : 'hover:shadow-luxury'
                } transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {program.popular && (
                  <div className="absolute -top-3 lg:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="gold-gradient px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-white font-bold text-xs lg:text-sm shadow-gold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="luxury-gradient w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
                  <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>

                {/* Header */}
                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-luxury mb-2">{program.name}</h3>
                  <div className="mb-2">
                    {program.originalPrice && (
                      <div className="text-lg lg:text-xl text-muted-foreground line-through mb-1">
                        {program.originalPrice}
                      </div>
                    )}
                    <div className="text-3xl lg:text-4xl font-bold text-primary">{program.price}</div>
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground mb-3 lg:mb-4">{program.period}</div>
                  <p className="text-sm lg:text-base text-foreground leading-relaxed">{program.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-accent" />
                      </div>
                      <span className="text-sm lg:text-base text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-3 lg:py-4 px-4 lg:px-6 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 ${
                    program.popular
                      ? 'premium-button-gold'
                      : 'premium-button-primary'
                  }`}
                >
                  {program.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Section */}
        <div className="text-center premium-card bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20">
          <div className="gold-gradient w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
            <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-luxury mb-3 lg:mb-4">100% Satisfaction Guarantee</h3>
          <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you don't see measurable improvement in your communication confidence within 30 days, 
            we'll refund your investment completely. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumPrograms;