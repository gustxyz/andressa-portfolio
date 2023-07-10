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
          contentTitle="Project Title"
          contentParagraph="The challenge of redesigning a non-profit website to build trust online with users"
          contentAnchor="my-work/seattle-dogs"
          color="yellow"
          direction="left"
        />
      </Container>
      <Spacer />
      <Container>
        <Card
          imagePath="/images/project_card_1.png"
          contentTitle="Project Title"
          contentParagraph="The challenge of redesigning a non-profit website to build trust online with users"
          contentAnchor="my-work/seattle-dogs"
          color="white"
          direction="right"
        />
      </Container>
      <Spacer />
    </>
  );
}
