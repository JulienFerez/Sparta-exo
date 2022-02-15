import { Customer } from "../data/customers";

function filterByFirstLetter(list: Customer[], letter: string): Customer[] {
  // Code here
  return list.filter((customers) => customers.last_name.charAt(0) === letter);
}

export function filterByFirstLetterOrdered(list: Customer[], letter: string): Customer[] {
  return filterByFirstLetter(list, letter).sort((a, b) => a.last_name.localeCompare(b.last_name));
}
