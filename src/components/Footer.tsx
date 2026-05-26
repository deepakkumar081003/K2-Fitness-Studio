import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">K2 Fitness</span>
                <span className="text-xs font-medium -mt-1 text-orange-500">STUDIO</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Transform your body and mind at Chennai's premier fitness destination.
              Experience world-class equipment, expert trainers, and a motivating atmosphere.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/karthikeyanfitnessstudio/"
                className="p-2 bg-gray-800 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/k2_fitness_studio/?hl=en"
                className="p-2 bg-gray-800 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Personal Training',
                'Group Classes',
                'Yoga Sessions',
                'Cardio Zone',
                'Strength Training',
                'Diet Plans',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  15/24, Perambur Red Hills High Rd, Retteri, Rajan Nagar, Kolathur, Chennai, Tamil Nadu 600099
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="tel:08122126376" className="text-sm hover:text-orange-500 transition-colors">
                  081221 26376
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@k2fitness.com" className="text-sm hover:text-orange-500 transition-colors">
                  info@k2fitness.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Mon - Sat: 5:00 AM - 10:00 PM</p>
                  <p>Sunday: 6:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} K2 Fitness Studio. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <Link to="/contact" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
