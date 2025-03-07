import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import ParallaxProject from "@/components/ParallaxProjects";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhereToBuy from "@/components/WhereToBuy";
import GetSupport from "@/components/GetSupport";
import Divider from "@/components/Divider";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Caesar Furnace - Leading Provider of Industrial Heating Solutions in
          Ghana, West Africa
        </title>
        <meta
          name="description"
          content="Discover Caesar Furnace's range of industrial furnaces, boilers, kilns, and calcination ovens. Serving Ghana's mining and manufacturing sectors with over 25 years of expertise."
        />
        <meta
          name="keywords"
          content="Caesar Furnace, industrial heating solutions, furnaces, boilers, kilns, calcination ovens, Ghana, mining, manufacturing"
        />
        <meta name="author" content="Caesar Furnace Team" />
        <meta
          property="og:title"
          content="Caesar Furnace - Leading Provider of Industrial Heating Solutions in Ghana"
        />
        <meta
          property="og:description"
          content="Explore our industrial heating solutions, including furnaces, boilers, and kilns, tailored for Ghana's industries."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.caesarfurnacegh.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Hero />
      <ServicesSection />
      <Divider />
      <FeaturedProducts />
      <WhyChooseUs />
      <WhereToBuy />
      <GetSupport />
    </>
  );
}
