import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel"
import Image from "next/image";
export default function WhyUs() {
  const carouselImages = [...Array(23).keys()];
  return (
    <Container>
      <h1 className="my-5">Why Recruit from us?</h1>
      <Container className="row">
        <h4>Selection Process</h4>
        <div className="col-lg-4  d-flex  align-items-center ">
          <Image
            src="/tpcell/jee.jpg"
            alt="jee"
            width={400}
            height={200}
            layout="fixed"
            placeholder="blur"
            blurDataURL="/tpcell/jee.jpg"
          />
        </div>
        <p className="col-lg-8">
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
      <Container className="row my-5">
        <h4>Student Faculty Ratio</h4>
        <p className="col">
          IIIT Bhubaneswar has one of the best students-faculty ratio compared
          with most of the institute in the region. Our faculties have a
          tremendous blend of corporate expertise with the teaching passion.
          They are involved with various research projects and experiments in
          collaboration with various international and national organizations
          such as Dept. of Science and Technology, Govt. of India and DIT, Govt
          of India.
        </p>
        <div className="col  d-flex  align-items-center justify-content-center ">
          <Image
            src="/tpcell/student-teacher-ratio.png"
            alt="jee"
            width={200}
            height={200}
            layout="fixed"
            placeholder="blur"
            objectFit={"cover"}
            blurDataURL="/tpcell/jee.jpg"
          />
        </div>
      </Container>
      <Container className="row my-5">
        <h4>Infrastructure</h4>
        <p className="col">
          The sprawling campus of IIIT Bhubaneswar is established at the
          outskirts of Bhubaneswar in an area of 23 acres. className rooms at
          IIIT Bhubaneswar are equipped with the projectors and latest PCs. The
          Institute has multiple specialized labs such Computer Architecture,
          Database Lab, VLSI lab, MATLAB, Engineering Drawing, Chemistry Lab,
          Physics Lab, Java Development Lab, etc. Our computers are powered with
          Ubuntu Operating System and Open source development is also
          encouraged. 24 hours internet facility is available both at hostel and
          campus. Library at IIIT Bhubaneswar have a vast collections of books
          journals and magazines. IIIT Bhubaneswar is a member of IEEE Computer
          Society, IEEE Xplore Digital Library and many more.
        </p>
        <div className="col  d-flex  align-items-center justify-content-center ">
          <Carousel>
            {carouselImages.map((image, index) => (
              <Carousel.Item key={`${image + index}`}>
                <Image
                  className="d-block w-100"
                  src={`/infra/${image + 1}.jpg`}
                  alt={image + 1}
                  width={900}
                  height={600}
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  blurDataURL={`/infra/${image + 1}.jpg`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
      <div>
        <Container className="row g-4 my-5">
          <div className="col">
            <Card className="h-100 pe-auto text border-success">
              <Card.Img
                variant="top"
                src="/tpcell/batch.jpg"
                style={{
                  objectFit: "cover",
                  height: 300,
                }}
              />
              <Card.Body>
                <Card.Title>Past Placement Records</Card.Title>
                <Button variant="outline-success">View</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100 pe-auto text border-success">
              <Card.Img
                variant="top"
                src="/tpcell/achievements.jpg"
                style={{
                  objectFit: "cover",
                  height: 300,
                  objectPosition: "top",
                }}
              />
              <Card.Body>
                <Card.Title>Student Achievements</Card.Title>
                <Button variant="outline-success">View</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100 pe-auto text border-success">
              <Card.Img
                variant="top"
                src="/tpcell/events.jpg"
                style={{
                  objectFit: "cover",
                  height: 300,
                }}
              />
              <Card.Body>
                <Card.Title>Activities</Card.Title>
                <Button variant="outline-success">View</Button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </Container>
  );
}
