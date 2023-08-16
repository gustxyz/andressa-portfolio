export const metadata = {
  title: "Home - Tidy",
  description: "Page description",
};

import Card from "@/components/Card";
import Row from "@/components/Row";
import Container from "@/components/Container";
import FullContainer from "@/components/FullContainer";

/**
 *
 * CONTENT
 *
 **/

//HERO
const HeroTitle = "Improving the donation experience";
const HeroDescription =
  "As a sole UX & UI Designer, I created a end-to-end seamless payment experience that puts user concerns at ease.";
const HeroImgPath = "/images/paymentformhea.png";

const projectStats: ProjectStats[] = [
  {
    title: "ROLE",
    description: "UX/UI Design, Prototyping",
  },
  {
    title: "TOOLS",
    description: "Figma, Google Form, Photoshop",
  },
  {
    title: "PLATFORM",
    description: "Desktop, Mobile",
  },
  {
    title: "DURATION",
    description: "3 weeks",
  },
];

//CONTENT BLOCKS
const ContentBlock1Title = "The project";
const ContentBlock1Description = (
  <>
    Seattle Dogs Homeless Program is a WA State nonprofit that helps dog owners suffering 
    from homelessness in Seattle. They offer food, supplies, vet care and boarding program. 
    The impact caused by this program not only affects the lives of the unhoused owners, 
    but also the lives of these animals too. 
    <br />
    To keep helping pets and their owners, they rely 100% on donations.



  </>
);

const ContentBlock2Title = "Challenge";
const ContentBlock2Description = (
  <>
    {" "}
    The biggest challenge was to understand the true pain points users encounter during the payment 
    form process and design an intuitive and efficient payment form that not only addresses these pain points, 
    but leaves users satisfied at every step of their transaction, building their trust with the organization.
  
  </>
);

const ContentBlock3Title = "Solution";
const ContentBlock3Description = (
  <>
    {" "}
    Based on the research made, the following goals were set: :
    <ul className="list-disc pl-5">
      <li className="pt-5">
      Eliminate unnecessary steps and improve functionality, making it effortless 
      for users to navigate through the form so it is intuitive and simplistic for users of all ages. 
      </li>
      <li className="pt-5">
      For organization transparency, implementation of FAQ accordion in the end of form in case of 
      common questions and pop-up quotes for specific options.
      </li>
      <li className="pt-5">
      In case of monthly donation, option to choose the start date payments.
      </li>
      <br />
      By prioritizing usability, simplicity, and data protection, my design aims to empower 
      users with a seamless payment experience that puts their concerns at ease.
    </ul>
  </>
);

//WILL WIDTH IMAGE
const FullWidthProjectImgPath = "/images/paymentformpicture.png";

//RESEARCH
const ResearchTitle = "What do users think about payment forms?";
const ResearchSubtitle = "";
const ResearchDescription = (
  <>
    First, I did research on cart abandonment rate and I found this quantitate research made in 
    2021 by Baymard Institute (you can find the full Baymard research <a href="https://baymard.com/lists/cart-abandonment-rate#why-users-abandon-their-cart"><u>here</u> </a>). With that, 
    I gathered bullet points from the research to build my own survey. 
    <br />
    <br />
    From the data collected based on the Baymard research,  I created a survey to gather
    more information about donations specifically, and have a quantative data to move foward with solutions. 
    The survey had an extra step for those who already had donated before, 
    so I can understand the pain points from people who have had a donation experience before. 
    The survey had a total of 21 participants, answered throught Google Forms.
    <br />
    <br />
    With the survey results, I collected the following insights:

  </>
);

const researchItems: ResearchItem[] = [
  {
    imgPath: "/images/icon-100.png",
    description:
      "100% participants had donated before.",
  },
  {
    imgPath: "/images/icon-phone.png",
    description:
      "53% participants used desktop device, while 29% used mobile and 18% used both.",
  },
  {
    imgPath: "/images/icon-creditcard.png",
    description:
      "62% participants prefers credit card as donation platform.",
  },
  {
    imgPath: "/images/icon-thumbsup.png",
    description:
      "81% prefers to have all the required information (name, address, card information) presented on a single page, instead of a multiple page step-by-step approach where each section is displayed as you fill it up.",
  },
  {
    imgPath: "/images/icon-frustrated.png",
    description:
      "42% of participants doesn’t like that the website required them to create an account.",
  },
];

