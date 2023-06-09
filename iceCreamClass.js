class IceCream {
  constructor(flavor, numSprinkles) {
    this.flavor = flavor;
    this.numSprinkles = numSprinkles;
    flavor === "Plain"
      ? (this.flavor = 0)
      : flavor === "Vanilla"
      ? (this.flavor = 5)
      : flavor === "ChocolateChip"
      ? (this.flavor = 5)
      : flavor === "StrawBerry"
      ? (this.flavor = 10)
      : flavor === "Chocolate"
      ? (this.flavor = 10)
      : (this.flavor = "Please give a correct flavor");
  }
}

const ice1 = new IceCream("Chocolate", 13);
const ice2 = new IceCream("Vanilla", 0);
const ice3 = new IceCream("StrawBerry", 7);
const ice4 = new IceCream("Plain", 18);
const ice5 = new IceCream("ChocolateChip", 3);

const arrOfIceCream = [ice1, ice2, ice3, ice4, ice5];

function sweetestIceCream(arr) {
  const sweetnessValue = [];
  for (let el of arr) {
    sweetnessValue.push(
      Object.values(el).reduce((value, item) => value + item)
    );
  }
  return Math.max(...sweetnessValue);
}
console.log(sweetestIceCream(arrOfIceCream));
