import styled from "styled-components";
import { media } from "../styles";

const AnimationContainer = styled.div`
  position: ${({ $isOpen }) => ($isOpen ? "fixed" : "absolute")};
  top: 14px;
  right: 0;
  left: 0;
  width: 100%;
  max-width: 96.5vw;
  height: 57px;
  margin: 1rem auto;
  background: linear-gradient(263deg, #ff8c38 16.7%, #72c6e1 95.73%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  border-radius: 10px;

  ${media.bp1024`
    width: 94.5%;
  `}

  ${media.bp700`
    max-width: 87%;
  `}

  ${media.bp400`
    width: 86%;
  `}
`;

const HolidayAnimation = ({ children, isOpen }) => {
  return <AnimationContainer $isOpen={isOpen}>{children}</AnimationContainer>;
};

export default HolidayAnimation;
