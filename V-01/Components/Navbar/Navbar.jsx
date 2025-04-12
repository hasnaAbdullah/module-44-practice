import React from "react";
import NavLink from "./NavLink";
const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <div>
      {/* dynamic way +  component base */}
      <ul className="flex justify-center my-20">
        {navLinks.map((route) => (
          <NavLink route={route} key={route.id} />
        ))}
      </ul>

      {/* dynamic way */}
      {/* <ul className="flex">
        {navLinks.map((route) => (
          <li className="mr-10" key={route.id}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* static way */}
      {/* <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul> */}
    </div>
  );
}

export default Navbar;
