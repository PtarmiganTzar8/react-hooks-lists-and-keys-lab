import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(links)

const linkLocals = links.map((link) => {
  return <a key={link} href={"#" + link}>{link}</a>
});

  return <nav>{linkLocals}</nav>;
}

export default NavBar;
