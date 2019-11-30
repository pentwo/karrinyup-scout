import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

import FacebookSVG from "../images/svg/facebook.svg"
import MessengerSVG from "../images/svg/messenger.svg"
import ScoutLogo from "../images/scouts-aus-logo-white.png"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="container">
      <ul className="footer__list">
        <li>
          <h4 className="footer__list__title">Group Infomation</h4>
          <ul>
            <li>Scouting Philosophy</li>
            <li>Promise and Law</li>
            <li>Can you Help?</li>
            <li>Committee</li>
            <li>Branch and Group Fees</li>
          </ul>
        </li>
        <li>
          <h4 className="footer__list__title">Sections</h4>
          <ul>
            <li>Joey Scout</li>
            <li>Cub Scout</li>
            <li>Scouts</li>
            <li>Venturer Scout</li>
          </ul>
        </li>
        <li>
          <h4 className="footer__list__title">Contact Us</h4>
          <ul>
            <li>
              E-mail:
              <br />
              <a href="mailto:gl.karrinyup@scoutswa.com.au">
                gl.karrinyup@scoutswa.com.au
              </a>
            </li>
            <li>
              Address:
              <a href="https://goo.gl/maps/2GwCS64bfUX1QuG39" target="_blank">
                <address>
                  45 Huntriss Rd,
                  <br />
                  Gwelup WA 6018,
                  <br /> Australia
                </address>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h4 className="footer__list__title">Social Media</h4>
          <div className="footer__icons">
            <a href="https://www.facebook.com/karrinyuplntscoutsgroup/">
              <img className="icon" src={FacebookSVG} alt="Facebook" />
            </a>
            <a href="https://m.me/karrinyuplntscoutsgroup">
              <img className="icon" src={MessengerSVG} alt="Messenger" />
            </a>
          </div>
        </li>
      </ul>
      <img
        src={ScoutLogo}
        className="footer__logo"
        alt="Australia Scout Logo"
      />
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
