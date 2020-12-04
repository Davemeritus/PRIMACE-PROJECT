import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Section1 from '../img/Section1.png'
import Section2 from '../img/Section2.png'
import Section from '../img/image1.png'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div style={{
      backgroundColor: ' #FFFCFC'
    }}>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundColor: `#2A05B6`,

        }}
      >
        <div
          style={{
            lineHeight: '2',
            marginBottom: '30px'
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: 'white',
              lineHeight: '1',
              marginBottom: '30px',
              paddingRight: '7px'
            }}
          >
            {title}
          </h1>
          <button
            style={{
              backgroundColor: `#2A05B6`,
              border: "2px solid white",
              color: 'white',
              padding: '1rem',
              fontWeight: `bold`,
              fontSize: `24px`,
              lineHeight: `28px`,

            }}
          >HIRE US NOW</button>
        </div>
        <div

        >
          <img src={Section} alt="" />

        </div>
      </div>

      <div className="section1">
        <div style={{ marginTop: '70px' }} className="content">
          <h1 style={{ textAlign: 'center', marginBottom: '50px' }} className="title">{mainpitch.title}</h1>
          <div
            className="content"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff'
            }}
          >

            <div style={{
              padding: "0 2rem",

            }}
              className="tile">
              <h3 className="subtitle">{mainpitch.description}</h3>
            </div>
            <div
              style={{
                backgroundColor: `#FAFAFB`,
                padding: '0 5%'
              }}
              className="tile"
            >
              <img src={Section1} alt="" />
            </div>
          </div>
          <div
            className="content"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff'
            }}
          >
            <div
              style={{
                backgroundColor: `#FAFAFB`,
                padding: '0 5%'
              }}
              className="tile"

            >
              <img src={Section2} alt="" />
            </div>
            <div
              style={{
                padding: "0 2rem",

              }}
              className="tile">
              <h3 className="subtitle">{mainpitch.description}</h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">
                {heading}
              </h3>
              <p>{description}</p>
            </div>
          </div>
          <Features gridItems={intro.blurbs} />
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/products">
                What we do
                  </Link>
            </div>
          </div>
          <div className="column is-12">
            <h3 className="has-text-weight-semibold is-size-2">
              Latest stories
                </h3>
            <BlogRoll />
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/blog">
                Read more
                  </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
