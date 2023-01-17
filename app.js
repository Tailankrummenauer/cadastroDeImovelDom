class App{
    //metodo adicionar imovel
    addProperty(){
        event.preventDefault()
        var kind = document.querySelector("select[name='kind']").value
        var area = document.querySelector("input[name='area']").value
        var rented = document.querySelector("input[name='rented']").checked
        var property = new Property(kind, area, rented)
        this.addOnProperties(property)
        this.cleanForm()
    }
    
    addOnProperties(property){
        var novaLinha = document.createElement("tr")
        var novaColuna = document.createElement("td")
        var novaColuna1 = document.createElement("td")
        var novaColuna2 = document.createElement("td")
        novaColuna.innerText = "Tipo: " + property.kind 
        novaColuna1.innerText = "/  " + "Area: " + property.area + "m²"
        if(property.rented){
            var rentedMark = this.createdRentedMark()
            novaColuna2.appendChild(rentedMark)
        }

        novaLinha.appendChild(novaColuna)
        novaLinha.appendChild(novaColuna1)
        novaLinha.appendChild(novaColuna2)
        var buttonRemove = this.removeButton()
        novaLinha.appendChild(buttonRemove)

        document.getElementById("properties").appendChild(novaLinha)
       
    }

    createdRentedMark(){
        var rentedMark = document.createElement("span")
        rentedMark.style.color= "white"
        rentedMark.style.backgroundColor = "red"
        rentedMark.innerText =  "ALUGADO"
        return rentedMark
    }

    removeButton(){
    var removeButton = document.createElement("button")
    removeButton.setAttribute("onclick", "app.remove()")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    return removeButton
    }

    cleanForm(){
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='rented']").checked = false
    }

    remove(){
        var trToRemove = event.target.parentNode
        document.getElementById("properties").removeChild(trToRemove)
    }



}