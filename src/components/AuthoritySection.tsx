import { Award, BookOpen, Users, Globe, TrendingUp, Star } from "lucide-react";

const AuthoritySection = () => {
  const companies = [
    "Google", "Microsoft", "Goldman Sachs", "McKinsey", "Deloitte", 
    "JP Morgan", "Tesla", "Uber", "Stripe", "Airbnb"
  ];

  return (
    <section className="py-16 lg:py-24 subtle-gradient">
      <div className="container-width section-padding">

        

        {/* About Andy */}
        <div className="premium-card bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20 animate-fade-in mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-luxury mb-4 lg:mb-6 text-center lg:text-left">Meet Andy Richardson</h3>
              <p className="text-sm lg:text-base text-foreground leading-relaxed mb-4 lg:mb-6">
                After 13 years of transforming executive communication, Andy has developed the most 
                effective system for accent refinement and executive presence coaching. His exclusive 
                focus on high-achieving professionals has created a proven methodology that delivers 
                rapid, measurable results.
              </p>
              <p className="text-sm lg:text-base text-foreground leading-relaxed mb-4 lg:mb-6">
                Andy's unique background combines linguistic expertise with deep understanding of 
                corporate communication dynamics. He doesn't just coach accents—he transforms how 
                leaders command respect and authority in every interaction.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary">13+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary">3000+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Executives</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="text-center order-1 lg:order-2">
              <div className="w-48 h-48 lg:w-64 lg:h-64 mx-auto luxury-gradient rounded-full flex items-center justify-center mb-4 lg:mb-6">
                <span className="text-4xl lg:text-6xl font-bold text-white">AR</span>
              </div>
              <div className="space-y-1 lg:space-y-2">
                <div className="font-semibold text-luxury text-lg lg:text-xl">Andy Richardson</div>
                <div className="text-muted-foreground text-sm lg:text-base">Executive Communication Coach</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Certified • Award-Winning • Trusted by Fortune 500</div>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury mb-4 lg:mb-6">
            Trusted by Global Leaders
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Andy's expertise has transformed communication for executives at the world's most prestigious companies
          </p>
        </div>

        

        {/* Company Logos */}
        <div className="text-center mb-8 lg:mb-12 animate-fade-in">
          <h3 className="text-xl lg:text-2xl font-semibold text-luxury mb-6 lg:mb-8">
            Executives from these companies trust Andy's coaching:
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-8">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="px-3 py-2 lg:px-6 lg:py-3 bg-white dark:bg-gray-800 shadow-subtle rounded-lg lg:rounded-xl border border-border/50 hover:shadow-luxury transition-all duration-300"
              >
                <span className="text-sm lg:text-lg font-semibold text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;