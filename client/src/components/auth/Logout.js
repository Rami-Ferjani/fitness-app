import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";
class Logout extends Component {
  static PropTypes = {
    logout: PropTypes.func.isRequired,
  };
  render() {
    return (
      <fragment>
        <NavLink onClick={this.props.logout} href="#">
          Logout
        </NavLink>
      </fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
