alert('Boa Vindas ao jogo do numero secreto!');
let numeroSecreto = 5;
console.log(`O numero secreto é: ${numeroSecreto}`);
let chute = prompt('Escolha um numero entre 1 e 30');

// se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ai!  Você descobriu o numero secreto que é ${numeroSecreto}`);
} else {
    alert('Você errou :( ')
}