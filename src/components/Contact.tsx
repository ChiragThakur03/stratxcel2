import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-[#B0EDF9]" />,
      title: "Email Us",
      details: "hello@stratxcel.ai",
      description: "Send strategy questions directly."
    },
    {
      icon: <Phone className="w-5 h-5 text-[#B0EDF9]" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Direct analyst dispatch office."
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#B0EDF9]" />,
      title: "Visit Headquarters",
      details: "San Francisco, CA",
      description: "Executive innovation hub."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#B0EDF9]" />,
      title: "Active Hours",
      details: "Mon-Fri 9AM-6PM PST",
      description: "Consultation pipeline is open."
    }
  ];

  const faqs = [
    {
      question: "How does the AI strategy analysis work?",
      answer: "Our AI systems process your raw performance metric vectors against thousands of successful industry models to extract predictive growth targets and market entry routes."
    },
    {
      question: "Is my corporate data secure?",
      answer: "Yes. All data uploads are encrypted in transit and at rest within SOC2-compliant document vaults. We never share proprietary models."
    },
    {
      question: "Can I upgrade or downgrade my tier?",
      answer: "You can adjust your plan directly from the executive settings dashboard. Downgrades take effect at the end of your billing cycle."
    },
    {
      question: "Do you build custom machine learning solutions?",
      answer: "Yes, our Enterprise tier includes custom fine-tuning to train models directly on your proprietary data sources."
    }
  ];

  return (
    <section id="contact" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-[#021C2A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#04344C]/60 backdrop-blur-xl border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-6">
            <MessageSquare className="w-4 h-4 mr-2 text-[#B0EDF9]" />
            Connect Team
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Contact Strategy
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Ready to integrate custom AI models into your pipeline? Message our consultants today.
          </p>
        </motion.div>

        {/* Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Form Card (width 7/12) */}
          <motion.div
            className="lg:col-span-7 glass-card bg-[#04344C]/80 border border-[#B0EDF9]/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>
            
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#021C2A] border border-[#B0EDF9]/20 focus:border-[#B0EDF9] rounded-xl text-white placeholder-slate-500 focus:outline-none text-xs transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#021C2A] border border-[#B0EDF9]/20 focus:border-[#B0EDF9] rounded-xl text-white placeholder-slate-500 focus:outline-none text-xs transition-all"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#021C2A] border border-[#B0EDF9]/20 focus:border-[#B0EDF9] rounded-xl text-white placeholder-slate-500 focus:outline-none text-xs transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Project Goals / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#021C2A] border border-[#B0EDF9]/20 focus:border-[#B0EDF9] rounded-xl text-white placeholder-slate-500 focus:outline-none text-xs transition-all resize-none"
                      placeholder="Describe target velocity constraints..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden bg-[#B0EDF9] hover:bg-white text-[#04344C] py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Strategy Request
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-[#021C2A] border border-[#B0EDF9]/40 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#B0EDF9]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Message Sent</h4>
                  <p className="text-slate-300 text-xs max-w-xs leading-relaxed">
                    Strategy request received. An operations manager will follow up within 2 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Details (width 5/12) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Details</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#04344C] border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{info.title}</h4>
                    <p className="text-[#B0EDF9] text-xs font-bold tracking-tight mb-0.5">{info.details}</p>
                    <p className="text-slate-300 text-xs font-semibold">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Support Card */}
            <div className="glass-card bg-[#04344C]/90 border border-[#B0EDF9]/30 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between mt-8">
              <div>
                <h4 className="text-sm font-extrabold text-white mb-1">Instant Support Chat</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Active consultants are ready to audit draft reports in real-time.
                </p>
              </div>
              <button 
                onClick={() => window.open('https://stratxcel.ai', '_blank')}
                className="mt-4 inline-flex items-center gap-1.5 text-[#B0EDF9] hover:text-white text-xs font-bold transition-colors group"
              >
                Open Chat
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* FAQs */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-16">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="glass-card bg-[#04344C]/60 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-2xl p-6 transition-all"
              >
                <h4 className="text-base font-bold text-white mb-2 leading-tight">
                  {faq.question}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
