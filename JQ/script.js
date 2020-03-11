for (let i=1; i<5; i++){   //создали параграфы
    let par=document.createElement("p")
    par.innerText="параграф "+[i]
    par.classList.add("paragraph")
    document.body.appendChild(par)
}

for (let i=1; i<4; i++){    //создали ссылки
    let par=document.createElement("a")
    par.innerText="ссылка "+[i]
    par.href="http://www.google.com"
    par.classList.add("link")
    document.body.appendChild(par)
}

$(".paragraph").css({"font-size":"20px", "font-weight": "bold","font-family": "monospace"})  //стиль параграфов
$(".link").css({"padding":"5 px", "text-decoration":"none","font-family": "monospace","display": "block"}) //стиль ссылок


let forma=document.createElement("form")   //создали форму с полями ввода
document.body.appendChild(forma)
mass=["text","reset","checkbox","radio"]
for (let i = 0; i < 4; i++) {
    let newinput = document.createElement("input")
    newinput.type = mass[i]
    forma.appendChild(newinput)
}

$("form input").attr( "disabled", true )  //добавили во все поля ввода атрибут disabled
$("a").prepend("↗").attr("target","_blank") //добавили во все ссылки эмодзи + открытие ссылки с новой вкладки

$("a").attr("href", function(index, value){return value.replace("http", "https")})  //заменили http на https

let but=document.createElement("button")  //создали кнопку
document.body.appendChild(but)
$("button").css({"position":"fixed","top":"0","right":"0"}).html("Отмена").click(function(){  //настраиваем расположение и добавляем функцию при нажатии
    $("a").removeAttr( "target").text(function(index, value){return value.replace("↗", "")})
    return false
})

let table = document.createElement("table")  //создали таблицу
    for (let i = 0; i < 6; i++) {
        let stroka = document.createElement("tr")
        for (let j = 0; j < 2; j++) {
            let stolbets = document.createElement("td")
            stroka.appendChild(stolbets)
        }
        table.appendChild(stroka)
    }
document.body.appendChild(table)

$("tr").css({"border":"1px solid black","width":"100px","height":"50px","text-align":"center"})  //настроили стиль
$("td").css({"border":"1px solid black","width":"100px","height":"50px","text-align":"center"})

$($("td")[0]).text("Текст") //добавили заголовки столбцов
$($("td")[1]).text("Эффект")

let par1=document.createElement("p") //1
par1.innerText="текст 1"
$($("td")[2]).append(par1)

let but1=document.createElement("button") //1 кнопка
but1.innerText="Fade Out"
$(but1).click(function(){
    $(par1).fadeOut(300)
})
$($("td")[3]).append(but1)


let par2=document.createElement("p") //2 
par2.innerText="текст 2"
$($("td")[4]).append(par2)
$(par2).css("display", "none")

let but2=document.createElement("button") //2 кнопка
but2.innerText="Fade In"
$(but2).click(function(){
    $(par2).fadeIn(300)
})
$($("td")[5]).append(but2)


let par3=document.createElement("p") //3 
par3.innerText="текст 3"
$($("td")[6]).append(par3)

let but3=document.createElement("button") //3 кнопка
but3.innerText="Animate"
$(but3).click(function(){
    $(par3).animate({marginLeft: '50px'}, "slow")
})
$($("td")[7]).append(but3)


let par4=document.createElement("p") //4 
par4.innerText="текст 4"
$($("td")[8]).append(par4)

let but4=document.createElement("button") //4 кнопка
but4.innerText="Slide Up"
$(but4).click(function(){
    $(par4).slideUp(300)
})
$($("td")[9]).append(but4)


let par5=document.createElement("p") //5 
par5.innerText="текст 5"
$($("td")[10]).append(par5)

let but5=document.createElement("button") //5 кнопка
but5.innerText="Slide Toggle"
$(but5).click(function(){
    $(par5).slideToggle(300)
})
$($("td")[11]).append(but5)