import Image from "next/image";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
export default function StudentAchievements({ achievements }) {
  return (
    <Container>
      <div className="row">
        <h1 className="my-5 fw-bolder">Student Achivements</h1>
        <p className="my-1">Here are some glimpses of our achievers</p>
        <Carousel>
          {achievements.map((achievement, index) => {
            if (achievement.images.length > 0) {
              return achievement.images.map((image, index) => {
                 return (
                   <Carousel.Item key={index + achievement.title}>
                     <Image
                       src={"/achievements/" + image}
                       alt={achievement.title}
                        width= {1000}
                         height= {500}
                         objectFit="cover"
                         objectPosition= "top"

                     />
                     <Carousel.Caption className="bg-dark">
                       <h3>{achievement.title}</h3>
                     </Carousel.Caption>
                   </Carousel.Item>
                 );
              })
            }
          })}
        
        </Carousel>

        <div className="col-lg-12">
          <h6 className="my-5">
            The Institute conducts a number of contests and competitions to
            foster a spirit of competitiveness among the students. The students
            are encouraged to participate in the well-known tech-fests and
            cultural fests in the country. The students have been consistently
            participating in such contests in large numbers and have been
            winning these contests.
          </h6>
          <Container className="mb-5">
            {achievements.map((achievement) => (
              <p key="title" className="w-100 my-3">
                <h3 className="my-3">{achievement.title}</h3>
                <p>{achievement.description}</p>
              </p>
            ))}
          </Container>
        </div>
      </div>
    </Container>
  );
}
export async function getStaticProps() {
  const achievements = require("../../data/achievements.json");
  return {
    props: {
      achievements,
    },
  };
}
