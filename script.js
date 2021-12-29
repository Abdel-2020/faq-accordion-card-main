

const link = document.getElementsByClassName("nav-link")[0];

link.addEventListener("click", () => {
    alert("clicked");
    let navText = document.getElementsByClassName("nav-text")[0];
    navText.style.display = "block";


}) 