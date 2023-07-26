import GoogleMapComponent from "@/components/map/map";
import { OneUMKMResponse } from "@/models/UMKM";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "UMKM Kebondowo",
  description: "Kumpulan UMKM di Desa Kebondowo, Kecamatan Banyubiru",
};

async function getData(slug: string): Promise<OneUMKMResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/api/umkms/${slug}`,
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
  const umkm = data.umkm;

  if (!umkm) {
    return <div>UMKM not found</div>;
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
                {umkm.title}
              </h1>

              <img
                className="w-full object-cover h-96 rounded-lg"
                src={umkm.cover_picture_url}
                alt={umkm.title}
              />
              <div
                className="mt-4 text-lg text-gray-600 text-justify flex flex-col gap-5" // Add text-justify class for justification
                dangerouslySetInnerHTML={{ __html: umkm.description }}
              ></div>
            </div>

            {/* Contact */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">
                Kontak
              </h2>
              {/* contact name and phone number */}
              <div className="mt-8">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold">Nama</span>
                      <span className="text-lg">{umkm.contact_name}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold">Telepon</span>
                      <a href={`https://wa.me/${umkm.contact}`} target="_blank">
                        <span className="text-lg">{umkm.contact}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            {umkm.pictures && (
              <div className="pb-12 md:pb-16 text-center md:text-left">
                <h2 className="text-3xl font-bold leading-tight tracking-tight">
                  Galeri
                </h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {umkm.pictures.map((pic, index) => (
                    <Image
                      width={500}
                      height={500}
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
                latitude={umkm.latitude}
                longitude={umkm.longitude}
              />
            </div>

            {/* Back to all articles link */}
            <div className="mt-8">
              <Link href="/umkm" className="text-blue-400">
                Kembali ke semua wisata
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
