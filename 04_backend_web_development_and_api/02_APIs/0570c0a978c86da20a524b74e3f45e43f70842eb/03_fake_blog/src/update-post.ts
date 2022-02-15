import request from "@fewlines-education/request";
import "dotenv/config";

function updatePostTitle(id: number, newTitle: string): void {
  const body = { id: id, title: newTitle };
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PATCH",
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

function updatePostAuthor(id: number, newAuthor: string): void {
  const body = { id: id, author: newAuthor };
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PATCH",
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

function updatePost(id: number, newTitle: string, newAuthor: string): void {
  const body = { id: id, title: newTitle, author: newAuthor };
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PUT",
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

export { updatePost, updatePostAuthor, updatePostTitle };
