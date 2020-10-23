import "./header.css";
import logoSrc from "../assets/logo.png";
import { createElement } from "../utils/elements";

function Header() {
  const logo = createElement("div", {
    innerText: "It's friday!",
  });

  const header = createElement("header", {
    className: "header",
    children: [logo],
  });
  return header;
}

export default Header;
