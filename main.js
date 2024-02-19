const form = document.getElementById('form-tarefa');
const Tarefa = [];

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha(){
    const inputNomeTarefa = document.getElementById('nome-terefa');

    if (Tarefa.includes(inputNomeTarefa.value)) {
        alert(`A terefa: ${inputNomeTarefa.value} já foi inserida`);
    } else {

    Tarefa.push(inputNomeTarefa.value);

    let linha = '<ul>';
    linha += `<li onclick="marcarConcluido(this)">${inputNomeTarefa.value}</li>`;
    linha += '</ul>';

    linhas += linha;
    }

    inputNomeTarefa.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('section');
    corpoTabela.innerHTML = linhas;
}

function marcarConcluido(elemento) {
    elemento.classList.toggle('concluido');
}