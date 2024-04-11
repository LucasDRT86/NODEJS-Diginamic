console.log(`Hello world`);

let array = [1,2,3];

console.log(array);

let copy = [... array,4,5,6];

console.log(copy);

let [a, b] = copy;

console.log(a);
console.log(b);

let c = copy[2];
console.log(c);

// Object

let obj = {
    message: "Hellow world"
}

console.log(obj);
console.log(obj.message);

obj.type = "success";

console.log(obj);

let objCopy = {... obj, id : 5};

console.log(objCopy);

const { type } = objCopy;
const id = objCopy.id;

console.log(type, id);

function varTest(){
    var x = 1;
    if(true){
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

function letTest(){
    let x = 1;
    if(true){
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

// ---------------------

function old(){
    console.log(`hello world`);
}

const method = () => {
    console.log(`hello world`);
}

const method2 = () => console.log(`hello world`);

const array1 = [1,2,3,4,5,6];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

array.forEach(value => console.log(value));

const r = param => {return param +1} 

console.log(r(8,8));