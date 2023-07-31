const addItem = () => {
    let inputValue = document.getElementById("tbox-name").value;
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

}

