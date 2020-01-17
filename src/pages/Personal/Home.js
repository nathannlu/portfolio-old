// React basic and bootstrap
import React, { Component } from "react";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import ScrollspyNav from "./ScrollspyNav";

// Import  Images
import rocket from "../../images/rocket.svg";
import './css/demo.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home-half border-bottom home-wrapper position-relative">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-7">
                    <div className="title-heading mt-4">
                      <h1 className="display-3 font-weight-bold mb-3">
                        Hi, I'm <br />
                        <Typist>
                          <span className="element">Nathan</span>
                          <Typist.Backspace count={13} delay={1000} />
                          <span className="element">a UI/UX Designer</span>
                          <Typist.Backspace count={15} delay={1000} />
                          <span className="element"> Web Developer</span>
                        </Typist>
                      </h1>
                      <p className="para-desc text-muted">
                        I research and design solutions for clients across industries and around the world. I handle anything related to design and development -- from web to mobile apps.
                      </p>
                      <div className="mt-4 pt-2">

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <img src={rocket} className="img-fluid mover" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
