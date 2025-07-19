import { useEffect, useRef, useState, useContext } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { ThemeContext } from "../pages/providers";
import {
	Nav,
	Social,
	About,
	Section,
	SectionMobile,
	WorkCard,
} from "../components";

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
	transform: translate(-50%, -50%) rotate(180deg);
`;

const HomeContainer = styled.div`
	overflow: hidden;
	display: block;
	position: relative;
`;

const sectionData = [
	{
		titleImageSrc: "/Rappi.png",
		subtitle: "Unicorn startup fintech/delivery",
		description:
			"Tech stack: Angular, RXJS, NGRX, Typescript, GraphQL, Material Components, Single SPA, HTML, CSS",
		ctaLink: "https://www.rappipay.com/",
		imageSrc: "/RappiSS.png",
		backgroundImage: "/RappiBG.png",
	},
	{
		titleImageSrc: "/Kapital.svg",
		subtitle: "Fintech, AI, banking and internal tooling",
		description:
			"Tech stack: NextJS, Typescript, Redux, React, Tailwind, Git, Bitbucket, REST",
		ctaLink: "https://www.kapital.cc/productos/kapital-ai",
		imageSrc: "/KapitalSS.png",
		backgroundImage: "/KapitalBG.png",
	},
	{
		titleImageSrc: "/KingTide.svg",
		subtitle: "KT Venture capital studio",
		description:
			"Tech stack: React, NextJS, Styled Components, GraphQL, REST, HTML, CSS.",
		ctaLink: "https://www.kingtide.com/",
		imageSrc: "/KingTideSS.png",
		backgroundImage: "/KingTideBG.png",
	},
	{
		titleImageSrc: "/Lhopital.png",
		subtitle: "Business Site",
		description: "Tech stack: NextJS, Tailwind, TS, SSR, Resend.",
		ctaLink: "https://www.lhopital-fr.mx/",
		imageSrc: "/LhopitalSS.png",
		backgroundImage: "/LhopitalBG.png",
	},
];

const Home = () => {
	const sectionRefs = useRef([]);
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isMobile, setIsMobile] = useState(false);
	const { value: isDarkMode, mounted } = useContext(ThemeContext);

	const { locale } = useRouter();
	const t = locale === "en" ? en : es;

	useEffect(() => {
		if (!mounted) return;

		const handleMouseMove = (event) => {
			setCursorPosition({
				x: event.clientX,
				y: event.clientY,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mounted]);

	useEffect(() => {
		if (!mounted) return;

		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [mounted]);

	useEffect(() => {
		if (!mounted) return;

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
	}, [mounted]);

	if (!mounted) {
		return (
			<HomeContainer>
				<Nav />
				<About />
				<div>
					<WorkCard />
				</div>
				{sectionData.map((section, index) => (
					<div key={index}>
						<Section
							titleImageSrc={section.titleImageSrc}
							subtitle={section.subtitle}
							description={section.description}
							ctaText={t.cta}
							ctaLink={section.ctaLink}
							imageSrc={section.imageSrc}
							backgroundImage={section.backgroundImage}
						/>
					</div>
				))}
				<Social />
			</HomeContainer>
		);
	}

	return (
		<HomeContainer>
			{isDarkMode && (
				<Cursor
					style={{
						top: `${cursorPosition.y}px`,
						left: `${cursorPosition.x}px`,
					}}
				/>
			)}
			<Nav />
			<About />
			<div ref={(el) => (sectionRefs.current[0] = el)}>
				<WorkCard />
			</div>

			{sectionData.map((section, index) => (
				<div key={index} ref={(el) => (sectionRefs.current[index + 1] = el)}>
					{isMobile ? (
						<SectionMobile
							titleImageSrc={section.titleImageSrc}
							subtitle={section.subtitle}
							description={section.description}
							ctaText={t.cta}
							ctaLink={section.ctaLink}
							imageSrc={section.imageSrc}
							backgroundImage={section.backgroundImage}
						/>
					) : (
						<Section
							titleImageSrc={section.titleImageSrc}
							subtitle={section.subtitle}
							description={section.description}
							ctaText={t.cta}
							ctaLink={section.ctaLink}
							imageSrc={section.imageSrc}
							backgroundImage={section.backgroundImage}
						/>
					)}
				</div>
			))}

			<Social />
		</HomeContainer>
	);
};

export default Home;
