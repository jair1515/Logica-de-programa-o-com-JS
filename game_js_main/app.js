alert('Boa Vindas ao jogo do numero secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(`O numero secreto é: ${numeroSecreto}`);
let chute;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 100');
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else if (chute > numeroSecreto){
        alert(`O Numero Secreto é menor que ${chute}`);
    } else if (chute < numeroSecreto) {
        alert (`O Numero Secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1;
    tentativas ++;

}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai!  Você descobriu o numero secreto que é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*if (tentativas > 1){
alert(`Isso ai!  Você descobriu o numero secreto que é ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso ai!  Você descobriu o numero secreto que é ${numeroSecreto} com ${tentativas} tentativa`);
}*/ 


