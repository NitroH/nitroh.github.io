function alert_wip() {
    alert("Projet en cours.");
}

function alert_cv() {
    alert("Un CV est un résumé de mon parcours.");
}

document.getElementById("fil").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Projet en cours.")
    window.open('./assets/old-website/filseliss/', '_blank');
    window.open('https://www.figma.com/file/3cWYQoMjSmzU8sWOtgCrza/Filseliss?node-id=0%3A1', '_blank');
});

function copy() {
    navigator.clipboard.writeText("pro.carton.henri@gmail.com");
    alert("Le mail a été copié !")
}