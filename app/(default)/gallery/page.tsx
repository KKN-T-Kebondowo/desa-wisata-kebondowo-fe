"use client";

import Image from "next/image";
import { useState } from "react";

export const metadata = {
  title: "Galeri Kebondowo",
  description: "Page description",
};

const generateRandomCaption = () => {
  const captions = [
    "Beautiful scenery",
    "Exploring nature",
    "Fun times with friends",
    "Memorable moments",
    "Adventures in Kebondowo",
    "Captivating landscapes",
    "Community gatherings",
    "Discovering local culture",
    "Serene beauty of Kebondowo",
  ];

  return captions[Math.floor(Math.random() * captions.length)];
};

const galleryImages = [...Array(9)].map(() => ({
  src: "/images/hero.jpg",
  caption: generateRandomCaption(),
}));

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex! + 1) % galleryImages.length
    );
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex! - 1
    );
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
      <section className="relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-24 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Galeri{" "}
                <span className="bg-clip-text  text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Kebondowo
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Galeri foto lokasi pariwisata dan kegiatan warga Desa
                  Kebondowo
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {galleryImages.map((image, index) => (
                  <div
                    className="relative cursor-pointer"
                    key={index}
                    data-aos="zoom-y-out"
                    data-aos-delay="200"
                    onClick={() => handleImageClick(index)}
                  >
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    {/* Captions */}
                    <div className="relative -mt-5">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-600">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="max-w-3xl mx-auto relative">
            <button
              className="absolute top-1/2 transform -translate-y-1/2 left-0 m-4 text-white text-3xl focus:outline-none"
              onClick={handlePreviousImage}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-0 m-4 text-white text-3xl focus:outline-none"
              onClick={handleNextImage}
            >
              &gt;
            </button>
            <button
              className="absolute top-0 right-0 m-4 text-white text-3xl focus:outline-none"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <Image
              width={500}
              height={500}
              src={galleryImages[selectedImageIndex].src}
              alt=""
              className="w-full"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 p-4">
              <p className="text-white text-center">
                {galleryImages[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
