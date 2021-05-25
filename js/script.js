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

/*
// FILTER

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

/*
// MAP

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

/*
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
*/

/*
// SORT

// Sort by name
const byName = characters.sort((a,b) => {
    if(a.name < b.name) return 1;
    return -1;
})

console.log(byName);
// Sort by mass
const byMass = characters.sort((a,b) => a.mass - b.mass);
console.log(byMass);

// Sort by height
const byHeight = characters.sort((a,b) => a.height - b.height);
console.log(byHeight);
// Sort by gender
const byGender = characters.sort((a,b) => {
    if(a.gender === 'female') return 1;
    return -1;
})
console.log(byGender);
*/
/*
// REDUCE
// Get the total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
console.log(totalMass);
// Get the total height of all characters
const totalHeight =  characters.reduce((acc, cur) => acc + cur.height, 0);
console.log(totalHeight);
// Get the total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalNameCharacters);
// Get the total number of characters by eye color (hint. a map of eye color to count
const CharacterByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
   if (acc[color]) {
    acc[color]++
   } else {
    acc[color] = 1;
   }
   return acc;
}, {}); 
console.log(CharacterByEyeColor);
*/

// EVERY
// Does every character have blue eyes?
const allBlueEyes = characters.every((character) => character.eye_color === 'blue');
console.log(allBlueEyes);
// Does every character have mass more than 40?
const massMoreThan40 = characters.every((character) => character.mass > 40);
console.log(massMoreThan40); 
// Is every character shorter than 200?
const shorterThen200 = characters.every((character) => character.height < 200);
console.log(shorterThen200);
// Is every character male
const allMale = characters.every((character) => character.gender === 'male');
console.log(allMale);