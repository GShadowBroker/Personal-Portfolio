import React, { useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../Layout"
import Foot from "../Foot"
import { ThemeContextProvider, themeContext } from "../../utils/ThemeContext"
import { Container } from "../../pages"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import colors from "../../constants/colors"

const BlogContainer = styled(Container)`
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

const PostContent = styled.article`
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

const HeadlineImage = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  h1 {
    font-size: 3.5em;
  }
`

const HeadlineOverlay = styled.div`
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

const Tags = styled.div`
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

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        thumbnail
        tag
        path
        description
        date(locale: "pt")
      }
      timeToRead
      id
      html
    }
  }
`

const TagList = ({ frontmatter }) => {
  const { theme } = useContext(themeContext)
  return (
    <Tags theme={theme}>
      <ul>
        {frontmatter.tag.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </Tags>
  )
}

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  console.log("html", html)
  return (
    <ThemeContextProvider>
      <Layout>
        <Helmet>
          <title>{frontmatter.title}</title>
          <meta name="description" content={frontmatter.description} />
        </Helmet>
        <HeadlineImage image={frontmatter.thumbnail}>
          <HeadlineOverlay>
            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.description}</h3>
          </HeadlineOverlay>
        </HeadlineImage>
        <BlogContainer>
          <time datetime={frontmatter.date}>
            {new Date(frontmatter.date).toDateString()}
          </time>
          <PostContent dangerouslySetInnerHTML={{ __html: html }} />
          {frontmatter.tag.length > 1 && <TagList frontmatter={frontmatter} />}
        </BlogContainer>
        <Foot />
      </Layout>
    </ThemeContextProvider>
  )
}

export default BlogTemplate
