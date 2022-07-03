import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useState, useEffect } from "react";
export default function BaseNavbar() {

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      sticky="top"
      className={`shadow bg-light position-sticky w-100`}
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
              blurDataURL={"/placeholder.png"}
              alt={"IIIT Bhubaneswar Training and Placement Cell"}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="w-100">
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="/" className="fw-semibold">
                  Home
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Placements" className="fw-semibold">
                <NavDropdown.Item href="/placements/recruiters">
                  Our Recruiters
                </NavDropdown.Item>
                <NavDropdown.Item href="/placements">
                  Placement statistics
                </NavDropdown.Item>
                <NavDropdown.Item href="/placements/training">
                  Training
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Info" className="fw-semibold">
                <NavDropdown.Item href="/info/mandatory-disclosure">
                  Mandatory Disclosure
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/ib.pdf"
                  alt="information brochure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Information Brochure
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="For Recruiters" className="fw-semibold">
                <NavDropdown.Item href="/for-recruiters/why-recruit-from-us">
                  Why Recruit From IIIT-Bh?
                </NavDropdown.Item>
                <NavDropdown.Item href="/for-recruiters/recruitment-procedure">
                  Recruitment Procedure
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About IIIT-bh" className="fw-semibold">
                <NavDropdown.Item href="/about/academics">
                  Academics
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/student-achievements">
                  Student Achievements
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/collaborations">
                  Collaborations
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link
                  href="https://sites.google.com/iiit-bh.ac.in/alumni"
                  className="fw-semibold"
                >
                  Alumni
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact-us" className="fw-semibold">
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
