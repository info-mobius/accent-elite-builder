import { useState } from "react";
import { ArrowRight, User, Mail, Building, Target, Calendar, CheckCircle } from "lucide-react";

const VIPConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    goals: []
  });

  const [submitted, setSubmitted] = useState(false);

  const goalOptions = [
    "Executive Presence & Boardroom Confidence",
    "Media Interviews & Public Speaking", 
    "Investor Presentations & Fundraising",
    "Team Leadership & Management",
    "International Business Communication",
    "Career Advancement & Promotions"
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In real implementation, this would submit to your backend
  };

  if (submitted) {
    return (
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="container-width section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="gold-gradient w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8">
              <CheckCircle className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
              Application Received!
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8">
              Thank you for your interest in our VIP Executive Program. Andy will personally review your application and reach out within 24 hours to schedule your complimentary strategy session.
            </p>
            <div className="premium-card bg-white/10 backdrop-blur border-white/20">
              <h3 className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4">What happens next?</h3>
              <div className="text-left space-y-3 text-white/90">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <span className="text-sm lg:text-base">Personal review of your application by Andy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <span className="text-sm lg:text-base">Invitation to exclusive strategy session</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <span className="text-sm lg:text-base">Custom transformation roadmap designed for you</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 hero-gradient" id="apply">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              Apply for Your VIP Consultation
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 lg:mb-8">
              This complimentary 45-minute strategy session is exclusively for serious executives 
              ready to invest in their communication transformation.
            </p>
            
            {/* Urgency */}
            <div className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-red-500/20 border border-red-400/30 rounded-full text-red-200 font-medium backdrop-blur text-sm lg:text-base">
              <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
              Limited to 3 applications per month
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="premium-card bg-white/10 backdrop-blur border-white/20 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-white font-medium mb-2 lg:mb-3 text-sm lg:text-base">
                  <User className="w-3 h-3 lg:w-4 lg:h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur text-sm lg:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-white font-medium mb-2 lg:mb-3 text-sm lg:text-base">
                  <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur text-sm lg:text-base"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="flex items-center gap-2 text-white font-medium mb-2 lg:mb-3 text-sm lg:text-base">
                  <Building className="w-3 h-3 lg:w-4 lg:h-4" />
                  Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur text-sm lg:text-base"
                  placeholder="Your company name"
                />
              </div>

              {/* Role */}
              <div>
                <label className="flex items-center gap-2 text-white font-medium mb-2 lg:mb-3 text-sm lg:text-base">
                  <Target className="w-3 h-3 lg:w-4 lg:h-4" />
                  Current Role *
                </label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur text-sm lg:text-base"
                  placeholder="e.g., VP Marketing, CEO, Director"
                />
              </div>
            </div>

            {/* Goals */}
            <div className="mb-6 lg:mb-8">
              <label className="flex items-center gap-2 text-white font-medium mb-3 lg:mb-4 text-sm lg:text-base">
                <Target className="w-3 h-3 lg:w-4 lg:h-4" />
                What do you want to achieve? (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
                {goalOptions.map((goal, index) => (
                  <label 
                    key={index}
                    className="flex items-center gap-3 p-3 lg:p-4 rounded-xl bg-white/10 border border-white/20 cursor-pointer hover:bg-white/20 transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={formData.goals.includes(goal)}
                      onChange={() => handleGoalToggle(goal)}
                      className="w-4 h-4 rounded border-white/30 text-accent focus:ring-accent focus:ring-offset-0"
                    />
                    <span className="text-white/90 text-xs lg:text-sm">{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit"
                className="premium-button-gold text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-5 group w-full sm:w-auto"
              >
                Submit VIP Application
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              
              <p className="text-white/70 text-xs lg:text-sm mt-3 lg:mt-4 leading-relaxed">
                * By submitting, you agree to receive communication about our executive programs. 
                No spam, unsubscribe anytime.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VIPConsultationForm;