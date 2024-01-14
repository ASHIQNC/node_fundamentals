// it is secure version of http module
const https = require("https");

const MAX_CALLS = 5;

// nammal evide loop vechaaan check chyyunne ethra tyme run cheyyanm enn
const start = Date.now();
for (i = 0; i < MAX_CALLS; i++) {
  //evide nammal request method anu use akunnee
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`request:${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
