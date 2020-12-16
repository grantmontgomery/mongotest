import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Post</Link>
        </li>
        <li>
          <Link href="" to="/get">
            Get
          </Link>
        </li>
      </ul>
    </nav>
  );
};
