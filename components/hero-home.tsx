import Link from "next/link";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo01 from "@/components/modal-video-01";
import Row from "@/components/Row";
//create a row component that uses flex to align two elements, and on mobile align vertically

export default function HeroHome() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative ">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          {/* Hero content */}

          <Row direction="left">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <h2 className="hero-hello">Hello!</h2>
              <p className="hero-copy ">
                I'm a <b>UX/UI Designer</b> based in Seattle, WA who
                <b>create solutions</b> that prioritize real users by focusing
                on <b>accessibility</b>
              </p>
              <div className="flex flex-row">
                <a
                  className="pr-4"
                  href={"#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/behance_icon.png"}
                    alt={"Behance"}
                    width={47}
                    height={54}
                  />
                </a>
                <a href={"#"} target="_blank" rel="noopener noreferrer">
                  <img
                    src={"/images/linkedin_icon.png"}
                    alt={"LinkedIn"}
                    width={47}
                    height={54}
                  />
                </a>
              </div>
            </div>

            {/* Hero image */}
            {/* <ModalVideo01
              thumb={VideoThumb}
              thumbWidth={540}
              thumbHeight={405}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080} />             */}
            <img
              src="/images/hero_image.png"
              alt="Hero image"
              className="w-full lg:w-1/2"
              data-aos="fade-left"
              data-aos-delay="200"
              style={{ maxWidth: "460px" }}
            />
          </Row>
          {/* Content */}
        </div>
      </div>
    </section>
  );
}
