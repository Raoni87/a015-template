/*let numero = Number(prompt("Digite um numero para somar ou 0 para sair"));
let soma = 0

while(numero !==0) {

soma=soma+numero;

numero = Number(prompt("Digite um numero para somar ou 0 para sair"));

}

console.log(soma);

const num = Number(prompt("Digite um número"));

for(let i = 0; i <= num; i++) {

console.log(i);

}

let array = [1,2,3,4,5,6,7];

for(let i = 0;i < array.length;i++){
    
console.log(`O número do indice ${i} é ${array[i]}`);

}*/

let tipoUsuario = prompt("Qual seu código de usuário?");
tipoUsuario = tipoUsuario.toUpperCase();

while (tipoUsuario !== "A") {
    console.log("Acesso negado");
    tipoUsuario = prompt("Qual seu código de usuário?");
    tipoUsuario = tipoUsuario.toUpperCase();
}

console.log("Boas vindas, Ademir");

for(let i = 1; i <= 10; i++) {
    console.log(2 * i);
}

let biblioteca = [`a, b, c, d, e, f, g, h, i, j, k, l, m, n`];

for(let i = 0; i < biblioteca.length; i++) {
    
    console.log(biblioteca[i].toUpperCase());

}

