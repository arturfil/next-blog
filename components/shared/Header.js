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
      <div className="logo">
        <img className="image" src="/images/logo_updated_dark.png" alt=""/>
      </div>
    </Link>
  )
}

const LoginLink = () => <a href="/api/v1/login" className="nav-link port-navbar-link">Login</a>

 const LogoutLink = () => <a href="/api/v1/logout" className="nav-link port-navbar-link">Logout</a>

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
                  <NavItem className="port-navbar-item clickable">
                    <LogoutLink/>
                  </NavItem>
                }
                { !user &&
                  <NavItem className="port-navbar-item clickable">
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