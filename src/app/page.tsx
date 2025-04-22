import HeroSection from "~/components/Hero";
import WhyVino from "~/components/WhyChooseUs";
import Features from "~/components/Features";
import Testimony from "~/components/Rating";
import FaqSection from "~/components/FaqSection";
import Footer from "~/components/Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyVino />
      <Features />
      <Testimony />
      <FaqSection />
      <Footer/>
    </>
  );
}
