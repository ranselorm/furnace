import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import ParallaxProject from "@/components/ParallaxProjects";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhereToBuy from "@/components/WhereToBuy";
import GetSupport from "@/components/GetSupport";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ParallaxProject />
      <FeaturedProducts />
      <WhyChooseUs />
      <WhereToBuy />
      <GetSupport />
    </>
  );
}
