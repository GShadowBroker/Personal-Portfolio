import styled from "styled-components"
import colors from "../../constants/colors"

export const AboutContainer = styled.section`
  min-height: 100vh;
  max-width: 767px;
  width: 100%;
  margin: auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
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

export const Image = styled.div`
  border-radius: 50%;
  background-color: ${props => colors[props.theme].shadow};

  height: 167px;
  width: 167px;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: "";

    z-index: 1;
    height: 167px;
    width: 167px;
    background-image: url(${require("../../assets/profile.jpg")});
    background-size: contain;
    background-position: center;
    border-radius: 50%;

    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10px, -10px);
    transition: all 0.1s linear;
  }

  &:hover::after {
    transform: translate(5px, -5px);
  }
`

export const Name = styled.div`
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  line-height: 1.6;

  div:first-of-type {
    color: ${colors.secondary};
  }
  div {
    color: ${props => colors[props.theme].textGray};
  }
`

export const Description = styled.div`
  margin-top: 2.5rem;
  text-align: justify;
  line-height: 1.6;
`

export const Stack = styled.div`
  margin: 10rem 0 1rem 0;
`

export const StackTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 100%;

  & > span {
    color: ${colors.secondary};
  }
`

export const StackIcons = styled.div`
  margin: 1rem 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > div {
    margin: 0 0.5rem;
  }
  & > div:first-of-type,
  & > div:last-of-type {
    margin: 0;
  }
`

export const IconContainer = styled.div`
  min-width: 100px;
`
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3.1rem;
  margin: 1rem 0;
`
export const IconTitle = styled.div`
  text-align: center;
`
