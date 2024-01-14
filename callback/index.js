function greet(name) {
  console.log(`hello ${name}`);
}

function higherorderfunction(callbackfn) {
  const name = "ashiq";
  callbackfn(name);
}

higherorderfunction(greet);
