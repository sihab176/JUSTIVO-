import AchievementsAwards from "@/components/AchievementsAwards";
import CaseStudy from "@/components/CaseStudy";
import ContactSection from "@/components/ContactSection";
import Driving from "@/components/Driving";
import HeroSection from "@/components/HeroSection";
import InternSection from "@/components/InternSection";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import NavbarTop from "@/components/NavbarTop";
import RecentNews from "@/components/RecentNews";
import ServingClient from "@/components/ServingClient";
import TeamAndInitiatives from "@/components/TeamAndInitiatives";
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
        <TestimonialSection />
        <CaseStudy />
        <TeamAndInitiatives />
        <AchievementsAwards />
        <ContactSection />
        <RecentNews/>
      </div>
    </section>
  );
}
