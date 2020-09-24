import Link from "next/link";
import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

const BsNavLink = (props) => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const BsNavBrand = (props) => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <a className="navbar-brand port-navbar-brand">{title}</a>
    </Link>
  );
};

const LoginLink = () => {
  return <span className="nav-link port-navbar-link clickable">Login</span>;
};

const LogoutLink = () => {
  return <span className="nav-link port-navbar-link clickable">Logout</span>;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className="port-navbar port-default absolute"
      color="transparent"
      dark
      expand="md"
    >
      <BsNavBrand href="/" title="Sérgio Gomes" />
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/" title="Home" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/about" title="About" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/portfolios" title="Portfolios" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/cv" title="CV" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/blogs" title="Blogs" />
          </NavItem>
        </Nav>
        <Nav>
          <NavItem className="port-navbar-item">
            <LoginLink />
          </NavItem>
          <NavItem className="port-navbar-item">
            <LogoutLink />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
