import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logoo.webp'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ borderBottom: "1px solid rgb(222 218 236)" }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '150px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              role="button"
              tabIndex="0"
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
            style={{ background: 'rgb(0 0 0 / 0%)' }}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Services
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact Us
              </Link>

            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
