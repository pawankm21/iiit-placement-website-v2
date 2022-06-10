import Image from "next/image";
import Link from "next/link";
import logo from "../../public/footer-logo.webp";
import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";
import { PhoneIcon } from "@heroicons/react/solid";

export default function BaseFooter() {
  return (
    <div className="bg-black text-white w-100">
      <Container className="p-5">
        <div className="row ">
          <div className="col-lg-3 text-start">
            <div className={styles.image}>
              <Image
                src={logo}
                objectFit="contain"
                alt={"IIIT Bhubaneswar Training and Placement Cell"}
              />
            </div>
            <Container>
              <h6 className="text-uppercase fw-bold my-2">
                Institute{"'"}s Address :
              </h6>
              <h6 className=" text-capitalize ">
                IIIT Bhubaneswar, Gothapatna, Po: Malipada
                <p>Bhubaneswar - 751 003. INDIA</p>
                <p
                  className={`d-flex align-items-center text-break ${styles.footerText}`}
                >
                  {" "}
                  <PhoneIcon className={styles.footerIcon} /> Phone:
                  +91-674-2653300
                </p>
              </h6>
            </Container>
          </div>
          <div className="col-lg-9  text-center">
            <div className="row gap-5">
              <div className="col-lg-4 col  text-start">
                <h5 className="border-bottom border-success py-1 border-2">
                  Quick Links
                </h5>
                <ul className="mt-3">
                  <li>
                    <Link href={`/`}>
                      <a className={styles.footerLink}>
                        Click Here-Download JAF for Recruiters
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <a className={styles.footerLink}>Information Brochure</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <a className={styles.footerLink}>Placement Reports</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <a className={styles.footerLink}>Gallery</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <a className={styles.footerLink}>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3  text-start">
                <h5 className="border-bottom border-success py-1 border-2">
                  IIIT Bhubaneswar
                </h5>
                <ul className="mt-3">
                  <li>
                    <Link href={`/`}>
                      <a className={styles.footerLink}>IIIT Homepage</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <a className={styles.footerLink}>About IIIT-Bh</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <a className={styles.footerLink}>Alumni Network</a>
                    </Link>
                  </li>{" "}
                  <li>
                    <Link href={`/`}>
                      <a className={styles.footerLink}>IIIT-Bh contacts</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3  text-start">
                <h5 className="border-bottom border-success py-1 border-2">
                  Find us on
                </h5>
                <p className="mt-3">
                  <Link href="/">
                    <a className={styles.footerLink}>Director&apos;s Blog</a>
                  </Link>
                </p>
                <p>
                  <Link href={"/"}>
                    <a className={styles.footerLink}>
                      {" "}
                      <Image
                        src="/icons/twitter.svg"
                        alt="Twitter"
                        width={20}
                        height={20}
                        layout="fixed"
                        className="align-middle"
                      />
                      Twitter
                    </a>
                  </Link>
                </p>
                <p>
                  <Link href={"/"}>
                    <a className={styles.footerLink}>
                      {" "}
                      <Image
                        src="/icons/facebook.svg"
                        alt="facebook"
                        width={20}
                        height={20}
                        layout="fixed"
                        className="align-middle"
                      />
                      Facebook
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1333360646227!2d85.74120761442246!3d20.294747386400555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1654865179367!5m2!1sen!2sin"
          width="100%"
          height="200"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mx-5 fst-italic  text-secondary">
        <h6 className={styles.footerText}>
          Maintained By : Placement cell, IIIT
        </h6>
        <h6 className={styles.footerText}>Developed by : Pawan Kumar Mishra</h6>
      </div>
    </div>
  );
}
