const URL = 'https://coding-week-2024-api.onrender.com/api/data';
getDataLeft();
getDataRight()
async function getDataLeft(){
    let response = await fetch(URL);
    let data = await response.json();
    let left = document.querySelector(".left");
    for(let i=0;i<10;i++){
        if(data[i].type != "historical" && data[i].type != "cultural"){
            let div = document.createElement('div');
            div.classList.add('item1');
            let image = document.createElement('img');
            image.src = `${data[i].image}`;
            let parah = document.createElement('p');
            parah.innerHTML = `${data[i].headline}<br>Author: ${data[i].author}<br>Date: ${data[i].date}<br>Type: ${data[i].type}<br><br>${data[i].content}`;
            div.appendChild(image);
            div.appendChild(parah);
            left.appendChild(div);
        }
    }
}
async function getDataRight(){
    let response = await fetch(URL);
    let data = await response.json();
    let right = document.querySelector('.right');
    for(let i=0;i<10;i++){
        let div = document.createElement('div');
        div.classList.add('item2');
        let image = document.createElement('img');
        image.src = `${data[i].image}`;
        let parah = document.createElement('p');
        parah.innerHTML = `${data[i].date}<br>${data[i].headline}`;
        div.appendChild(image);
        div.appendChild(parah);
        right.appendChild(div);
    }
}
let menu = document.querySelector(".navbar i");
let body = document.querySelector('body');
let bool = 0;

let div = document.createElement('div');
div.classList.add('menuTab');
let parah = document.createElement('p');
parah.innerHTML = `<br><br>Home<br><hr><br>News<br><br><hr><br>World<br><br><hr><br>Business<br><br><hr><br>Politics<br><br><hr><br>Entertainment<br>`;
div.appendChild(parah);
body.appendChild(div);
menu.addEventListener("click",()=>{
    div.style.display = "inline-block";
    if(bool===0){
        div.classList.remove('moveTabGo');
        div.classList.add('menuTabCome');
        bool = 1;
    }
    else{
        div.classList.remove('moveTabCome');
        div.classList.add('menuTabGo');
        bool = 0;
    }
})