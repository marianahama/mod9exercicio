const form =document.getElementById('tarefas');

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputTarefa=document.getElementById('nome-tarefa');

    

    let linha = '<li>';
    linha += `<li>${inputTarefa.value}</li>`;
    //linha += `<td>${}</td>`;
    //linha += `<td>${}</td>`;

    linhas += linha;

    const corpoLista =document.querySelector('li');
    corpoLista.innerHTML = linhas;

   inputTarefa.value='';
   
});
