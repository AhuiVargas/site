// components/HolidayAnimation.js
import styled, { keyframes } from 'styled-components';
import { mixins, media } from '../styles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const AnimationContainer = styled.div`
  position: fixed;
  top: 14px;
  right: 0;
  left: 0;
  width: 100%;
  max-width: 96.5vw;
  height: 3.5rem; /* Initial flexible height */
  margin: 1rem auto;
  background: linear-gradient(263deg,#ff8c38 16.7%,#72c6e1 95.73%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  /* Blurred edge effect */
  border-radius: 10px;

  /* Responsive adjustments */

  ${media.bp1024`
  width: 94.5%;
  height: 3.5rem; /* Initial flexible height */
  `}

  ${media.bp700`
  max-width: 91%;
  `}

  ${media.bp400`
  width: 86%;
  `}
`;





const HolidayAnimation = ({ children }) => {
  return <AnimationContainer>{children}</AnimationContainer>;
};

export default HolidayAnimation;
