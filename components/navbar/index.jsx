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
      variant="light"
      sticky="top"
      className={`${
        scrolled ? "shadow bg-light" : "bg-light bg-gradient bg-opacity-25"
      }`}
    >
      <Container>
        <Navbar.Brand href="/">
          <div
            style={{
              maxWidth: "300px",
              minWidth: "100px",
            }}
          >
            <Image
              src={logo}
              objectFit="contain"
              placeholder="blur"
              blurDataURL={logo}
              alt={"IIIT Bhubaneswar Training and Placement Cell"}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="w-100">
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="/" className="fw-bold">
                  Home
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Placements" className="fw-bold">
                <NavDropdown.Item href="/placements/recruiters">
                  Our Recruiters
                </NavDropdown.Item>
                <NavDropdown.Item href="/placements">
                  Placement statistics
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Info" className="fw-bold">
                <NavDropdown.Item href="/mandatory-disclosure">
                  Mandatory Disclosure
                </NavDropdown.Item>
                <NavDropdown.Item href="/ib.pdf" alt="information brochure" target="_blank" rel="noopener noreferrer">
                  Information Brochure
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="For Recruiters" className="fw-bold">
                <NavDropdown.Item href="/placements">
                  Why Recruit From IIIT-Bh?
                </NavDropdown.Item>
                <NavDropdown.Item href="/procedure">
                  Recruitment Procedure
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Apply Here</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About IIIT-bh" className="fw-bold">
                <NavDropdown.Item href="/academics">Academics</NavDropdown.Item>
                <NavDropdown.Item href="/achievements">
                  Student Achievements
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Collaborations</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link
                  href="http://placement.iiit-bh.ac.in/alumni/"
                  className="fw-bold"
                >
                  Alumni
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact" className="fw-bold">
                  Contact Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
