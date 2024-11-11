import styled from "styled-components";

const WorkCardContainer = styled.div`
  background-color: #000;
  padding: 1rem;
  max-width: 600px;
  margin: 2rem auto 0;
  border: 1px solid #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
  }
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
  color: #fff;
  font-size: 1.2rem;
  // font-weight: 300;
  line-height: 1.6;
`;

const WorkCard = () => {
  return (
    <>
      <SectionTitle>{`Where I've Worked`}</SectionTitle>
      <WorkCardContainer>
        <Description>
          Here’s a brief overview of my professional journey, highlighting my roles and experiences that shaped my career:
        </Description>
      </WorkCardContainer>
    </>
  );
};

export default WorkCard;
