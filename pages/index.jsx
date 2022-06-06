import { Carousel, Container,Image } from "react-bootstrap";
import getLastPlacementYear from "../utils/utils";
import styles from "../styles/index.module.css";
import { Bar,Pie } from "react-chartjs-2";
import { BAR_DATA_2022, PAST_RECRUITERS, PIE_DATA_2022 } from "../utils/placement-data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
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

export default function Home() {
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
            <Carousel.Caption className="bg-dark">
              <h1>{image.caption ? image.caption : null}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="mt-5">
        <h1>Placement Highlights {getLastPlacementYear()} Batch</h1>
        <Container className="row align-middle mb-5">
          <div className="col">
            {" "}
            <Bar {...BAR_DATA_2022} />
          </div>
          <div className="col">
            <Pie {...PIE_DATA_2022} height={100} />
          </div>
        </Container>
        <Container as="div" className="my-5">
          <h1>No. of Campus Recruiters</h1>
          <Bar {...PAST_RECRUITERS} />
        </Container>
      </div>
    </div>
  );
}
