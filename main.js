const form = document.getElementById('formulario');
var campo = document.querySelectorAll('input[type=number]')
var msgSucesso = "Formulario preenchido com sucesso"
var msgErro = "Formulario preenchido sem sucesso"

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if ( campo[0].value < campo[1].value ) {
            document.querySelector('.msg').style.display = "block"
            document.querySelector('.msg').style.background = "#008000"
            document.querySelector('.msg').innerHTML = msgSucesso
        }

            else {
                document.querySelector('.msg').style.display = "block"
                document.querySelector('.msg').style.background = "#FF0000"
                document.querySelector('.msg').innerHTML = msgErro}

        })