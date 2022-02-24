import * as mongo from "mongodb";

export const booksValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      additionalProperties: false,
      bsonType: "object",
      required: ["_id", "title", "author", "description"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "required field _id which can be only an objectId",
        },
        title: {
          bsonType: "string",
          description: "required field title which can be only a string",
        },
        author: {
          bsonType: "string",
          description: "required field author which can be only a string",
        },
        description: {
          bsonType: "string",
          maxLength: 100,
          description: "required field description which can be only a string of 100 characters max",
        },
      },
    },
  },
};

export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("books", booksValidator);
}
