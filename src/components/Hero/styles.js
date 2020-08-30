import styled from "styled-components"
import colors from "../../constants/colors"

export const HeroContainer = styled.div`
  margin-top: 2rem;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    flex-flow: row-reverse;
    align-self: auto;
  }
  @media only screen and (max-width: 815px) {
    flex-direction: column;
    flex-flow: column-reverse;
  }
  @media only screen and (max-width: 515px) {
    height: 100vh;
  }
`
export const HeroLeftPane = styled.div`
  height: 100%;
  width: 50vw;

  @media only screen and (max-width: 1000px) {
    width: 70vw;
    padding-left: 3rem;
  }
  @media only screen and (max-width: 815px) {
    width: 80vw;
  }
  @media only screen and (max-width: 515px) {
    padding: 0;
  }
`
export const HeroImageContainer = styled.div`
  height: 40vw;
  max-height: 40vw;
  width: 40vw;

  background-color: ${props => colors[props.theme].imageContainer};
  border-radius: 50%;

  @media only screen and (max-width: 1000px) {
    width: 30vh;
    height: 30vh;
  }
  @media only screen and (max-width: 815px) {
    display: none;
  }
`

export const Image = styled.div`
  min-height: 50vh;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  background-image: url(${require("../../assets/undraw_feeling_proud_qne1.svg")});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (max-width: 1000px) {
    min-height: 20vh;
  }
`
export const Headline = styled.div`
  font-size: 4em;
  line-height: 1.2;

  @media only screen and (max-width: 380px) {
    font-size: 3.5em;
  }
`
export const SubHeadline = styled.div`
  color: ${colors.secondary};
  font-size: 2.5em;
  font-weight: 600;

  @media only screen and (max-width: 380px) {
    font-size: 2em;
  }
`

export const Header = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`
