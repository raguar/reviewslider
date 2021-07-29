"use strict"

const review = [

    {
        id: 0,
        name: 'Courtney Cox',
        location: 'New York, USA',
        image: 'img/student.png',
        text: 'ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur? Atque ratione harum incidunt dignissimos iusto. Ut iste accusamus voluptas!'

    },

    {
        id: 1,
        name: 'David Swimmmer',
        location: 'Ranger Hills, Canada',
        image: 'img/doctor.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, at. Hic nobis porro adipisci, enim dolores iure odio, dolor obcaecati labore soluta vel quasi fuga, esse voluptas velit alias at'
    },
    {
        id: 2,
        name: 'Matt le Blanc',
        location: 'Buenas Aires, Argentina',
        image: 'img/medical-assistance.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, at. Hic nobis porro adipisci, enim dolores iure odio, dolor obcaecati labore soluta vel quasi fuge'
    },
    {
        id: 3,
        name: 'Jennifer Anniston',
        location: 'Barcelona, Spain',
        image: 'img/teacher.png',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur? Atque ratione harum incidunt dignissimos iustoconsectetur adipisicing elit. Ea, at'
    },
    {
        id: 4,
        name: 'Lisa Kudrow',
        location: 'Texas, USA',
        image: 'img/avatar.png',
        text: 'Lorem ipsum dolor sit amet,indh jekop and hte ot fo funcsti consectetur adipisicing elit. Ea, at. Hic nobis porro adipisci, enim dolores Lorem ipsum dolor sitlabore.'
    },

]


const img = document.querySelector('.main-img');
const name = document.querySelector('.main-name');
const place = document.querySelector('.main-location');
const text = document.querySelector('.main-text');

const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');

let count = 0;

let counterPlus ;

const move = (count) => {
    counterPlus = review[count];
    img.src = counterPlus.image;
    name.innerHTML = counterPlus.name;
    place.innerHTML = counterPlus.location;
    text.innerHTML = counterPlus.text;
}


rightBtn.addEventListener('click',()=>{
    count++
    if (count > review.length -1 ) {
        count = 0;
    }
    move(count);
    
})

leftBtn.addEventListener('click',()=>{
    count--

    if(count < 0){

        count = review.length - 1;
    
    }

    move(count);
    
})



//  let loader = document.getElementById("preloader");
    
//     window.addEventListener("load", function () {
//         setInterval(() => {
//             loader.style.display = "none"
            
//         }, 2000);    
// })

    