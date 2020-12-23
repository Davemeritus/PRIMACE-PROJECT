import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Results from "../img/exam.png"
import Creativty from "../img/creative.png"
import Goal from "../img/goal.png"
import Empathy from "../img/empathy.png"
import Radar from "../img/radar.png"
import United from "../img/united.png"
import team from "../img/teamspirit.svg"

export const AboutPageTemplate = () => {

  return (
    <section style={{ background: '#2a05b6' }} className="section--gradient">
      <div className="hero" >
        <h1>About Us</h1>
        <p>
          Primace Agency, a leading branding and marketing agency, <br />leveraging on both traditional and digital channels to go far above our client's targets.
      </p>
      </div>
      <div style={{ background: '#fff', borderRadius: '50px 50px 0 0' }}>


        <div className="container ">

          <div className="aboutus">
            <div>

              <h1 style={{ fontSize: '32px', fontWeight: '600' }}>Our Vision</h1><hr />
              <p>To be the facilitator of the brands and businesses that solves major human problems.</p>
            </div>
            <div>
              <h1 style={{ fontSize: '32px', fontWeight: '600' }}>Our Mission</h1><hr />
              <p>To build outstanding brands that stand the test if time, and unleash the innovative potentials of young people and mould even their craziest ideas into a profitable reality</p>
            </div>
          </div>
          <div className="value" style={{ padding: '0 5%' }}>
            <h1>Our Core Values</h1>
            <hr />
            <div className="values">

              <div>
                <img src={Results} style={{ width: '150px' }} alt="" />
                <p className="values__header">RESULT ORIENTED</p>
                <p>We provide solutions that give tangible results
</p>
              </div>
              <div>
                <img src={Goal} style={{ width: '150px' }} alt="" />
                <p className="values__header">GO-GETTING</p>
                <p>We strive for excellence in everything we do and we We provide solutions that give tangible resultsare committed to always give back to our team and world around us</p>
              </div>
              <div>
                <img src={Empathy} style={{ width: '150px' }} alt="" />
                <p className="values__header">EMPATHY</p>
                <p>We find the most cost effective means to achieve your goals. Also we speak the truth always (even when it means less money in our pockets</p>
              </div>
            </div>
            <div className="values">

              <div>
                <img src={Creativty} style={{ width: '150px' }} alt="" />
                <p className="values__header">PASSIONATE CREATIVITY</p>
                <p>We are passionate about giving that best value to our clients and always improve ourselves to produce clever works</p>
              </div>
              <div>
                <img src={Radar} style={{ width: '150px' }} alt="" />
                <p className="values__header">LOYALTY</p>
                <p>We value our relationship with the client. We follow-up on the growth of our client's brand and add additional support. We only win when our Clients win</p>
              </div>
              <div>
                <img src={United} style={{ width: '150px' }} alt="" />
                <p className="values__header">TEAM WORK</p>
                <p>We work together to give our clients the best and to help the company win</p>
              </div>
            </div>
          </div>
          <div className="aboutTeam" style={{ padding: '5% 5%' }}>
            <h1>The Team</h1>
            <hr />
            <p >Powered by a winning team of creatives, fueled by their ever-present hunger to not just give our clients a cutting edge in the market, but also make them 'The Pacemaker' even amidst fierce competition.</p>
            <br />
            <img src={team} alt="" />
            <p>Working, using our passion, creativity and expanding pool of ideas, we develop custom-built techniques to provide unique long-lasting solutions for all problems our clients may run into while starting-up, and trying to reach a larger audience.

            In doing so we help build a strong online presence for our clients.

We don't just help brands grow, we build them from the scratch </p>
          </div>

        </div>
      </div>

    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = () => {


  return (
    <Layout>
      <AboutPageTemplate

      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
