import { createElement } from "../utils/elements";

const Suggestion = ({ Text }) => {
  const suggestionContainer = createElement("div", {
    className: "suggestion",
    innerText: Text,
  });

  return suggestionContainer;
};

export default Suggestion;
