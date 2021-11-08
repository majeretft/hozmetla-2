import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div>Layout</div> {children}
    </div>
  );
};

export default Layout;
