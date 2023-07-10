//write a card component that is full width on desktop and half width on mobile with rounded borders
import Row from "@/components/Row";
import BtnCaseStudy from "./Btn-Case-Study";

//write a text component with a header, paragraph, and anchor all aligned vertically
const Text = ({
  header,
  paragraph,
  anchor,
}: {
  header: string;
  paragraph: string;
  anchor: string;
}) => {
  return (
    <div className="my-auto flex flex-col lg:w-2/6 ">
      <h3 className="font-size-extra-large font-bold mb-4">{header}</h3>
      <p className="font-size-large mb-8">{paragraph}</p>
      <BtnCaseStudy link={anchor} />
    </div>
  );
};

//write an interface for the card component
interface CardProps {
  direction: string;
  color: string;
  imagePath: string;
  contentTitle: string;
  contentParagraph: string;
  contentAnchor: string;
}

//write a function that returns a color class depending on a color string passed in
const getColor = (color: string) => {
  if (color === "yellow") return "bg-[color:var(--yellow)]";
  else if (color === "white") return "bg-white";
  return null;
};

export default function Card({
  direction,
  color,
  imagePath,
  contentTitle,
  contentAnchor,
  contentParagraph,
}: CardProps) {
  return (
    <section
      className={`flex ${getColor(
        color
      )} min-h-[425px] rounded-lg shadow-lg pl-7 pr-7  py-6 w-full `}
    >
      <Row className="sm:max-lg:flex-col-reverse" direction={direction}>
        <img
          className="lg:mt-0 mt-4"
          height="350px"
          width="580px"
          src={imagePath}
        />
        <Text
          header={contentTitle}
          paragraph={contentParagraph}
          anchor={contentAnchor}
        />
      </Row>
    </section>
  );
}
