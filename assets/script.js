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