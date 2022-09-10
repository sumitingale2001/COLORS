let slideCount = 1;

function moveToslide(slideNumber)
{
    let margin=slideCount*100;
    document.querySelector('.carousel').style.marginLeft=-margin+'%';
    document.querySelector('.carousel').style.transition='0.5s';

    if(slideCount==5)
    {
        slideCount = 1;
        setInterval(function(){
            let margin = slideCount*100
            document.querySelector('.carousel').style.transition='0s';
            document.querySelector('.carousel').style.marginLeft=-margin+'%';
        },500)
    }

    if(slideCount==0)
    {
        slideCount=4;
        setInterval(function(){
            let margin = slideCount*100
            document.querySelector('.carousel').style.marginLeft=-margin+'%';
            document.querySelector('.carousel').style.transition='0s';
        },500)

    }

}

function next()
{
    slideCount++;
    moveToslide(slideCount);
}

function prev()
{
    slideCount--;
    moveToslide(slideCount);

}







// modal

let signup = document.querySelector('.signup');

signup.addEventListener('click',()=>{
    if(!signup.classList.contains('.modal__container')){
        document.querySelector('.modal__container').style.display="block";
    }
})


let close = document.querySelector('.modal__close');
close.addEventListener('click',()=>{
    document.querySelector('.modal__container').style.display="none";
})
