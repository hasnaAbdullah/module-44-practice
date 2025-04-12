import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = navLinks.map((link) => (
    <li
      key={link.id}
      className="hover:bg-blue-800 hover:text-white transition-all duration-300"
    >
      <a href={link.path}>{link.name}</a>
    </li>
  ));
  return (
    <div className="flex justify-between py-5 items-center relative">
      <div className="flex gap-3">
        <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="md:hidden" />
          ) : (
            <Menu className="md:hidden" />
          )}
        </span>
        <h2>AuctionGallery</h2>

        {isOpen ? (
          <ul
            className={`md:hidden absolute max-w-[400px] top-14 bg-amber-300  space-y-5 p-3
          `}
          >
            {links}
          </ul>
        ) : null}
      </div>

      <ul className="hidden md:flex gap-10">{links}</ul>

      <div>
        <button className="btn btn-primary">Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
