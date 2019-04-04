function hello(name, err, callback) {
  console.log("name : ", name);
  callback(err);
}

hello("sunny", "singh", function(surname) {
  console.log("surname is ", surname);
});
