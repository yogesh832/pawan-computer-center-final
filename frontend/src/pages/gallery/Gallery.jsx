import React, { useState, useEffect } from "react";
import { Book } from "lucide-react";
import GallerySection from "./GallerySection";
import Loading from "../../components/loading/Loading"; // Adjust the path as needed

const brandingImages = [
  {
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80",
    alt: "Modern branding mockup",
  },
  {
    url: "https://images.unsplash.com/photo-1636955840493-f43a02bfa064?auto=format&fit=crop&q=80",
    alt: "Brand identity design",
  },
  {
    url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80",
    alt: "Corporate stationery",
  },
  {
    url: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80",
    alt: "Minimalist packaging",
  },
  {
    url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80",
    alt: "Brand collateral",
  },
  {
    url: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80",
    alt: "Logo design showcase",
  },
];

const lifestyleImages = [
  {
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
    alt: "Lifestyle product photography",
  },
  {
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    alt: "Creative workspace",
  },
  {
    url: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&q=80",
    alt: "Modern office interior",
  },
  {
    url: "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?auto=format&fit=crop&q=80",
    alt: "Brand experience",
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    alt: "Team collaboration",
  },
  {
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    alt: "Office culture",
  },
];

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Default to no error

  useEffect(() => {
    // Simulate a loading delay of 1 second.
    const timer = setTimeout(() => {
      setLoading(false);
      // Uncomment the following line to simulate an error:
      // setError("An error occurred while loading the gallery.");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Hero Section */}
      <header className="bg-stone-200 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Book className="w-12 h-12 text-stone-700" />
          </div>
          <h1 className="text-5xl font-bold text-stone-800 mb-4">Gallery</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Empower your skills with hands-on learning and innovative resources.
            Explore, grow, and achieve your goals with our comprehensive courses
            and expert guidance.
          </p>
        </div>
      </header>

      {/* Gallery Sections */}
      <main className="bg-stone-100">
        <GallerySection
          title="Branding & Identity"
          description="Discover our portfolio of distinctive brand identities and corporate design systems."
          images={brandingImages}
        />

        <div className="w-full h-px bg-stone-300 max-w-6xl mx-auto" />

        <GallerySection
          title="Lifestyle & Culture"
          description="Experience how our brands come to life through carefully curated lifestyle imagery."
          images={lifestyleImages}
        />
      </main>
    </div>
  );
};

export default Gallery;
