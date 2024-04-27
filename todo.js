let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
function Add(){

    if (inputs.value == ""){
        alert("please Enter Your task.")
    }
    else{
       let newEl = document.createElement("ul");
        newEl.innerHTML =`${ inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEl);
        inputs.value="";
        newEl.querySelector("i").addEventListener("click", remove);


        function remove(){
            newEl.remove()
        }
}
}