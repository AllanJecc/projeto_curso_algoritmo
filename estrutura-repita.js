function acaoBotao() {
    var sairLoop, valor1, valor2
    do {
        valor1 = prompt("Digite o valor 1: ")
        valor2 = prompt("Digite o valor 2: ")

        document.getElementById("paragrafo").innerText = "resultado: " + (parseInt(valor1) + parseInt(valor2))
        
        sairLoop = prompt("Deseja sair: S sim ou N nao")
    } while (sairLoop == "N");
}