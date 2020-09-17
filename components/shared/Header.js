import React, { useState } from 'react';
import { isAuthorized } from '../../utils/auth0';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown, 
  DropdownMenu, 
  DropdownItem,
  DropdownToggle
} from 'reactstrap';
import Link from 'next/link';

// helper component to re-use within the main component
const BsNavLink = (props) => {
  const {title, href, className=""} = props;
  return (
    <Link href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>
        {title}
      </a>
    </Link>
  )
}

const BsNavBrand = () => {
  return (
    <Link href="/">
      <>
        <div className="logo">
          <img className="image" src="/images/logo_updated_yt.png" alt=""/>
        </div>
        <a className="nav-link port-navbar-link">Arturo Filio</a>
      </>
    </Link>
  )
}

const LoginLink = () => <a href="/api/v1/login" className="nav-link port-navbar-link">Login</a>
const LogoutLink = () => <a href="/api/v1/logout" className="nav-link port-navbar-link">Logout</a>

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu "
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu
        right>
        <DropdownItem>
          <BsNavLink 
            className="port-dropdown-item" 
            href="/projects/new/" title="Create Project"/>
        </DropdownItem>
        <DropdownItem>
          <BsNavLink 
            className="port-dropdown-item" 
            href="/blogs/editor" title="Blog Manager"/>
        </DropdownItem>
        <DropdownItem>
          <BsNavLink 
            className="port-dropdown-item" 
            href="/blogs/dashboard" title="Dashboard"/>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

const Header = ({user, loading, className}) =>  {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
   
  return (  
    <div>
      <Navbar className={`port-navbar port-default absolute ${className}`}
        dark 
        expand="md">
        <BsNavBrand/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item"> 
              <BsNavLink href="/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/projects" title="Projects"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="CV"/>
            </NavItem>
          </Nav>
          <Nav className="navbar">
            { !loading && 
              <>
                { user &&
                  <>
                    { isAuthorized(user, 'admin') && <AdminMenu/>}
                    <NavItem className="port-navbar-item">
                      <LogoutLink/>
                    </NavItem>
                  </>
                }
                { !user &&
                  <NavItem className="port-navbar-item ">
                    <LoginLink/>
                  </NavItem>
                }
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;  