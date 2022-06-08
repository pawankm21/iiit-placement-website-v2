import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
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
    src: "/carousel/1.jpg",
    alt: "Placement",
    caption: "IIIT Bhubaneswar",
  },
  {
    src: "/carousel/2.jpg",
    alt: "Placement",
  },
];

export default function Home({ data }) {
  // const [_, setPlacementData] = useData();
  // setPlacementData(data);
  return (
    <div className="mx-auto mt-4">
      <Carousel as="div">
        {carouselImages.map((image, index) => (
          <Carousel.Item key={image.src}>
            <Image
              src={image.src}
              className={styles.carouselImage}
              alt={image.alt}
              layout="fill"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="mt-5">
        <h1>Placement Highlights {getLastPlacementYear()} Batch</h1>
        <Container className="row align-middle mb-5">
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
