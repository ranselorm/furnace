import Divider from "@/components/Divider";
import GetSupport from "@/components/GetSupport";
import ProductHero from "@/components/ProductHero";
import TheCesarWay from "@/components/TheCesarWay";
import WhoIsCesar from "@/components/WhoIsCesar";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>
          About Caesar Furnace - Industrial Heating Experts in Ghana, West
          Africa
        </title>
        <meta
          name="description"
          content="Learn about Caesar Furnace, a trusted provider of industrial heating solutions in Ghana, West Africa with over 25 years of experience."
        />
        <meta
          property="og:title"
          content="About Caesar Furnace - Industrial Heating Experts in Ghana"
        />
        <meta
          property="og:description"
          content="Discover the history and expertise of Caesar Furnace in the industrial heating industry."
        />
        <meta property="og:image" content="/images/about-us.jpg" />
        <meta
          property="og:url"
          content="https://www.caesarfurnacegh.com/about"
        />
      </Head>
      <ProductHero
        title="About"
        backgroundImage="/images/banner2.jpg"
        subtitle="Crafting Excellence and Comfort for Everyone"
      />
      <WhoIsCesar />
      <Divider />
      <TheCesarWay />
      <GetSupport />
    </div>
  );
};

export default About;
