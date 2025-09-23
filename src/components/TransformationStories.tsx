import { Quote, Star, TrendingUp, Briefcase } from "lucide-react";

const TransformationStories = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Marketing, Tech Fortune 500",
      company: "Leading Cloud Platform",
      result: "300% increase in presentation confidence",
      quote: "Andy didn't just improve my accent - he transformed how I command boardrooms. I went from avoiding presentations to leading global strategy meetings with C-suite executives.",
      transformation: "From nervous presenter to executive speaker",
      timeframe: "90 days"
    },
    {
      name: "Raj Patel", 
      role: "Senior Director, Investment Banking",
      company: "Wall Street Firm",
      result: "Promoted to Managing Director",
      quote: "The ROI was immediate. Within 6 months of working with Andy, I secured the MD promotion I'd been pursuing for 3 years. My communication clarity gave me the edge.",
      transformation: "From overlooked to promoted",
      timeframe: "6 months"
    },
    {
      name: "Maria Rodriguez",
      role: "Startup Founder & CEO", 
      company: "Series B Fintech",
      result: "$15M funding round success",
      quote: "Investor meetings went from painful to powerful. Andy's coaching helped me articulate our vision with confidence that secured our Series B round.",
      transformation: "From founder to funded leader",
      timeframe: "4 months"
    }
  ];

  return (
    <section className="py-16 lg:py-24 subtle-gradient">
      <div className="container-width section-padding">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury mb-4 lg:mb-6">
            Executive Success Stories
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leaders transformed their careers through world-class accent coaching
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="premium-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="gold-gradient w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                <Quote className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-3 lg:mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-4 lg:mb-6 leading-relaxed italic text-sm lg:text-base">
                "{testimonial.quote}"
              </blockquote>

              {/* Results */}
              <div className="border-l-4 border-accent pl-3 lg:pl-4 mb-4 lg:mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-accent" />
                  <span className="font-semibold text-accent text-sm lg:text-base">{testimonial.result}</span>
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">
                  {testimonial.transformation} • {testimonial.timeframe}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 luxury-gradient rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-luxury text-sm lg:text-base">{testimonial.name}</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="premium-button-gold text-base lg:text-lg px-8 lg:px-10 py-3 lg:py-4 w-full sm:w-auto">
            Join These Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationStories;