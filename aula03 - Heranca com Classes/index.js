class DispositoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + " já está ligado");
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(this.ligado) {
            console.log(this.nome," já está desligado");
            return;
        }

        this.ligado = false;
    }
}

const d1 = new DispositoEletronico("Televisão");

class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + " já está ligado");
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(this.ligado) {
            console.log(this.nome," já está desligado");
            return;
        }

        this.ligado = false;
    }
}  

class Tablet extends DispositoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Você alterou o método ligar');
    }

    desligar() {
        if(this.ligado) {
            console.log(this.nome," já está desligado");
            return;
        }

        this.ligado = false;  
    }
}

const s1 = new Smartphone("Sansung", 'Preto', 'S10');
console.log(s1);

const t1 = new Tablet("iPad", true);
console.log(t1)
t1.ligar();