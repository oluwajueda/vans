const boxOne = document.querySelector('.box-one');
const boxTwo = document.querySelector('.box-two');
const boxThree = document.querySelector('.box-three');
const green = document.querySelector('.green');
const thumbs = document.querySelector('.img-thumbnail')

boxTwo.addEventListener('click', function (e){
    green.src= `photos/green.jpg`
    document.body.style.background= `#4E944F`;


})

boxThree.addEventListener('click', function (e){
    green.src= `photos/yellow-vans.jpg`
    document.body.style.background= `#EFD345`


})

boxOne.addEventListener('click', function (e){
    green.src= `photos/vans1.jpg`
     document.body.style.background= 'white'


});

