const btn = document.querySelector("#btn")

function darkMode() {
    const body = document.querySelector("body")
    body.classList.toggle("dark-mode")

    if (btn.innerHTML == "ativar"){
        btn.innerHTML = "desativar"
    }else {
        (btn.innerHTML = "ativar")   
    }
}

btn.addEventListener("click",darkMode)