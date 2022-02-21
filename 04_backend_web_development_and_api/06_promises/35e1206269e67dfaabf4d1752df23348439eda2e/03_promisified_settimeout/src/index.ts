function waitFor(time: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("this will be printed after 2 seconds"));
    }, time);
    reject("An error occured");
  });
}

export { waitFor };
