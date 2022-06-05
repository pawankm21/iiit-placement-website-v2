import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import BaseNavbar from "../components/navbar";
import BaseFooter from "../components/footer";
import styles from "./Layout.module.css";
export default function BaseLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>IIIT Bhubaneswar Placements</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Placement website for IIIT Bhubaneswar"
        />
      </Head>
            <BaseNavbar/>
          <Container>{children}</Container>
          <BaseFooter/>
    </div>
  );
}
