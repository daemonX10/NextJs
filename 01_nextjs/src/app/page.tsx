import FeatureCourese from "@/components/FeatureCourese";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import  { Scroller } from "@/components/Scroller";
import TestimonialCards from "@/components/TestimonialCards";
import Webinar from "@/components/Webinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection  />
      <FeatureCourese />
      <Scroller />
      <TestimonialCards />
      <Webinar />
      <Instructor />
    </main>
  );
}
