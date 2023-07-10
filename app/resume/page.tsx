export const metadata = {
  title: "Home - Tidy",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Card from "@/components/Card";
import Features from "@/components/features-home";
import Features02 from "@/components/features-home-02";
import Features03 from "@/components/features-home-03";
import Target from "@/components/target";
import PricingSection from "@/components/pricing";
import Cta from "@/components/cta";

//create a spacer component that creates 64px of space on the top and bottom
const Spacer = () => {
  return <div className="h-16"></div>;
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>;
};

export default function Home() {
  return <>resrt</>;
}
