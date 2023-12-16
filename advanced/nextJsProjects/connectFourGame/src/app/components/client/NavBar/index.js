import React from "react";
import NavbarStyles from "./NavBar.module.css";

export default function NavBar({ childre, ...props }) {
  return (
    <React.Fragment>
      <h2 className={`${NavbarStyles[`title`]} ${NavbarStyles[`space`]}`}>
        This is first app with NextJs 13
      </h2>
    </React.Fragment>
  );
}
