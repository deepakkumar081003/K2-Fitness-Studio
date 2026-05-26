import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Clock, Send, CalendarCheck,
  MessageSquare, CheckCircle, AlertCircle, Loader2
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferred_date: string;
  preferred_time: string;
  fitness_goals: string;
  membership_type: string;
  requirements: string;
}

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'appointment' | 'quote'>('appointment');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    fitness_goals: '',
    membership_type: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'quote') {
      setActiveTab('quote');
    } else {
      setActiveTab('appointment');
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      if (activeTab === 'appointment') {
        const { error } = await supabase
          .from('appointments')
          .insert({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            preferred_date: formData.preferred_date,
            preferred_time: formData.preferred_time,
            fitness_goals: formData.fitness_goals,
          });

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('quote_requests')
          .insert({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            membership_type: formData.membership_type,
            requirements: formData.requirements,
          });

        if (error) throw error;
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_date: '',
        preferred_time: '',
        fitness_goals: '',
        membership_type: '',
        requirements: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '6:00 AM - 8:00 AM',
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
    '6:00 PM - 8:00 PM',
    '8:00 PM - 10:00 PM',
  ];

  const membershipOptions = [
    'Monthly Plan',
    'Quarterly Plan (3 Months)',
    'Annual Plan (12 Months)',
    'Personal Training Package',
    'Group Classes Only',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photo-1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
              <MessageSquare className="h-4 w-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="text-orange-500">Us</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ready to start your fitness journey? Book a free visit or request a custom quote.
              Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      15/24, Perambur Red Hills High Rd,<br />
                      Retteri, Rajan Nagar,<br />
                      Kolathur, Chennai,<br />
                      Tamil Nadu 600099
                    </p>
                    <a
                      href="https://maps.google.com/?q=K2+Fitness+Studio+Kolathur+Chennai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 text-sm hover:underline mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:08122126376" className="text-orange-500 hover:underline">
                      081221 26376
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Call for inquiries</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@k2fitness.com" className="text-orange-500 hover:underline">
                      info@k2fitness.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Mon - Sat: 5:00 AM - 10:00 PM</p>
                      <p>Sunday: 6:00 AM - 2:00 PM</p>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 text-green-600 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Currently Open</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('appointment')}
                    className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-semibold transition-colors ${
                      activeTab === 'appointment'
                        ? 'text-orange-500 bg-orange-50 border-b-2 border-orange-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <CalendarCheck className="h-5 w-5" />
                    <span>Book a Visit</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('quote')}
                    className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-semibold transition-colors ${
                      activeTab === 'quote'
                        ? 'text-orange-500 bg-orange-50 border-b-2 border-orange-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Request Quote</span>
                  </button>
                </div>

                {/* Form */}
                <div className="p-8">
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-900">Success!</h4>
                        <p className="text-sm text-green-700">
                          {activeTab === 'appointment'
                            ? 'Your visit has been booked. We\'ll contact you shortly to confirm.'
                            : 'Your quote request has been received. We\'ll get back to you within 24 hours.'}
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-900">Error</h4>
                        <p className="text-sm text-red-700">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      {activeTab === 'appointment' ? (
                        <div>
                          <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            id="preferred_date"
                            name="preferred_date"
                            value={formData.preferred_date}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          />
                        </div>
                      ) : (
                        <div>
                          <label htmlFor="membership_type" className="block text-sm font-medium text-gray-700 mb-2">
                            Interest
                          </label>
                          <select
                            id="membership_type"
                            name="membership_type"
                            value={formData.membership_type}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                          >
                            <option value="">Select a plan</option>
                            {membershipOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>

                    {activeTab === 'appointment' && (
                      <>
                        <div>
                          <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Time Slot *
                          </label>
                          <select
                            id="preferred_time"
                            name="preferred_time"
                            value={formData.preferred_time}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                          >
                            <option value="">Select a time slot</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="fitness_goals" className="block text-sm font-medium text-gray-700 mb-2">
                            Fitness Goals / Special Requirements
                          </label>
                          <textarea
                            id="fitness_goals"
                            name="fitness_goals"
                            value={formData.fitness_goals}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                            placeholder="Tell us about your fitness goals..."
                          />
                        </div>
                      </>
                    )}

                    {activeTab === 'quote' && (
                      <div>
                        <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Requirements / Questions
                        </label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                          placeholder="Any specific requirements or questions about membership..."
                        />
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>{activeTab === 'appointment' ? 'Book Your Visit' : 'Request Quote'}</span>
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-center text-sm text-gray-500 mt-6">
                    By submitting, you agree to our terms and privacy policy.
                    We'll never share your information with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Us</h2>
            <p className="text-gray-600">Located in the heart of Kolathur, Chennai</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1234567890!2d80.123456789!3d13.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA4MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K2 Fitness Studio Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What are your opening hours?',
                a: 'We are open Monday to Saturday from 5:00 AM to 10:00 PM, and Sunday from 6:00 AM to 2:00 PM.',
              },
              {
                q: 'Do I need to book an appointment before visiting?',
                a: 'While walk-ins are welcome, we recommend booking a visit so we can provide you with a personalized tour and answer all your questions.',
              },
              {
                q: 'What should I bring for my first visit?',
                a: 'Just wear comfortable workout clothes and bring a water bottle. We\'ll provide a tour and discuss your fitness goals.',
              },
              {
                q: 'Do you provide personal training?',
                a: 'Yes! We have certified personal trainers who provide one-on-one sessions tailored to your goals. They also send daily workout plans via WhatsApp.',
              },
              {
                q: 'Is there parking available?',
                a: 'Yes, we have parking facilities available for our members.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
