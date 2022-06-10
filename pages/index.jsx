import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import {
  getLastPlacementYear,
  placementBarGraphByYear,
  getPlacementPieChartByYear,
  getNumberOfRecruitersBarGraph,
} from "../utils/utils";
import styles from "../styles/index.module.css";
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
    src: "/tpcell/1.jpg",
    alt: "Placement",
    caption: "Placement Cell 2016-2017",
  },
  {
    src: "/tpcell/3.jpg",
    alt: "Placement",
    caption: "Placement Cell 2017-2018",
  },
];

export default function Home({ data }) {
  return (
    <div className="mx-auto mt-5">
      <div className="mt-5">
        <Container as="div" className="row my-5">
          <h1>About Us</h1>
          <div className="col-md-6  col-12 ">
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
          <div className="col-12 col-md-6 p-5 text-center">
            <Carousel>
              {carouselImages.map((image) => (
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={300}
                    layout="responsive"
                    lazyLoad={true}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />

                  <Carousel.Caption>
                    <p>{image.caption}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Container>
        <Container as="div" className="row my-5">
          <h1>Director's Note</h1>
          <div className="col-md-4 col-12"></div>
          <div className="col-md-8 col-12">
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
          <div className="col">
            {" "}
            <Bar {...placementBarGraphByYear(data, 2022)} />
          </div>
          <div className="col">
            <Pie {...getPlacementPieChartByYear(data, 2022)} />
          </div>
        </Container>
        <Container as="div" className="my-5">
          <h1>No. of Campus Recruiters</h1>
          <Bar {...getNumberOfRecruitersBarGraph(data)} className="p-md-2" />
        </Container>
        <Container as="div" className="my-5">
          <h1>Top Recruiters</h1>
          <div className="row">
            <div className="col">
              <Image
                src="/company/amazon.png"
                alt="Amazon"
                width={100}
                height={100}
                layout="responsive"
                lazyLoad={true}
              ></Image>
            </div>
            <div className="col">
              <Image
                src="/company/baker-hughes.png"
                alt="Amazon"
                width={100}
                height={100}
                layout="responsive"
                lazyLoad={true}
              ></Image>
            </div>
            <div className="col">
              <Image
                src="/company/juspay.png"
                alt="Amazon"
                width={100}
                height={100}
                layout="responsive"
                lazyLoad={true}
              ></Image>
            </div>
            <div className="col">
              <Image
                src="/company/tekion.png"
                alt="Amazon"
                width={100}
                height={100}
                layout="responsive"
                lazyLoad={true}
              ></Image>
            </div>
            <div className="col">
              <Image
                src="/company/ukg.png"
                alt="Amazon"
                width={100}
                height={100}
                layout="responsive"
                lazyLoad={true}
              ></Image>
            </div>
            <div className="col">
              <Image
                src="/company/turtlemint.png"
                alt="Amazon"
                width={100}
                height={100}
                layout="responsive"
                lazyLoad={true}
              ></Image>
            </div>
            <div className="col">
              <Image
                src="/company/valuelabs.png"
                alt="Amazon"
                width={100}
                height={100}
                layout="responsive"
                lazyLoad={true}
              ></Image>
            </div>
            <div className="col">
              <Image
                src="/company/siemens.png"
                alt="Amazon"
                width={100}
                height={100}
                layout="responsive"
                lazyLoad={true}
              ></Image>
            </div>
            <div className="col">
              <Image
                src="/company/optum.png"
                alt="Amazon"
                width={100}
                height={100}
                layout="responsive"
                lazyLoad={true}
              ></Image>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch("http://localhost:3000/api/data");
  const dataJSON = await data.json();
  return {
    props: {
      data: dataJSON,
    },
  };
}
