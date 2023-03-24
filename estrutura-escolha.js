function acaoBotao() {
    var valor1, valor2, resultado, operacao
    valor1 = prompt("Digite o valor 1")
    operacao = prompt("Digite a operacao, ex: +, -, *, /: ")
    valor2 = prompt("Digite o valor2")

    switch (operacao) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
    
        default:
            break;
    }
    document.getElementById("paragrafo").innerText = resultado
}