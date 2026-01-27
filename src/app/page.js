import Driving from "@/components/Driving";
import HeroSection from "@/components/HeroSection";
import InternSection from "@/components/InternSection";
import Navbar from "@/components/Navbar";
import NavbarTop from "@/components/NavbarTop";
import ServingClient from "@/components/ServingClient";

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
      </div>
    </section>
  );
}
