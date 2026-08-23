import React,{useState} from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, User, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = ({ isDark }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async () => {
    // Use backend endpoint (Express + Nodemailer) when available. Falls back to EmailJS if backend not configured.
    setLoading(true);
    try {
      const backendUrl = import.meta.env.VITE_MAIL_SERVER_URL || 'http://localhost:4000/api/send-email';

      const resp = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message })
      });

      if (!resp.ok) {
        // fallback to EmailJS if backend fails
        console.warn('Backend email failed, falling back to EmailJS');
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } else {
        const data = await resp.json();
        console.log('Mail sent', data);
      }

      alert('Message sent successfully!');

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Send email error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const copyLinkedIn = async (e) => {
    e.stopPropagation();
    const link = 'https://www.linkedin.com/in/narendra-deshmukh4510';
    try {
      await navigator.clipboard.writeText(link);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };
  return (
    <section id="contact" className="py-20">
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-16 bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className={`rounded-2xl ${isDark ? 'bg-gray-800/40' : 'bg-white/40'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} p-8 shadow-xl`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <User className="w-6 h-6 text-indigo-500" />
                  <span>Narendra Deshmukh</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-indigo-500" />
                  <span>+91 8975394198</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-indigo-500" />
                  <span>dnarendra4510@gmail.com</span>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl ${isDark ? 'bg-gray-800/40' : 'bg-white/40'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} p-8 shadow-xl`}>
              <h3 className="text-2xl font-bold mb-6">Social Links</h3>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); window.open('https://github.com/Narendra1418', '_blank'); }}
                  className="p-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-6 h-6" />
                </button>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); window.open('https://www.linkedin.com/in/narendra-deshmukh4510', '_blank'); }}
                    className="p-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-6 h-6" />
                  </button>
                </div>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); window.open('https://twitter.com', '_blank'); }}
                    className="p-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors"
                    aria-label="Twitter profile"
                  >
                    <Twitter className="w-6 h-6" />
                  </button>
                <a href="mailto:dnarendra4510@gmail.com" className="p-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl ${isDark ? 'bg-gray-800/40' : 'bg-white/40'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} p-8 shadow-xl`}>
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-300'} border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all`}
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-300'} border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all`} placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Message</label>
                <textarea rows="5" name="message" value={formData.message} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-300'} border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none`} placeholder="Your message..."></textarea>
              </div>
              
              <button onClick={sendEmail} disabled={loading}
                className="w-full px-8 py-3 bg-linear-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;