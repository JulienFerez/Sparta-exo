import { Db } from "mongodb";
import "dotenv/config";
import { ObjectID } from "bson";

export function insertOneCountry(db: Db, country: Country) {
  // code your function here

  return db
    .collection("worldAtlas")
    .insertOne(country)
    .then((result) => {
      return result.insertedId;
    });
}
