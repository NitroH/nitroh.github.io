function alert_wip() {
    alert("Projet in progress.");
}

function alert_cv() {
    alert("A CV is a résumé of my entire journey.");
}

document.getElementById("fil").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Project in progress.")
    window.open('./assets/old-website/filseliss/', '_blank');
    window.open('https://www.figma.com/file/3cWYQoMjSmzU8sWOtgCrza/Filseliss?node-id=0%3A1', '_blank');
});

function copy() {
    navigator.clipboard.writeText("pro.carton.henri@gmail.com");
    alert("Mail has been copied successfully.")
}