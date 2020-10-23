import { createElement } from "../utils/elements";

const Suggestion = () => {
  const suggestionContainer = createElement("div", {
    className: "suggestion",
    innerText: "Beispiel",
  });

  return suggestionContainer;
};

export default Suggestion;
