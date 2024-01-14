const path = require("path");

// // which will give the full path of the index file
// console.log(__filename);
// // which will give the full path of the folder name were index.js is located
// console.log(__dirname);

// // 14 different property and method in path
// //here we are discusing only 4 of them

// //1:basename:which return the last portion of the path
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// // 2.extname:which return the extention of the path(eg:.js)

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// // 3.parse:which return an object whose property represend significand element of path

// console.log(path.parse(__filename));

// //4.format method:nammale mele create cheyth objectine nammal format cheythal namuk nammale actual path kittum
// //athayath nammal kodunnath format chyth thirich therum
// console.log(path.format(path.parse(__filename)));

// //5.isAbsolute: which return whether a path is absoulte or not
// //absolute path aanenkil will get true other wise will get falls

// // console.log(path.isAbsolute(__filename));

// //6.join:which join all given path segment together using platform specific seperator as limitter and then normalises the resulting path
// //path.join accept one or more string as an arguement
// console.log(path.join("folder1", "folder2", "index.html"));
// // output:folder1\folder2\index.html

// console.log(path.join("/folder1", "folder2", "index.html"));
// //output:\folder1\folder2\index.html

// console.log(path.join("/folder1", "//folder2", "index.html"));
// // output:nammal thettich koduthaalum correct path thannne therum

// console.log(path.join(__dirname, "//folder2", "index.html"));

/////

/////
// 7:resolve:Which resolve a sequence of path or path segment in an absolute path
console.log(path.resolve("folder1", "folder2", "index.html"));
// nammal folder1 nte thudakathil backslash ettilla  so entire path verum output aayit
// output:E:\nodejs\build_in_module\folder1\folder2\index.html

console.log(path.resolve("/folder1", "folder2", "index.html"));
// nammal forword slash kodukaanenkil resolve will give the output from that forword slash only
//output:\folder1\folder2\index.html

console.log(path.resolve("/folder1", "//folder2", "index.html"));
// randpravishym forword slash koduthal avidunn thottullla pth aanu edukuka
// output:\folder2\index.html

console.log(path.resolve(__dirname, "data.json"));

//
