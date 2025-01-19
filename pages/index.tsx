import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import ParallaxProject from "@/components/ParallaxProjects";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhereToBuy from "@/components/WhereToBuy";
import GetSupport from "@/components/GetSupport";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Divider />
      {/* <ParallaxProject /> */}
      <FeaturedProducts />
      <WhyChooseUs />
      <WhereToBuy />
      <GetSupport />
    </>
  );
}
