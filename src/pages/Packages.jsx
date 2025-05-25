import { useState } from "react";

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const packages = [
    {
      id: 1,
      title: "Golden Triangle",
      price: "₹25,999",
      duration: "7 Days / 6 Nights",
      locations: "Delhi • Agra • Jaipur",
      description: "Explore Delhi, Agra, and Jaipur in this classic 7-day journey through India's most iconic destinations.",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "heritage",
      badge: "Popular",
      badgeColor: "bg-[#FF9933]/90"
    },
    {
      id: 2,
      title: "Kashmir Paradise",
      price: "₹35,999",
      duration: "6 Days / 5 Nights",
      locations: "Srinagar • Gulmarg • Pahalgam",
      description: "Experience the breathtaking beauty of Kashmir with houseboat stays and mountain adventures.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "adventure",
      badge: "Adventure",
      badgeColor: "bg-forest"
    },
    {
      id: 3,
      title: "Kerala Backwaters",
      price: "₹28,999",
      duration: "5 Days / 4 Nights",
      locations: "Kochi • Alleppey • Kumarakom",
      description: "Cruise through serene backwaters, enjoy Ayurvedic treatments, and experience God's Own Country.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "relaxation",
      badge: "Relaxation",
      badgeColor: "bg-forest"
    },
    {
      id: 4,
      title: "Rajasthan Royal",
      price: "₹32,999",
      duration: "8 Days / 7 Nights",
      locations: "Jaipur • Udaipur • Jaisalmer",
      description: "Live like royalty in magnificent palaces and explore the golden deserts of Rajasthan.",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "heritage",
      badge: "Heritage",
      badgeColor: "bg-golden text-[#22223b]"
    },
    {
      id: 5,
      title: "Goa Beach Bliss",
      price: "₹22,999",
      duration: "4 Days / 3 Nights",
      locations: "North Goa • South Goa",
      description: "Relax on pristine beaches, enjoy water sports, and experience Goa's vibrant nightlife.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "beach",
      badge: "Beach",
      badgeColor: "bg-blue-500"
    },
    {
      id: 6,
      title: "Spiritual India",
      price: "₹18,999",
      duration: "6 Days / 5 Nights",
      locations: "Varanasi • Rishikesh • Haridwar",
      description: "Discover India's spiritual heritage with visits to ancient temples and holy cities.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "spiritual",
      badge: "Spiritual",
      badgeColor: "bg-purple-500"
    }
  ];

  const categories = [
    { value: "all", label: "All Packages" },
    { value: "heritage", label: "Heritage" },
    { value: "adventure", label: "Adventure" },
    { value: "beach", label: "Beach" },
    { value: "relaxation", label: "Relaxation" },
    { value: "spiritual", label: "Spiritual" }
  ];

  const filteredPackages = selectedCategory === "all" 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  const handleBookNow = () => {
    window.open('https://forms.gle/YourGoogleFormID', '_blank');
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-[#FF9933]/90 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">
            Travel Packages
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Carefully curated packages to give you the best of India
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? "bg-[#FF9933]/90 text-white"
                    : "bg-gray-100 text-[#22223b] hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`${pkg.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {pkg.badge}
                    </span>
                    <span className="text-golden text-xl font-bold">{pkg.price}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-playfair text-[#22223b] mb-3">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <i className="fas fa-clock mr-2 text-[#FF9933]/90"></i>
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <i className="fas fa-map-marker-alt mr-2 text-[#FF9933]/90"></i>
                    <span>{pkg.locations}</span>
                  </div>
                  <button 
                    onClick={handleBookNow}
                    className="w-full bg-[#FF9933] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;