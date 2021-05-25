const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// FILTER
/*

const gtcharacters100 = characters.filter(
    (character) => character.mass > 100
    );
console.log(gtcharacters100);

const shortcharacters200 = characters.filter(
    (character) => character.height < 200
)
console.log(shortcharacters200);

const filterMale = characters.filter(
    (character) => character.gender === 'male'
)
console.log(filterMale);

const filterFemale = characters.filter(
    (character) => character.gender === 'female'
)
console.log(filterFemale);

*/

// MAP
/*
const names = characters.map((character) => character.name)
console.log(names);

const heights = characters.map((character) => character.height);
console.log(heights);

const minifiedRecords = characters.map((character) => ({
    name: character.name,
    height: character.height
}));
console.log(minifiedRecords);

const fNames = characters.map((character) => character.name.split(" ") [0]);
console.log(fNames);

const lNames = characters.map((character) => character.name.split(" ")[1]);
console.log(lNames);
*/

// SOME

// Is there at least one male character?
const oneMale = characters.some((character) => character.gender === 'male')
console.log(oneMale);
// Is there at least one character with blue eyes?
const oneBlueEyes = characters.some((character) => character.eye_color === 'blue')
console.log(oneBlueEyes);
// Is there at least one character taller than 210?
const oneTallerThan210 = characters.some((character) => character.height > 210)
console.log(oneTallerThan210);
// Is there at least one character that has mass less than 50?
const oneMassLessThan50 = characters.some((character) => character.mass < 50)
console.log(oneMassLessThan50);

