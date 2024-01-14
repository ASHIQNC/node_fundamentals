//the cluster module enables the creation of child process(also call workers) that run simultaniously
//all created workers shares the same server port
//cluster module will reduce the work load

//ethil oru cluster master indakumm
//cluster master aanu workers create chyynnath
//note:maste ris only the incharge of the workers
//it does not excute the application itself
//it sis not incharge of the handling incoming request readng file etc
//this all work is done by indevidual worker itself
//each worker get its own event loop memory and v8 engine
//so incoming request block elland work aakum kaaranm verunna request share aakum workers edayil

const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");
console.log(OS.cpus().length);
//creating a master
//isMaster propery use chythittannn master eathaan nnammmal paraj kodukknath
if (cluster.isMaster) {
  console.log(`master process ${process.pid} is running`);
  //master akath we need create workers for that,
  //minimum 2 worker enkilum venenam ellankil kaaryam ellaa
  //ennale verunna traffic(data) equal aayit distribute cheyyan patuulu
  cluster.fork();
  cluster.fork();
} else {
  console.log(`woeker ${process.pid} started`);

  //ee code run cheyyunnath nalla slow aakum nammale egane koduthal

  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 60000000; i++) {}
      //stimulate the long running cpu work
      res.writeHead(200, { "Content-Type": "text/plain" });

      res.end("slow page");
    }
  });

  server.listen(8000, () => console.log("server running in 8000"));
}

//note:nammukkk
// nammale cpu core ethra indo athra workersiner create cheyyyan patuuluu
//cpu core ethra indenn ariyaan vendi we can us" OS module"
//note:npm package "pm2" ind simple aayit ath use cheythitt cluseterineyum best number of workers create cheyyan pattum
//>npm i -g pm2  :note:-g is required kaaranm nammal command linil aanu code run cheyuunath
//nammal manuall aayit creat cheytha cluster module ee package vechitt work chypikknne
//nammale node_cluster.js (normal file ee package vechitt cluster mode aakan vendi)
//  type>pm2 start node_cluster -i 0 :-i is the option and 0 indicate we want pm2  to figure out the optimum number of workers to create
//stop chyyan vendi >pm2 stop node_cluster -i 0
