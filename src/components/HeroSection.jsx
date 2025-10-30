import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function HeroSection() {
  // Timer countdown logic (to 21st Nov 2025)
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-11-21T00:00:00')
    const now = new Date()
    const diff = targetDate - now

    let timeLeft = {}
    if (diff > 0) {
      timeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `url('assets/pc bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      {/* Logos Row */}
      <Container fluid className="position-relative mb-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={6} md={2} className="d-none d-lg-block position-absolute start-0 top-0">
            <Image src="assets/IEM_Logo.png" alt="IEM Logo" fluid width="100" />
          </Col>

          <Col xs={12} lg={8} className="text-center">
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 mb-3">
              <div>
                <small className="fw-bold">Technical Co-Sponsor :</small>
                <Image src="assets/IEEE_kolkata.jpeg" alt="IEEE Kolkata" fluid width="100" className="ms-2" />
              </div>

              <div>
                <Image src="assets/AI_Care_Logo.png" alt="AICARE Logo" fluid width="130" />
              </div>

              <div>
                <small className="fw-bold">Co-Sponsored By :</small>
                <Image src="assets/IEEE_PES.png" alt="IEEE PES" fluid width="100" className="ms-2" />
              </div>
            </div>

            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <Image src="assets/Renewable_Energy_Logo.png" width="60" alt="Renewable Energy" />
              <Image src="assets/Space_Observatory_Logo.png" width="60" alt="Space Observatory" />
              <Image src="assets/IEEE_Logo.png" width="60" alt="IEEE" />
              <Image src="assets/uemk renewable energy club logo.png" width="60" alt="UEMK Renewable" />
            </div>
          </Col>

          <Col xs={6} md={2} className="d-none d-lg-block position-absolute end-0 top-0">
            <Image src="assets/UEM_Logo.png" alt="UEM Logo" fluid width="100" />
          </Col>
        </Row>
      </Container>

      {/* Content Section */}
      <div className="mt-5">
        <h1 className="fw-semibold display-5 mb-3">AICARE 2025</h1>
        <p className="lead mb-1">
          1st International Conference on Artificial Intelligence for Computing, Astronomy, and Renewable Energy, 2025
        </p>
        <p className="small">(IEEE AICARE CONFERENCE ID : 66005)</p>
        <p className="mt-2 mb-0">
          Organized by <br />
          Center of Excellence on Renewable Energy & Centre of Excellence in Astronomical Studies <br />
          on
        </p>
        <h4 className="fw-bold mt-2">21st and 22nd November, 2025</h4>

        {/* Countdown Timer */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-light text-dark rounded d-flex flex-column justify-content-center align-items-center"
              style={{ width: '90px', height: '80px' }}
            >
              <span className="fs-3 fw-semibold">{item.value}</span>
              <small>{item.label}</small>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <Image src="assets/Progressbar.png" fluid className="w-75" />
        </div>
      </div>
    </div>
  )
}
