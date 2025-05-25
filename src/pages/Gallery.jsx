import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Indian Spices",
      category: "Culture"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Indian Architecture",
      category: "Architecture"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Indian Festival",
      category: "Festivals"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Tea Plantations",
      category: "Nature"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Wildlife Safari",
      category: "Wildlife"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Indian Cuisine",
      category: "Food"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Himalayas",
      category: "Mountains"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Taj Mahal",
      category: "Monuments"
    }
  ];

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-forest to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Witness the beauty of India through our curated collection of stunning photographs
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="relative inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <i className="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </div>
                <div className="absolute top-4 left-4 bg-[#FF9933]/90 text-white px-2 py-1 rounded text-xs font-medium">
                  {image.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-[#FF9933]/90 transition-colors duration-300"
              onClick={closeLightbox}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;