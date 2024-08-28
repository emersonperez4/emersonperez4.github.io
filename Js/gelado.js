//Calculo da loja Gelado
let totalPedido = 0;
let detalhes = '';

function adicionarPedido(){
    //Variaveis para o sabor escolhido e o tamanho
    const sabor = document.getElementById('sabor').value;
    const tamanho = document.getElementById('tamanho').value;
    //Variavel que acumula o pedido
    let valor = 0;

    //Selecionando os sabores e o tamanho, irá fazer o calculo do Açaí e do Cupuaçu
    if(sabor ==='AC'){
        if(tamanho === 'P') valor = 11;
        else if(tamanho === 'M') valor = 16;
        else valor = 18;
    } else{
        if(tamanho === 'P') valor = 9;
        else if(tamanho === 'M') valor = 14;
        else valor = 20;
    }

    //Mostrará a mensagem que o usuário escolheu seguinte sabor e tamanho
    detalhes +=`<p>Você pediu um sabor ${sabor === 'AC' ? 'Açai': 'Cupuaçu'} no tamanho ${tamanho}: R$ ${valor.toFixed(2)}</p>`;
    totalPedido += valor;

    //Mostra o resultado para pagina Html
    document.getElementById('detalhesPedido').innerHTML = detalhes;
    document.getElementById('totalPedido').textContent = `O valor a ser pago: R$ ${totalPedido.toFixed(2)}`;
}
