function randomInteger(min, max) {  //функция рандома между min и max числами
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


function CreateTable(str, stb) {     //функция создания таблицы 
    let table = document.createElement("table")
    for (let i = 0; i <= str; i++) {
        let stroka = document.createElement("tr")
        for (let j = 0; j <= stb; j++) {
            let stolbets = document.createElement("td")
            stroka.appendChild(stolbets)

            //Добавление содержимого
            let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            if (j == 0 && i == 0) {  //условие нулевой строки и столбца
                continue
            }
            else if (j == 0 && i !== 0) { //условие нулевого столбца(добавляем цифры)
                let tsifra = document.createElement("p")
                tsifra.innerHTML = i
                stolbets.appendChild(tsifra)
            }
            else if (i == 0 && j !== 0) { //условие нулевой строки (добавляем буквы)
                let bukva = document.createElement("p")
                bukva.innerHTML = arr_EN[j - 1]
                stolbets.appendChild(bukva)
            }
            else {                        //создание поля textarea
                let forma = document.createElement("form")
                stolbets.appendChild(forma)
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
            table.appendChild(stroka)
        }
        document.querySelector(".container").appendChild(table)
    }
}

function CreateBlocks() {   //функция создания блока с настройками таблицы
    let functions = document.createElement("div")
    functions.classList.add("functions")
    document.querySelector(".container").appendChild(functions)

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
        let randi = randomInteger(1, document.getElementsByTagName("tr").length - 1)
        let randj = randomInteger(1, document.getElementsByTagName("tr")[0].getElementsByTagName("td").length - 1)
        let rand = document.getElementsByTagName("tr")[randi].childNodes[randj]
        rand.style.backgroundColor = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.color = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.fontSize = randomInteger(15, 25) + "pt"
        if (Math.random() > 0.5) {
            rand.innerHTML = ""
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



let mas = []                                                 //вытаскиваю переданные параметры и добавляю их в массив
let raw = document.location.search.substring(1).split("&")
for (let i = 0; i < raw.length; i++) {
    let value = raw[i].split("=")[1]
    mas.push(value)
}

CreateBlocks()                      //создаю блок настроек
CreateTable(mas[0], mas[1])          //создаю таблицу
