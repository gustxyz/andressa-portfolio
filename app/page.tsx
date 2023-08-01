export const metadata = {
  title: "Home - Andressa Dalecio Long",
  description: "Portfolio of Andressa Dalecio Long",
};

import Hero from "@/components/hero-home";
import Card from "@/components/Card";
import Container from "@/components/Container";

//create a spacer component that creates 64px of space on the top and bottom
const Spacer = () => {
  return <div className="h-16"></div>;
};

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Spacer />
      <Container>
        <Card
          imagePath="/images/project_card_1.png"
          contentTitle="An straightforward Payment Form"
          contentParagraph="The end to end creation of a functional payment/donation form. From UX research to the product design prototype"
          contentAnchor="my-work/seattle-dogs"
          color="yellow"
          direction="left"
        />
      </Container>
      <Spacer />
      <Container>
        <Card
          imagePath="/images/payment_mockup.png"
          contentTitle="Seattle Dogs Website Re-design"
          contentParagraph="The challenge of redesigning an intuitive website so the users can feel trust with the organization."
          contentAnchor="my-work/seattle-dogs"
          color="white"
          direction="right"
        />
      </Container>
      <Spacer />
    </>
  );
}
