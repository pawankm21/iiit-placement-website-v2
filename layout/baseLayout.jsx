import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import BaseNavbar from "../components/navbar";
import BaseFooter from "../components/footer";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import { Breadcrumb } from "react-bootstrap";
export default function BaseLayout(props) {
  const router = useRouter();

  const carouselImages = [...Array(10).keys()];
  return (
    <div className={styles.layout}>
      <Head>
        <title>IIIT Bhubaneswar Placements</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Placement website for IIIT Bhubaneswar"
        />
        <noscript>Please enable JavaScript to view the content.</noscript>
      </Head>
      <BaseNavbar />
      <div className={styles.imageWrapper}>
        <div className={`row ${styles.bgOrange}`}>
          <div className="col-lg-5 my-lg-0 my-4 col-md-6 col-12 d-flex  align-items-center justify-content-center ">
            <div className="p-md-4 p-1  text-capitalize rounded-start bg-dark shadow-lg rounded-pill text-light w-100">
              {" "}
              <h2 className="fw-bolder ms-5">Placements</h2>
              <Breadcrumb className="ms-5">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-12">
            <Image
              src="/infra/10.jpg"
              width={1920}
              height={800}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <Container className={styles.main}>{props.children}</Container>
      <BaseFooter />
    </div>
  );
}
