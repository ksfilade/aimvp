import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
