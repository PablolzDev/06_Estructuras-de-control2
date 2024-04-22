const listFruits = [
  "apple",
  "orange",
  "banana",
  "grape",
  "strawberry",
  "kiwi",
  "pineapple",
  "watermelon",
  "mango",
  "pear",
  "peach",
  "plum",
  "cherry",
  "blueberry",
  "raspberry",
  "blackberry",
  "lemon",
  "lime",
  "coconut",
  "pomegranate",
];

console.groupCollapsed("For each");
console.info(listFruits.length);
console.log(listFruits[16]);

console.error("Line break");

//print list with classic for
for (let i = 0; i < listFruits.length; i++) {
  console.log(listFruits[i]);
}

listFruits.forEach((fruit) => {
  console.log(fruit);
});

console.error("Line break");

//Uppercase List
listFruits.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});

console.error("Line break");

//LowerCase List
listFruits.forEach((fruit) => {
  console.log(fruit.toLowerCase());
});

console.groupEnd();

console.group("For in");
for (const key in listFruits) {
  console.log(listFruits[key]);
}

console.error("Line break");

array.forEach((fruit, i) => {
  console.log("The fruit ", fruit, "is in the position ", key);
});

console.groupEnd();

console.groupCollapsed("For of");

for (const fruit of listFruits) {
  console.log(fruit);
}

console.groupEnd();