const ResearchFootnoteParagraph = (
  <>
    “They defaulted to an amount higher than I was able to give. I am sure they get some people to 
    give more that way, but it made me feel uncomfortable. I had to reduce the default amount back 
    to what I planned to donate, which was an icky feeling - especially when I'm doing something 
    that otherwise makes me happy.”
  </>
);



//Competitor Analysis
const CompetitorAnalysisTitle = "Competitor Analysis";
const CompetitorAnalysisDescription = (
  <>
    I gathered 4 different competitors to analyze: Feeding Pets of the Homeless,
    Do Something, Hotel for Homeless Dogs, and GoFundMe. Not all of them is about homelessness or dogs,
    but the intent here was to analyze specificaly the donation pages. In my research, I simulated donations in all the websites. 
    <br />
    <br />
    They all had different design patterns and functionality, so this was an important step for the design 
    process. For data, I had negative (red) and good (green) notes. With that, I was able to collect different helpful functionalities and features to gather all in one donation form. 

  </>
);

const CompetitorImgPath1 = "/images/comp-homelessfeed.png";
const CompetitorImgPath2 = "/images/comp-dosomething.png";
const CompetitorImgPath3 = "/images/comp-hotel.png";
const CompetitorImgPath4 = "/images/comp-gofund.png";

const ResearchFootnoteAuthor = "— Quote from a user's survey";



//How Might We
const NavigationTitle = "How Might We";
const NavigationDescription = (
  <>
    After collecting all the data from the survey, I gathered the pain points and 
    <br />
    started to brainstorm solutions with the How Might We method.
  </>
);


const NavigationImgPath2 = "/images/howmightwe.png";

//Sketches and Wireframes
const SketchesAndWireframesTitle = "Priorities";
const SketchesAndWireframesDescription = (
  <>
    Next, I separeted on AirTable the priority level of the solutions I brainstormed. 
   <br />
   By doing that, I ensure I'm prioritizing the most important features that can help the user to reach their goals. 
  </>
);

const SketchImgPath1 = "/images/airtable.png";

const PrototypesTitle = "High-Fidelity Wireframes & Prototype";
const PrototypesDescription = (
  <>
    Once I had the mid-fidelity wireframe ready, I was able to apply established
    styles and examine the overall aesthetic feelings and visual balance of the
    application. The organization already have a logo, so I followed the current
    the brand colors, adapting when necessary to follow WCAG 2.0 guidelines to
    guarantee good accessibly.
    <br />
    <br />
    <br />
    Cards and Accordion were used for better use of space and
    navigation flow. Interactive buttons and pictures allows direct
    communication with the user and send the necessary commands to achieve the
    “click” goal.
  </>
);

const PrototypeImgPath = "/images/highfidelity-seattledogs-pages.png";


const PrototypeInteractive =
  "Bellow, you can navigate through the desktop version of the interactive prototype I created";

const PrototypeInteractive2 =
  <>For mobile prototype, you can navigate <a href="https://www.figma.com/proto/65f8qy036va020Zlbv68d9/Seattle-Dogs?page-id=462%3A1846&type=design&node-id=341-987&viewport=1066%2C-578%2C0.12&t=6H7jH8oC4WF6Vlhh-1&scaling=min-zoom&starting-point-node-id=418%3A2710&mode=design"><u>clicking here</u> </a>  </>;

const FinalThoughts1Title = "Final Thoughts";
const FinalThoughts1Description = (
  <>
    Seattle Dogs final design is a result of research, insights and design
    thinking. With the final product, I believe I have met the goals that were
    outlined in the beginning of the design process.
    <br />
    <br />
    User experience was a priority for the redesign, focused on delivering a
    smooth navigation to make sure the user have all the tools needed to build
    the trust wanted with the organization.
  </>
);

