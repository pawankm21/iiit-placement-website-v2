import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import BaseNavbar from "../components/navbar";
import BaseFooter from "../components/footer";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import { getBreadCrumbs } from "../utils/utils";
export default function BaseLayout(props) {
  const router = useRouter();
  const breadCrumb = getBreadCrumbs(router.route);
  return (
    <>
      <BaseNavbar />
    <div className={styles.layout}>
      <Head>
        <title>IIIT Bhubaneswar Placements</title>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Placement website for IIIT Bhubaneswar"
        />
        <noscript>Please enable JavaScript to view the content.</noscript>
      </Head>
      <div
        className="position-relative"
        style={{
          width: "100vw",
          height: "50vh",
        }}
      >
        <Image
          src="/infra/10.jpg"
          priority={true}
          objectFit="cover"
          layout="fill"
          objectPosition={"center"}
          alt="IIIT Bhubaneswar Placements"
        />
        <div className=" d-md-none position-absolute top-0 w-100 text-center bg-success bg-opacity-50 h-100">
          <h3 className="text-white fw-semibold p-4  ">Welcome To</h3>
          <h1 className="fw-bolder p-4 text-white fw-bolder ">
            <strong>
              <span
                style={{
                  color: "#00FF08",
                }}
              >
                IIIT Bh
              </span>
              ubaneswar Placements
            </strong>
          </h1>
        </div>
        <div className="  position-absolute justify-content-center  d-md-flex  mt-lg-5 mt-3 d-none top-0 w-100 ">
          <div className="p-5 rounded-full bg-gradient bg-dark  shadow-lg rounded-pill  bg-opacity-75   fw-light">
            {" "}
            <h1
              className={`text-center d-flex align-items-center ${styles.textGreen} `}
            >
              <Image
                src="/footer-logo.webp"
                width={50}
                height={50}
                priority="true"
                alt="IIIT Bhubaneswar Training and Placement Cell"
                layout="fixed"
              />
              <strong className="ms-2 text-white fw-bolder">IIIT-Bh</strong>
              ubaneswar Placements
            </h1>
            <div className="ms-5 d-flex gap-2">
              {breadCrumb.map((item, index) => {
                return (
                  <h5
                    className={styles.breadcrumbItem}
                    key={`${item.route} ${index}`}
                  >
                    {` |  `}
                    <Link
                      key={index}
                      href={item.route}
                      className={` text-capitalize`}
                      style={{
                        underline: "none",
                      }}
                    >
                      {item.name}
                    </Link>
                  </h5>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Container className={styles.main}>{props.children}</Container>
      <BaseFooter />
    </div>
    </>
  );
}
