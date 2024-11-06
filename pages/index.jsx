import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import {
  getLastPlacementYear,
  placementBarGraphByYear,
  getPlacementPieChartByYear,
  getNumberOfRecruitersBarGraph,
  getData,
} from "../utils/utils";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
import { placementCellImages, CURRENT_YEAR } from "../utils/vars";
import news from "../data/news.json";
import events from "../data/events.json";
export default function Home({ data }) {
  const carouselComponents = placementCellImages.map((image, index) => (
    <Carousel.Item key={`${image.src + index}`}>
      <Image
        className="d-block w-100"
        src={image.src}
        alt={image.alt}
        objectFit="contain"
        height={300}
        width={300}
      />

      <Carousel.Caption
        className="   p-1 bg-dark bg-opacity-50 px-lg-2 rounded-3 fw-semibold"
        style={{
          fontSize: "0.8rem",
        }}
      >
        {image.caption}
      </Carousel.Caption>
    </Carousel.Item>
  ));
  const PIECHART = <Pie {...getPlacementPieChartByYear(data, CURRENT_YEAR)} />;
  const BARGRAPH = <Bar {...placementBarGraphByYear(data, CURRENT_YEAR)} />;
  return (
    <div className="mx-auto mt-5">
      <Row>
        <Col className="col-lg-8 col-12">
          <Tabs defaultActiveKey="News" id="uncontrolled-tab" className="mb-3">
            <Tab eventKey="News" title="News">
              <div
                style={{
                  height: "200px",
                }}
              >
                <ListGroup className="card">
                  {news.map(({ headline, main, additionalText }) => (
                    <ListGroup.Item key={headline}>
                      <h6 className="text-success fw-bold">{headline}</h6>
                      <p className="fst-italic">{main}</p>
                      {(
                          <>
                            {additionalText && (
                              <p
                                className="mt-1 fst-italic"
                                dangerouslySetInnerHTML={{
                                  __html: additionalText.replace(
                                    /\*\*(.*?)\*\*/g,
                                    "<strong>$1</strong>"
                                  ),
                                }}
                              ></p>
                            )}
                          </>
                    )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </Tab>
            <Tab eventKey="Events" title="Events">
              <div
                style={{
                  height: "200px",
                }}
              >
                <ListGroup className="card">
                  {events.map((event) => (
                    <ListGroup.Item key={event}>
                      <li className="text-success">{event}</li>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </Tab>
          </Tabs>
        </Col>
        <Col className=" col-md-4  col-12">
          <Card>
            <Card.Header className="fw-bold text-success">
              Quick Links
            </Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>
                <Link href="https://interviews-at-iiit.vercel.app/">
                  <a>Interviews at IIIT - Web Portal</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <Link href="/placements">Placement Statistics </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://interviews-at-iiit.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interviews-at-IIIT Web Portal
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/recruitment-procedure">
                  <a>Recruitment Procedure</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/JAF_2020.doc">
                  <a>JAF form</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/ib.pdf">
                  <a>Placement Brochure</a>
                </Link>
              </ListGroup.Item>
              
              {/* removed faculty profile */}
              {/* <ListGroup.Item>
                <Link href="/faculty.pdf">
                  <a>Faculty Profile</a>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <div className="mt-5">
        <div className="row my-5">
          <h1>About Us</h1>
          <div className="col-md-8  col-12 ">
            <p className="fw-normal">
              The Training and Placement Cell, IIIT Bhubaneswar aims at creating
              a link between the students and the corporate sectors. It works to
              train the students with effective problem solving ability,
              personality improvement as well as good communication skills. We
              are a team comprising of placement executives, students and
              faculties.We facilitate full-time and internship recruitment for
              300+ graduates from across 5 different departments {"("} Computer
              Science {"&"} Engineering, Information Technology, Electrical and
              Electronics Engineering, Electronics and Telecommunication
              Engineering {")"} with a vast diversity of talent. We have
              students across many programs namely B.Tech, M.Tech, and Ph.D who
              are looking forward to challenging and exciting job opportunities
              in industry and academia.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <Carousel>{carouselComponents}</Carousel>
          </div>
        </div>
        <div className="row my-5 ">
          <h1 className="mb-4">Registrar&apos;s Message</h1>
          <div className="col-md-3 col-12 ">
            <Image
              src="/tpcell/registrar.jpeg"
              alt="Registrar"
              className="Image-fluid"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div className="col-md-9 col-12">
            <p className="fw-normal fst-italic ">
              <div className="fw-bold mb-2">Greetings recruiter,</div> In the
              first decade of its existence, the Institute had some enviable
              achievements. The construction of the campus, building academic
              infrastructure, recruiting a bunch of young and talented faculty
              are some of these achievements. The Institute aims to be a
              technology playground. This implies fun in learning, developing of
              competitive spirit, developing a sense of independence and
              interdependence. The Institute&apos;s curriculum, education
              delivery methods, evaluation standards are being constantly fine
              tuned to achieve the objective of being a technology playground.I
              invite you to visit our campus and engage with students who can be
              your future hires and faculty who can show what technology will be
              like in future.
              <div>Best Regards,</div>
              <blockquote className="fw-bold">
                Dr. Debasish Jena, Registrar IIIT-Bh
              </blockquote>
            </p>
          </div>
        </div>
        <div className="row align-middle my-5">
          <h1>Placement Highlights {CURRENT_YEAR} Batch</h1>
          <div className="col-lg-6">{BARGRAPH}</div>
          <div className="col-lg-6">{PIECHART}</div>
        </div>
        <div className="d-flex">
          <Button className="btn-lg text-dark btn-info mx-auto ">
            <Link href="/placements">
              <span className="text-dark fw-bold">
                View more{" "}
                <ChevronDoubleRightIcon
                  style={{
                    color: "black",
                    width: "1.5rem",
                    height: "1.5rem",
                    marginLeft: "0.5rem",
                    display: "inline-block",
                  }}
                />{" "}
              </span>
            </Link>
          </Button>
        </div>
        <div className="my-5 px-md-5">
          <h1>No. of Campus Recruiters over the years</h1>
          <div className="px-lg-5 mx-lg-5">
            <Bar {...getNumberOfRecruitersBarGraph(data)} className="px-md-5" />
          </div>
        </div>
        <div className="my-5">
          <h1>Top Recruiters</h1>
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col md={3} xs={6}>
                <Image
                  src="/company/amazon.png"
                  alt="Amazon"
                  width={200}
                  height={100}
                  objectFit="cover"
                  layout="responsive"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <Image
                  src="/company/turtlemint.png"
                  alt="turtlemint"
                  width={200}
                  height={100}
                  objectFit="cover"
                  layout="responsive"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <Image
                  src="/company/valuelabs.png"
                  alt="value-labs"
                  width={200}
                  height={100}
                  objectFit="cover"
                  layout="responsive"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <Image
                  src="/company/siemens.png"
                  alt="siemens healthineers"
                  className="w-100 h-100"
                  width={500}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <Image
                  src="/company/optum.png"
                  alt="optum"
                  className="w-100 h-100"
                  width={200}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <Image
                  src="/company/ukg.png"
                  alt="ukg"
                  className="w-100 h-100"
                  width={200}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <Image
                  src="/company/tekion.png"
                  alt="tekion"
                  width={200}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <Image
                  src="/company/juspay.png"
                  alt="juspay"
                  width={200}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <Image
                  src="/company/baker-hughes.png"
                  width={200}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  alt="baker-hughes"
                  className="w-100 h-100"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const path = require("path");
  const fs = require("fs");
  const excelToJson = require("convert-excel-to-json");

  return {
    props: {
      data: getData(fs, path, excelToJson),
    },
  };
}