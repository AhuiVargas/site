import React, { Fragment } from "react";
import router, { useRouter } from "next/router";
import styled from "styled-components";
import { Cross as Hamburger } from "hamburger-react";

import { mixins, media } from "../styles";
import en from "../locales/en";
import es from "../locales/es";
import HolidayAnimation from "./HolidayAnimation";

const StyledNav = styled.div`
  padding: 2rem;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: transparent;
  z-index: 200;

  .__Wrapper {
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
    transition: backdrop-filter 0.1s ease-in-out;
  }

  .__Menu {
    ${mixins.flexCenterBetween};
    overflow: hidden;
    border-radius: 0.5rem;
    backdrop-filter: blur(16px);
    transition: all 0.3s ease-in-out 0s;
    background-color: ${(props) => props.theme.rgba.menu};

    .__SwitchDesktop {
      ${media.bp1024`
        display: none;
      `}
      .__LangSwitch {
        display: block;
        padding: 1rem;
        color: ${(props) => props.theme.text.anchor};
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
      color: ${(props) => props.theme.text.anchor};
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
        color: ${(props) => props.theme.text.anchor};
      }
    }
  }

  .__Menu.active {
    border-radius: 0.5rem;
    backdrop-filter: blur(16px);
    transition: all 0.3s ease-in-out 0s;
    &:hover {
      background-color: ${(props) => props.theme.rgba.menu};
    }
  }

  .__MenuMobile {

    .__LinkGroup {
      margin: 1rem 0px;
      display: grid;
      gap: 1rem;

      .__SwitchMobile {
        ${mixins.flexCenter};
        flex-direction: column;
        color: ${(props) => props.theme.text.contrast};
        text-align: center;
        background-color: ${(props) => props.theme.rgba.active};
        border-radius: 0.5rem;
        cursor: pointer;
        backdrop-filter: blur(16px);

        .__LangSwitch {
          display: block;
          padding: 1rem;
          color: ${(props) => props.theme.text.anchor};
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
          color: ${(props) => props.theme.text.anchor};
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
      .footerLinks {
        display: grid;
        gap: 1rem;
        background-color: ${(props) => props.theme.rgba.active};
      }
      a {
        text-align: center;
        display: block;
        padding: 1rem;
        color: ${(props) => props.theme.text.primary};
        background: ${(props) => props.theme.rgba.active};
        border-radius: 0.5rem;
        font-size: 1.2rem;
        font-weight: 400;
        text-decoration: none;
        transition: all 0.3s ease;
        &:hover {
          color: ${(props) => props.theme.text.contrast};
          background: linear-gradient(263deg, #ff8c38 16.7%, #72c6e1 95.73%);
        }
      }
  `;

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale, scroll: false }),
      setIsOpen(false);
  };

  return (
    <Fragment>
      <StyledNav>
        <div className={isOpen ? "fullscreen" : null}>
          <div className="__Wrapper">
            <nav
              className={isScrolling && !isOpen ? "__Menu active" : "__Menu"}
            >
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
                <Hamburger
                  toggled={isOpen}
                  toggle={setIsOpen}
                  duration={0.5}
                  size={25}
                />
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
                    <a
                      href="mailto:ahuijr@gmail.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Email
                    </a>
                    <a
                      href="/Ahuizotl-resume-2024.pdf"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      CV
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ahui-vargas/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/AhuiVargas/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </nav>
              </Fragment>
            ) : null}
          </div>
        </div>
      </StyledNav>
      <HolidayAnimation isOpen={isOpen} />
    </Fragment>
  );
};

export default Nav;
