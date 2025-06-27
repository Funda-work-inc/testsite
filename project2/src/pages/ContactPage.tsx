import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import FadeInSection from '../components/ui/FadeInSection';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - Cinnamon Cafe';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: 'Thank you for your message! We will get back to you soon.' });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <FadeInSection>
        <div className="bg-primary py-16 mb-12">
          <div className="container-custom text-center">
            <h1 className="heading-lg text-white mb-4">Contact Us</h1>
            <p className="text-cream-light max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with any questions, feedback, or to make a reservation.
            </p>
          </div>
        </div>
      </FadeInSection>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Contact Information */}
          <FadeInSection direction="right">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="heading-md text-charcoal mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-1">Visit Us</h3>
                    <p className="text-charcoal-light">123 Coffee Street, Tokyo, Japan</p>
                    <p className="text-charcoal-light">Near Central Station, 5-minute walk from Exit 3</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-1">Call Us</h3>
                    <p className="text-charcoal-light">+81 3-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-1">Email Us</h3>
                    <p className="text-charcoal-light">hello@cinnamoncafe.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-1">Opening Hours</h3>
                    <p className="text-charcoal-light">Monday - Friday: 7:30 AM - 9:00 PM</p>
                    <p className="text-charcoal-light">Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium text-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
          
          {/* Contact Form */}
          <FadeInSection direction="left">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="heading-md text-charcoal mb-8">Send Us a Message</h2>
              
              {formStatus && (
                <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-success-light text-success-dark' : 'bg-error-light text-error-dark'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-charcoal font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-cream-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-charcoal font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-cream-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-charcoal font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-cream-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Reservation">Reservation</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Catering">Catering</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-charcoal font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-cream-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-full flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </FadeInSection>
        </div>
        
        {/* Map Section */}
        <FadeInSection>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            {/* This would be a map in a real implementation */}
            <img 
              src="https://images.pexels.com/photos/7347/startup-photos.jpg" 
              alt="Map location of Cinnamon Cafe" 
              className="w-full h-full object-cover"
            />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default ContactPage;