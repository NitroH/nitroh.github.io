function ouvrirPage() {
    var a = document.getElementById("search").value;

    if (a === "inventaire"){
        window.open("inventaire.html")
    }

    if (a === "test"){
        window.open("test.html")
    }
    
    else{
        window.open("erreur-404.html")
    }
}

var burger_escape = document.getElementById('burger-menu-echap');
var burger_slide = document.getElementById('burger-menu-slide');
var burger = document.getElementById('cacher');
var header = document.getElementById('header');
document.getElementById('burger-menu-slide').addEventListener("click", () => {
    burger.style.display = "block";
    burger_escape.style.display = "block";
    document.getElementById('burger-menu-slide').style.display = "none";
    document.getElementById('header-square').style.height = "40vh";
    document.getElementById('header-square').style.width = "100vw";
    document.getElementById('header-square').style.background = "#ffffff";
});
document.getElementById('burger-menu-echap').addEventListener("click", () => {
    burger.style.display = "block";
    burger_escape.style.display = "none";
    burger.style.display = "none";
    burger_slide.style.display = "block";
});
