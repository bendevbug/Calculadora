function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c')
            document.getElementById('resultado').value = '';
    }

    if (valor === '+' || valor === '-' || valor === '/' || valor == '*' || valor === '.') {

        document.getElementById('resultado').value += valor;

    }


    if (valor === '=') {

        var valor_campo = eval(document.getElementById('resultado').value);

        document.getElementById('resultado').value = valor_campo;

    } else if (tipo === 'numero') {
        var valor_campo = document.getElementById('resultado').value;

        document.getElementById('resultado').value += valor;
        document.getElementById('resultado').value = valor_campo + valor;


    }
}

function aparecerTexto() {
    // document.getElementById("div").innerHTML = "";
    // var texto = document.getElementById("div");
    // texto.style.fontFamily = 'Teko';

    var x = document.getElementById("div");
    if (x.className === "show") {
        x.className += "-text";
    } else {
        x.className = "show";
    }
    document.getElementById("div").innerHTML = "MAYZINNG";



    console.log('oi');
}

function reset() {
    document.getElementById("div").innerHTML = "";
    console.log('oi2');

}