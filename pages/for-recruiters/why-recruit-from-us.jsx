import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Link from "next/link";
export default function WhyUs() {
  return (
    <Container>
      <h1 className="my-5">Why Recruit from us?</h1>
      <Container as="p" className="row">
        <h4>Selection Process</h4>
        <p>
          The admission process is designed to attract best talent in our
          programmes. Over the years the quality of the students, measured by
          the JEE Score or GATE score, admitted to the Institute has been going
          upwards. The Admission to B-Tech. Programme is done through the JEE
          conducted by CBSE. The Institute conducts its own counselling process
          for the admission to the various streams. The Institute uses stiff
          criteria for eligibility of the students for admission. The Admission
          to M-Tech. Programmes is open to students from all across India.
          Institute uses Gate Scores as well as its own Entrance Test for
          admission to M-Tech Programmes. In addition to the written test score,
          aptitude of the students is tested to Personal Interviews
        </p>
      </Container>
      <Container className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <Link href={"/"}>
            <a>
              <Card className="h-100 pe-auto">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Link>
        </div>

        <div className="col">
          <Link href={"/"}>
            <a>
              <Card className="h-100 pe-auto">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Link>
        </div>
      </Container>
    </Container>
  );
}
