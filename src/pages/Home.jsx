import { Link } from "wouter";

const Home = () => {
  const handleBookNow = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScCX1DYX8ZfYyN7nx7wn1rLHz-mo0CcOB4HUzVax6ArAT9HnA/viewform', '_blank');
  };

  const destinations = [
    {
      id: 1,
      name: "Delhi",
      subtitle: "Capital of India",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Red Fort Delhi"
    },
    {
      id: 2,
      name: "Kerala",
      subtitle: "God's Own Country",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Kerala Backwaters"
    },
    {
      id: 3,
      name: "Goa",
      subtitle: "Beach Paradise",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Goa Beaches"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Raj Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "Our Golden Triangle tour with Trouville was absolutely incredible! The attention to detail and the local guides made our experience unforgettable. Highly recommended!",
      initials: "RS",
      bgColor: "bg-[#FF9933]/90"
    },
    {
      id: 2,
      name: "Anita Patel",
      location: "Delhi, India",
      rating: 5,
      text: "The Kerala backwaters experience was pure magic! From the houseboat stay to the Ayurvedic treatments, everything was perfectly organized. Thank you Trouville!",
      initials: "AP",
      bgColor: "bg-forest"
    },
    {
      id: 3,
      name: "Vikram Kumar",
      location: "Bangalore, India",
      rating: 5,
      text: "Kashmir was like paradise on earth! The snow-capped mountains, the Dal Lake, and the warm hospitality made our honeymoon perfect. Exceptional service from Trouville!",
      initials: "VK",
      bgColor: "bg-blue-500"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <i key={index} className="fas fa-star text-[#FF9933]"></i>
    ));
  };

  return (
    <div className="pt-16 min-h-screen relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-1 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold font-playfair mb-6 leading-tight animate-fade-in-up">
            Discover <span className="text-[#FF9933]">Incredible India</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 font-light leading-relaxed animate-fade-in-up">
            Embark on a journey through India's rich heritage, vibrant culture, and breathtaking landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link href="/packages">
              <button className="bg-[#FF9933] hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-plane mr-2"></i>
                Explore Packages
              </button>
            </Link>
            <button 
              onClick={handleBookNow}
              className="border-2 border-white text-white hover:bg-white hover:text-[#22223b] font-semibold py-4 px-8 rounded-full transition-all duration-300"
            >
              <i className="fas fa-calendar mr-2 "></i>
              Book Now
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-[#22223b] mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore India's most magnificent destinations, from ancient monuments to pristine beaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={destination.image}
                    alt={destination.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold font-playfair">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-[#22223b] mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued customers who discovered incredible India with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#22223b]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;