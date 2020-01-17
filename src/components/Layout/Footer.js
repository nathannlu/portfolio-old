import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import images
import americanEx from '../../images/payments/american-ex.png';
import discover from '../../images/payments/discover.png';
import masterCard from '../../images/payments/master-card.png';
import paypal from '../../images/payments/paypal.png';
import visa from '../../images/payments/visa.png';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <React.Fragment>

        <hr />
        <footer className="footer footer-bar">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div className="text-sm-left">
                            <p className="mb-0">©  {new Date().getFullYear()}  Made with ♥ by Nathan.</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
        
      </React.Fragment>
    );
  }
}

export default Footer;