const FinalThoughts2Title = "Looking ahead";
const FinalThoughts2Description = (
  <>
    There is still a lot more to explore with Seattle Dogs. One of the things
    I’m looking forward to work on now is the donation page, which is the next
    step process for a complete non-profit website. Donation is important and
    having a functional donation payment form is beyond necessary for the
    website. You can find the case study for the payment form <a className="underline" href="/my-work/payment-form"> here.</a>
  </>
);

/**
 *
 * COMPONENTS
 *
 **/
interface HeroContentProps {
  title: string;
  description: string;
  projectStats: ProjectStats[];
}
const HeroContent = ({
  title,
  description,
  projectStats,
}: HeroContentProps) => {
  return (
    <div className="flex flex-col justify-center items-start lg:items-start lg:ml-16 lg:mt-0 mt-8">
      <h1 className="text-4xl font-bold font-size-extra-extra-large">
        {title}
      </h1>
      <p className="mt-4">{description}</p>

      <div className="flex flex-col lg:flex-row lg:space-x-4 mt-8">
        <ProjectStatsList projectStats={projectStats} />
      </div>
    </div>
  );
};

interface ProjectStats {
  title: string;
  description: string;
}

const ProjectStats = ({ title, description }: ProjectStats) => {
  return (
    <div className="flex flex-col items-start mr-auto">
      <p className="font-bold font-size-regular">{title}</p>
      <p className="font-light font-size-regular-small">{description}</p>
    </div>
  );
};

