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
    <section className="py-24 subtle-gradient">
      <div className="container-width section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury mb-6">
            Executive Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leaders transformed their careers through world-class accent coaching
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="premium-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="gold-gradient w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Results */}
              <div className="border-l-4 border-accent pl-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-accent">{testimonial.result}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.transformation} • {testimonial.timeframe}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-luxury">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="premium-button-gold text-lg px-10 py-4">
            Join These Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationStories;