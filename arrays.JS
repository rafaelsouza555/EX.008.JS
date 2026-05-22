let frutas = ['kiwi', 'Maça', 'Banana', 'Laranja'];
console.log(frutas.length);

frutas.push('Manga');
console.log(frutas);

frutas.pop();
console.log(frutas);

let citricas = frutas.slice(2, 0 , 3);
console.log(citricas);

frutas.splice(2, 0, 'kiwi');

let verduras = ['Cenoura', 'Batata'];
let comida = frutas.concat(verduras);