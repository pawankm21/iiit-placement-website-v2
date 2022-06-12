import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Link from "next/link";
export default function WhyUs() {
  return (
    <Container>
      <h1>Why Recruit from us?</h1>
      <p>
        <h4>Lorem ipsum</h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        iste sed odit debitis amet natus animi mollitia fuga tenetur obcaecati
        praesentium, consectetur ex rerum, modi commodi ullam sunt asperiores
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos at
        placeat unde. Vero soluta eaque in earum dolorem nisi omnis doloribus
        quis expedita, animi consequuntur voluptate voluptatibus, dolore sunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut provident
        recusandae ipsa non fugit perferendis incidunt blanditiis accusantium,
        molestias tenetur vitae magni. Ducimus quasi error nemo pariatur iure
        omnis id.
      </p>
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
