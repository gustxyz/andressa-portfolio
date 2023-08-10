import Link from "next/link";
import Logo from "../../public/images/logo.png";

//write a component that centers elements in a column, horizontally and vertically
const Center = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center">{children}</div>
  );
};

//write an array of footer items to be rendered out

export default function Footer() {
  return (
    <footer className="py-8">
      <Center>
        <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
        <div className="secondary-font font-size-regular text-white py-2">
          UX/UI Designer
        </div>
        <div className="flex flex-row pb-3">
          <a
            className="pr-4"
            href={"https://www.behance.net/azdalecio"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={"/images/behance_white_icon.png"}
              alt={"Behance"}
              className="w-[26px]"
              width={27}
              height={27}
            />
          </a>
          <a href={"https://www.linkedin.com/in/andressadalecio/"} target="_blank" rel="noopener noreferrer">
            <img
              src={"/images/linkedin_white_icon.png"}
              alt={"LinkedIn"}
              width={30}
              height={30}
            />
          </a>
        </div>
        <div className="secondary-font font-size-small pb-2  text-white">
          Copyright © 2023 Andressa Dalecio Long
        </div>
        <div className="secondary-font font-size-small  text-white">
          All Rights Reserved
        </div>
      </Center>
    </footer>
  );
}
