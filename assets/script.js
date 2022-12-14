var localStorageKey = "ActText";

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

//page 1
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