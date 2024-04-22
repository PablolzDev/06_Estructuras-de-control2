const teamLeader = {
    id:"115551",
    identificationNumber: "1023485967",
    firstName: "javier",
    lastName: "perez",
    birthDate: new Date("1998-04-23 14:00:00"),
    phoneNumber: "(+57) 3136954017",
    email: "javier@gmail.com",
}

for (const key in teamLeader) {
    console.log(key)
}

console.log(Object.keys(teamLeader))


Object.keys(teamLeader).forEach(i => {
    console.log(i)
});