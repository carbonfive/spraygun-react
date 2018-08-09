import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, logout } from "./store/actions/auth";
import { currentUserEmail, isAuthenticated } from "./store/selectors";

export function AuthStatus({ isAuthenticated, email, login, logout }) {
  return (
    <div>
      {isAuthenticated ? (
        <span>
          {email} <button onClick={logout}>Logout</button>
        </span>
      ) : (
        <button onClick={() => login({ email: "user@example.com" })}>
          Login
        </button>
      )}
    </div>
  );
}

AuthStatus.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  email: PropTypes.string,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
  email: currentUserEmail(state)
});

const mapDispatchToProps = { login, logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthStatus);
