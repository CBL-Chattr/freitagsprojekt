import "./header.css";
import { createElement } from "../utils/elements";

function Header() {
  const headline = createElement("h1", {
    innerText: "Are you bored?",
  });

  const header = createElement("header", {
    className: "header",
    children: [headline],
  });
  return header;
}

export default Header;
