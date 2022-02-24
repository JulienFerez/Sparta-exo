import * as mongo from "mongodb";

export const moviesValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "title", "genre", "year"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
          description: "required field _id which can be only an objectId",
        },
        title: {
          bsonType: "string",
          description: "required field title which can be only a string",
        },
        genre: {
          bsonType: "string",
          enum: ["action", "comedy", "dramatic", "horror", "romance"],
          description:
            "required field genre which can be only a string in: action, comedy, dramatic, horror or romance",
        },
        year: {
          bsonType: "int",
          minimum: 1950,
          maximum: 2020,
          description: "required fieldyear which can be only a integer between 1950 and 2020",
        },

        ratings: {
          bsonType: "object",
          additionalProperties: false,
          required: ["pressRating", "spectatorsRating"],
          properties: {
            pressRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
              description: "required field pressRating which can be only an integer between 1 and 5",
            },
            spectatorsRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
              description: "required field spectatorsRating which can be only an integer between 1 and 5",
            },
          },
        },
      },
    },
  },
};

export function createMoviesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("movies", moviesValidator);
}
