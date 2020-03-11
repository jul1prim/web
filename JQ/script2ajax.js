for (let i=1; i<5; i++){   
    let par=document.createElement("p")
    par.id="id"+i
    par.innerText="параграф "+i
    par.classList.add("paragraph")
    document.body.appendChild(par)
}


let but=document.createElement("button") 
document.body.appendChild(but)
$(but).html("Обновить страницу").click(function(){ 
    $("#id3").load("https://inxaoc.github.io/example/ajax-1.html")
    return false
})


let but1=document.createElement("button") 
document.body.appendChild(but1)
$(but1).html("Доп задание").click(function(){ 
    $.ajax({
        url: "https://inxaoc.github.io/example/ajax.json",
        context: {"username":"jul_prim"}
      }).done(function(data) {
        console.log(data)
        $("#id4").text(data.glossary.title)
      });
})
