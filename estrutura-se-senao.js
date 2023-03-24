function acaoBotao() {
    var valor1, valor2, resultado, operacao
    valor1 = prompt("Digite o valor 1")
    operacao = prompt("Digite a operacao, ex: +, -, *, /: ")
    valor2 = prompt("Digite o valor2")

    if(operacao == "+"){
        resultado = parseInt(valor1) + parseInt(valor2)
    } else if (operacao == "-") {
            resultado = parseInt(valor1) - parseInt(valor2)
        }else if (operacao == "*") {
                resultado = parseInt(valor1) * parseInt(valor2)
            } else if (operacao == "/") {
                    resultado = parseInt(valor1) / parseInt(valor2)
    }
    document.getElementById("paragrafo").innerText = resultado
}