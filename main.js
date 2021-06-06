window.addEventListener('load', init);

let apiUrl = 'index.php';
let apiUrl2 = 'https://source.unsplash.com/1600x900/?';

function init() {
    getFood();
}

function getFood() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(Succes)
        .catch(Error);
}

function Succes(data) {
    let section = document.getElementById('list');

    for (let food of data) {
        let $food = document.createElement('div');
        $food.classList.add('food');
        $food.innerHTML = '<h1>' + food.name + '<h1>';
        section.appendChild($food);

        let div = document.createElement('div');
        $food.appendChild(div);
        let img = document.createElement('img');
        let url = apiUrl2 + food.name;
        img.src = url;
        div.appendChild(img);

        let $favourite = document.createElement('div');
        $favourite.classList.add('favourite');
        $food.appendChild($favourite);

        let $detail = document.createElement('div');
        $detail.classList.add('recipe');
        $detail.addEventListener('click', addItem);
        $detail.id = food.id;
        $detail.innerHTML = "Show Recipe";
        $food.appendChild($detail);
    }

    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    favourite();
}

function Error(data) {
    console.log(data)

}

function addItem(e) {
    let geheel = document.getElementById('details');

    let tijdelijk = document.getElementById('java');

    if (tijdelijk){
        geheel.removeChild(tijdelijk);
    }

    let section = document.createElement('section');
    section.id = 'java';
    geheel.appendChild(section);

    let clickedItem = e.target.id;
    let url = apiUrl +'?id=' + clickedItem;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(Succes2)
        .catch(Error);
}

function Succes2(data){
    let section = document.getElementById('java')
        section.innerHTML = '<h1>Recipe</h1>' + data.recipe + '<h1>Tags</h1>' + data.tags;
}

function favourite() {
    let clickedItem = document.getElementsByClassName('favourite');
    let food = document.getElementsByClassName('food');

    for (let i = 0; i < food.length; i++) {

        let border = food.item(i);
        let click = clickedItem.item(i);

        if (localStorage.getItem(i) !== null) {
            let border2 = food.item(i);
            border2.classList.add('yellow');
        }

        click.addEventListener('click', function (){
            border.classList.toggle('yellow');
            if (border.classList.contains('yellow')){
                localStorage.setItem(i, i);
                click.innerHTML = "Delete Favourite";
            }else{
                localStorage.removeItem(i);
                click.innerHTML = "Favourite";
            }
        })

        if (border.classList.contains('yellow')){
            click.innerHTML = "Delete Favourite"
        }else{
            click.innerHTML = "Favourite"
        }
    }
}



