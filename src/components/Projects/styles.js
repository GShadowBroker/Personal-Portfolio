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
  margin: 5rem 0 10rem 0;

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
  height: 22vw;

  background-image: url(${props => props.path});
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (max-width: 1000px) {
    width: 80vw;
    height: 40vw;
  }
`

export const ProjectDetailsContainer = styled.div`
  max-width: 50%;
  padding: ${props => {
    if (props.left) return "0 0 0 2rem"
    else if (props.right) return "0 2rem 0 0"
    else return 0
  }};

  @media only screen and (max-width: 1000px) {
    max-width: 80vw;
    padding: 0;
  }
`

export const ProjectTitle = styled.h1`
  color: ${colors.secondary};
  margin-top: 0;
  margin-bottom: 2rem;
  padding-top: 0;
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

export const ProjectDescription = styled.p`
  text-align: justify;
  line-height: 1.6;
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
  @media only screen and (max-width: 815px) {
    min-width: 50px;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`
export const ChevronLeft = styled.div`
  cursor: pointer;
  color: ${colors.secondary};
  background: rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s linear;

  display: flex;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`
export const ChevronRight = styled(ChevronLeft)`
  left: auto;
  right: 0;
`
export const Controls = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  height: 30px;
  width: fit-content;
  padding: 1rem;

  display: flex;
  align-items: center;
`
export const ImageCount = styled.div`
  border: 1px solid ${colors.secondary};
  background-color: ${props => (props.filled ? colors.secondary : "")};
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 0.5rem;
`
