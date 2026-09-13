import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big background text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vaishali240905@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto URL
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:vaishali240905@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Parallax Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12 select-none opacity-20"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          CONTACT
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full lg:w-[85%] xl:w-[80%] p-8 sm:p-12 md:p-16 text-white flex flex-col justify-between shadow-2xl rounded-t-[2.5rem] lg:rounded-tl-[3.5rem] lg:rounded-tr-none"
        >
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/20">
            <div>
              <div className="text-xs font-mono font-bold tracking-[0.2em] uppercase opacity-90 mb-1">
                LET'S BUILD SOMETHING EXCEPTIONAL
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Get In Touch With Vaishali
              </h2>
            </div>

            {/* Quick Copy Email Pill */}
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-mono font-bold flex items-center gap-2 self-start sm:self-auto transition-all backdrop-blur-md"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Contact Details & Links Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
            <div className="p-4 rounded-2xl bg-black/20 border border-white/10 flex items-start gap-3">
              <Mail className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-mono text-red-100 uppercase tracking-wider block">Direct Email</span>
                <a href="mailto:vaishali240905@gmail.com" className="text-sm font-bold text-white hover:underline truncate block">
                  vaishali240905@gmail.com
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/20 border border-white/10 flex items-start gap-3">
              <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-mono text-red-100 uppercase tracking-wider block">Phone & WhatsApp</span>
                <a href="tel:+918489962785" className="text-sm font-bold text-white hover:underline block">
                  +91 84899 62785
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/20 border border-white/10 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-mono text-red-100 uppercase tracking-wider block">Location</span>
                <span className="text-sm font-bold text-white block">
                  Vellore &bull; Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
              {/* Left Column Inputs */}
              <div className="flex flex-col gap-8">
                <div className="relative">
                  <label htmlFor="name" className="text-[11px] font-mono uppercase tracking-wider text-white/80 block mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Tech Recruiter" 
                    className="w-full bg-transparent border-b-2 border-white/40 pb-2 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/50 font-medium rounded-none text-white"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="text-[11px] font-mono uppercase tracking-wider text-white/80 block mb-1">
                    Your Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com" 
                    className="w-full bg-transparent border-b-2 border-white/40 pb-2 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/50 font-medium rounded-none text-white"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="text-[11px] font-mono uppercase tracking-wider text-white/80 block mb-1">
                    Subject / Opportunity
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity" 
                    className="w-full bg-transparent border-b-2 border-white/40 pb-2 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/50 font-medium rounded-none text-white"
                  />
                </div>
              </div>

              {/* Right Column Textarea */}
              <div className="flex flex-col">
                <div className="relative h-full flex flex-col">
                  <label htmlFor="message" className="text-[11px] font-mono uppercase tracking-wider text-white/80 block mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share project details, interview requests, or opportunities..." 
                    className="w-full h-full min-h-[160px] bg-transparent border-b-2 border-white/40 pb-2 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/50 font-medium resize-none rounded-none text-white"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/20">
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/80">
                <a 
                  href="https://linkedin.com/in/vaishali-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white font-bold underline underline-offset-4"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a 
                  href="https://github.com/vaishali-cmd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white font-bold underline underline-offset-4"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub
                </a>
                <a 
                  href="https://leetcode.com/u/vaishu204/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white font-bold underline underline-offset-4"
                >
                  <LeetcodeIcon className="w-3.5 h-3.5" /> LeetCode
                </a>
              </div>

              <button 
                type="submit" 
                className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-white text-red-600 font-black text-sm md:text-base flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-all duration-300 shadow-2xl group"
              >
                <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                <span>{isSubmitted ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
