export const metadata = {
  title: "Desa Wisata Kebondowo",
  description: "Desa Wisata Kebondowo",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import GoogleMapComponent from "@/components/map/map";
// import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <FeaturesBlocks /> */}
      <Testimonials />
      <GoogleMapComponent />

      {/* <Newsletter /> */}
    </>
  );
}
