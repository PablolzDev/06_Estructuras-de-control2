const teamLeader = {
  id: "115551",
  identificationNumber: "1023485967",
  firstName: "javier",
  lastName: "perez",
  birthDate: new Date("1998-04-23 14:00:00"),
  phoneNumber: "(+57) 3136954017",
  email: "javier@gmail.com",
};

for (const key in teamLeader) {
  console.log(key);
}

console.log(Object.keys(teamLeader));


Object.keys(teamLeader).forEach((key) => {
  console.log(teamLeader[key]);
});

Object.values(teamLeader).forEach((value) => {});


//Numeros del 1 al 100
console.groupCollapsed("Numeros del 1 al 100")
let numbers = [];
let pares = [];

for (let i = 0; i <= 100; i++) {
  numbers.push(i);
}

console.table(numbers);

console.groupEnd()

//Pares
console.groupCollapsed("Numeros pares de esos 100 numeros")

for (const num of numbers) {
  if (num % 2 === 0) {
    pares.push(num);
  }
}
console.table(pares);
console.groupEnd()

//Segunda alternativa de pares
const listParNumbers = numbers.filter(num => {
    if (num % 2 === 0) {
        console.info(num)
        return num
      }
})

listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
];

//Option1  ("El object.values devuelve todos los valores de la lista")
console.warn("Opcion 1")
Object.values(listaEmpleados).forEach((empleados => {
    console.log("El empleado ", empleados.nombre.toLowerCase(),"trabaja como", empleados.puesto.toLowerCase())
}))

console.error("")
//Option 2
console.warn("Opcion2")
listaEmpleados.forEach((empleado => {
    console.log(`${empleado.nombre.toLowerCase()} puesto ${empleado.puesto.toLowerCase()}`)
}))

//Conversion de monedas, toLocaleString y intl.NumberFormat
const number = 123456.789;

console.log(
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    number,
  ),
);
// Expected output: "123.456,79 €"

// The Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
    number,
  ),
);
// Expected output: "￥123,457"

// Limit to three significant digits
console.log(
  new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// Expected output: "1,23,000"


//.map((value, index, array) => {})