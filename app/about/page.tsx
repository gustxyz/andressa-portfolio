export const metadata = {
  title: "Home - Tidy",
  description: "Page description",
};

import Card from "@/components/Card";
import Row from "@/components/Row";
import Container from "@/components/Container";
import FullContainer from "@/components/FullContainer";
import Link from "next/link";
/**
 *
 * CONTENT
 *
 **/

//HERO
const HeroTitle = "About me";
const Description1 = (
  <>
    Hi, my name is Andressa! I'm a Brazilian UX/UI Designer living in Seattle,
    WA.
    <br />​ I've always known that I wanted to be a designer. With only 13 years
    old, I used to edit pictures, make banners and book covers for web-stories
    as a hobby. Now, years later with{" "}
    <b>2+ years of Digital Design experience</b> and a Graphic Design degree, I
    successfully turned the hobby into my career.
  </>
);

const Description2 = (
  <>
    I'm enjoy the process on creating <b>beautiful and functional</b> designs that
    can help people to achieve their goals. I'm also a <b>problem solver</b> and
    I love to work with people that are as passionate as I am about creating{" "}
    <b>impactful</b> and <b>meaningful</b> products.
  </>
);

const Bubble = `"I’m passionate about helping people and found in design a way to do that while keeping my creativity alive. I create solutions based in empathy and inclusion, designing with equity in mind and optimizing people’s digital experience."`;

const HeroImgPath = "/images/picture_me.jpg";

//write an interface for personal items including an img path and a description
interface PersonalItem {
  imgPath: string;
  header: string;
  description: string;
}

//write a list of personal items
const PersonalItems: PersonalItem[] = [
  {
    imgPath: "/images/traveling.jpg",
    header: "Exploring the world",
    description:
      "I’ve been traveling for 6 years now I love how there’s so much to see and learn with other cultures.",
  },
  {
    imgPath: "/images/sandwich.jpeg",
    header: "Trying new food",
    description:
      "Any restaurant recommendation for me? I'm in! As a vegan, I love trying new food!",
  },
  {
    imgPath: "/images/concert.jpg",
    header: "Concerts",
    description:
      "This might sound cliche, but there’s no lie when I say that I love music. Going to a concert is like going to therapy for me - ha. ",
  },
];

/**
 *
 * COMPONENTS
 *
 **/
interface HeroContentProps {
  title: string;
  description1: React.ReactNode;
  description2: React.ReactNode;
  bubble: string;
}
const HeroContent = ({
  title,
  description1,
  description2,
  bubble,
}: HeroContentProps) => {
  return (
    <div className="flex flex-col justify-center items-start lg:items-start lg:ml-16 lg:mt-0 mt-8">
      <h1 className="text-4xl font-bold font-size-extra-extra-large">
        {title}
      </h1>
      <p className="mt-4">{description1}</p>

      <div className="my-8  font-size-large font-bold secondary-font py-5 px-8 bg-[color:var(--yellow)] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[5px] rounded-bl-[5px] box-shadow-about">
        {bubble}
      </div>
      <p className="mt-4">{description2}</p>
    </div>
  );
};

const Spacer = () => {
  return <div className="h-20"></div>;
};

const WorkPageContentBlock = ({
  header,
  children,
  className,
}: {
  header: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={className}>
      <h4 className="font-extrabold font-size-extra-large mb-8">{header}</h4>
      <p className="font-size-regular-small font-light  secondary-font mb-8">
        {children}
      </p>
    </div>
  );
};

//write an interface for the research item component including an img path and a description
interface ResearchItem {
  imgPath: string;
  description: string;
}

const ResearchItem = ({ imgPath, description }: ResearchItem) => {
  return (
    <Row direction="left">
      <img src={imgPath}></img>
      <div className="pl-6 font-size-regular-small font-normal">
        {description}
      </div>
    </Row>
  );
};

//write a card component with an image on top and a description on the bottom
const ImgCard = ({
  className,
  title,
  description,
  imgpath,
}: {
  className?: string;
  title: string;
  description: string;
  imgpath: string;
}) => {
  return (
    <div className={`${className} bg-white pb-4`}>
      <img className="w-full h-[267px] " src={imgpath} />
      <div className="px-5">
        {" "}
        <h5 className="font-size-large-extra-large pt-4 pb-1 ">{title}</h5>
        <p className="secondary-font font-size-regular-small font-light pr-1">
          {description}
        </p>
      </div>
    </div>
  );
};

//write a component that renders a list of research items based on array of research items
const ResearchItemList = ({
  researchItems,
}: {
  researchItems: ResearchItem[];
}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {researchItems.map((researchItem) => (
        <ResearchItem
          key={researchItem.description}
          imgPath={researchItem.imgPath}
          description={researchItem.description}
        />
      ))}
    </div>
  );
};

//write an array of design skills
const DesignSkills = [
  "UX/UI Design",
  "Acessibility",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
];

const ImgCardBorder = ({
  className,
  title,
  description,
  imgpath,
}: {
  className?: string;
  title: string;
  description: string;
  imgpath: string;
}) => {
  return (
    <div className={`${className} bg-white pb-4 max-w-[330px] lg:mb-auto `}>
      <img className="w-full  " src={imgpath} />
      <div className="p-5 border-2 border-[black]">
        {" "}
        <h5 className="font-size-large-extra-large font-bold">{title}</h5>
        <p className="secondary-font font-size-regular-small font-light pr-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
      <Spacer />
      <FullContainer className="bg-[color:var(--off-white)]">
        <Container className="py-16 min-h-[500px]">
          <Row direction="left">
            {" "}
            <img
              className="lg:mt-0 mt-4 h-[427px]"
              height="427px"
              width="393px"
              src={HeroImgPath}
            />
            <HeroContent
              title={HeroTitle}
              description1={Description1}
              description2={Description2}
              bubble={Bubble}
            />
          </Row>
        </Container>
      </FullContainer>
      <FullContainer className="bg-[color:var(--yellow)] border-t-[1px]  border-b -[1px] border-black">
        <Container className="py-10 ">
          <div className="flex flex-wrap justify-around items-center">
            {DesignSkills.map((skill) => (
              <div className="px-4 py-2 m-2 ">
                <p className="font-size-large-extra-large font-black">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </FullContainer>

      <FullContainer className="bg-white">
        <Container className="py-16 ">
          <div className="text-center ">
            <h4 className="font-extrabold font-size-extra-large mb-8">
              What do I do when I'm not working
            </h4>
          </div>
          <div className="flex lg:justify-around lg:flex-row flex-col justify-center items-center">
            {PersonalItems.map((personalItem) => (
              <ImgCardBorder
                key={personalItem.description}
                imgpath={personalItem.imgPath}
                title={personalItem.header}
                description={personalItem.description}
              />
            ))}
          </div>

          <div className="text-center ">
            <h4 className="font-extrabold font-size-extra-large mt-16 ">
              Drop me a message!
            </h4>
            <p className="font-size-large font-normal py-4 mb-2">
              Let's share ideas & discuss ways to collaborate!
            </p>
            <Link
              href="/contact-me"
              className="bg-[var(--yellow)] p-3 rounded-lg font-size-regular font-regular"
            >
              CONTACT ME
            </Link>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
