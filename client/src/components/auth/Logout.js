import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";
import "../../css/SideBar.css";
class Logout extends Component {
  static PropTypes = {
    logout: PropTypes.func.isRequired,
  };
  render() {
    return (
      <Fragment>
        <NavLink onClick={this.props.logout} href="#" className="white">
          Logout
        </NavLink>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
