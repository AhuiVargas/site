import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100vw;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  padding: 2rem;
  z-index: 10;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  z-index: 1;
`;

const TitleImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 6rem;
  object-fit: contain;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  color: #fff;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #fff;
  margin: 0;
`;

const CTAButton = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 200;
  font-size: 1rem;
  color: #fff;
  border: 1px solid #fff;
  text-transform: uppercase;
  text-align: center;
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 26rem;
  border-radius: 1rem;
  object-fit: cover;
`;

const SectionMobile = ({
  titleImageSrc,
  subtitle,
  description,
  ctaText,
  ctaLink,
  imageSrc,
  backgroundImage,
}) => {
  return (
    <SectionContainer>
      <CardContainer $backgroundImage={backgroundImage}>
        <RightColumn>
          <Image src={imageSrc} alt="Mobile Section Image" />
        </RightColumn>
        <LeftColumn>
          <TitleImage src={titleImageSrc} alt="Title Image" />
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
          <CTAButton href={ctaLink} target="_blank" rel="noopener noreferrer">
            {ctaText}
          </CTAButton>
        </LeftColumn>
      </CardContainer>
    </SectionContainer>
  );
};

export default SectionMobile;
