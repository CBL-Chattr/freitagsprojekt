import "./app.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Suggestion from "./components/Suggestion";
import { getRandomSuggestion } from "../src/utils/api";

import { createElement, styled } from "./utils/elements";

const PrimaryButton = styled(Button, "bg-primary");

function App() {
  const header = Header();
  const main = createElement("main", {
    children: [
      header,
      // Button({ innerText: "Hello" }),
      PrimaryButton({
        innerText: "Reload",
        onclick: () => {
          loadSuggestion();
        },
      }),
    ],
  });

  async function loadSuggestion() {
    const suggestionList = await getRandomSuggestion();

    console.log(suggestionList);
    const suggestion = Suggestion({
      Text: suggestionList.activity,
      // hier muss die API rein
    });

    main.append(suggestion);
  }
  loadSuggestion();
  // const container = createElement("div", {});
  return main;
}

export default App;
