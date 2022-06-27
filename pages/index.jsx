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
  const carouselComponents = carouselImages.map((image, index) => (
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
  ));
  return (
    <div className="mx-auto mt-5">
      <div className="mt-5">
        <Container as="div" className="row my-5">
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
        </Container>
        <Container as="div" className="row my-5">
          <h1>Director&apos;s Message</h1>
          <div className="col-md-5 col-12">
            <div className="d-flex  justify-content-lg-start">
              <Image
                src="/tpcell/director.png"
                alt="Director"
                width={400}
                height={380}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>

          <div className="col-md-7 col-12">
            <div>
              <Image
                src="/icons/quote.svg"
                width={24}
                alt="quote"
                height={24}
                style={{ transform: "rotate(180deg)" }}
              />
            </div>
            <p className="fw-normal fst-italic ms-lg-5">
              <div className="fw-bold mb-2">Greetings recruiter,</div>
              Since our inception 15 years ago, we&apos;ve gone a long way.
              Rather than simply providing placement, our main goal is to
              provide a path for career development. The T&P cell promotes the
              potential of students who are nurtured by building employability
              skills and are developed by a culture of engineering, research,
              and technology in the highly competitive academic environment.
              Over the last 16 years, we&apos;ve nurtured the industry
              association, and we&apos;d like to maintain that relationship with
              our new recruiters. Students are trained through a personalized
              skill upgrade and technical training program, and as a result,
              they contribute to global core competencies by generating rich
              human capital. The institute would like to gratefully recognize
              the mutually fruitful partnership with our previous recruiters.
              Since its foundation, we have promoted the industry association.
              We want to maintain the same level of communication. We&apos;d
              like to encourage you to visit our campus and assess the skill of
              our students. We look forward to working with you in the campus
              recruitment class of 2022. As a potential employer, we are
              confident that your search for the ideal applicant has come to an
              end.
              <div>Best Regards,</div>
              <blockquote className="fw-bold">
                Mr. Manoj Pattnayak Director, IIIT Bhubaneswar
              </blockquote>
            </p>
            <div className=" text-end">
              <Image
                src="/icons/quote.svg"
                width={24}
                height={24}
                alt="quote"
              />
            </div>
          </div>
        </Container>
        <Container as="div" className="row my-5">
          <h1>Registrar&apos;s Message</h1>
          <div className="col-md-5 col-12">
            <div className="d-flex  justify-content-lg-end  mt-lg-5 ">
              <Image
                src="/tpcell/registrar.jpeg"
                alt="Registrar"
                width={400}
                height={380}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>

          <div className="col-md-7 col-12">
            <div>
              <Image
                src="/icons/quote.svg"
                width={24}
                height={24}
                style={{ transform: "rotate(180deg)" }}
                alt="quote"
              />
            </div>
            <p className="fw-normal fst-italic ms-lg-5">
              <div className="fw-bold mb-2">Greetings recruiter,</div> Fifteen
              years ago, the then President of India Dr. A. P. J Abdul Kalam
              laid the foundation stone of the Institute. After taking baby
              steps, the Institutes has entered into its teens. In the first
              decade of its existence, the Institute had some enviable
              achievements. The construction of the campus, building academic
              infrastructure, recruiting a bunch of young and talented faculty
              are some of these achievements. The Institute aims to be a
              technology playground. This implies fun in learning, developing of
              competitive spirit, developing a sense of independence and
              interdependence. The Institute&apos;s curriculum, education
              delivery methods, evaluation standards are being constantly fine
              tuned to achieve the objective of being a technology playground.
              In the campus, you will encounter restless students aspiring for
              more energetic faculty driving the students hard and an
              environment which encourages learning celebrates achievements and
              cultivates humanity and good citizenship. I invite you to visit
              our campus and engage with students who can be your future hires
              and faculty who can show what technology will be like in future.
              <div>Best Regards,</div>
              <blockquote className="fw-bold">
                Dr. Debasish Jena, Registrar IIIT-Bh
              </blockquote>
            </p>
            <div className=" text-end">
              <Image
                src="/icons/quote.svg"
                width={24}
                height={24}
                alt="quote"
              />
            </div>
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
