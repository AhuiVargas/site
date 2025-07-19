import React, { Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { mixins, media } from "../styles";
import memoji from "../styles/assets/memoji.png";

import en from "../locales/en";
import es from "../locales/es";

const HeroHeaderStyled = styled.section`
	position: relative;
	padding-top: 8rem;
	overflow: visible;

	.__HeroContent {
		position: relative;
		z-index: 2;

		.__Wrapper {
			width: 100%;
			max-width: 74rem;
			margin: 0px auto 5rem;
			padding: 0px 2rem;

			.__Content {
				a {
					display: inline-block;
					font-weight: 700;
					word-break: break-word;
					padding: 0 0.25rem;
					transition: transform 0.5s ease, color 0.5s ease,
						background-image 0.5s ease;

					&:hover {
						border-radius: 0.5rem;
						transform: scale(1.05);
						background-image: linear-gradient(
							263deg,
							#ff8c38 16.7%,
							#72c6e1 95.73%
						);
						background-clip: padding-box;
						color: ${(props) => props.theme.text.contrast};
					}

					${media.bp1024`
            font-size: 1.2rem;
            margin: 0;
          `}
				}
			}

			.__MemojiContainer {
				${mixins.flexEnd}
				margin-bottom: 3rem;
				${media.bp1024`
          display: block
        `}

				.__Memoji {
					max-width: 15rem;
					line-height: 0;
					${media.bp1024`
            margin: 0px auto;
          `}

					.__Title {
						margin-bottom: 0.25rem;
						font-size: 3rem;
					}

					.__Subtitle {
						font-size: 2rem;
						line-height: 1.3;
						color: transparent;
						background-image: linear-gradient(
							to right,
							#a5b3ae 0%,
							#fdab75 25%,
							#fe8c38 75%,
							#72c6e1 100%
						);
						background-clip: text;
					}
				}
			}
		}
	}
`;

const About = ({}) => {
	const { locale } = useRouter();
	const t = locale === "en" ? en : es;

	return (
		<Fragment>
			<HeroHeaderStyled>
				<div className="__HeroContent">
					<div className="__Wrapper">
						<div className="__MemojiContainer">
							<div className="__Memoji">
								<Image
									src={memoji}
									width={250}
									height={250}
									priority
									alt="memoji image"
								></Image>
							</div>
							<div>
								<h1 className="__Title">{t.title}</h1>
								<h2 className="__Subtitle">{t.subtitle}</h2>
							</div>
						</div>

						<div className="__Content">
							<p>
								{t.p1} <strong>{t.strong1}</strong>.
							</p>

							<p>
								{t.p2} {t.p3}{" "}
								<a
									href="https://www.slalom.com/us/en"
									target="_blank"
									rel="noopener noreferrer"
									className="__Link"
								>
									Slalom
								</a>{" "}
								{t.p4}
							</p>

							<p>
								{t.p5}{" "}
								<a
									href="https://calendly.com/ahuijr/30min"
									target="_blank"
									rel="noopener noreferrer"
									className="__Link"
								>
									{t.link}
								</a>{" "}
								{t.p6}{" "}
								<a
									href="/av-resume-2025.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="__Link"
								>
									{t.resume}
								</a>
								.
							</p>

							<p>{t.p7}</p>
						</div>
					</div>
				</div>
			</HeroHeaderStyled>
		</Fragment>
	);
};

export default About;
