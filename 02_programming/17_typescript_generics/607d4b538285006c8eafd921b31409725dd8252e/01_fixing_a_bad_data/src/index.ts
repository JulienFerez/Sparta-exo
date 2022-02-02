type ReceivedObject = {
  a: string;
  b: number;
};

// const receivedObject: ReceivedObject = {
//  a: "somestring",
//  b: 42,
// };

function transformObject(object: ReceivedObject): (string | number)[] {
  return Object.values(object);
}

// const transformObject = "coucou";

// Leave the line below for tests to work properly.
export { transformObject };
