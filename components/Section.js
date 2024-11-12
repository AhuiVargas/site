import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100vw;
  min-height: 95vh;
  padding: 3rem 2rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const CardContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  width: 100%;
  max-width: 42rem;
  max-height: 38rem;
  min-height: 38rem;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 3.125rem;
  padding: 5rem;
  z-index: 10;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const TitleImage = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
  max-height: 7rem;
  object-fit: contain;
`;

const Subtitle = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.625rem;
    color: #fff;
    margin: 0;
`;

const Description = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
    letter-spacing: 0;
    text-align: left;
    color: #fff;
    max-width: 22.375rem;
    margin: 0;
`;

  const CTAButton = styled.a`
  align-self: start;
  padding: 1rem;
  align-self: start;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 200;
  font-size: 1.1rem;
  color: #fff;
  border: 1px solid #fff;
  background: transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.5s ease;
  text-transform: uppercase;

  &:hover {
    color: #fff;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(263deg, #ff8c38 16.7%, #72c6e1 95.73%);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.6s ease; /* Smooth opacity transition */
  }

  &:hover:before {
    opacity: 1; /* Fade in the gradient background */
  }

`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  right: -120%;
  transform: translateY(-50%); 
  max-width: 200%;     
  height: auto;
  border-radius: 1rem;
  object-fit: cover;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-50%) scale(1.05);
  }
`;

const SeparatorImage = styled.img`
  max-width: 100px;
  height: auto;
`;

const Section = ({ titleImageSrc, subtitle, description, ctaText, ctaLink, imageSrc, backgroundImage }) => {
  return (
    <SectionContainer>
      <CardContainer backgroundImage={backgroundImage}>
        <LeftColumn>
          <TitleImage src={titleImageSrc} alt="Title Image" />
          <Subtitle>{subtitle}</Subtitle>
          <SeparatorImage src="/separator.svg" />
          <Description>{description}</Description>
          <CTAButton href={ctaLink} target="_blank" rel="noopener noreferrer">{ctaText}</CTAButton>
        </LeftColumn>
        <RightColumn>
          <Image src={imageSrc} alt="Section Image"/>
        </RightColumn>
      </CardContainer>
    </SectionContainer>
  );
};

export default Section;
