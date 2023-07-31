const addItem = () =>{
    let inputValue = document.getElementById("tbox-name").value;
    console.log(inputValue);

    let box = document.getElementById("box");

    let li = document.createElement('li');
    li.textContent= inputValue;

    box.appendChild(li)
}

