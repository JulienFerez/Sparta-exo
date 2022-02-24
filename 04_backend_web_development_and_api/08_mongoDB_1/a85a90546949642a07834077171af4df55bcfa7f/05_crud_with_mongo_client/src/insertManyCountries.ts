import { Db } from "mongodb";

export function insertManyCountries(db: Db, arrayCountry: Country[]) {
  return db
    .collection("worldAtlas")
    .insertMany(arrayCountry)
    .then((result) => {
      return result.insertedCount;
    });
  // code your function here
}
