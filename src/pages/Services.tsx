import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell, Users, Heart, Zap, Target, Trophy,
  Check, Star, Clock, Calendar, Shield, Award,
  ArrowRight, ChevronDown, Phone
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Personal Training',
      category: 'training',
      icon: Target,
      description: 'One-on-one sessions with certified trainers tailored to your specific fitness goals and needs.',
      features: [
        'Customized workout plans',
        'Form correction & guidance',
        'Progress tracking',
        'Nutrition advice',
        'Flexible scheduling',
      ],
      image: 'https://images.pexels.com/photos/6289045/pexels-photo-6289045.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Group Classes',
      category: 'classes',
      icon: Users,
      description: 'High-energy group sessions that combine fun, motivation, and effective workouts.',
      features: [
        'Various class types',
        'Motivating atmosphere',
        'Social workout experience',
        'Certified instructors',
        'All fitness levels welcome',
      ],
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Yoga & Flexibility',
      category: 'wellness',
      icon: Heart,
      description: 'Improve balance, flexibility, and mental wellness through guided yoga sessions.',
      features: [
        'Stress relief',
        'Improved flexibility',
        'Mental wellness focus',
        'Breathing techniques',
        'All levels welcome',
      ],
      image: 'https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'Strength Training',
      category: 'training',
      icon: Dumbbell,
      description: 'Build muscle and strength with our comprehensive strength training programs and equipment.',
      features: [
        'Modern isolation machines',
        'Free weights area',
        'Targeted muscle training',
        'Injury prevention focus',
        'Progressive programs',
      ],
      image: 'https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'Cardio Zone',
      category: 'training',
      icon: Zap,
      description: 'Advanced cardio equipment for endurance training, fat burning, and cardiovascular health.',
      features: [
        'Treadmills',
        'Elliptical machines',
        'Stationary bikes',
        'Rowing machines',
        'Personalized cardio plans',
      ],
      image: 'https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      title: 'Diet Plans',
      category: 'wellness',
      icon: Shield,
      description: 'Comprehensive nutrition guidance and diet plans tailored to your fitness goals.',
      features: [
        'Customized diet plans',
        'Nutrition counseling',
        'Weight management',
        'Healthy eating guidance',
        'Regular follow-ups',
      ],
      image: 'https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const membershipPlans = [
    {
      name: 'Monthly',
      price: 'Contact Us',
      period: 'for pricing',
      description: 'Perfect for trying out K2 Fitness',
      features: [
        'Full gym access',
        'Locker room facilities',
        'Basic equipment orientation',
        'Flexible timing',
      ],
      recommended: false,
      highlight: false,
    },
    {
      name: 'Quarterly',
      price: 'Best Value',
      period: '3 months plan',
      description: 'Great commitment to your fitness journey',
      features: [
        'Everything in Monthly',
        'Personalized workout plan',
        'Daily WhatsApp guidance',
        'Progress tracking',
        'Group class access',
      ],
      recommended: true,
      highlight: true,
    },
    {
      name: 'Annual',
      price: 'Premium',
      period: '12 months plan',
      description: 'Full year of transformation',
      features: [
        'Everything in Quarterly',
        'Priority personal training sessions',
        'Diet consultation',
        'Body composition analysis',
        'Exclusive member events',
        'Freeze option available',
      ],
      recommended: false,
      highlight: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'training', label: 'Training' },
    { id: 'classes', label: 'Classes' },
    { id: 'wellness', label: 'Wellness' },
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gym Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
              <Award className="h-4 w-4" />
              <span>Comprehensive Fitness Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From personal training to group classes, we offer comprehensive fitness programs
              designed for every goal and fitness level. Experience the K2 Fitness difference.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-medium capitalize">
                    {service.category}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="h-8 w-8 mb-2" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Membership <span className="text-orange-500">Plans</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Choose the perfect plan for your fitness journey. All plans include gym access and basic amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.highlight
                    ? 'shadow-2xl scale-105 border-2 border-orange-500'
                    : 'shadow-sm hover:shadow-xl border border-gray-100'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${plan.recommended ? 'pt-14' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.period}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-orange-500">{plan.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact?type=quote"
                    className={`block text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                State-of-the-Art <span className="text-orange-500">Facilities</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our gym is equipped with the latest fitness technology and amenities to ensure
                you have the best workout experience. From modern isolation machines to
                versatile cardio equipment, we have everything you need.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Dumbbell, label: 'Modern Equipment', value: '50+ Machines' },
                  { icon: Users, label: 'Spacious Area', value: '4000+ sq ft' },
                  { icon: Clock, label: 'Open Hours', value: '5 AM - 10 PM' },
                  { icon: Shield, label: 'Hygiene Rating', value: '5 Stars' },
                ].map((amenity, index) => (
                  <div key={index} className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                    <amenity.icon className="h-6 w-6 text-orange-500 mb-2" />
                    <p className="text-2xl font-bold text-gray-900">{amenity.value}</p>
                    <p className="text-sm text-gray-600">{amenity.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photo-1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="K2 Fitness Facilities"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 p-3 rounded-xl">
                    <Star className="h-6 w-6 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-xs text-gray-500">794 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Workout Plan Feature */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Calendar className="h-4 w-4" />
                <span>Exclusive Feature</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Daily Workout Plans via WhatsApp
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Stay on track with personalized daily workout plans delivered straight to your WhatsApp.
                Our trainers curate exercises specifically for your goals and fitness level.
              </p>
              <div className="space-y-4">
                {[
                  'Personalized daily routines',
                  'Exercise instructions included',
                  'Progress tracking support',
                  'Direct trainer access',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-4 border-b pb-4 border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-900 font-semibold">WhatsApp</span>
                  <span className="text-gray-400 text-sm ml-auto">Today</span>
                </div>
                <div className="bg-green-100 rounded-xl p-4 mb-3">
                  <p className="text-green-900 text-sm">
                    <strong>K2 Fitness Studio</strong><br />
                    <span className="mt-2 block">Good morning! Here is your workout plan for today:</span>
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-green-800">
                    <p>1. Warm-up - 10 mins</p>
                    <p>2. Bench Press - 4x12</p>
                    <p>3. Cable Flyes - 3x15</p>
                    <p>4. Tricep Dips - 3x12</p>
                    <p>5. Cardio - 20 mins</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center">Messages are end-to-end encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Start Your Transformation <span className="text-orange-500">Today</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a personalized quote for your membership and take the first step towards your fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?type=quote"
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:08122126376"
              className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: 081221 26376</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
