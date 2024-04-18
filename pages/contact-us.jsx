import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div>
      <div className=" row">
        <h1 className=" mb-5 text-center fw-bolder">Contact Us</h1>
        <div className="col-md-6 ">
          <h3 className="fw-bold mb-5">Contact Information</h3>
          <div>
            <p>
              <h4>Training and Placement Cell</h4>
              <strong>Placement Office, IIIT Bhubaneswar</strong>
              <p>
                First Floor, Placement Building, IIIT Bhubaneswar,
                Bhubaneswar, Odisha - 751003, India
                <div>Phone: 0674-3060510/19</div>
                <Link href={"mailto:placement@iiit-bh.ac.in"}>
                  Email: placement@iiit-bh.ac.in
                </Link>
              </p>
            </p>
            <p>
              <strong>Dr. Subrata Kumar Mohanty</strong>
              <p>
                Professor Incharge Training and Placement cell
                <div>Phone:+91 9439365722,+91 8895432243</div>
                <Link href={"mailto:Subrata@iiit-bh.ac.in"}>
                  Email –Subrata@iiit-bh.ac.in
                </Link>
              </p>
            </p>
            <p>
              <strong>Ms. Rajashree Mohanty</strong>
              <p>
                Assistant Training and Placement Officer
                <div>Phone: +91 8093030326, +91 7992991136</div>
                <Link href="mailto:rajashree@iiit-bh.ac.in">
                  Email – rajashree@iiit-bh.ac.in
                </Link>
              </p>
            </p>
            <p>
              <strong>Ms. Navanita Nayak</strong>
              <p>
                Assistant Training and Placement Officer
                <div>Phone: +91 8093030324, +91 9437122111</div>
                <Link href="mailto:navanita@iiit-bh.ac.in">
                  Email – navanita@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>
        <div className="col-md-5 py-5">
          <h3 className="mt-5">Mail us</h3>
          <p>
            Are you a recruiter?{" "}
            <Link href={"/JAF_2020.doc"}>Download JAF form here.</Link>
          </p>
          <Form
            method="POST"
            action="https://formsubmit.co/placement@iiit-bh.ac.in"
          >
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for Contacting us, the placement cell will reach back to you ASAP"
            />
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel controlId="messageInput" label="Message">
              <Form.Control
                as="textarea"
                style={{
                  height: "300px",
                }}
                name="message"
                placeholder="Leave a comment here"
              />
            </FloatingLabel>
            <div className="p-5 text-center">
              <Button type="submit" className="w-100 btn-success ">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
