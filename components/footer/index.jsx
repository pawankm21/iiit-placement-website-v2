import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { PhoneIcon, MailIcon } from "@heroicons/react/solid";

export default function BaseFooter() {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <div className="bg-dark text-white w-100">
      <div className="pt-5 px-5">
        <div className="row ">
          <div className="col-lg-3 text-start">
            <div className={styles.image}>
              <Image
                src={"/footer-logo.webp"}
                objectFit="contain"
                width={50}
                height={50}
                alt={"IIIT Bhubaneswar Training and Placement Cell"}
                priority="true"
              />
            </div>
            <div>
              <h6 className="text-uppercase fw-bold my-2">
                Institute{"'"}s Address :
              </h6>
              <h6 className={` text-capitalize `}>
                IIIT Bhubaneswar, Gothapatna, Po: Malipada
                <p>Bhubaneswar - 751 003. INDIA</p>
                <p
                  className={`d-flex align-items-center text-break ${styles.footerText}`}
                >
                  {" "}
                  <PhoneIcon className={styles.footerIcon} /> Phone:
                  +91-674-2653310
                </p>
                <p
                  className={`d-flex align-items-start text-break text-lowercase ${styles.footerText}`}
                >
                  {" "}
                  <MailIcon className={styles.footerIcon} /> Email:
                  <Link href={"mailto:placement@iiit-bh.ac.in"}>
                    <a className={styles.footerLink}>
                      {" "}
                      placement@iiit-bh.ac.in
                    </a>
                  </Link>
                </p>
              </h6>
            </div>
          </div>
          <div className="col-lg-9  text-center">
            <div className="row gap-5">
              <div className="col-lg-4 col  text-start">
                <h5 className="border-bottom border-success py-1 border-2">
                  Quick Links
                </h5>
                <ul className={`mt-3 ${styles.footerText}`}>
                  <li>
                    <Link
                      href={`/jaf.doc`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <a className={styles.footerLink}>
                        Click Here-Download JAF for Recruiters
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/ib.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <a className={styles.footerLink}>Information Brochure</a>
                    </Link>
                  </li>
                  
                  <li>
                    <Link href={`/placements`}>
                      <a className={styles.footerLink}>Placement Reports</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/contact`}>
                      <a className={styles.footerLink}>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3  text-start">
                <h5 className="border-bottom border-success py-1 border-2">
                  IIIT Bhubaneswar
                </h5>
                <ul className={`mt-3 ${styles.footerText}`}>
                  <li>
                    <Link href={`https://www.iiit-bh.ac.in/`}>
                      <a className={styles.footerLink}>IIIT Homepage</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`https://www.iiit-bh.ac.in/university/about`}>
                      <a className={styles.footerLink}>About IIIT-Bh</a>
                    </Link>
                  </li>
                  {/* Removing Faculty Profile form the footer */}
                  {/* <li>
                    <Link
                      href={`/faculty.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <a className={styles.footerLink}>
                        Click Here-Download Faculty Profile
                      </a>
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href={`https://sites.google.com/iiit-bh.ac.in/alumni`}
                    >
                      <a className={styles.footerLink}>Alumni Network</a>
                    </Link>
                  </li>{" "}
                </ul>
              </div>
              <div className="col-lg-3  text-start">
                <h5 className="border-bottom border-success py-1 border-2">
                  Find us on
                </h5>
                <p className={`mt-3 ${styles.footerText}`}>
                  <Link href={"https://twitter.com/IIIT_Bh"}>
                    <a className={styles.footerLink}>
                      {" "}
                      <Image
                        src="/icons/twitter.svg"
                        alt="Twitter"
                        width={20}
                        height={20}
                        layout="fixed"
                      />
                       Twitter
                    </a>
                  </Link>
                </p>
                <p className={`mt-3 ${styles.footerText}`}>
                  <Link href={"https://www.facebook.com/iiit.bhubaneswar/"}>
                    <a className={styles.footerLink}>
                      {" "}
                      <Image
                        src="/icons/facebook.svg"
                        alt="facebook"
                        width={20}
                        height={20}
                        layout="fixed"
                      />
                       Facebook
                    </a>
                  </Link>
                </p>
                <p className={`mt-3 ${styles.footerText}`}>
                  <Link href={"https://www.instagram.com/iiitbhubaneswar/"}>
                    <a className={styles.footerLink}>
                      {" "}
                      <Image
                        src="/icons/instagram.svg"
                        alt="instagram"
                        width={20}
                        height={20}
                        layout="fixed"
                      />
                       Instagram
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1333360646227!2d85.74120761442246!3d20.294747386400555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1654865179367!5m2!1sen!2sin"
          width="100%"
          height="200"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mx-5 fst-italic  text-secondary py-2">
        <h6 className={styles.footerText}>
          Maintained By : Placement cell, IIIT
        </h6>
        <h6 className={styles.footerText}>
          <Link href="https://www.linkedin.com/in/pawan-kumar-mishra/">
            <a className="text-secondary">Developed by : Pawan Mishra</a>
          </Link>
        </h6>
      </div>
    </div>
  );
}
