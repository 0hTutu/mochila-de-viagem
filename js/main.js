const form = document.getElementById('novoItem');

form.addEventListener('submit', (i) => {
    i.preventDefault();
    
    console.log(i.target.elements['nome'].value);
    console.log(i.target.elements['quantidade'].value);
});
