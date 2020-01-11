"use strict";
const p = document.querySelector('p');
p.addEventListener('click', makeGreen);
function makeGreen() {
    this.style.color = '#BADA55';
    this.style.fontSize = '50px';
}
const dogs = [
    { name: 'hugo', age: 2 },
    { name: 'max', age: 10 },
];
// Styled
console.log('test %c I am some great text', 'font-size: 50px; color: #BADA55');
// Group
dogs.forEach(dog => {
    console.groupCollapsed(dog.name);
    console.log(dog.name);
    console.log(dog.age);
    console.groupEnd();
});
// count
console.count('foo');
console.count('foo');
console.count('bar');
console.count('foo');
console.count('foo');
// timing
console.time('fetch');
fetch('https://api.github.com/users/zeroliu')
    .then(res => res.json())
    .then(data => {
    console.timeEnd('fetch');
    console.log(data);
});
// table
console.table(dogs);
const unstructuredTable = [{ foo: 1 }, { bar: 2 }];
console.table(unstructuredTable);
//# sourceMappingURL=main.js.map