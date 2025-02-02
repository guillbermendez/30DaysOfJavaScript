const names = [
    'Alondra',
    'Alex',
    'Teresa'
]

const companies = new Set(names);
console.log(companies);
for (const name of companies){
    console.log(name)
};
 const videoGames = new Set();
 console.log(videoGames.size);
 videoGames.add('God of War');
 videoGames.add('Resident Evil');
 videoGames.add('Horizon');
 videoGames.add('FiFa 24');
 videoGames.add('Mortal Kombat');
console.log(videoGames.size);
console.log(videoGames);

const videoNew = new Set();
for( videoGame of videoGames){
videoNew.add(videoGame)
}
console.log(videoNew);
videoNew.delete('God of War');
console.log(videoNew.size);

console.log(videoNew.has('FiFa 24'));
console.log(videoGames.has('Mario Kart'));

videoNew.clear();
console.log(videoNew);

const map = new Map();
console.log(map);

countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
  ];
const newMap = new Map(countries);
console.log(newMap);
console.log(newMap.size);

const countrieMap = new Map();
countrieMap.set('Finlandia', 'Mexico');
countrieMap.set('Ingalterra','Suecia');
console.log(countrieMap);
console.log(countrieMap.get('Finlandia'));
console.log(countrieMap.has('Mexico'));

for(countrie of countrieMap){
    console.log(countrie);
}

for(const [countrie, city] of countrieMap){
    console.log(countrie, city)
}
//Ejercicios:Nivel 1

//1.-crear un set vacío
const newSet = new Set();
console.log(newSet);
//2.-Crear un set que contenga de 0 a 10 utilizando el bucle
const numbers = [0,1,2,3,4,5,6,7,8,9];
for(const numOne of numbers){
    newSet.add(numOne)
};
console.log(newSet);
//3.-Eliminar un elemento de set
newSet.delete(0);
console.log(newSet);
//4.-Limpia set
newSet.clear();
console.log(newSet);
//5.-Crear un set de 5 elementos string a partir de un array
const mechanicalKeyboards = [
    "Keychron K6",
    "Logitech G Pro X",
    "Corsair K95 RGB Platinum",
    "Razer BlackWidow V3",
    "SteelSeries Apex Pro"
  ];
const keyboardSet = new Set(mechanicalKeyboards);
console.log(keyboardSet);
//6.-Crear un map de países y el número de caracteres de un país
const countriesVersion = ["India", "Estonia", "Finland", "Japan", "Brazil"];
const newCountries = new Map();
countriesVersion.forEach((country) => {
 newCountries.set(country, country.length);
});
console.log(newCountries);
//Ejercicios:Nivel 2
//1.-Encontrar a unión b
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];
const union = new Set(c);
console.log(union);
//2.-Encontrar a intersección b
let A = new Set(a);
let B = new Set(b);
let d = a.filter((num) => B.has(num));
let C = new Set(d);
console.log(C);
//3.-Encontrar a con b
//Ejercicios:Nivel 3
const lenguaje = [
    ["Español", 500000000],
    ["Inglés", 400000000],
    ["Chino", 1000000000],
    ["Francés", 300000000],
    ["Alemán", 150000000],
    ["Español", 500000000],  // Duplicado
    ["Inglés", 400000000],   // Duplicado
    ["Italiano", 85000000],
    ["Chino", 1000000000],   // Duplicado
    ["Francés", 300000000]   // Duplicado
  ];  
  //1.-Cuántos idiomas hay en el archivo de objetos de países.
const setAdd = new Set()
const newFilter = lenguaje.map((lenguaje) => lenguaje[0]);
const newLeguaje =  new Set(newFilter);
console.log(newLeguaje);
//2.- Utiliza los datos de los países para encontrar las 10 lenguas más habladas:
const moreLenguaje = (arr, num) =>{
 const orderLenguaje = arr.sort((a, b) => b[1] - a[1]);
  return orderLenguaje.slice(0, num);
}
console.log(moreLenguaje(lenguaje, 4));
