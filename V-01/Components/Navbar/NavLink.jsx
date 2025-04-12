import React from "react";

function NavLink({ route }) {
  return (
    <li className="mr-10">
      <a href={route.path}>{route.name} </a>
    </li>
  );
}

export default NavLink;
