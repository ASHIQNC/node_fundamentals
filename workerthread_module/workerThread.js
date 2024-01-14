const { parentPort } = require("node:worker_threads");
//now we move long opertion from main thread and move into another file

let j = 0;
for (let i = 0; i < 60000000; i++) {
  j++;
}

// ani nammukk j value ee filinnn main fililott ayakkanm athi vendi aaanu we are using parentPort mthod from worker thread
parentPort.postMessage(j);

//ani nammal main thread akath eee meassage listen cheyyanm
