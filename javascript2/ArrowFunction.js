//Arrow Function
const arrow = () => {
  console.log("Hello world");
};

//Callback function
const callback = (fun) => {
  fun();
};
callback(arrow);

//terinary operator
let n = 10;
let result = n % 2 == 0 ? "even" : "odd";
console.log(result);

//conditional operator
if (n % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

//shift
const a = [10, 20, 30];
var b = a.shift();
console.log(b);
console.log(a);
//unshift
const c = a.unshift(40);
console.log(c);
console.log(a);

//for in loop
for (let index in a) {
  console.log(index);
}

//for of loop
for (let value of a) {
  console.log(value);
}

//Spread operator
var b=[...a,40,50,60]
console.log(b)
