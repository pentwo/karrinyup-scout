import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import React, { useState } from "react"

import CustomNavBar from "./nav"

import MenuSVG from "../images/svg/menu.svg"
import CloseSVG from "../images/svg/close.svg"

const menuIcon = document.querySelector(".nav__menu")
const navList = document.querySelector(".nav__list")

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active")
  })
}
const Header = ({ siteTitle }) => {
  const [navState, setState] = useState(false)

  return (
    <header className="header">
      {/* <div className="container">
        <KarrinyupLogo className="header__logo" />
        <h1 className="header__title">
          <Link className="header__link" to="/">
            {siteTitle}
          </Link>
        </h1>
      </div> */}
      <CustomNavBar></CustomNavBar>
      {/* <nav className="nav">
        <div
          className="nav__menu"
          onClick={e => {
            e.currentTarget.nextSibling.classList.toggle("active")
            setState(!navState)
          }}
        >
          <img src={navState ? CloseSVG : MenuSVG} />
          <span>{navState ? `CLOSE` : `MENU`}</span>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <span className="nav__title">Group</span>
            </Link>
          </li>
          <li className="nav__item hasDropdown">
            <Link className="nav__link" to="/">
              <span className="nav__title">Sections</span>
            </Link>
            <ul className="dropdownMenu">
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  <span className="nav__title">Joey Scout</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  <span className="nav__title">Cub Scout</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  <span className="nav__title">Scouts</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  <span className="nav__title">Venturer Scout</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  <span className="nav__title">Adult Leader</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <span className="nav__title">News</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <span className="nav__title">Gallery</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <span className="nav__title">Find Us</span>
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

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
      <Img
        alt="Karrinyup Scout Logo"
        className=""
        fixed={data.file.childImageSharp.fixed}
      />
    )}
  />
)
