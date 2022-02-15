import request from "@fewlines-education/request";
import "dotenv/config";

function deletePost(id: number): void {
  const body = {};
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "DELETE",
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

export { deletePost };
