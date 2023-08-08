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
const HeroTitle = "Seattle Dogs";
const HeroDescription =
  "Sole UX & UI Designer: The process of re-designing an entire website to help users build trust with the organization.";
const HeroImgPath = "/images/v2_mockup_seattle_dogs.png";

const projectStats: ProjectStats[] = [
  {
    title: "ROLE",
    description: "UX/UI Design, Prototyping",
  },
  {
    title: "TOOLS",
    description: "Figma, Zoom, Photoshop",
  },
  {
    title: "PLATFORM",
    description: "Desktop, Mobile",
  },
  {
    title: "DURATION",
    description: "6 months",
  },
];

//CONTENT BLOCKS
const ContentBlock1Title = "The project";
const ContentBlock1Description = (
  <>
    Seattle Dogs Homeless Program is a WA State nonprofit that helps dog owners
    suffering from homelessness in Seattle. They offer food, supplies, vet care
    and boarding program. The impact caused by this program not only affects the
    lives of the unhoused owners, but also the lives of these animals too. It's
    a double win!
  </>
);

const ContentBlock2Title = "Problem";
const ContentBlock2Description = (
  <>
    {" "}
    The current website is underdeveloped and does not allow the users to
    navigate easily, making it difficult for them to have information about the
    organization.
    <br />
    <br />
    The challenge was to discover what influences the users to navigate the
    website, what kind of information they’re looking for and what motivates
    them to donate online."
  </>
);

const ContentBlock3Title = "Solution";
const ContentBlock3Description = (
  <>
    {" "}
    Re-design Seattle Dogs website with the following goals:
    <ul className="list-disc pl-5">
      <li className="pt-5">
        Improve navigation and function by redesigning all existing pages,
        Increasing the quality of the website and attracting new and old users.
      </li>
      <li className="pt-5">
        Create pages with the right information so the user can feel trust and
        confidence towards the non-profit.
      </li>
    </ul>
  </>
);

//WILL WIDTH IMAGE
const FullWidthProjectImgPath = "/images/homepagehghfidelity.png";

//RESEARCH
const ResearchTitle = "The Research";
const ResearchSubtitle = "Interview and survey";
const ResearchDescription = (
  <>
    I conducted <b>interviews</b>, <b>surveys</b> and <b>online research</b> to
    understand user’s motivations and behaviors. Total of 23 adult participants who had made a donation 
    before or have interest in donating in the future. 
    <br />
    Questions like: “What motivates
    the users to donate and how do they make decisions to do so?” “What
    information do they need to trust the organization?” was made as an
    important step to determine which user problems are the most important to
    solve and why, making it possible to create solutions that address those
    problems. Throught research, I collected the following data:
  </>
);
const researchItems: ResearchItem[] = [
  {
    imgPath: "/images/sad2_emoji.png",
    description:
      "100% of donors participants often feels frustrated if they don’t know where their money is going towards",
  },
  {
    imgPath: "/images/thumbsup_emoji.png",
    description:
      "100% of the participants think that reading about experiences from volunteers, donors & supporters is important.",
  },
  {
    imgPath: "/images/smile_emoji.png",
    description:
      "25% of participants feel encouraged to donate if there’s a possibility of talking with the founder",
  },
  {
    imgPath: "/images/sad-emoji.png",
    description:
      "The participants who’ve never donated before have never found an organization they truly trust",
  },
  {
    imgPath: "/images/frustraded-emoji.png",
    description:
      "20% of participants had a frustrating donation experience because the website wasn't clear on where they should click to start the donation process",
  },
];
const ResearchFootnoteParagraph = (
  <>
    “Clear communication is essential. I tried to help in the past but they were
    not very good explaining things or did not have time/people to do this
    function. It's hard to send money out of state to an organization we find
    online if we are not able to communicate clearly with the people
    responsible.”
  </>
);

//Competitor Analysis
const CompetitorAnalysisTitle = "Competitor Analysis";
const CompetitorAnalysisDescription = (
  <>
    I analyzed Pets of the Homeless website, a direct competitor that is also
    trying to solve the same problem as us. Through research, I noticed that
    multiple pages about the organization is easily accessible through the
    navigation menu bar. Heavy use of pictures is also present, giving to the
    user multiple visual information at once: informing past-activities, where
    the donation is going towards and if it’s real or not. After analyzing the website,
    I divided post-its in 3 sections:<b> Navigation Flow, Positive/Trust Building 
    and Not Positive.</b> By conducting
    competitor analysis, I was able to identify key information about
    preliminary UI designs, how to avoid functionality that is not useful and
    consider design patterns and trends.
  </>
);

const CompetitorImgPath1 = "/images/image_board.jpg";
const CompetitorImgPath2 = "/images/image_notpositive.jpg";
const CompetitorImgPath3 = "/images/image_positive.jpg";
const CompetitorImgPath4 = "/images/afterlightImage.jpg";

const ResearchFootnoteAuthor = "— Quote from a user's survey";

