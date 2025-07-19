import styled from "styled-components";
import { useRouter } from "next/router";

import en from "../locales/en";
import es from "../locales/es";

const WorkCardContainer = styled.div`
  background-color: ${(props) => props.theme.rgba.menu};
  padding: 1rem;
  max-width: 600px;
  margin: 2rem auto 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  line-height: 1.3;
  max-width: 300px;
  margin: 1rem auto 2rem auto;  margin: 0, auto;
  text-decoration: none;
  transition: ${(props) => props.theme.transition};
  color: transparent;
  background-image: linear-gradient(263deg, #ff8c38 16.7%, #72c6e1 95.73%);
  background-clip: text;
`;

const Description = styled.p`
        color: ${(props) => props.theme.text.anchor};
  font-size: 1.2rem;
  line-height: 1.6;
`;

const WorkCard = () => {

  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;

  return (
    <>
      <SectionTitle>{t.title2}</SectionTitle>
      <WorkCardContainer>
        <Description>
          {t.p8}
        </Description>
      </WorkCardContainer>
    </>
  );
};

export default WorkCard;
