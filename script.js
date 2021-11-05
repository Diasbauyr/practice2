const tanyaPhoto= document.querySelector(".tanyaPhoto");
const johnPhoto= document.querySelector(".johnPhoto");
const tanyaAbout= document.querySelector(".tanyaAbout");
const johnAbout= document.querySelector(".johnAbout");
const tanyaDenotation= document.querySelector(".tanyaDenotation");
const johnDenotation= document.querySelector(".johnDenotation");

const prev= document.querySelector(".prev");
const next= document.querySelector(".next");


prev.addEventListener('click',(e)=>{
         tanyaPhoto.style.left="-108.5%";
         johnPhoto.style.left="-108.5%";

         tanyaAbout.style.left="-108.5%";
         tanyaAbout.style.left="-108.5%";

         tanyaDenotation.style.left="-108.5%";
         johnDenotation.style.left="-108.5%";
        console.log("clicked");
});

next.addEventListener('click',(e)=>{
    tanyaPhoto.style.left="0%";
    johnPhoto.style.left="0%";

    tanyaAbout.style.left="0%";
    tanyaAbout.style.left="0%";

    tanyaDenotation.style.left="0%";
    johnDenotation.style.left="0%";
});