import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starkviz Technologies - Elevating Digital Experiences",
  description: "Welcome to Starkviz Technologies, your premier destination for cutting-edge web and mobile applications, dynamic websites, and powerful browser extensions. Our innovative solutions are crafted to elevate your digital presence and drive success. Partner with us to transform your ideas into thriving realities. Experience the Starkviz advantage today.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video />
      <Brands /> */}
      <AboutSectionOne shortDisc={false} />
      <AboutSectionTwo />
      {/* <Testimonials />
      <Pricing />
      <Blog /> */}
      <Contact />
    </>
  );
}
