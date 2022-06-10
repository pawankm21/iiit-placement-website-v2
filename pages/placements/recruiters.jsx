import Container from "react-bootstrap/Container";
import Image from "next/image";
import { getImages } from "../../utils/utils";
export default function Recruiters({ images }) {
  return (
    <Container>
      <h1>Our Recruiters</h1>
      <div className="row justify-content-center ">
        {images.map((image, index) => (
          <div className="col-md-2 col-sm-4 p-4" key={index + image}>
            <Image
              src={image}
              width={200}
              height={150}
              layout="responsive"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
export async function getServerSideProps(context) {
  const fs = require("fs");

  return {
    props: {
      images: getImages(fs),
    },
  };
}
