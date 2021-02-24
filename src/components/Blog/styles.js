import styled from "styled-components"
import { Container } from "../../pages"
import colors from "../../constants/colors"

export const BlogContainer = styled(Container)`
  max-width: 70vw;
  margin: 1rem auto;
  word-break: break-word;

  @media only screen and (max-width: 1000px) {
    max-width: 80vw;
  }
  @media only screen and (max-width: 815px) {
    max-width: 90vw;
  }
`

export const PostContent = styled.article`
  h1 {
    color: ${colors.secondary};
    font-size: 2em;
  }
  p {
    line-height: 1.6;
  }

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

  pre {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: visible;
    code {
      border-radius: 4px;
      background-color: #1f1e1e;
      color: green;
    }
  }
`

export const HeadlineImage = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  h1 {
    font-size: 3.5em;
  }
`

export const HeadlineOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;

  h1,
  h3 {
    max-width: 680px;
    padding: 0.6rem;
  }
  h3 {
    font-size: 1.2em;
  }
`

export const Tags = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    margin-top: 3rem;

    li:not(:last-child) {
      margin-right: 1rem;
    }
    li {
      margin-top: 1rem;
      background: ${props => colors[props.theme].footer};
      color: ${props => colors[props.theme].color};
      border-radius: 4px;
      padding: 0.5rem;
    }
  }
`

export const BlogDate = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Breadcrumbs = styled.div`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 0.6rem 0;
`

export const ProfileImage = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 1rem;
  span {
    margin-left: 0.6rem;
  }
  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

// Blog Section on Landing Page

export const BlogWrapper = styled.section`
  max-width: 767px;
  width: 100%;
  margin: auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
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
export const BlogCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const BlogCard = styled.div`
  cursor: pointer;
  height: 300px;
  width: 235px;
  border-radius: 4px;

  margin: 1rem auto;
  background: ${props => colors[props.theme].footer};

  position: relative;
  display: flex;
  flex-direction: column;

  a {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`

export const BlogThumb = styled.div`
  height: 35%;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`

export const BlogContent = styled.div`
  flex: 1;
  padding: 0 0.6rem;

  h3 {
    color: ${colors.secondary};
  }
`

export const BlogFooter = styled.div`
  height: 40px;
  width: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 0 0.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ViewMore = styled.div`
  position: relative;
  margin: auto;
  height: 80px;
  width: 100px;
  border-radius: 4px;
  background: ${props => colors[props.theme].footer};

  a {
    position: absolute;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