//INSIGHTS
const InsightsTitle = "Insights";
const InsightsDescription = (
  <>
    Either the business and the user wants the same thing: to build trust. <b>Trust
    and transparency are important values to encourage donations.</b> The research
    data showed that users feel more confident donating when they feel closer to
    or moved by the cause they’re helping, by having a good and direct
    communication with the organization. That can be achieved through pictures
    and videos, pages with helpful informations and a form of contact available.{" "}
  </>
);
const InsightsImgPath = "/images/teste.png";

//NAVIGATION
const NavigationTitle = "The navigation flow";
const NavigationDescription = (
  <>
    From the data I collected, I was able to decide what actions and features
    were crucial and beneficial for the website navigation and designed a
    sitemap around these conclusions. Emphasis was put on information
    architecture to create the most natural and fluid experience for users, by
    separating information and actions.
  </>
);

const NavigationImgPath1 = "/images/action_information.png";
const NavigationImgPath2 = "/images/research-img.png";

//Navigation Improvement
const NavigationImprovementTitle = "Navigation Improvement";
const NavigationImprovementDescription = (
  <>
    The current website is underdeveloped, not allowing the users to navigate
    easily. One of the main reasons is the current site map, which is one of the
    biggest changes I made:
  </>
);

const NavigationImprovementContent1Title = "Photo and Video page";
const NavigationImprovementContent1Description =
  "Instead of having individual page for Photos and Videos like in the old site, I included those in the “About Us” and “How we Help” page, so the user have both text and picture information about the organization in the same page, decreasing the user research time in the website.";

const NavigationImprovementContent2Title = "Forms";
const NavigationImprovementContent2Description =
  "Similar change was made with the Forms page from the old website version. Instead of having an exclusive page for it, the forms were distributed in their proper pages. For example, the Volunteer form now is found in the Volunteer page, Foster form in the Foster page and so on. That way, the user have all information needed in one page instead of going to a different page to find the form they’re looking for.";

const NavigationImprovementImgPath1 = "/images/research-img.png";
const NavigationImprovementImgPath2 = "/images/research-img.png";

//Sketches and Wireframes
const SketchesAndWireframesTitle = "Sketches and Wireframes";
const SketchesAndWireframesDescription = (
  <>
    The next step in my process was creating the sketches. It enables me to
    examine my ideas before putting everything in the process of digitizing,
    allowing me to make quick changes and explore my ideas.
  </>
);

const SketchImgPath1 = "/images/research-img.png";
const SketchImgPath2 = "/images/research-img.png";

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
    For the Prototype, Cards and Accordion were used for better use of space and
    navigation flow. Interactive buttons and pictures allows direct
    communication with the user and send the necessary commands to achieve the
    “click” goal.
  </>
);
const PrototypeInteractive =
  "Bellow, you can navigate through the desktop interactive prototype I created";

const PrototypeInteractiveImgPath = "/images/research-img.png"; 

const PrototypeInteractive2 =
  "Bellow, you can navigate through the desktop interactive prototype I created";

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
    website You can find the case study for the payment form here.
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
              className="lg:w-1/2 lg:pr-14"
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
              header={InsightsTitle}
            >
              {InsightsDescription}
            </WorkPageContentBlock>
          </div>
          <img className="w-full h-[576px]" src={InsightsImgPath} />
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
          <img className="w-full h-[576px] mb-8" src={NavigationImgPath1} />
          <img className="w-full h-[576px]" src={NavigationImgPath2} />
        </Container>
      </FullContainer>
      <FullContainer className="bg-[color:var(--grey-white)]">
        <Container className="py-16 min-h-[500px]">
          
          <div className="text-center ">
            <WorkPageContentBlock
              className="lg:w-[70%] mx-auto"
              header={NavigationImprovementTitle}
            >
              {NavigationImprovementDescription}
            </WorkPageContentBlock>
          </div>
          <Row direction="left">
            <ImgCard
              className="lg:w-1/2 lg:mb-auto lg:mr-14"
              title={NavigationImprovementContent1Title}
              imgpath={NavigationImprovementImgPath1}
              description={NavigationImprovementContent1Description}
            />
            <ImgCard
              className="lg:w-1/2 lg:mb-auto"
              title={NavigationImprovementContent2Title}
              imgpath={NavigationImprovementImgPath2}
              description={NavigationImprovementContent2Description}
            />
          </Row>
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
          <img className="w-full h-[576px] " src={SketchImgPath1} />
          <p className="lg:w-[70%] mx-auto text-center secondary-font font-light my-8">
            Next, I started to add more details and precisions to the sketches
            by turning them into mid-fidelity wireframes. With that, I can run
            early tests and discover changes before I start building the high
            fidelity prototype.{" "}
          </p>
          <img className="w-full h-[576px]" src={SketchImgPath2} />
        </Container>
      </FullContainer>
      <FullContainer className="bg-white">
        <Container className="py-16 min-h-[500px]">
          <div className="text-center pb-8">
            <WorkPageContentBlock
              className="lg:w-[70%] mx-auto"
              header={PrototypesTitle}
            >
              {PrototypesDescription}
            </WorkPageContentBlock>
          </div>

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
