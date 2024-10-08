//Ejercicios: Nivel 1
//1.-Crear un objeto vacío llamado dog
const dog = {};
//2.-Imprime el objeto dog en la consola
console.log(dog);
//3.-Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = 'Clarck';
dog.legs = 2;
dog.color = 'White';
dog.age = 4;
dog.bark = function (){
    return  'woof woof'
};
console.log(dog)
//4.-Obtener name, legs, color, age y el valor de bark del objeto dog
let dogChow = `${dog.name},${dog.legs},${dog.age},${dog.bark()}`;
console.log(dogChow);
//5,.-Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = 'Pitbull';
dog.getDogInfo = function(){
    return `My dog is: ${this.name} the color is: ${this.color}`};
console.log(dog);
//Ejercicios: Nivel 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
//1.-Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
//Declaramos dos variables, en una se guarda el numero mayor de skills y en el otro el nombre del usuario
let maxSkills = 0;
let nameUserSkills = '';
//Creamos un bucle para acceder al los valores del objeto
for(let user in users){
  //accedemos a los valores de usuario espeficicamente las skills
  let userSkills = users[user].skills;
  // Contar cuántas habilidades tiene el usuario
  let numberOfSkills = userSkills.length;
  //creamos una condicion donde se compara si numberofSkill es mayor  que masSkills guarda el mayor numero en la variable max skill
  if(numberOfSkills > maxSkills){
    maxSkills = numberOfSkills
    nameUserSkills = user;
  }
}
//Iteramos e imprimimos en consola tanto el usuario como su numero de skills
console.log(`${nameUserSkills} tiene mayores habilidades con un total de ${maxSkills}`);
//2.-Contar los usuarios conectados, contar los usuarios que tienen más o igual de 50 puntos del siguiente objeto.
let usersConnected = 0;
let usersPoints = [];
for(let connected in users){
let userConect = users[connected].isLoggedIn;
if(userConect === true){
  usersConnected += 1;
}
}
for( let pointed in users){
   let userPoint = users[pointed].points;
   if(userPoint >= 50){
  usersPoints.push(userPoint)
 }
}
console.log(`Usuarios con 50 o mas puntos:${usersPoints.length} Cantidad de usuarios  conectados:${usersConnected}`)
//3.-Encontrar personas que sean desarrolladores MERN(Mongo,express,react,node) stack del objeto de los usuarios
let namefullUser = '';
for(stack in users){
  let mernSearch = ['MongoDB','Express','React','Node'];
  let mernStack = users[stack].skills;
  let fullStack = mernSearch.every(sta => mernStack.includes(sta));
  if(fullStack){
   console.log(`${stack} cumple con el stack MERN:${mernStack}`)
  }
}
//4.-Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
const copyUsers = Object.assign({}, users);
copyUsers.Guillber = {
  email: 'guill@guill.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 24,
      isLoggedIn: false,
      points: 30
};
console.log(copyUsers);
//5.-Obtener todas las claves o propiedades del objeto usuarios
console.log(copyUsers);
//6.-Obtener todos los valores del objeto usuarios
const valueUsers = Object.values(copyUsers);
console.log(valueUsers);
//7.-Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.
const paises = {
  Mexico: {
    nombre: "México",
    capital: "Ciudad de México",
    poblacion: 128932753,
    idiomas: ["Español"]
  },
  Canada: {
    nombre: "Canadá",
    capital: "Ottawa",
    poblacion: 37742154,
    idiomas: ["Inglés", "Francés"]
  },
  Japon: {
    nombre: "Japón",
    capital: "Tokio",
    poblacion: 126476461,
    idiomas: ["Japonés"]
  },
  Alemania: {
    nombre: "Alemania",
    capital: "Berlín",
    poblacion: 83783942,
    idiomas: ["Alemán"]
  },
  Brasil: {
    nombre: "Brasil",
    capital: "Brasilia",
    poblacion: 212559417,
    idiomas: ["Portugués"]
  }
};
for(country in paises){
let countryNumber = paises[country];
console.log(`${countryNumber.nombre} - ${countryNumber.capital} - ${countryNumber.poblacion} - ${countryNumber.idiomas}`)
}
//Ejercicios: Nivel 3
//1.-Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción
const personAccount = {
  FisrtName: "Alexa",
  LastName: "Mendoza",
  Incomes: {
    Spotify: 120,
    desc1: 'Servicio de musica',
    Food: 500,
    desc2: 'Comida',
    Amazon: 800,
    desc3: 'Necesidades basicas',
  },
  Expense: {
    Youtube: 1000,
    info1: 'Ingreosos publicitarios de youtube',
    Salary:  2000,
    info2: 'Salario semanal',
  },
  totalIncome: function () {

  },
  totalExpense: function () {

  },
  accountInfo: function () {

  },
  addIncome: function () {

  },
  addExpense: function (){

  },
  accountBalance: function (){

  }
}
//2.-**** Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()
const usersTag = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

const signUp = (newUser) =>{
const copyList = Object.assign({}, usersTag);
copyList.newUser = {
  //vacio
}
}
console.log(usersTag)