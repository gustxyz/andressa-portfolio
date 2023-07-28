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
import Container from "@/components/Container";

//create a spacer component that creates 64px of space on the top and bottom
const Spacer = () => {
  return <div className="h-16"></div>;
};

export default function Home() {
  return (
    <>
      <Spacer />
      <Spacer />
      <Container>
        <Card
          imagePath="/images/payment_mockup.png"
          contentTitle="A straightforward Payment Form"
          contentParagraph="The end to end creation of a functional payment/donation form. From UX research to the product design prototype."
          contentAnchor="my-work/seattle-dogs"
          color="white"
          direction="left"
        />
      </Container>
      <Spacer />
      <Container>
        <Card
          imagePath="/images/v2_mockup_seattle_dogs.png"
          contentTitle="Seattle Dogs Re-design"
          contentParagraph="The process of re-designing an entire website to help users build trust with the organization."
          contentAnchor="my-work/seattle-dogs"
          color="white"
          direction="right"
        />
      </Container>
      <Spacer />
    </>
  );
}
