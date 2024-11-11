import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Nav, Social, About, Section, SectionMobile } from "../components";  // Import SectionMobile
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Cursor component to handle the custom cursor behavior
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

  // Update cursor position on mouse move
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

  // Detect screen width to toggle mobile layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint to your preference
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP scroll animations for sections
  useEffect(() => {
    gsap.killTweensOf(sectionRefs.current);
  
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100, scale: 0.9 }, // Start with lower opacity, y offset, and smaller scale
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: section,
            start: "center 100%",   // Start fade as section approaches the center
            end: "center 10%",      // Complete fade and scale when section is centered
            scrub: 1,               // Smooth scrub effect for more dynamic scrolling
            markers: false,          // Optional: visualize start and end points
          },
          ease: "power3.out",       // Add easing for a more pronounced fade and scale effect
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

        {/* Sections with animated scroll */}
        {/* <div ref={(el) => (sectionRefs.current[0] = el)}> */}
          <About />
        {/* </div> */}

        <div ref={(el) => (sectionRefs.current[1] = el)}>
          {isMobile ? (
            <SectionMobile
            titleImageSrc="/Rappi.png"
            subtitle="Unicorn startup fintech/delivery"
            description="Tech stack: Angular, RXJS, NGRX, Typescript, GraphQL, Material Components, Single SPA, HTML, CSS"
            ctaText="SEE COMPANY SITE"
            ctaLink="https://www.rappipay.com/"
            imageSrc="/RappiSS.png"
            backgroundImage="/RappiBG.png"
            />
          ) : (
            <Section
              titleImageSrc="/Rappi.png"
              subtitle="Unicorn startup fintech/delivery"
              description="Tech stack: Angular, RXJS, NGRX, Typescript, GraphQL, Material Components, Single SPA, HTML, CSS"
              ctaText="SEE COMPANY SITE"
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
            ctaText="SEE COMPANY SITE"
            ctaLink="https://www.kapital.cc/productos/kapital-ai"
            imageSrc="/KapitalSS.png"
            backgroundImage="/KapitalBG.png"
            />
          ) : (
            <Section
              titleImageSrc="/Kapital.svg"
              subtitle="Fintech, AI, banking and internal tooling"
              description="Tech stack: NextJS, Typescript, Redux, React, Tailwind, Git, Bitbucket, REST"
              ctaText="SEE COMPANY SITE"
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
              ctaText="SEE COMPANY SITE"
              ctaLink="https://www.kingtide.com/"
              imageSrc="/KingTideSS.png"
              backgroundImage="/KingTideBG.png"
            />
          ) : (
            <Section
            titleImageSrc="/KingTide.svg"
            subtitle="KT Venture capital studio"
            description="Tech stack: React, NextJS, Styled Components, GraphQL, REST, HTML, CSS."
            ctaText="SEE COMPANY SITE"
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
