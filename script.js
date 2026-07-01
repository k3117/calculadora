// Guarda tudo que será digitado
let conta = "";

// Atualiza o visor
function atualizarDisplay() {
    document.getElementById("display").value = conta;
}

// Adiciona números e operadores
function adicionar(valor) {
    // Se o display estiver mostrando "Erro" ou "Infinity", limpa antes de digitar o novo número
    if (conta === "Erro" || conta === "Infinity" || conta === "NaN") {
        conta = "";
    }
    
    conta += valor;
    atualizarDisplay();
}

// Limpa tudo
function limpar() {
    conta = "";
    atualizarDisplay();
}

// Apaga o último caractere
function apagar() {
    // Se estiver exibindo Erro, limpa tudo em vez de apagar uma letra
    if (conta === "Erro" || conta === "Infinity" || conta === "NaN") {
        conta = "";
    } else {
        conta = conta.slice(0, -1);
    }
    atualizarDisplay();
}

// Calcula o resultado
function calcular() {
    // Se a conta estiver vazia, não faz nada
    if (conta.trim() === "") return;

    try {
        // O eval pode retornar números com muitas casas decimais (ex: 0.1 + 0.2 = 0.30000000000000004)
        let resultado = eval(conta);

        // Se o resultado for um número decimal longo, limita a 8 casas decimais para não quebrar o layout
        if (Number.isFinite(resultado) && !Number.isInteger(resultado)) {
            resultado = Math.round(resultado * 100000003) / 100000003; // Evita dízimas estranhas
            resultado = parseFloat(resultado.toFixed(8)); 
        }

        conta = resultado.toString();
    }
    catch {
        conta = "Erro";
    }
    
    atualizarDisplay();
}
