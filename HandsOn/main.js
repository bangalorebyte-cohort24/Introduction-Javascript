// console.log("Hello World");
const name = 'jithin';
let age = 28;
const hello = `My name is ${name} and i'm ${age} old`;
// console.log(hello);

// console.log(hello.substring(0,12))
// console.log(hello.split(' '))

// Arrays
const fruits = ['apple','mango','grapes'];
// console.log(fruits.push('strawberries'));
// console.log(fruits.push(20))
// console.log(fruits)
// console.log(fruits.unshift('lemon'))
// console.log(fruits)


const person = {
    name : 'jithin',
    age : 28,
    languages : ['python','javascript','java'],
    address : {
        location : 'Cochin',
        State :'Kerala'
    },
    
    fullName: function () {
        return this.name + " " + 'Byte Academy'
    }
}

// console.log(person)
// console.log(person.fullName())
// console.log(person.address)
// console.log(person.languages.sort())

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: false
    },
    {
        id: 2,
        text: 'Dinner with wife',
        isComplete: false
    },
    {
        id: 3,
        text: 'Meeting with boss',
        isComplete: true
    }
];

console.warn("While Loop Output")
let i=0;
while(i<3){
    console.log(i,todos[i].text)
    i++;
}

console.warn("For Loop Output")
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text)
}

console.warn("For Each Loop Output")
todos.forEach(function(todo){
    console.log(todo.text);
})

console.warn("Map")
const newArray =  todos.map(function(todo){
     return todo.id*todo.id
 })
 console.log(newArray) 

 console.warn("Filter")
 const filterArray = todos.filter(function(todo){
     return todo.isComplete === true;
 })
 console.log(filterArray)

console.warn("Combined")
 const tempArray = todos.filter(function(todo){
     return todo.isComplete === false;
 }).map(function(todo){
     return todo.text
 });
 console.log(tempArray);

 console.warn("Functions")
 function greet(){
     return "Hello World";
 }
 console.log(greet())

