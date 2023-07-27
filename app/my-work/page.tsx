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
          imagePath="/images/project_card_1.png"
          contentTitle="Straightforward Payment Form"
          contentParagraph="The end to end creation of aa functional payment/donation form. From UX research to the product design prototype."
          contentAnchor="my-work/seattle-dogs"
          color="white"
          direction="left"
        />
      </Container>
      <Spacer />
      <Container>
        <Card
          imagePath="/images/seattle_dogs_mockup.png"
          contentTitle="Seattle Dogs Website re-design"
          contentParagraph="The challenge of redesigning aa intuitive website so the users can feel trust with the organization."
          contentAnchor="my-work/seattle-dogs"
          color="white"
          direction="right"
        />
      </Container>
      <Spacer />
    </>
  );
}
