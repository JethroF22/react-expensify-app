// Higher Order Component - A component that renders another component
// Reuse code
// Prop manipulation
// Abstract state

import React from "react";
import { render } from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {!props.isAuthenticated ? (
        <p>This page requires authentication</p>
      ) : (
        <WrappedComponent {...props} />
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

render(
  <AuthInfo isAuthenticated={true} info="Hello there" />,
  document.getElementById("app")
);
