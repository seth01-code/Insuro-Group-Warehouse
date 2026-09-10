import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhoWeAre from "@/components/WhoWeAre";
import BuiltForScale from "@/components/BuiltForScale";
import WhyFail from "@/components/WhyFail";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import ValueProposition from "@/components/ValueProposition";
import Pricing from "@/components/Pricing";
import WhyChoose from "@/components/WhyChoose";
import Partnership from "@/components/Partnership";
import GroupBand from "@/components/GroupBand";
import RequestSection from "@/components/RequestSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <WhoWeAre />
        <BuiltForScale />
        <WhyFail />
        <Services />
        <Workflow />
        <ValueProposition />
        <Pricing />
        <WhyChoose />
        <Partnership />
        <GroupBand />
        <RequestSection />
      </main>
      <Footer />
    </>
  );
}
