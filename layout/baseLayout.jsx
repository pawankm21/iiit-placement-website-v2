import Head from "next/head";
import Container from "react-bootstrap/Container";
import BaseNavbar from "../components/navbar";
import BaseFooter from "../components/footer";
import styles from "./Layout.module.css";
export default function BaseLayout(props) {
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
      <Container className={styles.main}>{props.children}</Container>
      <BaseFooter />
    </div>
  );
}
