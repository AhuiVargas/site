import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { Nav, Social, About, Section, SectionMobile, WorkCard } from "../components";

import en from "../locales/en";
import es from "../locales/es";

gsap.registerPlugin(ScrollTrigger);

const Cursor = styled.div`
  position: fixed;
  width: 37.5rem;
  height: 37.5rem;
  background: url(/pointer.png) no-repeat center center;
  background-size: cover;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
`;

const HomeContainer = styled.div`
    overflow: hidden;
    display: block;
    position: relative;
`;

const Home = () => {
  const sectionRefs = useRef([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.killTweensOf(sectionRefs.current);
  
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: section,
            start: "center 100%",
            end: "center 10%",
            scrub: 1,
            markers: false,
          },
          ease: "power3.out",
        }
      );
    });
  }, []);
  

  return (
    <main>
      <HomeContainer>
        <Cursor
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
          }}
        />
        <Nav />
        <About />
        <div ref={(el) => (sectionRefs.current[0] = el)}>
          <WorkCard />
        </div>

        <div ref={(el) => (sectionRefs.current[1] = el)}>
          {isMobile ? (
            <SectionMobile
            titleImageSrc="/Rappi.png"
            subtitle="Unicorn startup fintech/delivery"
            description="Tech stack: Angular, RXJS, NGRX, Typescript, GraphQL, Material Components, Single SPA, HTML, CSS"
            ctaText={t.cta}
            ctaLink="https://www.rappipay.com/"
            imageSrc="/RappiSS.png"
            backgroundImage="/RappiBG.png"
            />
          ) : (
            <Section
              titleImageSrc="/Rappi.png"
              subtitle="Unicorn startup fintech/delivery"
              description="Tech stack: Angular, RXJS, NGRX, Typescript, GraphQL, Material Components, Single SPA, HTML, CSS"
              ctaText={t.cta}
              ctaLink="https://www.rappipay.com/"
              imageSrc="/RappiSS.png"
              backgroundImage="/RappiBG.png"
            />
          )}
        </div>

        <div ref={(el) => (sectionRefs.current[2] = el)}>
          {isMobile ? (
            <SectionMobile
            titleImageSrc="/Kapital.svg"
            subtitle="Fintech, AI, banking and internal tooling"
            description="Tech stack: NextJS, Typescript, Redux, React, Tailwind, Git, Bitbucket, REST"
            ctaText={t.cta}
            ctaLink="https://www.kapital.cc/productos/kapital-ai"
            imageSrc="/KapitalSS.png"
            backgroundImage="/KapitalBG.png"
            />
          ) : (
            <Section
              titleImageSrc="/Kapital.svg"
              subtitle="Fintech, AI, banking and internal tooling"
              description="Tech stack: NextJS, Typescript, Redux, React, Tailwind, Git, Bitbucket, REST"
              ctaText={t.cta}
              ctaLink="https://www.kapital.cc/productos/kapital-ai"
              imageSrc="/KapitalSS.png"
              backgroundImage="/KapitalBG.png"
            />
          )}
        </div>

        <div ref={(el) => (sectionRefs.current[3] = el)}>
          {isMobile ? (
            <SectionMobile
              titleImageSrc="/KingTide.svg"
              subtitle="KT Venture capital studio"
              description="Tech stack: React, NextJS, Styled Components, GraphQL, REST, HTML, CSS."
              ctaText={t.cta}
              ctaLink="https://www.kingtide.com/"
              imageSrc="/KingTideSS.png"
              backgroundImage="/KingTideBG.png"
            />
          ) : (
            <Section
            titleImageSrc="/KingTide.svg"
            subtitle="KT Venture capital studio"
            description="Tech stack: React, NextJS, Styled Components, GraphQL, REST, HTML, CSS."
            ctaText={t.cta}
            ctaLink="https://www.kingtide.com/"
            imageSrc="/KingTideSS.png"
            backgroundImage="/KingTideBG.png"
            />
          )}
        </div>

        <Social />
      </HomeContainer>
    </main>
  );
};

export default Home;
