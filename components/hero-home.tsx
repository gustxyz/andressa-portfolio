import Row from "@/components/Row";

export default function HeroHome() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative ">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          <Row direction="left">
            <div className="w-full lg:w-1/2">
              <h2 className="hero-hello">Hello!</h2>
              <p className="hero-copy ">
                I'm a <b>UX/UI Designer</b> based in Seattle, WA who <b> create solutions</b> that prioritize real users by focusing
                on <b>accessibility</b>
              </p>
              <div className="flex flex-row">
                <a
                  className="pr-4"
                  href={"https://www.behance.net/azdalecio"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/icon-behance.png"}
                    alt={"Behance"}
                    width={47}
                    height={54}
                  />
                </a>
                <a href={"https://www.linkedin.com/in/andressadalecio/"} target="_blank" rel="noopener noreferrer">
                  <img
                    src={"/images/icon-linkedin.png"}
                    alt={"LinkedIn"}
                    width={47}
                    height={54}
                  />
                </a>
              </div>
            </div>

            <img
              src="/images/hero_image.png"
              alt="Hero image"
              className="w-full lg:w-1/2"
              style={{ maxWidth: "460px" }}
            />
          </Row>
        </div>
      </div>
    </section>
  );
}
