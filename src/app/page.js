import Driving from "@/components/Driving";
import HeroSection from "@/components/HeroSection";
import InternSection from "@/components/InternSection";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import NavbarTop from "@/components/NavbarTop";
import ServingClient from "@/components/ServingClient";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <section>
      <NavbarTop />
      <Navbar />
      <div className="">
        <HeroSection />
        <Driving />
        <ServingClient />
        <InternSection />
        <Marquee />
       <TestimonialSection/>
      </div>
    </section>
  );
}
