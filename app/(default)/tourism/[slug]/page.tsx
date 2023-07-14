import Tourism from "@/data/tourism.json";
import Link from "next/link";

export default function TourismDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Find the article with the matching slug
  const tourism = Tourism.data.find((tourism) => tourism.slug === slug);

  if (!tourism) {
    return <div>Tourism not found</div>;
  }

  // const mapUrl = `https://www.google.com/maps/embed/v1/place?key={YOUR_API_KEY}&q=${tourism.latitude},${tourism.longitude}`;

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Article content */}
          <div className="pt-32 pb-12 md:pt-24 md:pb-20">
            {/* Article header */}
            <div className="text-center pb-12 md:pb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4">
                {tourism.title}
              </h1>
              <img
                className="w-full object-cover h-96 rounded-lg"
                src={tourism.cover_picture_url}
                alt={tourism.title}
              />
              <p className="mt-4 text-lg text-gray-600">
                {tourism.description}
              </p>
            </div>

            {/* Image gallery */}
            <div className="pb-12 md:pb-16 text-center md:text-left">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">
                Galeri
              </h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tourism.pictures.map((pic, index) => (
                  <img
                    key={index}
                    className="object-cover rounded-lg"
                    src={pic.picture_url}
                    alt={`pic-${index}`}
                  />
                ))}
              </div>
            </div>

            {/* Map */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight">
              Lokasi
            </h2>
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4092199665265!2d${tourism.longitude}!3d-${tourism.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7fec47836c71%3A0xdb0f3063b4f179ab!2sBukit%20Cinta%20Banyubiru!5e0!3m2!1sen!2sid!4v1689338128283!5m2!1sen!2sid`}
                width="1920"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Back to all articles link */}
            <div className="mt-8">
              <Link href="/tourism" className="text-blue-400">
                Kembali ke semua wisata
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
