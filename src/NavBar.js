import React from "react";
import { Link } from "react-router-dom";
import AppRouter from "./AppRouter";
// import AppRouter from "./AppRouter";

function NavBar() {
    <AppRouter/>
    const links = [
        {
          id: 1,
          path: "/",
          text: "Livres",
        },
        {
          id: 2,
          path: "/about",
          text: "Livre",
        },
        {
          id: 2,
          path: "/about",
          text: "About",
        },
        {
          id: 2,
          path: "/about",
          text: "About",
        },
        {
          id: 2,
          path: "/about",
          text: "About",
        },
      ]
  return (
    <nav className="navBar">
    <ul>
      {links.map(link => {
        return <li key={link.text}><a href={link.text}>{link.text}</a></li>
      })}
    </ul>
  </nav>
      

  );
}

export default NavBar;
