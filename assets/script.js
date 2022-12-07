var dogPics = "https://dog.ceo/api/breeds/image/random"
fetch (dogPics)
    .then(function (response){
        return response.json();
    })
        .then( function (data) {
            console.log(data.message);
            var fig = document.querySelector('figure');
            var img = document.createElement('img');
            img.src = data.message;

            console.log(fig);
            fig.appendChild(img);
        });

var bored = "https://www.boredapi.com/api/activity"
fetch(bored)
    .then (function (response){
        return response.json();
    })
        .then( function (data){
            var activity = data.activity;
            var type = data.type;
            var num = data.participants;

            var span = document.querySelector('span');
            span.textContent = activity + type + num;
        });

var gnBtn = document.getElementById('generate');
gnBtn.addEventListener('click' );