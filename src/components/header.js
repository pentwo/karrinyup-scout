import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import React from "react"

import MenuSVG from "../images/svg/menu.svg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <KarrinyupLogo className="header__logo" />
      <h1 className="header__title">
        <Link className="header__link" to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="header__menu">
        <img src={MenuSVG} alt="" />
      </div>
    </div>
    <nav className="nav">
      <div className="icon"></div>
      <ul className="nav__list">
        <li>
          <Link className="nav__link" to="/">
            Group
          </Link>
        </li>
        <li className="nav__list--subMenu">
          <Link className="nav__link">Sections</Link>
          <ul className="nav__subNav">
            <li>
              <Link to="/">Joey Scout</Link>
            </li>
            <li>
              <Link to="/">Cub Scout</Link>
            </li>
            <li>
              <Link to="/">Scouts</Link>
            </li>
            <li>
              <Link to="/">Venturer Scout</Link>
            </li>
            <li>
              <Link to="/">Adult Leader</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="nav__link" to="/">
            News
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/">
            Gallery
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/">
            Find Us
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const KarrinyupLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "rainbow-bee-eater-resize.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img alt="Karrinyup Scout Logo" fixed={data.file.childImageSharp.fixed} />
    )}
  />
)
