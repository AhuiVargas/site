import React, { Fragment } from "react";
import router, { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import { Cross as Hamburger } from 'hamburger-react';
import useDarkMode from 'use-dark-mode';

import memoji from "../styles/assets/memoji.png";
import sun from "../styles/assets/sun.svg";
import moon from "../styles/assets/moon.svg"
import en from "../locales/en";
import es from "../locales/es";
import { mixins, media } from '../styles';

const HeroHeaderStyled = styled.section`
  position: relative;
  padding-top: 8rem;
  padding-bottom: 4rem;
  overflow: visible;

  .__HeroContent {
    position: relative;
    z-index: 2;

    .__Wrapper {
      width: 100%;
      max-width: 74rem;
      margin: 0px auto;
      padding: 0px 2rem;

      .__Content {
        a {
          &:hover {
            font-weight: 800;
            word-break: break-all;
            background-color: ${props => props.theme.bg.tertiary};
            color: ${props => props.theme.text.contrast};
            padding: 0px 0.25rem;
          }
          ${media.bp1024`
            font-size: 1.2rem;
            font-weight: 800;
            word-break: break-all;
            background-color: ${props => props.theme.bg.tertiary};
            color: ${props => props.theme.text.contrast};
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
          }
        }
      }
    }
  }
`;

const StyledNav = styled.div`
  padding: 2rem;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: transparent;
  z-index: 200;
  border-radius: 

  .__Wrapper {
    max-width: 74rem;
    background-color: transparent;
  }

  .fullscreen {
    padding: 2rem;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 200;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(16px);
  }

  
  .__Menu {
    ${mixins.flexCenterBetween};
    overflow: hidden;
    border-radius: 0.5rem;
    backdrop-filter: blur(16px);
    transition: all 0.3s ease-in-out 0s;
    background-color: ${props => props.theme.rgba.menu};

    .__SwitchDesktop {
      
      ${media.bp1024`
        display: none;
      `}

      .__LangSwitch {
        display: block;
        padding: 1rem;
        color: ${props => props.theme.text.anchor};
        background: transparent;
        border: transparent;
        cursor: pointer;

        option {
          font-weight: normal;
          display: block;
          white-space: nowrap;
          min-height: 1.2em;
          padding: 0px 2px 1px;
        }
      }
    }

    .__AnchorLink {
      padding: 1rem 2rem;
      color: ${props => props.theme.text.anchor};
      font-size: 1rem;
      font-weight: 400;
      cursor: default;
    }

    .__BurgerBox {
      display: none;
      ${media.bp1024`
        display: inline;
      `}

      .hamburger-react {
        color: ${props => props.theme.text.anchor};
      }
    }

  }

  .__Menu.active {
    background-color: ${props => props.theme.rgba.active};
    border-radius: 0.5rem;
    backdrop-filter: blur(16px);
    transition: all 0.3s ease-in-out 0s;
    &:hover {
      background-color: ${props => props.theme.rgba.menu};
    }
  }

  .__MenuMobile {

    .__LinkGroup {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin: 1rem 0px;

      .__SwitchMobile {
        ${mixins.flexCenter};
        color: ${props => props.theme.text.contrast};
        text-align: center;
        background-color: ${props => props.theme.rgba.active};
        border-radius: 0.5rem;
        cursor: pointer;
        backdrop-filter: blur(16px);

        .__LangSwitch {
          display: block;
          padding: 1rem;
          color: ${props => props.theme.text.anchor};
          background: transparent;
          border: transparent;
          cursor: pointer;

          option {
            font-weight: normal;
            display: block;
            white-space: nowrap;
            min-height: 1.2em;
            padding: 0px 2px 1px;
          }
        }

        .__ThemeSwitch {
          ${mixins.flexEnd};
          padding: 0.5rem 1rem;
          color: ${props => props.theme.text.anchor};
          background: transparent;
          border: transparent;
          cursor: pointer;
          margin: 0px !important;
          img {
            width: 2rem;
            height: auto;
          }
        }
      }
    }
  }
`;

const StyledFooter = styled.footer`
  padding: 2rem;

  .__wrapper {
    max-width: 74rem;
    margin: 0px auto;
    background-color: transparent;
  }

  .__menu {
    ${mixins.grid}
    a {
      display: block;
      padding: 1rem;
      color: ${props => props.theme.text.primary};
      text-align: center;
      background-color: ${props => props.theme.bg.secondary};
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: 400;

      &:hover {
        color: white;
        background-color: ${props => props.theme.bg.quarternary};
      }
    }
  }
