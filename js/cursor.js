let innercursor=document.querySelector(".inner-cursor");
let outercursor=document.querySelector(".outer-cursor");

jQuery(document).ready(function($) {
    {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
        $('.inner-coursor').remove();
        $('.outer-cursor').remove();
    }
    }
    });
document.addEventListener('mousemove',moveCursor);

function moveCursor(e){
    let  x=e.clientX;
    let y=e.clientY;
    innercursor.style.left=`${x}px`;
    innercursor.style.top=`${y}px`;
    outercursor.style.left=`${x}px`;
    outercursor.style.top=`${y}px`;
}

let links=Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
    link.addEventListener("mouseover",()=>{
        innercursor.classList.add("grow");
    });
    
        link.addEventListener("mouseleave",()=>{
            innercursor.classList.remove("grow");
        });
    
});

