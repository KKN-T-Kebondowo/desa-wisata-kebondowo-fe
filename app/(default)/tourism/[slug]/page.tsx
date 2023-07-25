import GoogleMapComponent from "@/components/map/map";
import Tourism from "@/data/tourism.json";
import { OneTourismResponse } from "@/models/Tourism";
import Link from "next/link";

export const metadata = {
  title: "Wisata Kebondowo",
  description:
    "Kumpulan destinasi wisata di Desa Kebondowo, Kecamatan Banyubiru",
};

async function getData(slug: string): Promise<OneTourismResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/api/tourisms/${slug}`,
    { next: { revalidate: 60 } }
  );

  return res.json();
}

export default async function TourismDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Find the article with the matching slug
  const data = await getData(slug);
  const tourism = data.tourism;

  if (!tourism) {
    return <div>Tourism not found</div>;
  }

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
              <div
                className="mt-4 text-lg text-gray-600"
                dangerouslySetInnerHTML={{ __html: tourism.description }}
              ></div>
            </div>

            {/* Image gallery */}
            {tourism.pictures && (
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
            )}

            {/* Map */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight">
              Lokasi
            </h2>
            <div className="mt-8 rounded-lg overflow-hidden">
              <GoogleMapComponent
                latitude={tourism.latitude}
                longitude={tourism.longitude}
              />
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
