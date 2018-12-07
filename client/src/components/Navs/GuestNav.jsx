import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

import { showSessionModal } from '../../actions';

class GuestNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  showModal() {
    this.props.showSessionModal();
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">
            <div className="navbar-brand">your mileage may vary</div>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/about'>
                  <div className="nav-link">About</div>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/contact'>
                    <div className="nav-link">Contact</div>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/'>
                    <div className="nav-link" onClick={() => this.showModal() }>Sign In</div>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(null, { showSessionModal })(GuestNav);