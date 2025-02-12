const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Fetch Successfully");
  } else {
    reject("Failed");
  }
});

promise
  .then((message) => console.log(message))
  .catch((message) => console.log(message));
