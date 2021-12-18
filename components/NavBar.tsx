import React from "react";
import NavLink from "./small/NavLink";

export default function NavBar() {
  return (
    <div className="flex">
      <NavLink href="/about">about</NavLink>
      <NavLink href="/journal">journal</NavLink>
      <NavLink href="/portfolio">portfolio</NavLink>
    </div>
  );
}
