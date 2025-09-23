import { Award, BookOpen, Users, Globe, TrendingUp, Star } from "lucide-react";

const AuthoritySection = () => {
  const credentials = [
    {
      icon: Award,
      title: "Certified Speech Coach",
      subtitle: "International Association of Coaches"
    },
    {
      icon: BookOpen,
      title: "13+ Years Experience",
      subtitle: "Exclusive Executive Focus"
    },
    {
      icon: Users,
      title: "3000+ Professionals",
      subtitle: "Successfully Coached"
    },
    {
      icon: Globe,
      title: "Global Clientele",
      subtitle: "Fortune 500 to Startups"
    },
    {
      icon: TrendingUp,
      title: "98% Success Rate",
      subtitle: "Measurable Transformation"
    },
    {
      icon: Star,
      title: "5.0 Rating",
      subtitle: "Consistent Excellence"
    }
  ];

  const companies = [
    "Google", "Microsoft", "Goldman Sachs", "McKinsey", "Deloitte", 
    "JP Morgan", "Tesla", "Uber", "Stripe", "Airbnb"
  ];

  return (
    <section className="py-24 subtle-gradient">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury mb-6">
            Trusted by Global Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Andy's expertise has transformed communication for executives at the world's most prestigious companies
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <div 
                key={index}
                className="premium-card text-center hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="luxury-gradient w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-luxury mb-2">{credential.title}</h3>
                <p className="text-muted-foreground">{credential.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Company Logos */}
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-2xl font-semibold text-luxury mb-8">
            Executives from these companies trust Andy's coaching:
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-white shadow-subtle rounded-xl border border-border/50 hover:shadow-luxury transition-all duration-300"
              >
                <span className="text-lg font-semibold text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* About Andy */}
        <div className="premium-card bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-luxury mb-6">Meet Andy Richardson</h3>
              <p className="text-foreground leading-relaxed mb-6">
                After 13 years of transforming executive communication, Andy has developed the most 
                effective system for accent refinement and executive presence coaching. His exclusive 
                focus on high-achieving professionals has created a proven methodology that delivers 
                rapid, measurable results.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Andy's unique background combines linguistic expertise with deep understanding of 
                corporate communication dynamics. He doesn't just coach accents—he transforms how 
                leaders command respect and authority in every interaction.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">13+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3000+</div>
                  <div className="text-sm text-muted-foreground">Executives</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-64 h-64 mx-auto luxury-gradient rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl font-bold text-white">AR</span>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-luxury">Andy Richardson</div>
                <div className="text-muted-foreground">Executive Communication Coach</div>
                <div className="text-sm text-muted-foreground">Certified • Award-Winning • Trusted by Fortune 500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;