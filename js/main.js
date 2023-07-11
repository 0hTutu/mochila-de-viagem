const form = document.getElementById('novoItem');
const list = document.getElementsById('lista')

form.addEventListener('submit', (ev) => {
    i.preventDefault();
    
    createElement(ev.target.elements['nome'].value, ev.target.elements['quantidade'].value);
});

function createElement(nome, quantidade) {
//<li class="item"><strong>7</strong>Camisas</li>
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = quantidade;

    newItem.appendChild(numberItem)
    newItem.innerHTML += nome;

    list.appendChild(newItem)

}