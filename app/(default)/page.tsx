export const metadata = {
  title: "Desa Wisata Kebondowo",
  description: "Desa Wisata Kebondowo",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import GoogleMapComponent from "@/components/map/map";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h2 className="h2">Peta Kebondowo</h2>
      </div>
      <GoogleMapComponent latitude={-7.3060529} longitude={110.4007872} />
    </>
  );
}
