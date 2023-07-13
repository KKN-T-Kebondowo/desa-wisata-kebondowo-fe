export const metadata = {
  title: "Desa Wisata Kebondowo",
  description: "Desa Wisata Kebondowo",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
// import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.700156899822!2d110.40078719564745!3d-7.306052933226756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7f5976f1b529%3A0xbddd8c05bb8e1e41!2sKebondowo%2C%20Banyubiru%2C%20Semarang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1689259542529!5m2!1sen!2sid"
          width="1920"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>

      {/* <Newsletter /> */}
    </>
  );
}
