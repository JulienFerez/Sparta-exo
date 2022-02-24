import * as mongo from "mongodb";

export const sweaterProperties = {
  // write your sweater properties here

  additionalProperties: false,
  bsonType: "object",
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["sweater"],
    },
    size: {
      bsonType: "String",
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
  },
};

export const shoesProperties = {
  // write your shoes properties here

  additionalProperties: false,
  bsonType: "object",
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["shoes"],
    },

    size: {
      bsonType: "int",
      minimum: 30,
      maximum: 50,
    },
    material: {
      bsonType: "String",
      enum: ["leather", "textile", "synthetic"],
    },
  },
};

export const pantsProperties = {
  // write your pants properties here

  additionalProperties: false,
  bsonType: "object",
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["pants"],
    },

    size: {
      bsonType: "object",
      additionalProperties: false,
    },
    material: {
      bsonType: "String",
      enum: ["leather", "textile", "synthetic"],
    },
  },
};

export const clothesValidator = {
  // write your validator here
};

export function createClothesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
