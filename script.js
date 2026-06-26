// Guarda tudo que será digitado
let conta = "";

// Atualiza o visor
function atualizarDisplay() {

    document.getElementById("display").value = conta;

}

// Adiciona números e operadores
function adicionar(valor){

    conta += valor;

    atualizarDisplay();

}

// Limpa tudo
function limpar(){

    conta = "";

    atualizarDisplay();

}

// Apaga o último caractere
function apagar(){

    conta = conta.slice(0,-1);

    atualizarDisplay();

}

// Calcula o resultado
function calcular(){

    try{

        conta = eval(conta).toString();

    }

    catch{

        conta = "Erro";

    }

    atualizarDisplay();

}