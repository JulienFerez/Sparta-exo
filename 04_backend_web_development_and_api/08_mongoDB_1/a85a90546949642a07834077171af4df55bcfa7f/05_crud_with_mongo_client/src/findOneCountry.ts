import { Db } from "mongodb";
import "dotenv/config";

export function findOneCountry(db: Db) {
  // code your function here
  return db.collection("worldAtlas").findOne({ name: "Iceland" });
}
