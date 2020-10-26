import "./app.css";
import Button from "./components/Button";
import Suggestion from "./components/Suggestion";
import { getRandomSuggestion } from "../src/utils/api";

import { createElement, styled } from "./utils/elements";

const PrimaryButton = styled(Button, "bg-primary");

function App() {
  const headline = createElement("h1", {
    className: "headline",
    innerText: "Are you bored?",
  });

  const reloadButton = PrimaryButton({
    innerText: "Pop Suggestion!",
    onclick: () => {
      loadSuggestion();
    },
  });
  const main = createElement("main", {
    className: "main",
    children: [reloadButton],
  });

  async function loadSuggestion() {
    const suggestionList = await getRandomSuggestion();
    console.log(suggestionList);

    let suggestion = Suggestion({
      Text: suggestionList.activity,
    });
    console.log(suggestion);

    main.innerHTML = "";
    main.append(reloadButton);
    main.append(suggestion);
  }
  const container = createElement("div", {
    className: "container",
    children: [headline, main],
  });
  return container;
}

export default App;
