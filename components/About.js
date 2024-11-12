import React, { Fragment } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import styled from "styled-components";
import { mixins, media } from '../styles';
import memoji from '../styles/assets/memoji.png'

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
          &:hover {
            font-weight: 800;
            word-break: break-all;
            background-image: linear-gradient(263deg,#ff8c38 16.7%,#72c6e1 95.73%);
            background-clip: padding-box;
            color: ${(props) => props.theme.text.contrast};
            padding: 0px 0.25rem;
          }
          ${media.bp1024`
            font-size: 1.2rem;
            font-weight: 800;
            word-break: break-all;
            background-color: linear-gradient(263deg,#ff8c38 16.7%,#72c6e1 95.73%);
            background-clip: padding-box;
            color: ${(props) => props.theme.text.contrast};
            padding: 0px 0.25rem;
            margin: 0px;
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
  const t = locale === 'en' ? en : es;

  return (
    <Fragment>
      <HeroHeaderStyled>
        <div className="__HeroContent">
          <div className="__Wrapper">
            <div className="__MemojiContainer">
              <div className="__Memoji">
                <Image src={memoji} width={300} height={300} alt="memoji image"></Image>
              </div>
              <div>
                <h1 className='__Title'>{t.title}</h1>
                <h2 className='__Subtitle'>{t.subtitle}</h2>
              </div>
            </div>
    
            <div className="__Content"> 
              <p>{t.p1} {" "}<strong>{t.strong1}</strong>.</p>
              <p>
                {t.p2} {" "}
                <a href="https://kingtide.com/" rel="noopener noreferrer" target="_blank" className="__Link">{"King Tide"}</a> {" "}
                {t.p3} {" "}
              </p>
              <p>
                {t.p4} {" "}
                <a href="https://ironhack.com/" rel="noopener noreferrer" target="_blank" className="__Link">{"IronHack"}</a> {" "}
                {t.p5} {" "}<strong>{t.strong2}</strong>.
              </p>
                <p>
                  {t.p6} {" "}
                  <a href="mailto:ahuijr@gmail.com" rel="noopener noreferrer" target="_blank">{t.link}</a> {" "}
                  {t.p7} {" "}
                  <a href="https://twitter.com/intent/tweet?text=Hi%20@itsmeahui%21" rel="noopener noreferrer" target="_blank" className="__Link">{t.sayHi}</a>
                </p>
            </div>
          </div>
        </div>
      </HeroHeaderStyled>
    </Fragment>
  )
  }

export default About;