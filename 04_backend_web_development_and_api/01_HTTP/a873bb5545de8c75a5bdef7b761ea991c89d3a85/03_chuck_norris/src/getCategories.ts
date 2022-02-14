import request from "@fewlines-education/request";

function getCategories(): void {
  // code the function here
  request("https://api.chucknorris.io/jokes/categories", (error, html) => {
    if (error) {
      console.error(error);
    } else {
      const data = JSON.parse(html);
      console.log(data);
    }
  });
}

// leave line below for tests to work properly
export { getCategories };
