// 705.484.450-52

class ValidaCPF {
    constructor(cpfEnviado){

        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,                            //  Não pode ser reescrito
            enumerable: false,                          //  Não aparece no console.log()
            configurable: false,                        //  Não pode ser deletado
            value: cpfEnviado.replace(/\D+/g, '')       //  Remove tudo que não for número
        });
    }

    valida() {
        const invalido = `O CPF ${this.cpfLimpo} é INVÁLIDO`;
        const valido = `O CPF ${this.cpfLimpo} é VALIDO`;
        if(typeof this.cpfLimpo === 'undefined') return invalido;
        if(this.cpfLimpo.length !== 11) return invalido;
        if(this.isSequencia()) return invalido;
        this.geraNovoCpf()
        return (this.novoCpf === this.cpfLimpo) ? valido : invalido;
    };

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    };

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let strNumerica of cpfSemDigitos){
            total += reverso * Number(strNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : 0;
    }


}

let validaCPF = new ValidaCPF('070.987.720-03');
    validaCPF = new ValidaCPF('11111111111');
console.log(validaCPF.valida());
