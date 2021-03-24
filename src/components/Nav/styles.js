import styled from "styled-components"
import colors from "../../constants/colors"
import dimensions from "../../constants/dimensions"

export const DrawerContainer = styled.div`
  height: 100%;
  width: ${props => (props.active ? 290 : 0)}px;
  opacity: ${props => (props.active ? 1 : 0)};
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  background-color: #111;
  box-shadow: 1px 1px 5px solid ${props => colors[props.theme].shadow};
  overflow-x: hidden;
  padding-top: 60px;
  transition: all 0.2s ease;

  button {
    background: none;
    border: none;

    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: all 0.2s ease;
  }

  button:hover {
    color: #f1f1f1;
  }

  .closebrn {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
`
export const Navbar = styled.nav`
  height: ${dimensions && dimensions.navbarHeight}px;

  font-weight: 500;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  background: ${props => colors[props.theme].background};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavContainer = styled.div`
  width: 85vw;
  height: 100%;
  margin: 0 auto;
  padding: 0 0.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    height: fit-content;
    margin: 0;
    padding: 0;

    @media only screen and (max-width: 815px) {
      display: none;
    }
  }
  li:not(first-of-type):not(last-of-type) {
    margin-left: 0;
  }
  li {
    display: inline;
    margin: 1rem;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 1rem;
  }
`

export const Menu = styled.ul`
  &:hover > * {
    transition: opacity 0.2s linear;
    opacity: 0.4;
  }
  &:hover > *:hover {
    opacity: 1;
  }
`

export const Social = styled.div`
  display: flex;
  & > div:last-of-type {
    margin-right: 0;
  }
  & > div {
    margin: 0 0.5rem;
  }

  @media only screen and (max-width: 515px) {
    display: none;
  }
`

export const Icon = styled.div`
  & > a {
    display: flex;
  }

  font-size: 1.5em;
  transition: color 0.3s;
  &:hover {
    color: ${props => (props.hover ? props.hover : "inherit")};
  }
`

export const ThemeSwitch = styled.button`
  transition: all 0.3s linear;

  background: none;
  border: none;
  margin-right: 1rem;
  padding: 0;

  min-height: 100%;
  width: 50px;

  @media only screen and (min-width: 1400px) {
    width: 60px;
  }

  &:focus {
    outline: none;
  }
`
export const SwitchButton = styled.div`
  transition: all 0.3s linear;

  border: 2px solid ${props => colors[props.theme].color};
  cursor: pointer;
  margin: 0;
  height: 100%;
  width: 100%;
  border-radius: 60px;

  position: relative;
`
export const Switch = styled.div`
  transition: all 0.2s linear;

  position: absolute;
  top: 0;

  background: ${props => colors[props.theme].color};
  margin: 0;
  padding: 0;
  height: 100%;
  width: 50%;
  border-radius: 50%;

  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => colors[props.theme].background};
`

export const Hamburguer = styled.div`
  font-size: 2em;
  display: none;
  cursor: pointer;

  @media only screen and (max-width: 815px) {
    display: flex;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  width: auto;
`

export const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10px;
  border-left: 1px solid ${props => colors[props.theme].color};
`
