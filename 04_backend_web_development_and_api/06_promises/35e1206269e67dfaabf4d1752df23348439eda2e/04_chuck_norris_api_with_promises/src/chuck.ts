import fetch from "node-fetch";

function getCategories(): Promise<string[]> {
  return fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json());
}

function getJoke(category: string): Promise<string> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((reponse) => reponse.json())
    .then((result) => result.value);
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
