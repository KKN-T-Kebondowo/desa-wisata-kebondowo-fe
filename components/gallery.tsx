"use client";

import Image from "next/image";
import { useState } from "react";

export interface GalleryImage {
  picture_url: string;
  caption: string;
}

interface GalleryComponentProps {
  galleryImages: GalleryImage[];
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({
  galleryImages,
}) => {
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
                src={image.picture_url}
                width={500}
                height={500}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Captions */}
            <div className="relative -mt-5 text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

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
              src={galleryImages[selectedImageIndex].picture_url}
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
};

export default GalleryComponent;
