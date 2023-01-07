import Container from "react-bootstrap/Container";
import Image from "next/image";
export default function Training() {
  return (
    <Container className="mb-5">
      <Container className="col-lg-12">
        <h1 className="fw-bolder">Training Programmes</h1>
        <p>
          The goal of Training &amp; Placement Cell is to Provide employment
          opportunities and world className training to IIIT Students in leading
          institutions. The Cell is well equipped with ample infrastructure in
          Terms of classrooms, GD rooms,Conference Room, Auditoriums for Pre
          Placement Trainings, Seminars etc.&nbsp;
        </p>
        <br />
        <p className="row">
          <h3 className="mt-5 mb-2">Pre-Placement Trainings</h3>
          <Container className="col-lg-4 my-3 my-lg-0">
            <Image
              src="/tpcell/class.jpg"
              className="Image-fluid"
              alt="Pre-Placement Training"
              width={400}
              height={300}
              objectFit="contain"
              layout="responsive"
            />
          </Container>
          <Container className="col-lg-8">
            <p>
              &nbsp;IIIT Bhubaneswar provides its students with pre-placement
              training sessions to groom them into individuals of competence to
              compete at the global level. The students take classes to sharpen
              their quantitative aptitude and logical reasoning
              abilities.&nbsp;Rigorous mock group discussion and personal
              interview sessions are held to broaden their stance. Understanding
              the significance of the NAC-Tech in IT/Engineering industry we
              have made it mandatory that every student focusing on recruitment
              to take the test.&nbsp;In addition the placement cell organizes
              regular tests to evaluate the students on the basis of their
              preparedness in quantitative aptitude, reasoning, GD-PI and
              technical skills. Virtual campus drives are also conducted to warm
              up the students prior to their attending the placement
              drives.&nbsp;
            </p>
          </Container>
        </p>
        <p className="row">
          <h3 className="mt-5 mb-2">Seminars</h3>
          <Container className="col-lg-4  d-lg-none my-3 my-lg-0">
            <Image
              src="/tpcell/seminar.jpg"
              className="Image-fluid"
              alt="Seminar"
              width={400}
              height={300}
              objectFit="contain"
              layout="responsive"
            />
          </Container>
          <Container className="col-lg-8">
            <p>
              &nbsp;IIIT Bhubaneswar arranges seminars and talks with different
              eminent people and leaders from around the corner. It encourages
              students to participate and learn new industry-related techniques
              and process from the leaders themselves. It has been actively
              organised in a regular time period. Understanding the significance
              of the latest technologies in IT/Engineering industry we have made
              it a point that every student attends the seminars and gets to
              know about them. These seminars help the students in making good
              research projects and get experienced before joining the
              company.&nbsp;
              <br />
            </p>
          </Container>
          <Container className="col-lg-4 d-none d-lg-block my-3 my-lg-0">
            <Image
              src="/tpcell/seminar.jpg"
              className="Image-fluid"
              alt="Seminar"
              width={400}
              height={300}
              objectFit="contain"
              layout="responsive"
            />
          </Container>
        </p>
        <p className="row">
          <h3 className="mt-5 mb-2">Internships and Projects</h3>
          <Container className="col-lg-4  my-3 my-lg-0">
            <Image src="/tpcell/lib.jpg" className="Image-fluid" alt="Internship" 
               width={400}
              height={300}
              objectFit="contain"
              layout="responsive"
            />
          </Container>
          <Container className="col-lg-8">
            <p>
              &nbsp;The institute also encourages its students to work as
              interns in various organizations to gain practical knowledge in
              their respective fields because we understand that experience
              always adds a feather to the hat of success.&nbsp;Students indulge
              in rigorous technical trainings and project work to keep them
              updated with latest happenings in the field of technology. It has
              been a part of the curriculum since its inception. The training
              our students undergo enable them in excelling at various fields
              and even achieve pre-placement offers at various esteemed
              companies. In the year 2015, 11 students were selected for
              internship at Dell and in the year 2016, 20 students were selected
              for the same. It will be our pleasure to assist you in recruitment
              process to build a prolific relationship and meet the challenges
              ahead.&nbsp;
            </p>
          </Container>
        </p>
      </Container>
    </Container>
  );
}
