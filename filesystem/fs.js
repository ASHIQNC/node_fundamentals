// const fs = require("node:fs");
// //read the content of the file

// // second arguement nammal koduthillenkil buffer aayitt aakum output
// //<Buffer 68 65 6c 6c 6f 20 61 73 68 69 71>
// //utf-8  kodutha namukk file content read chyth kittum
// //the sync in the readFileSync will tell to read the content in the synchronous way
// // reading file synchronously
// const filecontent = fs.readFileSync("./file.txt", "utf-8");
// console.log(filecontent);

// //note:nammal basically melathe method agene use aakoola if the code is big it will slow the performance so ath ozhivakan vendi\
// //nammal vere method aaakum use aaaka file read aakan vendi

// //first argument will be the file path and second arguement will be a callback function which will run after the file content has been read
// //reading file asynchronously
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// //second method
// //write content in the file
// //1.synchronous method
// // first arguement will be the path of the file.athava ee pathil file ellenkil automatic aayit create aakum
// //second arguement will be the content to be written on the file
// fs.writeFileSync("./greet.txt", "helloworld");

// //2.asynchrounous version
// //by default write file over write the file content
// //nammal munne ella file data delete aayipoyindakum
// //ani nammalk ulla content kooode add aaakanmenkil we can add third arguement "{flag:"a"} a=append"
// fs.writeFile("./greet.txt", " hello ashiq", { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("written data");
//   }
// });

//another method
//"promise" based method of fs module

const fs = require("node:fs/promises");
// //then is called when it is success and catch is called then it is failed
// fs.readFile("greet.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//namukk async await vechttum kodukkaaa
async function readFile() {
  try {
    const data = await fs.readFile("greet.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile();

//write method
//fs.writeFile("greet.txt", "iam software developer").then();
