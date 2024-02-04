const todoinput = document.querySelector('.todo-input');
const addTextbtn = document.querySelector('#addTextbtn');
const list_data = document.querySelector('.list-item');

addTextbtn.addEventListener('click',function()
{

    if(todoinput.value == "")
    {
        alert('please enter your task');
    }
    let li = document.createElement('li');
    li.innerHTML = `<div class="input-data">${todoinput.value}</div> <div class="control"> <img src="./img/edit-button.png" onclick = EditToItem(this) class="edit todo-control" alt="" width="20"> <img src="./img/delete.png" onclick = "DeleteItem(this)" class="delete todo-control"  width="20" alt=""></div>`;
    list_data.appendChild(li);
    todoinput.value = ""; 
    
})

todoinput.addEventListener('keypress', function(event)
{
        if(event.key == 'Enter')
    {
        let li = document.createElement('li');
        li.innerHTML = `<div class="input-data">${todoinput.value}</div> <div class="control"> <img src="./img/edit-button.png" onclick = EditToItem(this) class="edit todo-control" alt="" width="20"> <img src="./img/delete.png" onclick = "DeleteItem(this)" class="delete todo-control"  width="20" alt=""></div>`;
        list_data.appendChild(li);
        todoinput.value = ""; 
    }
})

function EditToItem(event)
{
    // onClick Function "this" Returns Window Object 
    console.log(event.tagName); // IMG

    todoinput.value  = event.parentElement.parentElement.querySelector('.input-data').innerText;
    addTextbtn.addEventListener('click',function()
    {
        let li = event.parentElement.parentElement.parentElement.querySelector('li');
        li.outerHTML = " ";
    })
}

function DeleteItem(event)
{
    let deleteValue = event.parentElement.parentElement.querySelector('.input-data').innerHTML;
    console.log(deleteValue);
    if(confirm(`Are your sure ? Do you want to delete this ${deleteValue}`))
    {
        let li = event.parentElement.parentElement.parentElement.querySelector('li');
        li.outerHTML = " ";
        // or 
        // event.parentElement.parentElement.parentElement.querySelector('li').remove();
    }
}


