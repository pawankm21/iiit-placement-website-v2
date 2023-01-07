import div from "react-bootstrap/Container";
import Link from "next/link";

export default function Academics() {
  return (
    <div>
      <div className="col-lg-12">
        <h1 className="my-5 fw-bolder">Academics </h1>

        <div className="row">
          <h2 className="text-success text-lg">Courses</h2>
          <div className="col-lg-12">
            <h5>B.Tech</h5>
            <p>The B-tech program is divided into five departments:</p>
            <ul>
              <li>Computer Science and Engineering</li>
              <li>Information Technology</li>
              <li>Computer Engineering</li>
              <li>Electronics and Telecommunication</li>
              <li>Electrical and Electronics </li>
              <Link href="#dept">See more...</Link>
              <br />
            </ul>
            <p>
              The departments strive to provide inimitable infrastructure and
              facilities to our undergraduate students where they bring their
              project and research ideas to fruition. Course projects and
              training are given emphasis. The departments have taken up the
              challenge to attract world className faculty in all areas of this
              program. We plan to continue building on the initial momentum and
              to attract the best students and the faculty over the coming
              years.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5>M.Tech</h5>
            <p>
              The Institute offers M-Tech programme in Computer Science and
              Engineering. Our course is approved by the All India Council of
              Technical Education (AICTE). The objective of this program is to
              develop professionals who can fit into the higher order industrial
              and academic needs to the state and the country.
            </p>

            <br />
            <p>
              The courses available in this program are: Advanced computer
              networks, Design and Analysis of Algorithms, Business Functions
              and Processes, Mathematical Foundations of computer science,
              Object Oriented Programming with Java, Advanced Database
              Management System,etc.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5>PhD</h5>
            <p>
              The Institute offers doctoral programme in Computer Science and
              Engineering. This programme was started in the year 2015. a spirit
              of enquiry and adventure powered by the in campus living, boosts
              the level of research and projects work done by the students.
            </p>
            <br />
            <p>
              Post Graduate Courses such as: Enterprise Resource Planning,
              Mobile Computing, Machine Learning, Document Imaging and Pattern
              Analysis, Parallel and Distributed Computing, Bio-Informatics,
              Information Retrieval, Mobile Ad Hoc Network, Advanced Data
              Mining, Information Theory and Coding,etc.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <h2 className="text-success pt-5 pb-2 text-lg" id="dept">
        Departments
        </h2>
        <div className="row">
          <div className="col-lg-12">
            <h5>Computer Science and Engineering</h5>
            <p>
              This department comprises of undergraduate, postgraduate and
              doctoral students. It consists of a group of very experienced and
              well-known professors of the state. Along with language
              studies,the students of the department lay intense focus on
              algorithmic design, cryptography, machine learning, cloud
              computing,etc
            </p>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5>Information and Technology</h5>
            <p>
              integrating “Computing and Communication&quot;. The branch is
              facilitated Information Technology branch adds an incisive studies
              in by and experienced group of faculty members and guide the
              students into various academic and project activities.
              <br />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5>Computer Engineering</h5>
            <p>
              Computer Engineering embodies the science and technology of
              design, construction, implementation, and maintenance of software
              and hardware components of modern computing systems and
              computer-controlled equipment.
              <br />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5>Electronics and Telecommunication Engineering</h5>
            <p>
              The Department of Electrical and Electronics Engineering enshrines
              a high level of enthusiasm and dedication to the good of this
              novel conception of blending Electronics and Electrical studies
              into one field of study.
              <br />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5>Electrical and Electronics Engineering</h5>
            <p>
              The discipline of ETC focuses on the design of underlying hardware
              of the electronics sector and also lays strong emphasis on their
              integration with the software support. Ushered by a group of both.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
