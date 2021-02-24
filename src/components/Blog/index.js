import React, { useContext } from "react"
import { themeContext } from "../../utils/ThemeContext"
import {
  Title,
  BlogWrapper,
  BlogCardsContainer,
  BlogCard,
  BlogThumb,
  BlogContent,
  BlogFooter,
  ViewMore,
} from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import truncateString from "../../utils/truncateString"
import isBrowser from "../../utils/isBrowser"

const Blogs = () => {
  const { theme } = useContext(themeContext)

  const data = useStaticQuery(graphql`
    query FetchBlogs {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/site/blog/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              path
              date
              thumbnail
            }
          }
        }
      }
    }
  `)

  let blogs = data.allMarkdownRemark.edges.map(e => ({
    ...e.node.frontmatter,
    id: e.node.id,
  }))

  if (blogs.length > 9) {
    blogs = blogs.slice(0, 9)
  }

  if (blogs.length === 0) return null
  return (
    <BlogWrapper>
      <Title theme={theme} className="section__title">
        BLOG
      </Title>
      <BlogCardsContainer>
        {blogs.map(blog => (
          <BlogCard key={blog.id} theme={theme}>
            <BlogThumb image={blog.thumbnail} />
            <BlogContent>
              <h3>{truncateString(blog.title, 30)}</h3>
              <span>{truncateString(blog.description, 80)}</span>
            </BlogContent>
            <BlogFooter>
              <span>Ler mais</span>
              <BsArrowRight size={30} />
            </BlogFooter>
            <a href={`${isBrowser() && window?.location.origin}${blog.path}`} />
          </BlogCard>
        ))}
        {blogs.length === 9 && (
          <ViewMore theme={theme}>
            <a href={`${isBrowser() && window?.location.origin}/blog`}>
              ...ver mais
            </a>
          </ViewMore>
        )}
      </BlogCardsContainer>
    </BlogWrapper>
  )
}

export default Blogs
