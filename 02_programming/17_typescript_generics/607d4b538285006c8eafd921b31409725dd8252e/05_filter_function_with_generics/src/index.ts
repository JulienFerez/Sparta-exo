function filterFor<X, Y>(array: X[], predicate: (element: X) => Y): Y[] {
  const resultArray = [];

  for (const element of array) {
    if (predicate(element)) {
      resultArray.push(element);
    }
  }

  return resultArray;
}

export { filterFor };
