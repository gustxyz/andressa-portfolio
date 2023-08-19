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
          imagePath="/images/v2_mockup_seattle_dogs.png"
          contentTitle="Seattle Dogs, a Re-Design"
          contentParagraph="A result of research, insights, and design thinking, the re-design gives the user all the tools needed to build trust with the organization."
          contentAnchor="my-work/seattle-dogs"
          color="yellow"
          direction="left"
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
          direction="right"
          
        />
      </Container>
      <Spacer />
      <Container>
        <Card
          imagePath="/images/mockup-visual.png"
          contentTitle="Visual Design Work"
          contentParagraph="A collection of some of my visual design (landing pages, ilustration and motion graphic). "
          contentAnchor="my-work/visual-design"
          color="yellow"
          direction="right"
        />
      </Container>
      <Spacer />
      <Container>
        <Card
          imagePath="/images/meetingpicture.png"
          contentTitle="AI Grammar and Writing Tool"
          contentParagraph="Contributed in the Company's design session to review a number of concepts for the design team. COMING SOON. "
          contentAnchor="my-work/seattle-dogs"
          color="green"
          direction="left"
          button={false}
        />
      </Container>
      
    </>
  );
}
