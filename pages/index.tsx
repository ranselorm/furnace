import Image from "next/image";
import localFont from "next/font/local";
import RssFeed from "@/components/Rss";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import ParallaxProject from "@/components/ParallaxProjects";

export default function Home() {
  return (
    <>
      <Hero />;
      <ServicesSection />
      <ParallaxProject />
    </>
  );
}
