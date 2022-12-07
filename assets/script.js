function findAct(){
var dogPics = "https://dog.ceo/api/breeds/image/random"
fetch (dogPics)
    .then(function (response){
        return response.json();
    })
        .then( function (data) {
            var img = document.getElementById('pic');
            pic.src = data.message;
        });

var bored = "https://www.boredapi.com/api/activity"
fetch(bored)
    .then (function (response){
        return response.json();
    })
        .then( function (data){
            var activity = data.activity;
            var span = document.querySelector('span');
            span.textContent = activity + " ";
        });
    }

var gnBtn = document.getElementById('generate');

gnBtn.addEventListener('click', findAct);

function saveAct(){
    var svAct = document.getElementById('activity');
    localStorage.setItem('activity', svAct.textContent);
}

var svBtn = document.getElementById('save');
svBtn.addEventListener('click', saveAct);
var saves = document.getElementById('savedActs');
function renderSaves() {
    var saves = document.getElementById('savedActs');
    var li = document.createElement('li');
    li.textContent = localStorage.getItem(activity);
    saves.appendChild(li);
}

var sHtml = document.getElementById('saved');
    sHtml.addEventListener('click', renderSaves);