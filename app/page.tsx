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
          imagePath="/images/mockup-visual.png"
          contentTitle="Visual Design"
          contentParagraph="A collection of some of my visual design (landing pages, ilustration and motion graphic). COMING SOON."
          contentAnchor="https://dribbble.com/azdalecio"
          color="yellow"
          direction="right"
          buttonText="VIEW VISUAL DESIGN PORTFOLIO"
          external={true}
        />
      </Container>
      <Spacer />
      <Container>
        <Card
          imagePath="/images/payment_mockup.png"
          contentTitle="Straightforward Payment Form"
          contentParagraph="Improving the way users make donations, the end to end creation of a seamless web donation experience that puts users concerns at ease."
          contentAnchor="my-work/payment-form"
          color="white"
          direction="left"
        />
      </Container>
      <Spacer />
      <Container>
        <Card
          imagePath="/images/mockup-visual.png"
          contentTitle="Visual Design"
          contentParagraph="A collection of some of my visual design (landing pages, ilustration and motion graphic). Coming Soon! "
          contentAnchor="my-work/visual-design"
          color="yellow"
          direction="right"
          button={false}
        />
      </Container>
      <Spacer />
    </>
  );
}
