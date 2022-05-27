class ValidaFormulario {
    
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposQueSaoValidos()
        console.log(camposValidos);
        const senhasValidas = this.senhasSaoValidas();
        console.log(senhasValidas);
        if(camposValidos && senhasValidas){
            
            alert('Formulário enviado com sucesso!');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true; 

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campo senha e repetir senha devem ser iguais.');
            this.criaErro(repetirSenha, 'Campo senha e repetir senha devem ser iguais.');
        } 

        if(senha.value.length < 6 || repetirSenha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Senha deve ter entre 6 e 12 caracteres.');
        }

        return valid;
    }

    camposQueSaoValidos() {
        let valid = true;
    
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            valid = true;
            const label = campo.previousElementSibling.innerText;
            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        
        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
        this.criaErro(campo, 'Usuário deve ter entre 3 e 12 caracteres.');
        valid = false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+/g)){
            this.criaErro(campo, 'Usuário deve conter apenas letras e números.');
            valid = false;
        }

    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.classList.add('error-text');
        div.innerHTML = msg;
        campo.insertAdjacentElement('afterend', div);

    }
}

const valida = new ValidaFormulario();