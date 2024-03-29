function salvar(){

    let form = document.getElementById("form-cadastro")
    let nome = form.NomePlanta.value
    let especie = form.EspeciePlanta.value
    let altura = form.AlturaMaxima.value

    if(nome.trim() == ""){
        alert("Preencha o nome da planta:")
        return false
        }
        if (especie.trim() == ""){
            alert("Preencha a espécie da planta:")
            return false
        }
        
        alert("CADASTRADO COM SUCESSO")


}


