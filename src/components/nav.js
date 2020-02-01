import React, { useState } from "react"
import { Link } from "gatsby"

import KLNTLogo from "../images/favicon/favicon-32x32.png"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const CustomNavBar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">
        {/* <BrandFavicon /> */}
        <img src={KLNTLogo} alt="KLNTLogo" />
        <span>Karrinyup LNT Scout Group</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/group">
              Group
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Sections
            </DropdownToggle>
            <DropdownMenu left="left">
              <DropdownItem tag={Link} to="/">
                Joey Scout
              </DropdownItem>
              <DropdownItem tag={Link} to="/">
                Cub Scout
              </DropdownItem>
              <DropdownItem tag={Link} to="/">
                Scouts
              </DropdownItem>
              <DropdownItem tag={Link} to="/">
                Venturer Scout
              </DropdownItem>
              <DropdownItem tag={Link} to="/">
                Adult Leader
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink tag={Link} to="/">
              News
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/">
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/">
              Find Us
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default CustomNavBar
