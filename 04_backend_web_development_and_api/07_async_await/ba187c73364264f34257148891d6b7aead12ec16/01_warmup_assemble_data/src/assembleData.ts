type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(
  listOfUsers: string[],
  listAgeUsers: number[],
  listCountryUsers: string[],
  listHaveTraveled: boolean[],
) {
  const newArray = [];
  for (let i = 0; i < listOfUsers.length; i++) {
    newArray.push({
      name: listOfUsers[i],
      age: listAgeUsers[i],
      country: listCountryUsers[i],
      haveTraveled: listHaveTraveled[i],
    });
  }
  return newArray;
  // Code here
}
