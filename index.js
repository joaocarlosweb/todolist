

const btn= document.querySelector('.bottun-add-task');
const input= document.querySelector('.input-task');
const listaCompleta= document.querySelector(".list-task");

let myListItem = []

function addnovatarefa(){
    myListItem.push({
        tarefa:input.value,
        concluida:false
    });
    input.value=""
    mostrarTarefa()
}
function mostrarTarefa(){
    let novaLi= ''
    myListItem.forEach((Item, posicao) =>{
        novaLi= novaLi + `
        <li class="task ${Item.concluida && "donne"}"> <img src="aprovado.png" alt="Aprovação da tarfa" onclick="concluirTarefa(${posicao})">
        <p>${Item.tarefa}</p>
        <img src="lixeira.png" alt="Lixeira da tarefa" onclick="deletarItem(${posicao})"></li>`

    })
    listaCompleta.innerHTML = novaLi   
    localStorage.setItem('minhalista',JSON.stringify(myListItem));
    
}

function concluirTarefa(posicao){
    myListItem[posicao].concluida= !myListItem[posicao].concluida 
    mostrarTarefa()

}

function deletarItem(posicao){
    myListItem.splice(posicao,1);
    mostrarTarefa()
}
function recarregarTarefas(){
    const tarefasDoLocalStory= localStorage.getItem('minhalista');
    if(tarefasDoLocalStory){
    myListItem =JSON.parse (tarefasDoLocalStory)}
    
    
    mostrarTarefa();
    
}
recarregarTarefas()

btn.addEventListener('click',addnovatarefa);
