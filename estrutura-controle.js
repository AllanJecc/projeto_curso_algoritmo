/*
   //Coletando as informações com o usuário
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a nota 1 do aluno: ")
   leia(nota1)
   escreval("Digite a nota 2 do aluno: ")
   leia(nota2)

   //Calculo matematico
   media := (nota1 + nota2) / 2
   
   //Checando
   se media >= 5 entao
      escreval("Aprovado!", nome)
   senao
        escreval("Reprovado!", nome)
   fimse
*/

//Declarando variaveis
var nome, nota1, nota2;
//recebendo valores
nome = prompt("Digite o nome do aluno: ")
nota1 = prompt("Digite a nota 1 do aluno: ")
nota2 = prompt("Digite a nota 2 do aluno: ")
//Calculando a media
media = (parseInt(nota1) + parseInt(nota2)) / 2
//Checando resultado
if(media >= 5)
    alert("Aprovado! " + nome)
else
    alert("Reprovado! " + nome)