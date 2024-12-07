const obj = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, ${obj.name}`); // Bug: Arrow function doesn't bind `this`
  },
};

obj.greet();
