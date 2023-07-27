import Link from "next/link";
import Logo from "../../public/images/logo.png";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

// create an intrface for navbar links
interface NavbarLink {
  title: string;
  href: string;
}

// create an array of navbar links
const navbarLinks: NavbarLink[] = [
  {
    title: "My Work",
    href: "/my-work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Resume",
    href: "/assets/andressa_dalecio_long_resume.pdf",
  },
  {
    title: "Contact Me",
    href: "/contact-me",
  },
];

//creat

//create a component that accepts an array of navbar links and renders them in a row
const NavLinks = ({ links }: { links: NavbarLink[] }) => {
  return (
    <ul className="flex grow justify-end flex-wrap items-center">
      {links.map((link) => (
        <li key={link.title}>
          <Link
            href={link.href}
            className="hover:translate-y-[-2px]  nav-link  px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default function Header({ mode = "dark" }: { mode?: string }) {
  return (
    <header className={`absolute w-full z-30 ${mode !== "light" && "dark"}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <Link
            href={"/"}
            className="hover:translate-y-[-2px]  nav-link  transition duration-150 ease-in-out"
          >
            <div className="shrink-0 mr-4">
              <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
            </div>
          </Link>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            {/* <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link href="/pricing" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li>
                <Link href="/about" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About</Link>
              </li>
              <li>
                <Link href="/blog" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li>
                <Link href="/wall-of-love" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Wall of Love</Link>
              </li> */}
            {/* 1st level: hover */}
            {/* <Dropdown title="Resources"> */}
            {/* 2nd level: hover */}
            {/* <li>
                  <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">404</Link>
                </li>
                <li>
                  <Link href="/support" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Support</Link>
                </li>
              </Dropdown> */}
            {/* </ul> */}

            {/* Desktop sign in links */}
            {/* <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/request-demo"
                  className="font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group"
                >
                  Request Demo{" "}
                  <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </li>
            </ul> */}
            <NavLinks links={navbarLinks} />
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
