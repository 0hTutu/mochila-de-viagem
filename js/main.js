
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

    const existe = itens.find( element => element.nome === nome.value);

    const currentItem = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if(existe) {
        currentItem.id = existe.id;
        updateElement(currentItem);

        itens[existe.id] = currentItem

    } else {
        currentItem.id = itens.length;
        
        createElement(currentItem);
        itens.push(currentItem);
    }

    createElement(currentItem);

    itens.push(currentItem);
    
    localStorage.setItem('itens',JSON.stringify(itens));
    
    nome.value = '';
    quantidade.value = '';
});

function createElement(item) {
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = item.quantidade;
    numberItem.dataset.id = item.id;
    
    newItem.appendChild(numberItem);
    newItem.innerHTML += item.nome;

    list.appendChild(newItem);
}

function updateElement(){
    document.querySelector("[data-id'"+item.id+"']").innerHTML = item.quantidade
}

