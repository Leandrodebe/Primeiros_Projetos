
let somaTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar() {
    
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valor = parseInt(produto.split('$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    if (quantidade == 0 ) {
        document.getElementById('lista-produtos').innerHTML = 'Quantidade inserida insuficiente';
        document.getElementById('valor-total').innerHTML = '----';
        //Tem que resolver o problema dele depois continuar com esse texto inserido no carrinho!!!!!!!!!!!
    } else {
       
        let preco = valor * quantidade;

        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML =carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
            </section>`;

        somaTotal = somaTotal + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${somaTotal}`;

        document.getElementById('quantidade').value = 0;
    }


}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    somaTotal = 0;
}

//Aqui segue sugestões de melhoras para melhorar a página com apredizados futuros
//Adicionar produtos
//Ter opção de excluir produtos diretamente do carinho de compra
//Ao adiocionar um produto pela segunda vez ou mais, somar ele com oq ja temos no carrinho
//Aumentar a quantidade de produtos ofertados
