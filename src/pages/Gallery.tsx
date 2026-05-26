import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Play } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Equipment Zone',
      category: 'Equipment',
      featured: true,
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photo-1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cardio Training Area',
      category: 'Facility',
      featured: true,
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photo-6289045/pexels-photo-6289045.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Personal Training Session',
      category: 'Training',
      featured: false,
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Strength Training Zone',
      category: 'Equipment',
      featured: false,
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Free Weights Section',
      category: 'Equipment',
      featured: false,
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photo-1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Group Training Area',
      category: 'Training',
      featured: true,
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Locker Room',
      category: 'Facility',
      featured: false,
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photo-1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Reception Area',
      category: 'Facility',
      featured: false,
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Isolation Machines',
      category: 'Equipment',
      featured: false,
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.pexels.com/photo-1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Training in Progress',
      category: 'Training',
      featured: false,
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Premium Dumbbells',
      category: 'Equipment',
      featured: false,
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.pexels.com/photo-1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Evening Workout',
      category: 'Atmosphere',
      featured: false,
    },
  ];

  const categories = ['All', 'Equipment', 'Facility', 'Training', 'Atmosphere'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredItems.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photo-1552242918-8cb5423e8fa8.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gallery Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
              <Camera className="h-4 w-4" />
              <span>12+ Photos & Videos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-orange-500">Gallery</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Take a virtual tour of K2 Fitness Studio. Explore our modern equipment, spacious workout areas,
              and motivating atmosphere through our photo gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  item.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`overflow-hidden ${item.featured ? 'aspect-square' : 'aspect-square'}`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 p-4 rounded-full">
                    <Camera className="h-6 w-6 text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Equipment Types' },
              { value: '4000+', label: 'Sq Ft Space' },
              { value: '100%', label: 'Cleanliness' },
              { value: '24/7', label: 'Security' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl border border-orange-100">
                <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Virtual <span className="text-orange-500">Tour</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience K2 Fitness Studio from anywhere with our immersive virtual tour.
              See our world-class facilities and equipment in action.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-gray-800 aspect-video max-w-4xl mx-auto group cursor-pointer">
            <img
              src="https://images.pexels.com/photo-1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Virtual Tour Thumbnail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-orange-500 p-6 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play className="h-12 w-12 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xl font-bold mb-1">K2 Fitness Studio</p>
              <p className="text-sm text-gray-300">360° Virtual Tour Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Visit?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            See the K2 Fitness difference in person. Book a free tour and consultation today.
          </p>
          <a
            href="/contact?type=appointment"
            className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <span>Book a Free Visit</span>
            <Camera className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="h-8 w-8 text-white" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          <div className="max-w-5xl max-h-[80vh] mx-16">
            <img
              src={filteredItems[selectedImage].src}
              alt={filteredItems[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold text-xl">{filteredItems[selectedImage].title}</p>
              <p className="text-gray-400 text-sm">{filteredItems[selectedImage].category}</p>
              <p className="text-gray-500 text-sm mt-2">{selectedImage + 1} / {filteredItems.length}</p>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
