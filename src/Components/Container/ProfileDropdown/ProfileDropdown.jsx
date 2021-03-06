import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import authentication from "../../../utils/auth/authentication";
import decodeToken from "../../../utils/auth/jwtDecode";
import { logout } from "../../../action/authActions/authActions";

const ProfileDropdown = props => {
  const { history, logOutUser } = props;
  const handleLogout = e => {
    e.preventDefault();
    logOutUser();
    history.push("/");
  };

  return (
    <div className="dropdown-content">
      <a href="/history">History</a>
      <a onClick={handleLogout} href="#">
        Logout
      </a>
    </div>

    // <ul
    //   className="dropdown__submenu"
    //   style={{
    //     display: open ? 'block' : 'none'
    //   }}
    // >
    //   <li className="dropdown__submenu-item">
    //     <a href={`/profile/${userName}`}>Profile</a>
    //   </li>
    //   <li className="dropdown__submenu-item">
    //     <Link onClick={handleLogout} to="/Logout">
    //       LogOut
    //     </Link>
    //   </li>
    // </ul>
  );
};

// ImageDropdown.propTypes = {
//   open: PropTypes.bool.isRequired,
//   userinfo: PropTypes.oneOfType([PropTypes.object]).isRequired,
//   history: PropTypes.oneOfType([PropTypes.array]).isRequired,
//   logOutUser: PropTypes.func.isRequired
// };

const mapDispatchToProps = {
  logOutUser: logout
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(ProfileDropdown));
