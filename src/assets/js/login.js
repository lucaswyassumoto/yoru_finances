const btnlogin = document.getElementById('btnlogin');
const btncadastro = document.getElementById('btncadastro');

const formlogin = document.getElementById('formlogin');
const formcadastro = document.getElementById('formcadastro');

btnlogin.addEventListener("click", function() {
    formlogin.style.display = "flex";
    formcadastro.style.display = "none";

    btnlogin.classList.add("active");
    btncadastro.classList.remove("active");
});

btncadastro.addEventListener("click", function() {
    formlogin.style.display = "none";
    formcadastro.style.display = "flex";

    btnlogin.classList.remove("active");
    btncadastro.classList.add("active");
});


const voltar = document.getElementById("voltar");

voltar.addEventListener("click", function() {
    window.location.href = "../../public/index.html";
});