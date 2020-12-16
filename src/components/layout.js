import React from "react";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav></Nav>
      {children}
    </React.Fragment>
  );
};
