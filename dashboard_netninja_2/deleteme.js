const name = "abc";

const hello = name => {
  return name ? "Name is given" : "No name is given";
};

console.log(hello(""));
