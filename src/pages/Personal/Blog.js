// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col, Alert } from "reactstrap";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Contactvisible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container mt-60" id="contact">
            <Row className="justify-content-center">
              <Col>
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Contact Me</h4>
                  <p className="text-muted para-desc mb-0">
                  I'm always happy to talk about UX / UI Design, coding, <br/>and startups.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="pt-5 pb-5 p-4 bg-white rounded shadow" style={{height: '100%'}}>
                  <h4>Get In Touch !</h4>
                  <div className="custom-form mt-4">
                    <div id="message"></div>
                    <Alert
                      color="info"
                      isOpen={this.state.Contactvisible}
                      toggle={() => {
                        this.setState({
                          Contactvisible: !this.state.Contactvisible
                        });
                      }}
                    >
                      Contact details send successfully.
                    </Alert>
                    <form
                      method="post"
                      onSubmit={this.handleSubmit}
                      name="contact-form"
                      id="contact-form"
                    >
                      <Row>
                        <Col md={12}>
                          <div className="form-group position-relative">
                            <label>
                              Email
                            </label>
                            <p>nathanlu_@hotmail.com</p>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="form-group position-relative">
                            <label>
                              Number
                            </label>
                            <p>(778) 513-0738</p>
                          </div>
                        </Col>

                      </Row>


                    </form>
                  </div>
                </div>
              </Col>

              <Col lg={8} md={6} className="pl-md-3 pr-md-3 mt-4 pt-2">
                <div className="map map-height-two rounded map-gray">
                  <iframe
                    title="Nathan"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.076344594837!2d-123.11769638405549!3d49.2749505793305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d62ed33b2f%3A0x891954e050929010!2s89%20Nelson%20St%2C%20Vancouver%2C%20BC%20V3J%201S7!5e0!3m2!1sen!2sca!4v1579245838459!5m2!1sen!2sca"
                    style={{ border: 0 }}
                    className="rounded"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
