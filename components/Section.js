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
  z-index: 10; // Ensures CardContainer stays on top
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleImage = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
  max-height: 8rem;
  object-fit: contain;
`;

const Subtitle = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.625rem;
    color: #fff;
`;

const Description = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
    letter-spacing: 0;
    text-align: left;
    color: #fff;
    max-width: 22.375rem;
`;

const CTAButton = styled.a`
  align-self: start;
  padding: .5rem .3rem;
  border-radius: 0.5rem;
  font-weight: 200;
  font-size: 1.5rem;
  color: #fff;
  border: 1px solid #fff;
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

const Section = ({ titleImageSrc, subtitle, description, ctaText, ctaLink, imageSrc, backgroundImage }) => {
  return (
    <SectionContainer>
      <CardContainer backgroundImage={backgroundImage}>
        <LeftColumn>
          <TitleImage src={titleImageSrc} alt="Title Image" />
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
          <CTAButton href={ctaLink}>{ctaText}</CTAButton>
        </LeftColumn>
        <RightColumn>
          <Image src={imageSrc} alt="Section Image" />
        </RightColumn>
      </CardContainer>
    </SectionContainer>
  );
};

export default Section;
