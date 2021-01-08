import React from 'react'
import { Link } from 'gatsby'


import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
//import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer "
        style={{
          background: `#2a05b6`
        }}
      >
        <div className="content footer-contact has-text-centered">
          <p style={{ fontSize: '32px', marginBottom: '0rem', fontWeight: '600' }} >
            Get In Touch With Us
          </p>
          <p style={{ marginBottom: '0rem' }}>Phone: +(234)7018981731</p>
          <p>Email:primaceagency@gmail.com</p>
        </div>
        <div className="content ">
          <div className="container ">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Our Services
                      </Link>
                    </li>


                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="twitter" href="https://twitter.com/PRIMACEAGENCY?s=08">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/primaceagency?igshid=bt2n926zd222">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a><br />

              </div>

            </div>
            <p style={{ padding: '1em 2em', borderTop: '1px solid white', color: 'white' }}>
              @2021 Primace Agency
           </p>

          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
