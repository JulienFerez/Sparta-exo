import { Customer } from "../data/customers";

export function filterByFirstLetter(list: Customer[], letter: string): Customer[] {
  // Code here

  return list.filter((customers) => customers.last_name.charAt(0) === letter);
}
