class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
    falar() {
        console.log(`meu nome é ${this.nome} ${this.sobrenome}`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }

}

// Criar uma classe é um jeito de simplificar uma função construtora
// Ela facilita para criar metodos, colocando minhas funções automaticamente no prototype
// Comparando, vemos que Pessoa e Pessoa2 são iguais, porem Pessoa foi construido de uma maneira
// Mais intuitiva

function Pessoa2 (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`meu nome é ${this.nome} ${this.sobrenome}`);
}



const p1 = new Pessoa('João', 'Silva');
const p2 = new Pessoa('Maria', 'Rita');
const p3 = new Pessoa2('José', 'Almeida');
const p4 = new Pessoa('Leo', 'Silva');

console.log(p1);
console.log(p2);
console.log(p3);
