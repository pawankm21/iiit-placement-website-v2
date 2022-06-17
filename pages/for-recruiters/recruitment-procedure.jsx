import Container from "react-bootstrap/Container";
import Link from "next/link";
export default function Procedure() {
  return (
    <Container className="mb-5">
      <h1 className="my-5 fw-bolder">Procedure for Recruiters</h1>
      <ul>
        <li>
          <p>
            The Placement Office sends invitations to companies/organizations
            along with relevant information.
          </p>
        </li>
        <li>
          <p>
            Company/ Organization sends in a JAF (Job Announcement Form)
            containing details of the job offer (pay package, place of posting,
            allowances and other bonuses). Fill{" "}
            <Link href="/jaf.doc"> the JAF for Recruiters</Link> which the
            recruiter has to sign and send it to the T&amp;P Cell.
          </p>
        </li>
        <li>
          <p>
            If the company/ organization wishes to conduct a Pre-Placement Talk
            (PPT) they can sent a request along with the preferred dates to{" "}
            <a href="mailto:placement@iiit-bh.ac.in">
              {" "}
              placement@iiit-bh.ac.in
            </a>
            .
          </p>
        </li>
        <li>
          <p>
            The filled JAF is then made available to the students, along with
            any other information furnished by company organization.
          </p>
        </li>
        <li>
          <p>
            Placement Office allots dates to companies for campus interviews
            based on various details given by companies. The company/
            organization confirms the dates with the Placement Office.
          </p>
        </li>
        <li>
          <p>
            Interested students show their willingness to appear for the
            recruitment process of a company by signing its JAF.
          </p>
        </li>
        <li>
          <p>
            Companies can request for resumes of interested students and
            shortlist students.
          </p>
        </li>
        <li>
          <p>
            Companies come down to the campus on the allotted date/s and conduct
            tests and/or interviews according to their recruitment process.
          </p>
        </li>
        <li>
          <p>
            The company/ organization is required to furnish the final list of
            students preferably on the date of interview.
          </p>
        </li>
      </ul>
    </Container>
  );
}
