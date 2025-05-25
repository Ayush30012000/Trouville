import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      destination: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      content: "123 Travel Street, Delhi, India - 110001"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      content: "+91 98765 43210"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "info@trouville.com"
    },
    {
      icon: "fas fa-clock",
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 7:00 PM"
    }
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-[#22223b] to-gray-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">
            Get In Touch
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Ready to embark on your Indian adventure? Contact us today and let's plan your perfect journey
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold font-playfair text-[#22223b] mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#FF9933]/90 text-white p-3 rounded-lg">
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#22223b] mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-playfair text-[#22223b] mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#22223b] mb-2">First Name</label>
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]/90 focus:border-transparent"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#22223b] mb-2">Last Name</label>
                    <input 
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]/90 focus:border-transparent"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#22223b] mb-2">Email Address</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]/90 focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#22223b] mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]/90 focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#22223b] mb-2">Travel Destination</label>
                  <select 
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]/90 focus:border-transparent"
                    required
                  >
                    <option value="">Select your preferred destination</option>
                    <option value="golden-triangle">Golden Triangle</option>
                    <option value="kerala">Kerala Backwaters</option>
                    <option value="kashmir">Kashmir Paradise</option>
                    <option value="rajasthan">Rajasthan Royal</option>
                    <option value="goa">Goa Beach Bliss</option>
                    <option value="spiritual">Spiritual India</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#22223b] mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]/90 focus:border-transparent"
                    placeholder="Tell us about your travel plans and preferences..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#FF9933]/90 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-colors duration-300"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;