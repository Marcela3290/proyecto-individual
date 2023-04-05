const seabre = document.getElementById('seabre');
const contenedor = document.getElementById('contenedor');
const secierra = document.getElementById('secierra');

seabre.addEventListener('click', () => {
  contenedor.classList.add('show');  
});

secierra.addEventListener('click', () => {
  contenedor.classList.remove('show');
});