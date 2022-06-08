import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useState, useEffect } from "react";
export default function BaseNavbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      sticky="top"
      className={`${scrolled ? "shadow" : ""}`}
    >
      <Container>
        <Navbar.Brand href="/">
          <div
            style={{
              maxWidth: "500px",
              minWidth: "200px",
            }}
          >
            <Image
              src={logo}
              objectFit="contain"
              alt={"IIIT Bhubaneswar Training and Placement Cell"}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="w-100">
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Placements">
                <NavDropdown.Item href="/recruiters">
                  Our Recruiters
                </NavDropdown.Item>
                <NavDropdown.Item href="/placements">
                  Placement statistics
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Info">
                <NavDropdown.Item href="/mandatory-disclosure">
                  Mandatory Disclosure
                </NavDropdown.Item>
                <NavDropdown.Item href="/placements">
                  Information Brochure
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="For Recruiters">
                <NavDropdown.Item href="/placements">
                  Why Recruit From IIIT-Bh?
                </NavDropdown.Item>
                <NavDropdown.Item href="/procedure">
                  Recruitment Procedure
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Apply Here</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About IIIT-bh">
                <NavDropdown.Item href="/academics">Academics</NavDropdown.Item>
                <NavDropdown.Item href="/achievements">
                  Student Achievements
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Collaborations</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="/">Alumni</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