const ProjectStatsList = ({
  projectStats,
}: {
  projectStats: ProjectStats[];
}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {projectStats.map((projectStats) => (
        <ProjectStats
          key={projectStats.title}
          title={projectStats.title}
          description={projectStats.description}
        />
      ))}
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
    <Row className="mr-auto" direction="left">
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

export default function WorkPage() {
  return (
    <>
      <Spacer />
      <FullContainer className="bg-[color:var(--off-white)]">
        <Container className="py-16 min-h-[500px]">
          <Row direction="left">
            {" "}
            <img
              className="lg:mt-0 mt-4"
              height="350px"
              width="580px"
              src={HeroImgPath}
            />
            <HeroContent
              title={HeroTitle}
              description={HeroDescription}
              projectStats={projectStats}
            />
          </Row>
        </Container>
      </FullContainer>
      <FullContainer className="bg-white">
        <Container className="py-16 min-h-[500px]">
          <div className="text-center ">
            <WorkPageContentBlock
              className="lg:w-[70%] mx-auto"
              header={ContentBlock1Title}
            >
              {ContentBlock1Description}
            </WorkPageContentBlock>
          </div>
          <Row direction="left">
            <WorkPageContentBlock
              className="lg:w-1/2 lg:pr-14 mb-auto"
              header={ContentBlock2Title}
            >
              {ContentBlock2Description}
            </WorkPageContentBlock>
            <WorkPageContentBlock
              className="lg:w-1/2 lg:pl-14 lg:mb-auto"
              header={ContentBlock3Title}
            >
              {ContentBlock3Description}
            </WorkPageContentBlock>
          </Row>
        </Container>
        <Container className="py-16 ">
          <img
            className="w-full"
            height="350px"
            width="580px"
            src={FullWidthProjectImgPath}
          />
        </Container>
      </FullContainer>

      <FullContainer className="bg-[color:var(--off-white)]">
        <Container className="py-16 min-h-[500px]">
          <Row className="items-baseline" direction="left">
            <div className="lg:w-1/2">
              {" "}
              <h1 className="text-4xl font-bold font-size-extra-extra-large">
                {ResearchTitle}
              </h1>
              <h5 className="italic font-size-regular">{ResearchSubtitle}</h5>
            </div>
            <div className="lg:w-1/2 secondary-font mb-auto">
              {" "}
              <p className="pb-8 ">{ResearchDescription}</p>
              <ResearchItemList researchItems={researchItems} />
            </div>
          </Row>
          <div className="w-4/5 bg-white py-8 px-8 mx-auto mt-20 text-center">
            <p className="font-size-large-extra-large italic secondary-font font-normal pb-5">
              {ResearchFootnoteParagraph}
            </p>
            <div className="font-size-large">{ResearchFootnoteAuthor}</div>
          </div>
        </Container>
      </FullContainer>

      <FullContainer className="bg-white">
        <Container className="py-16 min-h-[500px]">
          <Row className="" direction="left">
            <div className="lg:w-1/2 lg:pr-16">
              <WorkPageContentBlock header={CompetitorAnalysisTitle}>
                {CompetitorAnalysisDescription}
              </WorkPageContentBlock>
            </div>
            <div className="lg:w-1/2 w-full justify-around">
              <Row className="pb-4 " direction="left">
                <img className="w-2/6" src={CompetitorImgPath1} />{" "}
                <img className="w-2/6" src={CompetitorImgPath2} />
              </Row>
              <Row className="" direction="left">
                <img className="w-2/6 " src={CompetitorImgPath3} />{" "}
                <img className="w-2/6" src={CompetitorImgPath4} />
              </Row>
            </div>
          </Row>
        </Container>
      </FullContainer>
      <FullContainer className="bg-[color:var(--off-white)]">
        <Container className="py-16 min-h-[500px]">
          <div className="text-center ">
            <WorkPageContentBlock
              className="lg:w-[70%] mx-auto"
              header={NavigationTitle}
            >
              {NavigationDescription}
            </WorkPageContentBlock>
          </div>
          
          <img className="w-full" src={NavigationImgPath2} />
        </Container>
      </FullContainer>
      <FullContainer className="bg-white">
        <Container className="py-16 min-h-[500px]">
          <div className="text-center pb-8">
            <WorkPageContentBlock
              className="lg:w-[70%] mx-auto"
              header={SketchesAndWireframesTitle}
            >
              {SketchesAndWireframesDescription}
            </WorkPageContentBlock>
          </div>
          <img className="mx-auto" width="750" src={SketchImgPath1} />

        </Container>
      </FullContainer>
      <FullContainer className="bg-[color:var(--off-white)]">
        <Container className="py-16 min-h-[500px]">
          <div className="text-center pb-8">
            <WorkPageContentBlock
              className="lg:w-[70%] mx-auto"
              header={PrototypesTitle}
            >
              {PrototypesDescription}
            </WorkPageContentBlock>
          </div>
          <img className="w-full h-[576px] " src={PrototypeImgPath} />
          
          <p className="lg:w-[70%] mx-auto text-center  my-8 font-size-large-extra-large font-bold">
            {PrototypeInteractive}
          </p>
          {/* <img className="w-full h-[402px]" src={PrototypeInteractiveImgPath} /> */}
          <iframe className="w-full h-[402px]"  style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F65f8qy036va020Zlbv68d9%2FSeattle-Dogs%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D112-221%26viewport%3D687%252C-257%252C0.04%26t%3DSgbtPKZNp98ZCyZ3-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D194%253A217%26mode%3Ddesign" allowFullScreen></iframe>
          <p className="lg:w-[70%] mx-auto text-center  my-8 pb-2 font-size-large-extra-large font-bold">
            {PrototypeInteractive2}
          </p>
        </Container>
      </FullContainer>
      <FullContainer className="bg-white">
        <Container className="py-16 min-h-[500px]">
          <Row direction="left" className="">
            <WorkPageContentBlock
              className="lg:w-1/2 mr-16 mb-auto"
              header={FinalThoughts1Title}
            >
              {FinalThoughts1Description}
            </WorkPageContentBlock>
            <WorkPageContentBlock
              className="lg:w-1/2 mb-auto"
              header={FinalThoughts2Title}
            >
              {FinalThoughts2Description}
            </WorkPageContentBlock>
          </Row>
        </Container>
      </FullContainer>
    </>
  );
}
