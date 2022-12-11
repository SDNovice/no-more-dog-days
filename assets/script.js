var localStorageKey = "ActText";
// This event listner helps logs the page info to make sure 
// that both pages are fully loaded.
document.addEventListener('DOMContentLoaded', function (){
	var pageId = document.getElementsByTagName('body')[0].id;
	console.log('pageID = ', pageId);
	if (pageId === 'index') {
		console.log('page 1 loaded');
		page1();
	}
	if (pageId === 'page2') {
		console.log('page2 loaded');
		page2();
	}
});
// This function will be fetching information from both our
// server side APIs and targets what we need to pull.
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
// We will have a random dog photo using part of the function 
// above, if we call it, it will also load an activity which
// we want to happen after an event listner.
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
// This event listener will trigger the findAct function so
// that way we can pull photos and activities from our APIs
// on the same click.
var gnBtn = document.getElementById('generate');
gnBtn.addEventListener('click', findAct);

//page 1
// This will save the activities that the user wants to keep
// and sorts them into an array. After that they can then move
// to our second page, and look at their saved activities.
function page1() {
	var ActTextEl = document.getElementById('activity');
	var btn1El = document.getElementById('save');
	var page2BtnEl = document.getElementById('saved');
	btn1El.addEventListener('click', function () {
		var ActText = ActTextEl.textContent;
		var activities = JSON.parse(localStorage.getItem(localStorageKey));
		if(activities){
			activities.push(ActText);
			localStorage.setItem(localStorageKey, JSON.stringify(activities));
		}else{
			localStorage.setItem(localStorageKey, JSON.stringify([ActText]));
		}
	});
	page2BtnEl.addEventListener('click', function (){
		window.location.href = "saved.html";
	});
}

//page 2
// This will display any previous activities and allow the user
// to link back to the homepage.
function page2() {
	var ActEl = document.getElementById('savedActs');
	var btn2El = document.getElementById('displaySv');
	console.log('line 37 is about to run');
	btn2El.addEventListener('click', function () {
		console.log(localStorageKey);
		var activities = JSON.parse(localStorage.getItem(localStorageKey));
		console.log(activities);
		activities.forEach(activity => {
			var listItem = document.createElement('li');
			listItem.textContent = activity;
			ActEl.appendChild(listItem);
		});
		
	});
    var inBtn = document.getElementById('gen');
    inBtn.addEventListener('click', function (){
        window.location.href = "index.html";
    });
}