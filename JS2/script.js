function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function CreateTable(str, stb) {    //функция создания таблицы 
    let table = document.createElement("table")
    for (let i = 0; i < str; i++) {
        let stroka = document.createElement("tr")
        for (let j = 0; j < stb; j++) {
            let stolbets = document.createElement("td")
            stroka.appendChild(stolbets)
            let forma = document.createElement("form")
            stolbets.appendChild(forma)
            let text = document.createElement("textarea")     //3
            text.rows = 5
            text.cols = 10
            forma.appendChild(text)
            forma.appendChild(document.createElement("br"))
            let soxr = document.createElement("input")
            soxr.type = "submit"
            soxr.value = "Сохранить"
            forma.appendChild(soxr)
            forma.onsubmit = function (e) {
                e.target.parentNode.innerText = e.target.elements[0].value
                return false
            }
        }
        table.appendChild(stroka)
    }
    document.body.appendChild(table)
}

function CreateBlocks() {   //функция создания блока с настройками таблицы
    let functions = document.createElement("div")
    functions.classList.add("functions")
    functions.classList.add("hidden")  //скрыт по умолчанию
    div0.appendChild(functions)

    let div1 = document.createElement("div") //первая кнопка
    functions.appendChild(div1)
    let p1 = document.createElement("p")
    p1.innerHTML = "Изменить границы таблицы"
    div1.appendChild(p1)

    let shirina = document.createElement("input")
    shirina.type = "text"
    shirina.maxLength = 3
    shirina.oninput = function () { but1.innerText = "Применить " + shirina.value + " px" + " и рамка " + variant.value }
    div1.appendChild(shirina)

    const border = ["none", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]
    let variant = document.createElement("select")
    div1.appendChild(variant)
    for (let i = 0; i < border.length; i++) {
        let opt = document.createElement("option")
        opt.innerText = border[i]
        variant.appendChild(opt)
        variant.onchange = function () { but1.innerText = "Применить " + shirina.value + " px" + " и рамка " + variant.value }
    }

    let but1 = document.createElement("button")
    but1.innerText = "Применить"
    but1.onclick = function () {
        let text = but1.parentNode.querySelector("input").value
        let borderStyle = but1.parentNode.querySelector("select").value
        document.querySelector("table").style.borderStyle = borderStyle
        document.querySelector("table").style.width = text + "px"
    }
    div1.appendChild(but1)


    let div2 = document.createElement("div") //вторая кнопка
    functions.appendChild(div2)
    let p2 = document.createElement("p")
    p2.innerText = "Добавить заголовок"
    div2.appendChild(p2)

    let zag = document.createElement("input")
    zag.type = "text"
    div2.appendChild(zag)

    let but2 = document.createElement("button")
    but2.innerText = "Добавить"
    but2.onclick = function () { h.innerText = zag.value }
    div2.appendChild(but2)


    let div3 = document.createElement("div") //третья
    functions.appendChild(div3)
    let p3 = document.createElement("p")
    p3.innerText = "Удалить строку"
    div3.appendChild(p3)

    let str = document.createElement("input")
    str.type = "text"
    div3.appendChild(str)

    let but3 = document.createElement("button")
    but3.innerText = "Удалить"
    but3.onclick = function () {
        if (str.value > 0 && str.value - 1 < document.getElementsByTagName("tr").length) {
            document.getElementsByTagName("tr")[str.value - 1].remove()
        } else { alert("Значение некорректно") }
    }
    div3.appendChild(but3)


    let div4 = document.createElement("div") //четвертая
    functions.appendChild(div4)
    let p4 = document.createElement("p")
    p4.innerText = "Случайный выбор"
    div4.appendChild(p4)

    let but4 = document.createElement("button")
    but4.innerText = "Magic"
    but4.onclick = function () {
        let randi = randomInteger(0, document.getElementsByTagName("tr").length - 1)
        let randj = randomInteger(0, document.getElementsByTagName("tr")[0].getElementsByTagName("td").length - 1)
        let rand = document.getElementsByTagName("tr")[randi].childNodes[randj]
        rand.style.backgroundColor = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.color = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.fontSize = randomInteger(15, 25) + "pt"
        if (Math.random() > 0.5) {
            rand.innerHTML=""
            let forma = document.createElement("form")
            rand.appendChild(forma)
            let text = document.createElement("textarea")     
            text.rows = 5
            text.cols = 10
            forma.appendChild(text)
            forma.appendChild(document.createElement("br"))
            let soxr = document.createElement("input")
            soxr.type = "submit"
            soxr.value = "Сохранить"
            forma.appendChild(soxr)
            forma.onsubmit = function (e) {
                e.target.parentNode.innerText = e.target.elements[0].value
                return false
            }
        }
    }
    div4.appendChild(but4)

    let div5 = document.createElement("div") //пятая
    functions.appendChild(div5)
    let p5 = document.createElement("p")
    p5.innerText = "Удалить таблицу"
    div5.appendChild(p5)
    let but5 = document.createElement("button")
    but5.innerText = "Удалить"
    but5.onclick = function () {
        document.getElementsByTagName("table")[0].remove()
        forma.classList.remove("hidden")
        let inputs = functions.getElementsByTagName("input")
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ""
        };
        but1.innerText = "Применить"
        h.innerText = ""
        functions.classList.add("hidden")
    }
    div5.appendChild(but5)

    return false
}



let div0 = document.createElement("div")   //1: создание формы
document.body.appendChild(div0)

let h = document.createElement("h2") //пустой тег для будущего заголовка
document.body.appendChild(h)

let forma = document.createElement("form")
forma.classList.add("add")
div0.appendChild(forma)
for (let i = 0; i < 2; i++) {
    let par = document.createElement("input")
    par.type = "number"
    forma.appendChild(par)
}
let t = document.createElement("p")
    t.innerText = "Введите кол-во строк и столбцов"
    forma.prepend(t)

CreateBlocks()           //создадим скрытый блок для параметров таблицы
let soxr = document.createElement("input")
soxr.type = "submit"
soxr.value = "Создать"
forma.appendChild(soxr)
forma.onsubmit = function (e) {
   CreateTable(e.target.elements[0].value, e.target.elements[1].value)
    forma.classList.add("hidden")  //присваиваем форме класс, в css делаем элементы этого класса невидимыми 
    forma.reset()
    document.getElementsByClassName("functions")[0].classList.remove("hidden") //делаем видимым 
    return false
}
