//Типы данных
//1) Примитивы (string, boolean, number, undefined,null
//NaN, Infinity, BigInt)

//2) Объекты: Objects, array, function   -- более сложная структура, методы, свойства ссылочный тип данных
//
// const a = 10;
// const b = a;
//
// a = 35;

// let user = {  //#345
//     name: "Bob",
// }
//
// let copyUser = {...user};
// copyUser.age = 24;


const todoList = [
    {
        id: "512",
        title: "what to learn",
        filter: "all",
        tasks: [
            {id: 1, name: "HTML", isDone: true},
            {},
            {},
        ],
    },
    {
        id: "5215",
        title: "what to buy",
        filter: "all",
        tasks: [
            {},
            {},
            {},
        ]
    }
]