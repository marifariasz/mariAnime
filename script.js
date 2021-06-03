const btn = document.querySelector("#botao");
btn.addEventListener("click",function(e){
    e.preventDefault();
    const nome = document.querySelector("#anime");
    const anime = nome.value;
    
    if(anime){
        DOM.adicionar_lista(anime);
    }else{
        alert('Digite um nome válido');
    }
    
});

const DOM={
    adicionar: document.querySelector(".lista"),
    adicionar_lista(anime){
            const li = document.createElement("li")
            li.innerHTML = `<li> ${anime} </li>`
            DOM.adicionar.appendChild(li)

    }
}




















const Storage = {
    get(){
        JSON.parse(localStorage.getItem("chave")) || []
    },
    set(anime) {
        localStorage.setItem("chave", JSON.stringify(anime))
    }
}
