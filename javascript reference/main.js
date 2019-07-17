const todos = [
  {
    id: 1,
    text: "Teach javascript",
    isComplete: false
  },
  {
    id: 2,
    text: "drink Tea",
    isComplete: true
  },
  {
    id: 3,
    text: "teach Django",
    isComplete: false
  }
]

// for(let i = 0; i<todos.length;i++){
//   console.log(`Todos Text ID ${i} : ${todos[i].id}`);
// }

// let i=0
// while(i<=10){
//   console.log(`while Loop Number ${i}`);
//   i++;
// }

// for(let todo of todos){
//   console.log(todo.isComplete);
// }
//
// todos.forEach(function(todo,i){
//   console.log(`${i}:${todo.text.length}`);
// })

// const todofilter = todos.filter(function(todo) {
//   return todo.isComplete === false;
// });
//
// todofilter.forEach(function(todo){
//   console.log(`Not Completed items ${todo.text}`);
// })

// const todofilter = todos.filter(function(todo) {
//   return todo.isComplete === false;
// }).forEach(function(todo){
//   console.log(`Not Completed items ${todo.text}`);
// })


// let color = 'red';
//
// switch (color) {
//   case 'red':
//   console.log(`color is red`);
//   break;
//
//   case 'blue':
//   console.log(`color is blue`);
//   break;
//
//   case 'black':
//   console.log(`color is black`);
//   break;
//
//   default:
//   console.log(`color is white`);
//   break;
//
// }

function greet(g=name){
  return (`Hello,${name}`);
}
console.log(greet(name="akash"));
