import BrandTown from "@/components/BrandTown";
import Community from "@/components/Community";
import Complex from "@/components/Complex";
import Contact from "@/components/Contact";
import FloorPlans from "@/components/FloorPlans";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import MobileBar from "@/components/MobileBar";
import Overview from "@/components/Overview";
import Premium from "@/components/Premium";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <BrandTown />
        <Location />
        <Premium />
        <Complex />
        <Community />
        <FloorPlans />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
