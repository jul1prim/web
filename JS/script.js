//1.2
const text = "Hello World!!!"
document.write(text, "<br>", text.split(" ").length, "<br>", text.replace(/[ !]/g, "").length, "<br>")

//1.5
const selfAddress = document.location.href
const selfProtocol = document.location.protocol
const selfFullName = document.location.pathname.split("/").pop()
const selfName = selfFullName.split(".")[0]
const selfType = selfFullName.split(".")[1]

document.write(selfAddress, "<br> Protocol: ", selfProtocol, "<br> FileName: ",
  selfName, "<br> Расширение: ", selfType, "<br>")

//1.6
document.write("Параметры запроса: <br>")
let queriesObject = {}
let raw = document.location.search.substring(1).split("&")
for (let i = 0; i < raw.length; i++) {
  let key = raw[i].split("=")[0]
  let value = raw[i].split("=")[1]
  queriesObject.key = value
  document.write(key, ": ", value, "<br>")
}

//2.1
let sites = ["google.com", "vk.com", "ya.ru", "ok.ru"];
for (let i = 0; i < 4; i++) {
  let anchor = document.createElement("a")
  anchor.href = "https://" + sites[i]
  anchor.innerText = "Ссылка " + (i + 1)
  document.body.appendChild(anchor)
}

//2.2
for (let i = 0; i < 2; i++) {
  let ref = document.createElement("link")
  ref.rel = "stylesheet"
  ref.href = "style" + i + ".css"
  document.head.appendChild(ref)
}
document.body.appendChild(document.createElement("br"))
//2.3
let imagesources = [
  "https://images.unsplash.com/photo-1583221742001-9ad88bf233ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1583167611259-ccfff445b4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1562887009-92ca32b341c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
]
for (let i = 0; i < 3; i++) {
  let img = document.createElement("img")
  img.id = "id" + i
  img.src = imagesources[i]
  document.body.appendChild(img)
}

document.body.appendChild(document.createElement("br"))
//2.4-5
document.write("Кол-во элементов a: ", document.getElementsByTagName("a").length, "<br>")
document.write("Кол-во элементов link: ", document.getElementsByTagName("link").length, "<br>")
//2.6
document.write("innerHtml: ", document.getElementsByTagName("a")[0].innerHTML, "<br>")

//2.7
document.write("Кол-во картинок: ", document.getElementsByTagName("img").length, "<br>")

//2.8
let widthText = document.createElement("p");
document.body.appendChild(widthText);
setTimeout(function () {
  widthText.innerText = "Ширина первой картинки: " + document.getElementsByTagName("img")[0].width
}, 100)

//2.9
let MostWidthText = document.createElement("p");
document.body.appendChild(MostWidthText);
let imgs = document.getElementsByTagName("img");
setTimeout(function () {
  let maxwidth = 0;
  for (let i = 0; i < imgs.length; i++) {
    if (maxwidth < imgs[i].width) {
      maxwidth = imgs[i].width;
    }
  }
  MostWidthText.innerText = "Ширина самой широкой картинки: " + maxwidth;
}, 100)

//2.10
let SumHeightText = document.createElement("p");
imgs = document.getElementsByTagName("img");
document.body.appendChild(SumHeightText);
setTimeout(function () {
  let sumheight = 0;
  for (let i = 0; i < imgs.length; i++) {
    sumheight += imgs[i].height;
  }
  SumHeightText.innerText = "Сумма высот картинок: " + sumheight;
}, 100)

//3
//3.1
let forms = []
for (let i = 0; i < 10; i++) {
  let form = document.createElement("form")
  form.id = "form" + i
  form.name = "form" + i
  forms.push(form);
  document.body.appendChild(form)
}

//3.2
let chforms = []
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    chforms.push(forms[i].name)
  };
}
document.write(chforms.join(", "))

//3.3
let types = ["checkbox", "radio", "text", "password", "file"]
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 3; j++) {
    let field = document.createElement("input")
    field.type = types[Math.round(Math.random() * 4)]
    forms[i].appendChild(field)
  }
}

//3.4
for (let i = 0; i < 10; i++) {
  let but = document.createElement("button")
  but.classList.add("class1")
  but.onclick = function () {
    alert(but.innerText);
    return 0;
  }
  but.innerText = "Показать имя формы"
  forms[i].appendChild(but)
}

//3.5
for (let i = 0; i < 10; i++) {
  let but = document.createElement("button")
  but.classList.add("class2")
  but.onclick = function () {
    alert(but.parentNode.id);
    return 0;
  }
  but.innerText = "Принадлежность"
  forms[i].appendChild(but)
}

//3.6
for (let i = 0; i < 10; i++) {
  let but = document.createElement("button")
  but.classList.add("class3")
  but.onclick = function () {
    let fields = but.parentNode.getElementsByTagName("input");
    for (let j = 0; j < 3; j++) {
      fields[j].value = "";
      fields[j].checked = false;
    }
    return 0;
  }
  but.innerText = "Сбросить"
  forms[i].appendChild(but)
}

//3.7
for (let i = 0; i < 10; i++) {
  let but = document.createElement("button")
  but.classList.add("class4")
  but.onclick = function () {
    alert(but.parentNode.getElementsByTagName("input").length);
    return 0;
  }
  but.innerText = "Показать количество полей"
  forms[i].appendChild(but)
}