
const form = document.getElementById('novoItem');
const list = document.getElementsById('lista')
const itens = JSON.parse(localStorage.getItem('')) || [];

itens.forEach( (element) => {
    createElement(element);
} );

form.addEventListener('submit', (ev) => {
    i.preventDefault();
    
    const nome = ev.target.elements['nome'];
    const quantidade = ev.target.elements['quantidade'];

    const currentItem = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    createElement(currentItem);

    
    itens.push(currentItem)
    
    localStorage.setItem('itens',JSON.stringify(itens));
    
    nome.value = ''
    quantidade.value = ''
});

function createElement(item) {
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = item.quantidade;

    newItem.appendChild(numberItem)
    newItem.innerHTML += item.nome;

    list.appendChild(newItem);
}