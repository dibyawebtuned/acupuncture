import Image from "next/image";
import Link from "next/link";
import Nav from "@/component/Nav";
import Hero from "@/component/Hero";
import DoYouKnow from "@/component/Doyouknow";
import ClarityBeforeCare from "@/component/ClarityBeforeCare";
import MarqueeSection from "@/component/Marquee";
import Services from "@/component/Services";
import SimpleAccess from "@/component/SimpleAccess";
import FAQs from "@/component/Faq";
import Footer from "@/component/Footer";


export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <DoYouKnow />
      <ClarityBeforeCare />
      <MarqueeSection />
      <Services />
      <SimpleAccess />
      <FAQs />
      <Footer />
    </>
  );
}
