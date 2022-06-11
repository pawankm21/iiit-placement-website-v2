import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "next/image";
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
const carouselImages = [
  {
    src: "/tpcell/1.jpeg",
    alt: "Placement",
    caption: `Placement Cell 2022`,
  },
  {
    src: "/tpcell/professor_incharge.jpeg",
    alt: "Professor Incharge",
    caption: `Dr Subrata Kumar Mohanty, Prof. In-Charge T&P Cell`,
  },
];

export default function Home({ data }) {
  return (
    <div className="mx-auto mt-5">
      <div className="mt-5">
        <Container as="div" className="row my-5">
          <div className="col-md-8  col-12 ">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, iste sed odit debitis amet natus animi mollitia fuga
              tenetur obcaecati praesentium, consectetur ex rerum, modi commodi
              ullam sunt asperiores corrupti! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Laboriosam impedit animi veritatis!
              Rerum doloribus impedit sit dolor cupiditate asperiores magni
              soluta quaerat est tenetur accusantium, voluptatem assumenda,
              beatae sapiente earum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <Carousel>
              {carouselImages.map((image, index) => (
                <Carousel.Item key={`${image.src + index}`}>
                  <Image
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={600}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />

                  <Carousel.Caption className="   p-1 bg-dark bg-opacity-50 px-lg-2 rounded-3 fw-semibold"
                    style={{
                    fontSize: "0.8rem",
                  }}
                  >
                    {image.caption}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Container>
        <Container as="div" className="row my-5">
          <h1>Registrar&apos;s Message</h1>
          <div className="col-md-6 col-12">
            <Image
              src="/tpcell/registrar.jpeg"
              alt="Registrar"
              width={900}
              height={400}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="col-md-6 col-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, iste sed odit debitis amet natus animi mollitia fuga
              tenetur obcaecati praesentium, consectetur ex rerum, modi commodi
              ullam sunt asperiores corrupti! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Laboriosam impedit animi veritatis!
              Rerum doloribus impedit sit dolor cupiditate asperiores magni
            </p>
          </div>
        </Container>
        <Container as="div" className="row align-middle my-5">
          <h1>Placement Highlights {getLastPlacementYear()} Batch</h1>
          <div className="col-lg-6">
            {" "}
            <Bar {...placementBarGraphByYear(data, 2022)} />
          </div>
          <div className="col-lg-6">
            <Pie {...getPlacementPieChartByYear(data, 2022)} className="w-100" />
          </div>
        </Container>
        <Container className="d-flex">
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
        </Container>
        <Container as="div" className="my-5 px-md-5">
          <h1>No. of Campus Recruiters over the years</h1>
          <div className="px-lg-5 mx-lg-5">
            <Bar {...getNumberOfRecruitersBarGraph(data)} className="px-md-5" />
          </div>
        </Container>
        <Container as="div" className="my-5">
          <h1>Top Recruiters</h1>
          <div className="row">
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/amazon.png"
                alt="Amazon"
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/baker-hughes.png"
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/juspay.png"
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/tekion.png"
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/ukg.png"
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/turtlemint.png"
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/valuelabs.png"
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/siemens.png"
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image src="/company/optum.png" alt="" width={100} height={100} />
            </div>
          </div>
        </Container>
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
