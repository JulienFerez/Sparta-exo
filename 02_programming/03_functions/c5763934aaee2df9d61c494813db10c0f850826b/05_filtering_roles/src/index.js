function filteredRoles(arrayPerson, role = "Teacher"){
  const arrayFiltre = [];

  if (arrayPerson[0].role === "Teacher"){
    arrayFiltre.push({name:arrayPerson[0].name, role:role});
  }
}
// Code the function here.


// Do not remove lines below, it is for tests
module.exports = filteredRoles;
