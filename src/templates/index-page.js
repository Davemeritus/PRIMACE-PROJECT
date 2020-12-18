import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Section1 from '../img/Section1.png'
import Section2 from '../img/Section2.png'
import Section from '../img/launch.svg'
import Picture from '../img/caleb.jpg'
import Support from '../img/support.png'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div >
      <div
        className="full-width-image wrap margin-top-0"

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
              color: 'black',
              lineHeight: '1.3',
              marginBottom: '30px',
              paddingRight: '7px'
            }}
          >
            {title}
          </h1>
          <button
            style={{
              backgroundColor: `#2A05B6`,
              border: "0 solid white",
              color: 'white',
              padding: '1rem',
              fontWeight: `bold`,
              fontSize: `24px`,
              lineHeight: `28px`,


            }}
          ><Link to="/contact" style={{ outline: '0', color: 'white' }}> LET'S TALK</Link></button>
        </div>
        <div

        >
          <img style={{ margin: '30px 0' }} src={Section} alt="" />

        </div>
      </div>

      <div className="section1">
        <div >
          <div className="why-container">
            <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>{mainpitch.title}</h1>
            <div className="why-section">
              <div className="why-grid">
                <div className="why-grid__1">
                  <img style={{ width: '300px', marginBottom: '40px' }} alt="" src={Section1} />
                  {mainpitch.description}</div>
                <div className="why-grid__2">
                  <img style={{ width: '200px', marginBottom: '40px' }} alt="" src={Section2} />
                  We
                  build outstanding brands and profer custom-long lasting solutions to
              brand-related problems</div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2"
                  style={{ textAlign: 'center', marginTop: '50px' }}>
                  {heading}
                </h3>
                <p className="supportp" style={{ padding: '0 7%', textAlign: 'center', fontSize: '18px' }}>{description}</p>
                <div
                  style={{
                    textAlign: 'center'
                  }}>
                  <img src={Support} alt="" />
                </div>

              </div>
            </div>

            <div className="columns">
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/products">
                  What we do
              </Link>
              </div>
            </div>
            <div className="ColumnWords" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={Picture} alt="" style={{ width: '150px', marginBottom: '30px', borderRadius: '50%' }} />
              <p style={{ padding: '0 2rem', fontSize: '1.5rem' }}><span style={{ width: '42px' }}>"</span>The idea is to create an identity that narrows down to four main attributes which are <b>growth,</b>
               <b>positivity,</b> <b>transformation and innovation"</b>  <br /><br /> <span style={{ marginTop: '10px', fontWeight: 'bolder' }}>- Caleb Oluwole</span> </p>

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
