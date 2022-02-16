// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
//     але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

const fs = require("fs");

const path = require("path");

const onlineUsers = [
    {name: "Andriy", age: 31, city: "Stary Sambir"},
    {name: "Bogdan", age: 25, city: "Sambir"},
];

const inPersonUsers = [
    {name: "Kolya", age: 33, city: "Lviv"},
    {name: "Ira", age: 20, city: "Kyiv"},
];



fs.mkdir(path.join(__dirname, 'main'), (err) => {
    if (err) {
        console.log(err)
        throw err

    }
});
fs.mkdir(path.join(__dirname, 'main', 'online'), (err) => {
    if (err) {
        console.log(err)
        throw err
    }
});

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
    if (err) {
        console.log(err)
        throw err
    }
});


for (let i = 0; i < onlineUsers.length; i++) {
    for (const key in onlineUsers[i]) {
fs.appendFile(path.join(__dirname, 'main', 'online', 'user.txt'),`\n${key}: ${onlineUsers[i][key]}`, (err)=>{
    if(err){
        console.log(err)
        throw err;
    }
} )
    }
}


for (let i = 0; i < inPersonUsers.length; i++) {
    for (const key in inPersonUsers[i]) {
        fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'person.txt'),`\n${key}: ${onlineUsers[i][key]}`, (err)=>{
            if(err){
                console.log(err)
                throw err;
            }
        } )
    }
}