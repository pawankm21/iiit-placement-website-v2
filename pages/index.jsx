import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Link from "next/link";
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

export default function Home({ data }) {
  const carouselComponents = placementCellImages.map((image, index) => (
    <Carousel.Item key={`${image.src + index}`}>
      <img
        className="d-block w-100"
        src={image.src}
        alt={image.alt}
        style={{
          objectFit: "contain",
          height: "300px",
        }}
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
        <div className="row my-5">
          <h1 className="mb-4">Director&apos;s Message</h1>
          <div className="col-md-3 col-12">
            <img
              src="/tpcell/director.png"
              alt="Director"
              className="img-fluid"
            />
          </div>

          <div className="col-md-9 col-12">
            <p className="fw-normal fst-italic">
              <div className="fw-bold mb-2">Greetings recruiter,</div>The T&P
              cell promotes the potential of students who are nurtured by
              building employability skills and are developed by a culture of
              engineering, research, and technology in the highly competitive
              academic environment. Students are trained through a personalized
              skill upgrade and technical training program, and as a result,
              they contribute to global core competencies by generating rich
              human capital. The institute would like to gratefully recognize
              the mutually fruitful partnership with our previous recruiters.
              Since its foundation, we have promoted the industry association.
              We want to maintain the same level of communication. We&apos;d
              like to encourage you to visit our campus and assess the skill of
              our students. We look forward to working with you in the campus
              recruitment class of {CURRENT_YEAR}. As a potential employer, we
              are confident that your search for the ideal applicant has come to
              an end.
              <div>Best Regards,</div>
              <blockquote className="fw-bold">
                Mr. Manoj Pattnayak Director, IIIT Bhubaneswar
              </blockquote>
            </p>
          </div>
        </div>
        <div className="row my-5 ">
          <h1 className="mb-4">Registrar&apos;s Message</h1>
          <div className="col-md-3 col-12 ">
            <img
              src="/tpcell/registrar.jpeg"
              alt="Registrar"
              className="img-fluid"
              style={{
                height: "100%",
                objectFit: "cover",
              }}
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
          <h1>Placement Highlights {getLastPlacementYear()} Batch</h1>
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
                <img
                  src="/company/amazon.png"
                  alt="Amazon"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <img
                  src="/company/turtlemint.png"
                  alt="turtlemint"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <img
                  src="/company/valuelabs.png"
                  alt="value-labs"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <img
                  src="/company/siemens.png"
                  alt="siemens"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <img
                  src="/company/optum.png"
                  alt="optum"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <img src="/company/ukg.png" alt="ukg" className="w-100 h-100" />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <img
                  src="/company/tekion.png"
                  alt="tekion"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <img
                  src="/company/juspay.png"
                  alt="juspay"
                  className="w-100 h-100"
                />
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <img
                  src="/company/baker-hughes.png"
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
