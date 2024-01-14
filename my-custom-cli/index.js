#!/usr/bin/env node

//mele koduthath kodukanm nammalk nnammale custom cli package create cheyyanamenkil
//pin package.json file akath below command add akaa
// "bin": {
//     "ashiq_pokedex": "index.js"
//   },
console.log("ashiq pokedex");
//

//expreiment2
//yargs convert options into key /value pairs that we can easily access in our code
//way to pass argument to cli tool is to add cli options
//console.log(process.argv);
// type in cli :ashiq_pokedex --pokemon=charmander
//egen koduthal thazhathe output kittum
//output
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\HP\\AppData\\Roaming\\npm\\node_modules\\ashi_pokedex\\index.js',
//     '--pokemon=charmander'
//   ]

//this is an array were zeroth index is always path to intrepretter
//first index is path to cli
//second index nammal pass chytha option

// const yargs = require("yargs");
// const { argv } = yargs(process.argv);
// const pokemonMoves = async (pokemonName) => {
//   const response = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//   );

//   //fetch cheytha data jsonilott convert cheyyanm
//   const pokemon = await response.json();
//   // console.log(pokemon.moves[0].move.name);
//   const moves = pokemon.moves.map((data) => data.move.name);
//   // console.log(moves);

//   //   first five moves mathram edukan
//   console.log(moves.slice(0, 5));
// };

// //nammale pokemon option value easily retreave cheyyan help cheyyum  yargs kond
// //nammale nerathe console cheytha same nammal yargs package vechitt achieve cheyth
// pokemonMoves(argv.pokemon);

//ani nammal eshatallla name dynamic aayittt koduthal athinte output kittum
//exmaple
//type > ashiq_pokedex --pokemon=mew

// [ 'pound', 'mega-punch', 'pay-day', 'fire-punch', 'ice-punch' ]
// type nammale lci yil > ashiq_pokedex --pokemon=charmander

//experimetn 3

//nammal evie inquerer package vechitt cli interactive aakan
//promt vchitt pokemon name adikkan vendi set aakan
//install inquerer:npm install inquirer@8.2.5

const inquere = require("inquirer");

const pokemonMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  //fetch cheytha data jsonilott convert cheyyanm
  const pokemon = await response.json();
  // console.log(pokemon.moves[0].move.name);
  const moves = pokemon.moves.map((data) => data.move.name);
  // console.log(moves);

  //   first five moves mathram edukan
  console.log(moves.slice(0, 5));
};

const promt = inquere.createPromptModule();
//type:mention chayyanam,that is input
//name:enthelum kodukka
//pinna enth quetion aanu  choikendnnn ellath kodukka
promt([
  {
    type: "input",
    name: "pokemon",
    message: "enter pokemon name to show first five moves of the pokemon",
  },
]).then((answer) => {
  //here pokemon refers to the name property that we have given in the prompt
  const pokemon = answer.pokemon;

  pokemonMoves(pokemon);
});
