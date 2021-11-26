// ----array----

const imgArray = [
    '../img/01.jpg',
    '../img/02.jpg',
    '../img/03.jpg',
    '../img/04.jpg',
    '../img/05.jpg',
];
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// ----colonna di sinistra----



console.log(imgArray)
let items = '';
let city ='';
let descrizione = '';


for(let i = 0; i < imgArray.length &&  i < title.length && i < text.length; i++){
    items += 
    `
    <div class="img-container-main">
    <img class="pictures-main" src="${imgArray[i]}"  "alt="${title[i]}">
    <div class="text">
    <h1 class="city">${title[i]}</h1>
    <p class="description">${text[i]}</p>
    </div>
    </div>
    `
};

const itemsColLeft = document.querySelector('.col-1');
itemsColLeft.innerHTML = items;

const item = document.getElementsByClassName('img-container-main')

let activeItem = 0;
item[activeItem].classList.add('active')


// ---colonna destra----

for(let i = 0; i < imgArray.length; i++){
    items += `   
    <div class="thumber-nail"><img src="${imgArray[i]}" alt="${title[i]}" class="pictures-thumb">
    </div>`
};

const itemsColRight = document.querySelector('.img-container');
itemsColRight.innerHTML = items;

const containerThumb = document.getElementsByClassName("thumber-nail");
containerThumb[activeItem].classList.add('active-t');



// // ----sezione bottoni----

const prev = document.getElementById('arrow-up');
const next = document.getElementById('arrow-down');



next.addEventListener('click', function(){

if(activeItem < imgArray.length - 1){

    
    item[activeItem].classList.remove('active');
    containerThumb[activeItem].classList.remove('active-t');

    activeItem++;

    item[activeItem].classList.add('active');
    containerThumb[activeItem].classList.add('active-t');
    }else if(activeItem = imgArray.length - 1){
    item[activeItem].classList.remove('active');
    containerThumb[activeItem].classList.remove('active-t');

    activeItem = 0;

    item[activeItem].classList.add('active');
    containerThumb[activeItem].classList.add('active-t'); 
    }



})

prev.addEventListener('click', function(){

    if(activeItem > 0){
    

        item[activeItem].classList.remove('active');
        containerThumb[activeItem].classList.remove('active-t');


        activeItem--;

        item[activeItem].classList.add('active');
        containerThumb[activeItem].classList.add('active-t');

        
    }else if(activeItem == 0){

        item[activeItem].classList.remove('active');
        containerThumb[activeItem].classList.remove('active-t');

        activeItem = imgArray.length -1;

        item[activeItem].classList.add('active');
        containerThumb[activeItem].classList.add('active-t'); 
    }
    
    
})