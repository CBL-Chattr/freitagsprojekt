import "./header.css";
// import logoSrc from "../assets/logo.png";
import { createElement } from "../utils/elements";

function Header() {
  const headline = createElement("div", {
    innerText: "Are you bored?",
  });

  const header = createElement("header", {
    className: "header",
    children: [headline],
  });
  return header;
}

export default Header;
