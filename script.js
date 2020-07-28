let id; //будет храниться цвет
let arrC = document.getElementsByClassName("color"); //массив инпутов
let arrL = document.getElementsByClassName("inp"); // массив лейблов

//Цвет по умолчанию
arrC[0].checked = true;
id = arrL[0].style.backgroundColor;


//Выбираем цвет по нажатию на лейбл

function setColor(i) {
    id = arrL[i].style.backgroundColor;
    return id;

}

function AddElement() {
    let AddText = document.getElementById("TextToAdd").value;

    if (AddText.trim().length === 0) {
        alert("You need to write a text!");
        return;
    }
    //Берем всё что нужно для работы, добавляем туда всё чего не хватает


    let UL = document.getElementById("MyUL");
    let NewText = document.createTextNode(AddText);
    let li = document.createElement("li");
    let inpu = document.createElement("input");
    let div = document.createElement("div");
    div.className = "first";
    let div2 = document.createElement("div");
    div2.className = "second";
    inpu.type = "checkbox";

    //Разукрасим тем цветом который выбрали

    div.style.backgroundColor = id;
    div2.style.backgroundColor = id;

    //Создаем всё что нужно после нажатия со всем что нужно после выбора

    UL.appendChild(li);
    li.appendChild(div).appendChild(inpu);
    li.appendChild(div2).appendChild(NewText);
    document.getElementById("TextToAdd").value = "";

    //Активировать рандом после каждого нажатия

    let rndAr = Math.floor(Math.random() * arrL.length);
    arrC[rndAr].checked = true;
    id = arrL[rndAr].style.backgroundColor;

}

// Зачеркнуть текст по активации чекбокса слева от текста

let list = document.querySelector('.MyUL');
list.addEventListener('click', function (ev) {
	if (ev.path[2]) {
		ev.path[2].className.includes('check') ? ev.path[2].className = '' : ev.path[2].className = 'check';
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
	}
}, false);
