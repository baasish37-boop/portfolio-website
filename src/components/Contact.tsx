import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Facebook, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable dispatch & formulate mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleSendDirectEmail = () => {
    const subjectParam = encodeURIComponent(formData.subject || 'Educational Collaboration Inquiry');
    const bodyParam = encodeURIComponent(`Hello Aasish,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectParam}&body=${bodyParam}`;
  };

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'bg-slate-950 border-slate-800/80 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-0.5 bg-cyan-400" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400">
              08 · Communication & Outreach
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
            Let&apos;s Connect & Collaborate
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Have an interesting educational idea, research opportunity, or collaboration in mind? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-3xl border ${
              isDark ? 'bg-slate-900/40 border-slate-800 backdrop-blur-sm' : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <h3 className="text-xl font-bold font-display mb-6">
                Direct Channels
              </h3>

              {/* Email Card with One-Click Copy */}
              <div className={`p-4 rounded-2xl border mb-4 flex items-center justify-between gap-3 ${
                isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono font-semibold text-cyan-300 hover:underline truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className={`p-4 rounded-2xl border mb-4 flex items-center gap-3 ${
                isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Professional Socials */}
              <div className="pt-6 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4 font-semibold">
                  Professional Networks
                </span>
                <div className="space-y-3">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                      isDark 
                        ? 'bg-slate-950/40 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono">LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                      isDark 
                        ? 'bg-slate-950/40 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Facebook className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-mono">Facebook Page</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Teaching Collaboration Note */}
            <div className={`p-6 rounded-2xl border text-xs leading-relaxed ${
              isDark ? 'bg-slate-900/30 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}>
              <span className="font-semibold text-cyan-300 block mb-1">Open to Dialogues Regarding:</span>
              <ul className="list-disc list-inside space-y-1">
                <li>Secondary STEM curriculum workshops & lesson plan sharing</li>
                <li>Applied mathematical modelling & dynamic visualization projects</li>
                <li>Teacher development forums & student mentoring circles</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-sm ${
              isDark ? 'bg-slate-900/60 border-slate-800 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <h3 className="text-xl font-bold font-display mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Direct dispatch to {PERSONAL_INFO.name} ({PERSONAL_INFO.email})
              </p>

              {submitted ? (
                <div className={`p-8 rounded-2xl border text-center space-y-4 ${
                  isDark ? 'bg-cyan-950/30 border-cyan-800/40' : 'bg-cyan-50 border-cyan-200'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-white">
                    Message Prepared & Ready!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. You can also open this drafted inquiry directly in your email client below.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendDirectEmail}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Mail App</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Prof. Sharma / Student"
                        className={`w-full px-4 py-3 rounded-xl text-sm border transition-all outline-none ${
                          isDark 
                            ? 'bg-slate-950/80 border-slate-800 focus:border-cyan-400 text-slate-100 placeholder-slate-600' 
                            : 'bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className={`w-full px-4 py-3 rounded-xl text-sm border transition-all outline-none ${
                          isDark 
                            ? 'bg-slate-950/80 border-slate-800 focus:border-cyan-400 text-slate-100 placeholder-slate-600' 
                            : 'bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g., Mathematics Workshop / Teaching Collaboration"
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all outline-none ${
                        isDark 
                          ? 'bg-slate-950/80 border-slate-800 focus:border-cyan-400 text-slate-100 placeholder-slate-600' 
                          : 'bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your inquiry, teaching idea, or question here..."
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all outline-none resize-none ${
                        isDark 
                          ? 'bg-slate-950/80 border-slate-800 focus:border-cyan-400 text-slate-100 placeholder-slate-600' 
                          : 'bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <span className="text-[11px] font-mono text-slate-500">
                      * Required fields. Prompt responses typically within 24–48 hours.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-500 text-slate-950 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
