const addItem = () => {
    let input = document.getElementById("tbox-name")
    let inputValue = input.value;
    console.log(inputValue);

    let box = document.getElementById("box");

    let li = document.createElement('li');
    li.textContent = inputValue;


    let a = document.createElement('a');
    a.textContent = "X";
    let aStl = a.style
    aStl.textDecoration = 'none';
    aStl.color = "red";
    aStl.cursor = "pointer";
    aStl.padding = '8px';
    li.appendChild(a)


    let insertBefore = box.firstElementChild;
    if(insertBefore == null){
        box.appendChild(li);
    }else{
        box.insertBefore(li, insertBefore)
    }

    input.value = '';
    input.focus()

    document.getElementById("count").innerHTML = box.childElementCount;

}

let delBtn = document.querySelector('ul');
delBtn.addEventListener('click', (e)=>{

    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
    document.getElementById("count").innerHTML = box.childElementCount;

})

