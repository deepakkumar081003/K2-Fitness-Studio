import { Link } from 'react-router-dom';
import {
  Dumbbell, Users, CalendarCheck, Award, ChevronRight,
  Star, Clock, Target, Heart, Zap, Shield, Trophy,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Dumbbell,
      title: 'Modern Equipment',
      description: 'State-of-the-art machines for every targeted muscle, helping prevent injuries.',
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Certified professionals providing personalized guidance and daily workout plans.',
    },
    {
      icon: CalendarCheck,
      title: 'Flexible Hours',
      description: 'Open from 5 AM to 10 PM, fitting perfectly into your busy schedule.',
    },
    {
      icon: Award,
      title: '4.9 Rating',
      description: 'Trusted by 794+ members with excellent reviews for quality and service.',
    },
  ];

  const services = [
    { icon: Target, title: 'Personal Training', description: 'One-on-one sessions tailored to your goals' },
    { icon: Zap, title: 'Group Classes', description: 'High-energy workouts in a motivating group setting' },
    { icon: Heart, title: 'Yoga & Flexibility', description: 'Improve balance, flexibility, and mental wellness' },
    { icon: Shield, title: 'Strength Training', description: 'Build muscle with dedicated strength zones' },
    { icon: Trophy, title: 'Cardio Zone', description: 'Advanced cardio equipment for endurance training' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance from our team' },
  ];

  const testimonials = [
    {
      name: 'Bharadwaraj Y.',
      rating: 5,
      text: 'I absolutely love working out at K2 Fitness Studio. The standards have remained excellent over the 4 years I\'ve been a member. Clean space, motivating atmosphere, and supportive staff.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      name: 'Ajay Roshan',
      rating: 5,
      text: 'The equipment is modern, well-maintained, and there\'s plenty of variety for both strength training and cardio. The staff are friendly and always willing to help with form.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      name: 'Raja Venkatesh',
      rating: 5,
      text: 'The gym ambience is very good, and trainers are very supportive. They provide daily workout plans via WhatsApp. Isolation machines for every targeted muscle help prevent injuries.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
  ];

  const stats = [
    { value: '794+', label: 'Happy Members' },
    { value: '4.9', label: 'Star Rating' },
    { value: '4+', label: 'Years Experience' },
    { value: '50+', label: 'Equipment Types' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-orange-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-orange-400 text-sm font-medium mb-6 border border-white/20">
                <Star className="h-4 w-4 fill-orange-400" />
                <span>4.9 Rating • 794 Reviews</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                Transform Your
                <span className="block text-orange-500">Body & Mind</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Experience Chennai's premier fitness destination. World-class equipment, expert trainers,
                and a motivating atmosphere await you at K2 Fitness Studio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <span>Book a Visit</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
                >
                  <span>View Plans</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fitness Training"
                  className="rounded-3xl shadow-2xl border-4 border-white/10"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Trophy className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">4+ Years</p>
                      <p className="text-sm opacity-90">Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl border border-orange-100"
              >
                <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Why Choose <span className="text-orange-500">K2 Fitness?</span>
            </h2>
            <p className="section-subtitle mx-auto">
              We provide a complete fitness experience that transforms your body and elevates your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive fitness programs designed for every goal and fitness level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 transition-all duration-300" />
                <div className="relative z-10">
                  <service.icon className="h-10 w-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              What Our <span className="text-orange-500">Members Say</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Real stories from real members who transformed their lives with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-orange-50/30 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Member</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Dumbbell className="absolute top-10 left-10 h-32 w-32 transform rotate-12" />
          <Dumbbell className="absolute bottom-10 right-10 h-48 w-48 transform -rotate-12" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book your free gym visit today and experience the K2 Fitness difference.
            Our team is ready to welcome you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?type=appointment"
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <CalendarCheck className="h-5 w-5" />
              <span>Book Free Visit</span>
            </Link>
            <Link
              to="/contact?type=quote"
              className="bg-orange-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-800 transition-all duration-300 border-2 border-white/30 flex items-center justify-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
