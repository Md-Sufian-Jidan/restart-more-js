function a (){
    console.log('a');
    b();
    console.log('aa');
}
function b (){
    console.log('B');
    console.log('BB');
    d();
}
function d(){
    console.log('d')
    console.log('dd')
}

function x (){
    console.log('x');
    console.log('xx');
    y();
}
function y (){
    console.log('y');
    console.log('yy');
    z();
}
function z (){
    console.log('z');
    console.log('zz');
}

setTimeout(() => {
    console.log('inside Timeout');
}, 2000);


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

a();
b();
x()