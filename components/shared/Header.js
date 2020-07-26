import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import Link from 'next/link';

// helper component to re-use within the main component
const BsNavLink = (props) => {
  const {title, href} = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">
        {title}
      </a>
    </Link>
  )
}

const BsNavBrand = () => {
  return (
    <Link href="/">
      <a className="navbar-brand port-navbar-brand">Arturo FV</a>
    </Link>
  )
}

const LoginLink = () => <span className="nav-link port-navbar-link">Login</span>;

 const LogoutLink = () => <span className="nav-link port-navbar-link">Logout</span>;

const Header = () =>  {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  
  return (  
    <div>
      <Navbar className="port-navbar port-default absolute" 
        color="transparent"
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
            <NavItem className="port-navbar-item clickable">
              <LoginLink/>
            </NavItem>
            <NavItem className="port-navbar-item clickable">
              <LogoutLink/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;