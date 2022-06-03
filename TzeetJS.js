window.addEventListener("load", function(){

    const limite = 140;

    function text(textarea, textoContagem, btn){
        let tamanho = textarea.value.length;
        let cont = limite - tamanho;
        
        textoContagem.innerHTML = cont;

        const palavra = textarea.value;

        if(cont < 40 && cont >= 0){
            textoContagem.style.color = "yellow";
            btn.disabled = false;
        }else if(cont < 0){
            textoContagem.style.color = "red";
            btn.disabled = true;
        }else if(palavra == ""){
            textoContagem.style.color = "black";
            btn.disabled = true;
        }else{
            textoContagem.style.color = "black";
            btn.disabled = false;
        }
    }

    const qtd = document.querySelectorAll(".BtnEnviar");

    const textareas = document.getElementsByTagName("textarea");
    
    for(let i = 0; i < textareas.length; ++i){
        qtd[i].disabled = true;
        textareas[i].addEventListener("input", function(){
            this.style.height = "auto";
            this.style.height = `${this.scrollHeight}px`;
            
            if(textareas[i].id === "textareaHome"){
                text(textareas[i], document.querySelector(".contadorHome"), qtd[i]);
            }else if(textareas[i].id === "textareaModal"){
                text(textareas[i], document.querySelector(".contadorModal"), qtd[i]);
            }
        });
    }
});