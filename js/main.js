
const form = document.getElementById('novoItem');
const list = document.getElementsById('lista')
const itens = JSON.parse(localStorage.getItem('')) || [];

itens.forEach( (element) => {
    
} );

form.addEventListener('submit', (ev) => {
    i.preventDefault();
    
    const nome = ev.target.elements['nome'];
    const quantidade = ev.target.elements['quantidade'];

    createElement(nome.value, quantidade.value);

     nome.value = ''
     quantidade.value = ''
});

function createElement(nome, quantidade) {
//<li class="item"><strong>7</strong>Camisas</li>
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = quantidade;

    newItem.appendChild(numberItem)
    newItem.innerHTML += nome;

    list.appendChild(newItem);

    const currentItem = {
        'nome': nome,
        'quantidade': quantidade
    }

    itens.push(currentItem)
    
    localStorage.setItem('itens',JSON.stringify(itens));
}