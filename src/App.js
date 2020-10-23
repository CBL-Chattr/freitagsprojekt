import "./app.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Suggestion from "./components/Suggestion";
import { createElement, styled } from "./utils/elements";

const PrimaryButton = styled(Button, "bg-primary");

function App() {
  const header = Header();
  const suggestion = Suggestion();

  const main = createElement("main", {
    children: [
      header,
      Button({ innerText: "Hello" }),
      PrimaryButton({ innerText: "World" }),
      suggestion,
    ],
  });

  // const container = createElement("div", {});
  return main;
}

export default App;
