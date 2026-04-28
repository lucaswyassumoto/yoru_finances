document.getElementById("btnmenu").addEventListener("click", function() {
    document.querySelector(".items").classList.toggle("active");
    
    const rotate = document.querySelector(".menu");
    rotate.classList.toggle("active");
});