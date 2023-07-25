import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TourismCardProps {
  image: string;
  title: string;
  slug: string;
  path: string;
}

const TourismCard = ({ image, title, slug, path }: TourismCardProps) => (
  <Link href={`/${path}/${slug}`}>
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <img
        className="w-96 h-64 object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-700 mb-2">{title}</h1>
      </div>
    </div>
  </Link>
);

export default TourismCard;
