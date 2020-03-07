import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import React, { useState } from "react"

import CustomNavBar from "./nav"

import MenuSVG from "../images/svg/menu.svg"
import CloseSVG from "../images/svg/close.svg"

const Header = ({ siteTitle }) => {
  const [navState, setState] = useState(false)

  return (
    <header className="header">
      <CustomNavBar></CustomNavBar>
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
