const left=document.querySelector('.left');
const right=document.querySelector('.right');
const slider=document.querySelector('.slider');
const images=document.querySelectorAll('.image');
let SliderNumber=1;

const length=images.length;

const nextslide= ()=>{
    slider.style.transform ='translateX(-$ {SliderNumber*800}px)';
        SliderNumber++;
};

const getfirstslide= ()=>{
    slider.style.transform ='translateX(0px)';
    SliderNumber=1;
};



right.addEventListener('click', ()=>{

    if(SliderNumber <length)
    {
        slider.style.transform ='translateX(-$ {SliderNumber*800}px)';
        SliderNumber++;

        nextslide();
    }
    else{
        getfirstslide();
    }

 
});