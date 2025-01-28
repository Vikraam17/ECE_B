for (let i = 1; i <= 10; i++) {
  console.log(i);
}
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
do {
  console.log(i);
} while (i <= 10);

var arr1 = [10, 20, 30];
//for-in
for (var index in arr1) {
  console.log(index);
}

for (var value of arr1) {
  console.log(value);
}

var obj = {
  fname: "raja",
  lname: "m",
  "phn num": "9876543210",
};

for (var key in obj) {
  console.log(key + " : " + obj[key]);
}
