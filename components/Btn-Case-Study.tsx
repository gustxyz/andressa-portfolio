//write a component for a black anchor button with rounded borders
import Link from "next/link";

export default function BtnCaseStudy({ link, external = false, children }: { link: string, external: boolean | undefined, children: any }) {
  return (
    <>
      {external ?
        <a
          className="primary-font font-bold mr-auto  justify-start font-size-regular bg- text-white rounded-lg px-6 py-3 bg-[color:var(--black)] hover:translate-y-[-2px] transition duration-150 ease-in-out"
          href={link}
        >
          {children}
        </a>
          :
        <Link
          className="primary-font font-bold mr-auto  justify-start font-size-regular bg- text-white rounded-lg px-6 py-3 bg-[color:var(--black)] hover:translate-y-[-2px] transition duration-150 ease-in-out"
          href={link}
        >
          {children}
        </Link>
        }
    </>
  );
}
