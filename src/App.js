import "./app.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Suggestion from "./components/Suggestion";
import { getRandomSuggestion } from "../src/utils/api";

import { createElement, styled } from "./utils/elements";

const PrimaryButton = styled(Button, "bg-primary");

function App() {
  const header = Header();
  const reloadButton = PrimaryButton({
    innerText: "Reload",
    onclick: () => {
      loadSuggestion();
    },
  });
  const main = createElement("main", {
    children: [
      header,
      reloadButton,
      // Button({ innerText: "Hello" }),
    ],
  });

  async function loadSuggestion() {
    const suggestionList = await getRandomSuggestion();
    console.log(suggestionList);
    // let suggestion = "";
    let suggestion = Suggestion({
      Text: suggestionList.activity,
    });
    console.log(suggestion);
    // let suggestionText = suggestion.querySelector("suggestion");
    // suggestionText.replace();
    main.innerHTML = "";
    main.append(reloadButton);
    main.append(suggestion);
  }
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
