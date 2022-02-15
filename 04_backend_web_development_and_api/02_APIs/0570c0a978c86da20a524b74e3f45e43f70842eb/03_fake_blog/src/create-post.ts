import request from "@fewlines-education/request";
import "dotenv/config";

function createPost(newTitle: string, newAuthor: string): void {
  const body = { title: newTitle, author: newAuthor };
  request(
    `http://${process.env.HOST}/posts`,
    {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(body);
        console.log(data);
      }
    },
  );
}

export { createPost };