`;

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false)
  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;
  // const darkMode = useDarkMode();

  React.useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 20) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, [])

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale, scroll: false }),
    setIsOpen(false);
  }

  return (
    <main>
      <StyledNav>
        <div className={isOpen ? "fullscreen" : null}>
          <div className="__Wrapper">
            <nav className={isScrolling && !isOpen ? "__Menu active" : "__Menu"}>
              <a className="__AnchorLink">Ahuizotl Vargas</a>
              <div className="__SwitchDesktop">
              <select 
                onChange={changeLanguage}
                defaultValue={locale}
                className="__LangSwitch"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
              </div>
              <div className="__BurgerBox">
                <Hamburger toggled={isOpen} toggle={setIsOpen} duration={0.0} size={25}/>
              </div>
            </nav>
            {isOpen ? (
              <Fragment>
                <nav className="__MenuMobile">
                  <div className="__LinkGroup">
                    <div className="__SwitchMobile">
                      <select 
                        onChange={changeLanguage}
                        defaultValue={locale}
                        className="__LangSwitch"
                      >
                        <option value="en">EN</option>
                        <option value="es">ES</option>
                      </select>
                    </div>
                    {/* <div className="__SwitchMobile">
                      <button onClick={() => darkMode.toggle()}>☀️</button>
                    </div> */}
                  </div>
                </nav>
              </Fragment>
            ) : null}
          </div>
        </div>
      </StyledNav>
      <HeroHeaderStyled>
        <div className="__HeroContent">
          <div className="__Wrapper">
            <div className="__MemojiContainer">
              {/* <div className="__Memoji">
                <Image src={memoji} alt="memoji image"></Image>
              </div> */}
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
                <a href="https://rappi.com.mx/" rel="noopener noreferrer" target="_blank" className="__Link">{"Rappi"}</a>.
              </p>
              <p>
                {t.p4} {" "}
                <a href="https://ironhack.com/" rel="noopener noreferrer" target="_blank" className="__Link">{"IronHack"}</a> {" "}
                {t.p5} {" "}<strong>{t.strong2}</strong>.
              </p>
              {locale === 'es' ? (
                <p>
                  {t.p6} {" "}
                  <a href="mailto:ahuijr@gmail.com" rel="noopener noreferrer" target="_blank">{t.link}</a> {" "}
                  {t.p7} {" "}
                  <a href="https://twitter.com/intent/tweet?text=Hi%20@itsmeahui%21" rel="noopener noreferrer" target="_blank" className="__Link">{t.sayHi}</a>
                </p>
              ) : (
                <p>
                  {t.p6} {" "}
                  <a href="https://twitter.com/intent/tweet?text=Hi%20@itsmeahui%21" rel="noopener noreferrer" target="_blank" className="__Link">{t.sayHi}</a>
                </p>
              )}
            </div>
    
            <StyledFooter>
              <div className="__wrapper">
                <div className="__menu">
                  <a href="mailto:ahuijr@gmail.com" rel="noopener noreferrer" target="_blank">Email</a>
                  <a href="https://read.cv/ahuizotl" rel="noopener noreferrer" target="_blank">CV</a>
                  <a href="https://www.linkedin.com/in/ahui-vargas" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                  <a href="https://github.com/AhuiVargas/" rel="noopener noreferrer" target="_blank">GitHub</a>
                  {/* <a href="https://www.codewars.com/users/Ahuizotl" rel="noopener noreferrer" target="_blank">CodeWars</a> */}
                  <a href="https://twitter.com/itsmeahui" rel="noopener noreferrer" target="_blank">Twitter</a>
                  <a href="https://www.instagram.com/ahuivargas/" rel="noopener noreferrer" target="_blank">Instagram</a>
                  {/* <a href="https://www.mixcloud.com/ahui-vargas-casta%C3%B1eda/" rel="noopener noreferrer" target="_blank">MixCloud</a> */}
                </div>
              </div>
            </StyledFooter>
          </div>
        </div>
      </HeroHeaderStyled>
    </main>
  );
};

export default Home;
