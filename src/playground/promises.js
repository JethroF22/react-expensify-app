const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Diana",
    //   age: "Suescun"
    // });
    reject("Something went wrong");
  }, 5000);
});

console.log("before");

promise
  .then(data => {
    console.log("1", data);
  })
  .catch(error => {
    console.log(data);
  });

console.log("after");
