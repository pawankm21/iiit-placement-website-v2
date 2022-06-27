import Image from "next/image";
import Container from "react-bootstrap/Container";
export default function Collaborations() {
  return (
    <div>
      <h1 className="my-5 fw-bolder">Collaborations</h1>
      <div className="my-5">
        <h2 className="fw-bold">University Tie-Ups</h2>
        <Container className="row my-4">
          <div className="col-lg-4">
            <Image
              src={"/unt.png"}
              width={200}
              height={100}
              alt="University of North Texas"
              layout="responsive"
            ></Image>
          </div>
          <div className="col-lg-8">
            <h4>University of North Texas</h4>
            <p>
              &nbsp;IIIT Bhubaneswar desires to develop and cultivate
              relationships to foster mutual interest with Universities and
              Institutes across the globe by creating and maintaining
              partnerships and tie ups with them. We have MOUs signed with
              University of North Texas&nbsp;
            </p>
          </div>
        </Container>

        <Container className="row my-4">
          <div className="col-lg-4 d-lg-none">
            <Image
              src={"/nus.png"}
              alt={"University of Singapore"}
              width={500}
              height={400}
              layout="responsive"
              objectFit={"cover"}
            ></Image>
          </div>
          <div className="col-lg-8">
            <h4>National University of Singapore</h4>
            <p>
              &nbsp;Tie ups will focus on academics, research and many joint
              projects. It will help the institute develop academically strong.
              National University of Singapore has also signed an MOU with the
              institute.&nbsp;
            </p>
          </div>
          <div className="col-lg-4 d-lg-block d-none">
            <Image
              src={"/nus.png"}
              alt={"nus"}
              width={200}
              height={100}
              layout="responsive"
              objectFit={"cover"}
            ></Image>
          </div>
        </Container>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="fw-bold ">Company Tie-Ups</h2>
            <div className="row my-5">
              <div className="col-lg-4 d-flex align-items-center d-lg-none">
                <div className="w-100">
                  <Image
                    src="/company/ibm.png"
                    width={800}
                    height={400}
                    layout="responsive"
                    objectFit={"cover"}
                    alt="IBM"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <h4>IBM</h4>
                <p>
                  &nbsp;Industry collaborations have been the centre of focus
                  for any successful IT based institute. We believe in
                  collaborations that genuinely help our students to get
                  acquainted with modern industry trends. IIIT Bhubaneswar is
                  proud to tie up with two global giants,IBM and Capgemini. IBM
                  initiated a university program with our institute to conduct
                  various real life projects as well as training sessions. They
                  will also conduct many workshops and demonstrations in our
                  institute with this collaboration. With this program our
                  students would get an opportunity to know about the various
                  procedures involved in making real life software.&nbsp;
                </p>
              </div>
              <div className="col-lg-4 d-lg-flex align-items-center d-none">
                <div className="w-100">
                  <Image
                    src="/company/ibm.png"
                    width={800}
                    height={400}
                    layout="responsive"
                    objectFit={"cover"}
                    alt="IBM"
                  />
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-lg-4 d-flex align-items-center">
                <div className="w-100">
                  <Image
                    src="/company/capgemini.png"
                    width={600}
                    height={300}
                    layout="responsive"
                    objectFit={"cover"}
                    alt="Capgemini"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <h4>Capgemini</h4>
                <p>
                  &nbsp;IIIT Bhubaneswar and Capgemini have also joined hands to
                  create high quality study materials and tools which not only
                  benefit our students as well the trainee at Capgemini India
                  but also paves their future in the IT environment.&nbsp;
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-lg-none">
                <Image
                  src="/company/samsung.png"
                  width={600}
                  height={400}
                  layout="responsive"
                  objectFit={"cover"}
                  alt="Samsung"
                />
              </div>
              <div className="col-lg-8">
                <h4>Samsung</h4>
                <p>
                  &nbsp;Samsung R&amp;D Institute (SRI), India is been
                  associated with our Institute to conduct in-house training
                  sessions for its employees, where our faculties serve as
                  domain experts.&nbsp;
                </p>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <Image
                  src="/company/samsung.png"
                  width={400}
                  height={200}
                  layout="responsive"
                  objectFit={"cover"}
                  alt="Samsung"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
