import { Link } from 'react-router-dom';
import {
  Target, Heart, Users, Award, Star, CheckCircle2,
  Dumbbell, Trophy, Clock, Shield
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Fitness',
      description: 'We believe fitness is not just about physical strength but about building a healthier, happier life.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Creating a welcoming environment where everyone feels like part of the K2 family.',
    },
    {
      icon: Shield,
      title: 'Safety & Quality',
      description: 'Maintaining the highest standards of equipment quality and hygiene for your safety.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Focusing on real, measurable results with personalized training programs.',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Founded', description: 'K2 Fitness Studio opened its doors in Kolathur, Chennai' },
    { year: '2021', event: '500+ Members', description: 'Reached our first major membership milestone' },
    { year: '2022', event: 'Equipment Upgrade', description: 'Expanded with state-of-the-art isolation machines' },
    { year: '2023', event: '794+ Members', description: 'Growing strong with excellent 4.9-star rating' },
  ];

  const team = [
    {
      name: 'Expert Trainers',
      role: 'Certified Professionals',
      description: 'Our trainers provide personalized guidance, daily workout plans via WhatsApp, and ensure proper form.',
      image: 'https://images.pexels.com/photo-6289045/pexels-photo-6289045.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Dumbbell,
    },
    {
      name: 'Support Staff',
      role: 'Friendly & Helpful',
      description: 'Our team ensures a welcoming environment and assists with any queries or needs.',
      image: 'https://images.pexels.com/photo-7869093/pexels-photo-7869093.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Users,
    },
    {
      name: 'Management',
      role: 'Quality Focused',
      description: 'Committed to maintaining the highest standards of cleanliness and service.',
      image: 'https://images.pexels.com/photo-7455103/pexels-photo-7455103.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Award,
    },
  ];

  const features = [
    'Modern, well-maintained equipment',
    'Isolation machines for every targeted muscle',
    'Personal training sessions available',
    'Daily workout plans via WhatsApp',
    'Clean and motivating atmosphere',
    'Flexible membership options',
    'Diet plans and nutrition guidance',
    'Convenient location in Kolathur',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gym Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
              <Award className="h-4 w-4" />
              <span>Est. 2020 • 4+ Years of Excellence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-orange-500">K2 Fitness</span> Studio
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Transforming lives in Kolathur, Chennai since 2020. We are committed to providing
              world-class fitness experiences with modern equipment, expert trainers, and a motivating
              environment that helps you achieve your fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Our <span className="text-orange-500">Story</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                K2 Fitness Studio started with a simple vision: to create a fitness space where
                everyone feels welcome, motivated, and empowered to achieve their best selves.
                Located in the heart of Kolathur, Chennai, we've grown from a local gym to one
                of the most trusted fitness destinations in the area.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With 794+ satisfied members and a stellar 4.9-star rating, our commitment to quality
                has remained unchanged. We believe in providing modern equipment, personalized attention,
                and a clean, motivating atmosphere that makes every workout count.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, value: '794+', label: 'Members' },
                  { icon: Star, value: '4.9', label: 'Rating' },
                ].map((stat, index) => (
                  <div key={index} className="bg-orange-50 p-4 rounded-xl">
                    <stat.icon className="h-6 w-6 text-orange-500 mb-2" />
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>Join Us Today</span>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="K2 Fitness Studio"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 p-3 rounded-xl">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4+ Years</p>
                    <p className="text-sm text-gray-600">Of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our <span className="text-orange-500">Values</span>
            </h2>
            <p className="section-subtitle mx-auto">
              The principles that guide everything we do at K2 Fitness Studio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our <span className="text-orange-500">Journey</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Key milestones in our path to becoming Kolathur's premier fitness destination.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 inline-block max-w-md">
                      <div className="text-orange-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our <span className="text-orange-500">Team</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Dedicated professionals committed to your fitness success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <member.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                What Sets Us <span className="text-orange-500">Apart</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Experience the K2 Fitness difference with our comprehensive approach to fitness and wellness.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="K2 Fitness Features"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-500">Open Hours</p>
                    <p className="font-bold text-gray-900">5 AM - 10 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join Our <span className="text-orange-500">Community?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier you. Book a visit and see why 794+ members chose K2 Fitness.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            <span>Book Your Visit</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
