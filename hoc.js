let person = {
  name: 'trang',
  age: 20
};

//to change the property we use

//dot notation
person.name = 'Adrian';

//bracket notation
person['name'] = 'mary';

console.log(person);

let selectedColor = ['red' , 'blue'];
selectedColor[2] = 1;
console.log(selectedColor.length);

function dientichhinhtron(r){
  let dientich = r * r * 3.14;
  return console.log(dientich);
}

dientichhinhtron(3)

let trangWords = 'Adrian minds';

if (trangWords === 'Adrian minds'){
        console.log('Trang is not matter to Adrian. Because he minds Trangs words'); } else {
        console.log ('this else statement is never printed in the console. Because the if statement is correct!');
}



var name = prompt ('What is your name?');

function greeting(yourName) {
      var result = 'Hello ' + yourName;
      console.log(result);
}

greeting(name);
