import Container from "react-bootstrap/Container";
import Image from "next/image";
import { getImages } from "../../utils/utils";
export default function Recruiters({ images }) {
  const IMAGES = images.map((image, index) => (
    <div className="col-md-2 col-sm-4 p-4" key={index + image}>
      <img
        src={image}
        className="img-fluid"
        alt="Recruiter"
      />
    </div>
  ));
  return (
    <Container>
      <h1 className="my-5">Our Recruiters</h1>
      <div className="row justify-content-center ">
        {IMAGES}
      </div>
    </Container>
  );
}
export async function getStaticProps(context) {
  const fs = require("fs");

  return {
    props: {
      images: getImages(fs),
    },
  };
}
