// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import ScrollspyNav from "./ScrollspyNav";


// Import Generic components
import About from "./About";
import Blog from "./Blog";
import Home from './Home';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <Home />

        {/* About */}
        <About />

        {/* Blog */}
        <Blog />
      </React.Fragment>
    );
  }
}

export default Index;
