import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Link from "next/link";
import { useRef } from "react";
export default function ContactUs() {
  const messageRef = useRef();
  const emailRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageRef.current.value,
          email: emailRef.current.value,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      const res = err;
      console.log(res);
    }
  }
  return (
    <div>
      <Container className=" row">
        <h1 className=" mb-5 text-center fw-bolder">Contact Us</h1>
        <div className="col ">
          <h3 className="fw-bold text-center mb-5">Get in touch</h3>
          <Container>
            <p>
              <h4>Training and Placement Cell</h4>
              <strong>Placement Office, IIIT Bhubaneswar</strong>
              <p>
                Ground floor, Main Academic Building, IIIT Bhubaneswar,
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
                <div>Phone: +91 8093030324, +91 9437122111</div>
                <div>Email – @iiit-bh.ac.in</div>
              </p>
            </p>
            <p>
              <strong>Mr. Sanat Kumar Swain </strong>
              <p>
                Assistant Training and Placement Officer{" "}
                <div>Phone: +91 8093030329, +91 9040310345</div>
                <div>Email – sanat@iiit-bh.ac.in</div>
              </p>
            </p>
            <p>
              <strong>Ms. Navanita Nayak</strong>
              <p>
                Assistant Training and Placement Officer
                <div>Phone: +91 8093030324, +91 9437122111</div>
                <div>Email – navanita@iiit-bh.ac.in</div>
              </p>
            </p>

            <p>
              <strong>Ms. Rajashree Mohanty</strong>
              <p>
                Assistant Training and Placement Officer
                <div>Phone: +91 8093030326, +91 7992991136</div>
                <div>Email – rajashree@iiit-bh.ac.in</div>
              </p>
            </p>
          </Container>
        </div>
        <div className="col py-5">
          <h3 className="mt-5">Mail us</h3>
          <Form
            method="POST"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                ref={emailRef}
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
                ref={messageRef}
              />
            </FloatingLabel>
            <div className="p-5 text-center">
              <Button type="submit" className="w-100 btn-success ">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}
