import React, { useEffect, useRef } from "react";
import { Nav, Social, About, Section } from "../components";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.killTweensOf(sectionRefs.current);

    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <main>
      <Nav />

      <div ref={(el) => sectionRefs.current[0] = el}>
        <About />
      </div>

      <div ref={(el) => sectionRefs.current[1] = el}>
      <Section
        titleImageSrc='/Rappi.png'
        subtitle="Frontend Engineer"
        description="This is a description of the project, detailing the main points and outcomes."
        ctaText="See Case Study"
        ctaLink="/case-study"
        imageSrc="/RappiSSS.png"
        backgroundImage="/RappiBG.png"
      />

      </div>

      <div ref={(el) => sectionRefs.current[2] = el}>
      <Section
        titleImageSrc='/Kapital.svg'
        subtitle="Frontend Engineer"
        description="This is a description of the project, detailing the main points and outcomes."
        ctaText="See Case Study"
        ctaLink="/case-study"
        imageSrc="/KapitalSS.png"
        backgroundImage="/KapitalBG.png"
      />
      </div>

      <div ref={(el) => sectionRefs.current[3] = el}>
      <Section
        titleImageSrc='/KingTide.svg'
        subtitle="Frontend Engineer"
        description="This is a description of the project, detailing the main points and outcomes."
        ctaText="See Case Study"
        ctaLink="/case-study"
        imageSrc="/KingTideSS.png"
        backgroundImage="/KingTideBG.png"
      />
      </div>

      <Social />
    </main>
  );
};

export default Home;
