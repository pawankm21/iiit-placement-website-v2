import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
export default function BaseNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="shadow"
    >
      <Container>
        <Navbar.Brand href="#home">
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
                <Nav.Link>Home</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Placements">
                <NavDropdown.Item href="/placements/">
                  Our Recruiters
                </NavDropdown.Item>
                <NavDropdown.Item href="">Placement Record</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Info">
                <NavDropdown.Item href="">
                  Mandatory Disclosure
                </NavDropdown.Item>
                <NavDropdown.Item href="/placements/">
                  Information Brochure
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="For Recruiters">
                <NavDropdown.Item href="/placements/">
                  Why Recruit From IIIT-Bh?
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  Recruitment Procedure
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Apply Here</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About IIIT-bh">
                <NavDropdown.Item href="/">Academics</NavDropdown.Item>
                <NavDropdown.Item href="/">
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
