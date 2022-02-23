// write your MongoDB shell command here

const newCountries = [
  {
    name: "Angleterre",
    capital: "Londres",
    continent: "Europe",
  },
  {
    name: "Espagne",
    capital: "Barcelone",
    continent: "Europe",
  },
  {
    name: "Allemagne",
    capital: "Berlin",
    continent: "Europe",
  },
];

db.worldAtlas.insertMany(newCountries);
