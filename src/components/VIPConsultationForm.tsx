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
      <section className="py-24 hero-gradient">
        <div className="container-width section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="gold-gradient w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Application Received!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Thank you for your interest in our VIP Executive Program. Andy will personally review your application and reach out within 24 hours to schedule your complimentary strategy session.
            </p>
            <div className="premium-card bg-white/10 backdrop-blur border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">What happens next?</h3>
              <div className="text-left space-y-3 text-white/90">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center text-sm font-bold">1</div>
                  <span>Personal review of your application by Andy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center text-sm font-bold">2</div>
                  <span>Invitation to exclusive strategy session</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center text-sm font-bold">3</div>
                  <span>Custom transformation roadmap designed for you</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 hero-gradient" id="apply">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Apply for Your VIP Consultation
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              This complimentary 45-minute strategy session is exclusively for serious executives 
              ready to invest in their communication transformation.
            </p>
            
            {/* Urgency */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-400/30 rounded-full text-red-200 font-medium backdrop-blur">
              <Calendar className="w-4 h-4" />
              Limited to 3 applications per month
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="premium-card bg-white/10 backdrop-blur border-white/20 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-white font-medium mb-3">
                  <User className="w-4 h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-white font-medium mb-3">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="flex items-center gap-2 text-white font-medium mb-3">
                  <Building className="w-4 h-4" />
                  Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur"
                  placeholder="Your company name"
                />
              </div>

              {/* Role */}
              <div>
                <label className="flex items-center gap-2 text-white font-medium mb-3">
                  <Target className="w-4 h-4" />
                  Current Role *
                </label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur"
                  placeholder="e.g., VP Marketing, CEO, Director"
                />
              </div>
            </div>

            {/* Goals */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-white font-medium mb-4">
                <Target className="w-4 h-4" />
                What do you want to achieve? (Select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {goalOptions.map((goal, index) => (
                  <label 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/20 cursor-pointer hover:bg-white/20 transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={formData.goals.includes(goal)}
                      onChange={() => handleGoalToggle(goal)}
                      className="w-4 h-4 rounded border-white/30 text-accent focus:ring-accent focus:ring-offset-0"
                    />
                    <span className="text-white/90 text-sm">{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit"
                className="premium-button-gold text-xl px-12 py-5 group"
              >
                Submit VIP Application
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              
              <p className="text-white/70 text-sm mt-4">
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