const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "100+", label: "Tour Packages" }
  ];

  const team = [
    {
      name: "Partho Sarkar",
      role: "Founder & Operation Head",
      description:
        "Partho is a visionary travelpreneur with an experience of leading more than 50 community trips. He’s fond of all kinds of voyages, yet his favourite are motorbiking expeditions, hence he accounts for 3000kms of extreme rides. He can hold a conversation around business, human values and almost everything one can think of. The man knows how to get down to work and party, equally well.",
      image: "https://www.trouville.in/images/photos/team/Partho%20Display.jpg", // Replace with real image if available
    },
    {
      name: "Aman Sharma",
      role: "Co Founder & IT Head",
      description:
        "Aman is a multitasker, problem solver and trivia king! The go-to man for all our technical needs, we sometimes wonder if he can give out solutions faster than google! On days he is not coding, he is seen traveling, leading group tours and riding bikes.",
      image: "https://www.trouville.in/images/photos/team/Aman%20Display.jpeg",
    },
    {
      name: "Adesh Kumar Rai",
      role: "Co Founder & Marketing Head",
      description:
        "Adesh is a strong analyst of travel operations, and thus heads the responsibility of running the entire show. Just like Sindbad the Sailor, he finds out the most interesting experiences and tests them out before presenting to the community. With so many duties to perform, it is hard to believe that he managed to code the html and css for this website!",
      image: "https://www.trouville.in/images/photos/team/Adesh%20Display.jpeg",
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-golden to-yellow-500 text-[#22223b] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">
            About Trouville
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner for exploring the incredible beauty and rich culture of India
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-[#22223b] mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
             At Trouvaille, we believe that the magic of India should be accessible to all. Our mission is to make Indian tourism more affordable, letting you explore incredible destinations without breaking the bank. </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 We craft unique, budget-friendly journeys that uncover the soul of India from iconic landmarks to hidden local treasures. By working closely with local businesses, we offer unbeatable prices and authentic experiences that support communities across the country. We’re committed to creating adventures that don’t compromise on quality, safety, or comfort, allowing you to travel with confidence and ease. Join us and discover India’s wonders through thoughtfully designed, affordable experiences. With trouvaile, you can make lasting memories while staying within your budget because everyone deserves to explore more of this incredible country.  </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-[#FF9933]/90 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="bg-[#FF9933]/90 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Learn More About Us
              </button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Happy Travelers"
                className="rounded-2xl shadow-2xl"
              />
              
              <div className="absolute -top-8 -left-8 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-award text-golden text-2xl"></i>
                  <div>
                    <div className="font-bold text-[#22223b]">Award Winning</div>
                    <div className="text-sm text-gray-500">Travel Company</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-4 shadow-lg" style={{marginRight:"20px"}}>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-heart text-red-500 text-2xl"></i>
                  <div>
                    <div className="font-bold text-[#22223b]" >24/7 Support</div>
                    <div className="text-sm text-gray-500">Always Here for You</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-[#FF9933]/90 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-eye text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold font-playfair text-[#22223b] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most trusted travel partner, showcasing the country's rich heritage and natural beauty to travelers from around the world, while promoting sustainable and responsible tourism.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-forest text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bullseye text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold font-playfair text-[#22223b] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create extraordinary travel experiences that connect people with India's diverse culture, breathtaking landscapes, and warm hospitality, while ensuring every journey is safe, comfortable, and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-[#22223b] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in creating exceptional travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#FF9933]/90 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#22223b] mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We believe in showcasing the real India - its authentic culture, traditions, and experiences that create lasting memories.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-forest text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-leaf text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#22223b] mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We promote responsible tourism that preserves India's natural beauty and cultural heritage for future generations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-golden text-[#22223b] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-star text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#22223b] mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from planning to execution, ensuring unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-[#22223b] mb-4">
        Meet the Team
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        The passionate people behind Trouville
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {team.map((member, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-[#FF9933]"
          />
          <h3 className="text-2xl font-bold text-[#22223b] mb-2 font-playfair">{member.name}</h3>
          <div className="text-[#FF9933]/90 font-semibold mb-4">{member.role}</div>
          <p className="text-gray-600">{member.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default About;