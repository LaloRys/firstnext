import React from "react";
import Link from "next/link";
import "./Navbar.css";
import { routes } from "./navbar-path";

function Navbar() {
  return (
    <nav className="navbar flex py-4 text-white items-center justify-evenly">
      <h1 className="ml-6 font-semibold text-xl">Next Js</h1>
      <ul className="flex">
        {routes.map((route) => (
          <li key={route.name} className="ml-4 bg-transparent rounded-lg px-2 py-2 hover:bg-[#202020] border-2 border-[#202020] text-sm">
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
