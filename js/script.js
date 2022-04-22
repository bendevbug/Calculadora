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
        // console.log(valor_campo);

    } else if (tipo === 'numero') {
        var valor_campo = document.getElementById('resultado').value;

        document.getElementById('resultado').value = valor;

        console.log(document.getElementById('resultado').value = valor_campo + valor);

    }
}

function aparecerTexto() {

    var x = document.getElementById("div");
    if (x.className === "show") {
        x.className += "-text";
    } else {
        x.className = "show";
    }
    document.getElementById("div").innerHTML = "MAYZINNG";

}

function reset() {
    document.getElementById("div").innerHTML = "";

}