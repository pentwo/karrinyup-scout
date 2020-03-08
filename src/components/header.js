import PropTypes from "prop-types"
import React from "react"

import CustomNavBar from "./nav"

const Header = ({ siteTitle }) => {
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
