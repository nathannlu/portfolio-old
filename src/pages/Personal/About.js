// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Progress } from "reactstrap";

// import images
import personal01 from "../../images/personal/1.jpg";
import personal02 from "../../images/personal/2.jpg";
import personal03 from "../../images/personal/3.jpg";
import personal04 from "../../images/personal/4.jpg";
import personal05 from "../../images/personal/5.jpg";
import personal06 from "../../images/personal/6.jpg";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" style={{ backgroundColor: "#F2F4F7" }}>
          <div className="container mt-60" id="portfolio">
            <Row>
              <Col>
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">My Work & Portfolio</h4>
                  <p className="text-muted para-desc mb-0">
                    The work I do, and the people I help.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mt-4 pt-2">
                <div className="work-container position-relative d-block overflow-hidden rounded">
                  <div className="mfp-image d-inline-block" title="">
                    <img
                      src={personal01}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                  </div>
                  <div className="content personal-port">
                    <div
                      to="page-work-detail"
                      className="title text-white d-block font-weight-bold"
                    >
                      Jack Chow Insurance
                    </div>
                    <small className="text-light">
                      Branding, UI/UX, Web Development
                    </small>
                  </div>
                </div>
              </Col>

              <Col md={6} className="mt-4 pt-2">
                <div className="work-container position-relative d-block overflow-hidden rounded">
                  <div className="mfp-image d-inline-block" title="">
                    <img
                      src={personal02}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                  </div>
                  <div className="content personal-port">
                    <div
                      to="page-work-detail"
                      className="title text-white d-block font-weight-bold"
                    >
                      Ignited Future
                    </div>
                    <small className="text-light">Branding, Web Design</small>
                  </div>
                </div>
              </Col>

              <Col md={6} className="mt-4 pt-2">
                <div className="work-container position-relative d-block overflow-hidden rounded">
                  <div className="mfp-image d-inline-block" title="">
                    <img
                      src={personal03}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                  </div>
                  <div className="content personal-port">
                    <div
                      to="page-work-detail"
                      className="title text-white d-block font-weight-bold"
                    >
                      The Crypto Degree
                    </div>
                    <small className="text-light">UI/UX, App Development</small>
                  </div>
                </div>
              </Col>

              <Col md={6} className="mt-4 pt-2">
                <div className="work-container position-relative d-block overflow-hidden rounded">
                  <div className="mfp-image d-inline-block" title="">
                    <img
                      src={personal04}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                  </div>
                  <div className="content personal-port">
                    <div
                      to="page-work-detail"
                      className="title text-white d-block font-weight-bold"
                    >
                      Five Rings Marketing
                    </div>
                    <small className="text-light">Web Design</small>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="container mt-100 mt-60">
            <Row>
              <Col>
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Work Process</h4>
                  <p className="text-muted para-desc mb-0">
                    I follow a simple process that streamlines complex
                    processes. The way I work will be transparent to you as a
                    client.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={4} className="mt-4 pt-2">
                <div className="work-process p-lg-4 p-3 rounded shadow">
                  <h4 className="title">Discuss</h4>
                  <p className="text-muted para">
                    During the initial phase of a project we take the time to
                    get too know our clients to accurately determine their needs
                    and current situation.
                  </p>

                  <ul className="list-unstyled mb-0 mt-2">
                    <li className="step-icon float-right">
                      <i className="mdi mdi-chevron-double-right"></i>
                    </li>
                    <li className="step font-weight-bold">Step 01.</li>
                  </ul>
                </div>
              </Col>

              <Col md={4} className="mt-4 pt-2">
                <div className="work-process p-lg-4 p-3 rounded shadow">
                  <h4 className="title">Design & Develop</h4>
                  <p className="text-muted para">
                    We will focus on the specifications you have provided and
                    your business goals. Each design will be tailored to match
                    your specific needs.
                  </p>

                  <ul className="list-unstyled mb-0 mt-2">
                    <li className="step-icon float-right">
                      <i className="mdi mdi-chevron-double-right"></i>
                    </li>
                    <li className="step font-weight-bold">Step 02.</li>
                  </ul>
                </div>
              </Col>

              <Col md={4} className="mt-4 pt-2">
                <div className="work-process p-lg-4 p-3 rounded shadow">
                  <h4 className="title">Deploy</h4>
                  <p className="text-muted para">
                    Once everything has been designed and developed to the point
                    where you, as the client, are satisfied with it, we will
                    launch the product or service.
                  </p>

                  <ul className="list-unstyled mb-0 mt-2">
                    <li className="step-icon float-right">
                      <i className="mdi mdi-check-all"></i>
                    </li>
                    <li className="step font-weight-bold">Step 03.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
