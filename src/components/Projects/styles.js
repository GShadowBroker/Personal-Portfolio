import styled from "styled-components"
import colors from "../../constants/colors"

export const ProjectsContainer = styled.section`
  opacity: 0;
  transition: opacity 1s linear;
`

export const Title = styled.div`
  font-size: 2.2em;
  font-weight: 500;
  margin: 2rem auto;
  padding-bottom: 0.5rem;

  position: relative;
  width: fit-content;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    background: ${props => colors[props.theme].color};
    height: 3px;
    width: 50%;
  }
`

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 0 6rem 0;

  @media only screen and (max-width: 1000px) {
    flex-direction: ${props => (props.left ? "column-reverse" : "column")};
    align-items: center;

    & > div {
      margin-top: 1.5rem;
    }
  }
`

export const Project = styled.div`
  width: 50%;

  @media only screen and (max-width: 1200px) {
    width: 80vw;
  }
`

export const ProjectDetailsContainer = styled.div`
  max-width: 50%;
  padding: 0 0 0 2rem;

  @media only screen and (max-width: 1200px) {
    max-width: 80vw;
    padding: 0;
  }
`

export const ProjectTitle = styled.h1`
  color: ${colors.secondary};
  margin: 1rem 0 2rem 0;
  line-height: 0.5;

  @media only screen and (max-width: 815px) {
    line-height: 1;
  }
`

export const ProjectLinks = styled.div`
  margin-bottom: 2rem;
  font-size: 1em;
  flex-wrap: wrap;

  display: flex;
  div:not(:last-of-type) {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 515px) {
    line-height: 2;
  }
`
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 0.5rem;
  }
`

export const ProjectDescription = styled.div`
  text-align: justify;
  line-height: 1.6;
  a {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 10%;
      width: 80%;
      height: 0.4rem;
      background-color: rgba(255, 99, 72, 0.4);
      transition: all 0.2s linear;
    }
    &:hover::after {
      background-color: rgba(255, 99, 72, 0.7);
      left: 0;
      width: 100%;
    }
  }
`

export const Technologies = styled.div`
  margin-top: 2rem;
  font-size: 2em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 815px) {
    font-size: 1.5em;
  }
`
export const Icon = styled.div`
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 815px) {
    min-width: 50px;
  }
`
