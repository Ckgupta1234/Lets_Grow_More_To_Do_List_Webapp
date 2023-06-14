let input = document.querySelector('.entered-list')
let addbtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

//add btn disabled
input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
    addbtn.classList.add('active');
    }
    else{
        addbtn.classList.remove('active');
    }
})

//odd new item  to list

addbtn.addEventListener('click', () => {
    if(input.value.trim() != 0){ 
    let newitem = document.createElement('div');
    newitem.classList.add('item');
    newitem.innerHTML=`
    <p> ${input.value} </p>
    <div class="item-btn">
        <i class="ri-pencil-fill"></i>
        <i class="ri-close-line"></i>
    </div>
    `
    tasks.appendChild(newitem);
    input.value = '';   
    }
    else{
        alert('Please enter a tasks')
    }
})

// delete item from list

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('ri-close-line')){
        e.target.parentElement.parentElement.remove();
    }
})

//mark item as completed

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('ri-pencil-fill')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})