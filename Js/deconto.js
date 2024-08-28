//Calculo do desconto
function calcularDesconto(){
    //Variaveis constantes, Valor da Unidade e a quantidade
    const valorUni = parseFloat(document.getElementById('valorUni').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);

    //Calculo do sem desconto
    const valorTotalSemDesconto = valorUni * quantidade;
    let desconto = 0;

    //O sistema calcula o desconto com a ajuda do if, else if e else
    if (valorTotalSemDesconto < 2500){
        desconto = 0;
    }
    else if (valorTotalSemDesconto >= 2500 && valorTotalSemDesconto < 6000) {
        desconto = 4;
    }
    else if (valorTotalSemDesconto >= 6000 && valorTotalSemDesconto < 10000){
        desconto = 7;
    }
    else{
        desconto = 11;
    }

    const valorDesconto = (desconto / 100) * valorTotalSemDesconto;
    //Calculo do sem desconto
    const valorTotalComDesconto = valorTotalSemDesconto - valorDesconto;

    //Mostra o resultado para pagina Html
    document.getElementById('resultadoSemDesconto').textContent = `Valor SEM desconto: R$${valorTotalSemDesconto.toFixed(2)}`;
    document.getElementById('resultadoComDesconto').textContent = `Valor COM desconto: R$${valorTotalComDesconto.toFixed(2)}`;
}