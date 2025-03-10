let shareIcon=document.querySelector(".icon");
let sharePanel=document.querySelector(".secondFooter");
let footer=document.querySelector("footer");
let lastIcon=document.querySelector(".lasticon");

shareIcon.addEventListener("click",displayFooter);
lastIcon.addEventListener("click",displayLight);

function displayFooter(){
    sharePanel.style.display="block";
    footer.style.display="none";
    
}

function displayLight(){
    sharePanel.style.display="none";
    footer.style.display="flex";
    
}