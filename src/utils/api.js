export async function getRandomSuggestion() {
  const url = `http://www.boredapi.com/api/activity`;
  const response = await fetch(url);
  const suggestion = await response.json();
  return suggestion;
}
