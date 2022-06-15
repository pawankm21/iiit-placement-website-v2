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
import { carouselImages } from "../utils/vars";

export default function Home({ data }) {
  return (
    <div className="mx-auto mt-5">
      <div className="mt-5">
        <Container as="div" className="row my-5">
          <h1>About Us</h1>
          <div className="col-md-8  col-12 ">
            <h5 className="fw-normal">
              The Training and Placement Cell, IIIT Bhubaneswar aims at creating
              a link between the students and the corporate sectors. It works to
              train the students with effective problem solving ability,
              personality improvement as well as good communication skills. We
              are a team comprising of placement executives, students and
              faculties.
            </h5>
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
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    blurDataURL={"/placeholder.png"}
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
              placeholder="blur"
              blurDataURL="/placeholder.png"
              objectFit="cover"
              objectPosition="center"
            />
            <blockquote className="text-center fw-bold fst-italic ">
              Dr. Debasish Jena, Registrar IIIT-Bh
            </blockquote>
          </div>
          <div className="col-md-6 col-12">
            <h5 className="fw-normal fst-italic ">
              &ldquo;IIIT Bhubaneswar will be a global voice in the near future.
              The voices which will make the institute touch new technical
              heights and success. I am very proud to be a part of such an
              institute. Students here are trained though various stages before
              they are made to face the real world. Rigorous laboratory
              practices have made their fundamentals clear in most of their
              subjects. I wish they succeed in every field their life. &rdquo;
            </h5>
          </div>
        </Container>
        <Container as="div" className="row align-middle my-5">
          <h1>Placement Highlights {getLastPlacementYear()} Batch</h1>
          <div className="col-lg-6">
            {" "}
            <Bar {...placementBarGraphByYear(data, 2022)} />
          </div>
          <div className="col-lg-6">
            <Pie {...getPlacementPieChartByYear(data, 2022)} />
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
          <div className="row justify-content-evenly">
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/amazon.png"
                alt="Amazon"
                width={200}
                height={100}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/baker-hughes.png"
                alt=""
                width={200}
                height={100}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/juspay.png"
                alt=""
                width={200}
                height={100}
                blurDataURL="/placeholder.png"
                placeholder="blur"
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/tekion.png"
                alt=""
                width={200}
                height={100}
                placeholder="blur"
                blurDataURL="/company/tekion.png"
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/ukg.png"
                alt=""
                width={200}
                height={100}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/turtlemint.png"
                alt="turtlemint"
                width={200}
                height={100}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/valuelabs.png"
                alt="value-labs"
                width={200}
                height={100}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/siemens.png"
                alt=""
                width={200}
                height={100}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              ></Image>
            </div>
            <div className="col-3 col-lg-auto">
              <Image
                src="/company/optum.png"
                alt=""
                width={200}
                height={100}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
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
