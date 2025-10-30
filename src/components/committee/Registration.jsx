import React from 'react'
import { Container, Table, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Registration() {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold text-uppercase mb-5">
        Registration Policy
      </h2>

      {/* Guidelines Section */}
      <Card className="p-4 mb-5 shadow-sm">
        <Card.Body>
          <p>
            At least one author of the accepted paper must register with an
            appropriate conference fee to include the paper in the First
            AICARE-2025 conference program and submission to IEEE Xplore. Final
            decision of uploading the presented paper will be taken by IEEE
            Xplore.
          </p>

          <h4 className="fw-bold text-center mt-5 mb-3">Guidelines</h4>
          <ul>
            <li>
              The paper must be submitted in IEEE double column format A4 size,
              strictly adhering to the IEEE template for conference
              publications.{' '}
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>
            </li>
            <li>
              AICARE 2025 conducts a plagiarism check on all submitted papers.
            </li>
            <li>Double blind peer review is done for all the manuscripts.</li>
            <li>
              The maximum plagiarism percentage allowed is 20%. Turnitin or
              iThenticate is used.
            </li>
            <li>
              At least one author of each accepted paper must register on/before
              30th August 2025.
            </li>
            <li>Unregistered papers will not be included in IEEE Xplore.</li>
            <li>Maximum page length of a paper is 6.</li>
            <li>
              Each full registration is valid for one paper. Extra two pages
              (max 8) may be allowed with a charge of Rs. 3000 / $40 per page.
            </li>
            <li>
              Please keep a copy of the Payment Transaction ID for tracking or
              verification.
            </li>
            <li>The paid registration fee is non-refundable.</li>
            <li>
              Eligible authors must provide a scan copy of valid IEEE membership
              card / Student ID proof during registration.
            </li>
          </ul>
        </Card.Body>
      </Card>

      {/* Early Bird Registration Fees */}
      <div className="text-center mb-5">
        <Button variant="primary" className="px-4 py-2 fw-semibold rounded-3">
          Early Bird Registration Fees
        </Button>

        <div className="table-responsive mt-4">
          <Table bordered hover className="align-middle">
            <thead style={{ backgroundColor: '#0d6efd', color: '#fff' }}>
              <tr>
                <th>Author Category</th>
                <th>IEEE Members Fee</th>
                <th>Non-IEEE Members Fee</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>Student Authors (UG, PG, PhD)</td>
                <td>8260 INR</td>
                <td>9440 INR</td>
              </tr>
              <tr>
                <td>Academic Institution Delegates</td>
                <td>9440 INR</td>
                <td>10620 INR</td>
              </tr>
              <tr>
                <td>Industry / R&amp;D Professionals</td>
                <td>11800 INR</td>
                <td>12980 INR</td>
              </tr>
              <tr>
                <td>Foreign Delegates</td>
                <td>USD 295</td>
                <td>USD 354</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {/* Regular Registration Fees */}
      <div className="text-center mb-5">
        <Button variant="primary" className="px-4 py-2 fw-semibold rounded-3">
          Regular Registration Fees
        </Button>

        <div className="table-responsive mt-4">
          <Table bordered hover className="align-middle">
            <thead style={{ backgroundColor: '#0d6efd', color: '#fff' }}>
              <tr>
                <th>Author Category</th>
                <th>IEEE Members Fee</th>
                <th>Non-IEEE Members Fee</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>Student Authors</td>
                <td>9440 INR</td>
                <td>10620 INR</td>
              </tr>
              <tr>
                <td>Academic Institution Delegates</td>
                <td>10620 INR</td>
                <td>11800 INR</td>
              </tr>
              <tr>
                <td>Industry / R&amp;D Professionals</td>
                <td>12980 INR</td>
                <td>14160 INR</td>
              </tr>
              <tr>
                <td>Foreign Delegates</td>
                <td>USD 413</td>
                <td>USD 472</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {/* Payment & Invoice Instructions */}
      <Card className="bg-light p-4 mb-5 shadow-sm">
        <h3 className="fw-bold text-primary mb-4">
          Payment &amp; Invoice Instructions
        </h3>

        <h5 className="fw-bold mb-2">For Indian Authors:</h5>
        <p>
          To register your Paper, please click:{' '}
          <a
            href="https://uem.edu.in/uem-kolkata/aicare-2025/"
            className="text-primary text-decoration-underline"
          >
            Registration Link
          </a>
        </p>
        <p>
          After your paper gets registered, the author will receive an
          auto-generated e-mail containing an invoice with the paid amount.
        </p>
        <p>
          The author must e-mail that invoice to{' '}
          <a
            href="mailto:aicare@uem.edu.in"
            className="text-primary text-decoration-underline"
          >
            aicare@uem.edu.in
          </a>{' '}
          along with their paper ID and paper title (PDF format). The file name
          should be <strong>123_Payment_Receipt.pdf</strong>, where 123 is your{' '}
          <a
            href="https://cmt3.research.microsoft.com"
            className="text-primary text-decoration-underline"
          >
            CMT paper number
          </a>
          .
        </p>
        <p className="mb-4">
          If the invoice is not sent to the conference e-mail, the registration
          will not be granted and will be treated as invalid.
        </p>

        <h5 className="fw-bold mt-4 mb-2">For Foreign Authors:</h5>
        <p>Foreign authors are requested to pay the registration fees using:</p>
        <ul>
          <li>
            <strong>Name of the Beneficiary:</strong> University of Engineering
            and Management, Kolkata
          </li>
          <li>
            <strong>Bank:</strong> Indian Overseas Bank, Sector - V, Salt Lake
            Branch
          </li>
          <li>
            <strong>Account No:</strong> 164201000001924 (Savings A/c.)
          </li>
          <li>
            <strong>IFSC:</strong> IOBA0001642
          </li>
          <li>
            <strong>Swift Code:</strong> IOBAINBB893
          </li>
        </ul>
        <p>
          After payment, e-mail the <strong>TRANSACTION ID</strong> to{' '}
          <a
            href="mailto:aicare@uem.edu.in"
            className="text-primary text-decoration-underline"
          >
            aicare@uem.edu.in
          </a>{' '}
          along with paper ID and title (PDF format).
        </p>
      </Card>

      {/* WIE Discount */}
      <div className="bg-primary bg-opacity-10 py-5 px-4 text-center rounded shadow-sm">
        <div className="bg-white p-5 rounded shadow-lg mx-auto" style={{ maxWidth: '800px' }}>
          <h3 className="text-primary fw-bold mb-4">
            Special Discount for Women in Engineering
          </h3>
          <p className="mb-3">
            We’re offering an exclusive discount for women in the engineering
            field. This special rate is available for both student and
            non-student authors.
          </p>
          <p className="mb-4">
            Don’t miss out on this opportunity to be part of AICARE 2025 and
            contribute to the future of AI and engineering.
          </p>
          <Button
            href=""
            variant="primary"
            className="px-5 py-2 fw-semibold"
          >
            Register Now
          </Button>
        </div>
      </div>
    </Container>
  )
}
