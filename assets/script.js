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