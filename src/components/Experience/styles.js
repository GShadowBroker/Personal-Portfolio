import styled from "styled-components";
import colors from "../../constants/colors";

export const ExperienceContainer = styled.section`
  max-width: 767px;
  width: 100%;
  margin: auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
  opacity: 0;
  transition: opacity 1s linear;
`;

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
`;

export const Description = styled.div`
  margin-top: 2.5rem;
  text-align: justify;
  line-height: 1.6;
`;
