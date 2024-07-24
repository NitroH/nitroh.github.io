let formation = document.querySelector('.nav-journey :nth-child(2)'); // training
let middle = document.querySelector('.nav-journey :nth-child(3)'); // middle school   
let high = document.querySelector('.nav-journey :nth-child(4)'); // high school
let studies = document.querySelector('.nav-journey :nth-child(5)'); // studies
let job = document.querySelector('.nav-journey :nth-child(6)'); // 1st job

let tab = [formation, middle, high, studies, job]

let text = document.querySelector('.txt-journey');
let line = document.querySelector('.line2');
let title = document.querySelector('.title-journey');
let date = document.querySelector('.date-journey');


formation.onclick = function() {
    title.innerHTML = "Entrainement";
    date.innerHTML = "Tout le temps.";
    text.innerHTML = "> Dans mon temps libre, J'essaye de faire des petits projets pour élargir mes connaissances en informatique, et pour prendre de l'avance dans mes futures études.";
    document.querySelector('.line2').style.marginTop = "0px";
    tab.forEach(tabulation => {
        tabulation.style.color = "#7e7e7e";
        formation.style.fontWeight = "400";
    })
    formation.style.fontWeight = "500";
    formation.style.color = "#383838";   
};

middle.onclick = function() {
    title.innerHTML = "Collège";
    date.innerHTML = "Septembre 2020 -";
    text.innerHTML = "> J'ai beaucoup appris et notament HTML, CSS, JavaScript, React, Node JS";
    document.querySelector('.line2').style.marginTop = "70px";
    tab.forEach(tabulation => {
        tabulation.style.color = "#7e7e7e";
        formation.style.fontWeight = "400";
    })
    middle.style.fontWeight = "500";
    middle.style.color = "#383838";
};

high.onclick = function() {
    title.innerHTML = "Lycée";
    date.innerHTML = "Septembre 2023 -";
    text.innerHTML = "> Je suis actuellement au lycée, j'ai fait une pause dans la programmation mais je reste toujours très ambitieux à l'idée d'apprendre de nouvelles choses !<br> <br>> J'ai appris beaucoup de choses autours du réseau, des serveurs, et des raspberry pi. ";
    document.querySelector('.line2').style.marginTop = "140px";
    tab.forEach(tabulation => {
        tabulation.style.color = "#7e7e7e";
        formation.style.fontWeight = "400";
    })
    high.style.fontWeight = "500";
    high.style.color = "#383838";
};

studies.onclick = function() {
    title.innerHTML = "Etudes";
    date.innerHTML = "Un jour...";
    text.innerHTML = "> Je suis au lycée mais je reste très ambitieux, je vais faire de mon mieux pour faire les meilleures études possibles et avoir un métier qui me plait. <br> <br>> Mon rêve serait d'intégrer une classe préparatoire scientifique, qui est, en résumé, l'élite des études francaise.";
    document.querySelector('.line2').style.marginTop = "210px";
    tab.forEach(tabulation => {
        tabulation.style.color = "#7e7e7e";
        formation.style.fontWeight = "400";
    })
    studies.style.fontWeight = "500";
    studies.style.color = "#383838";
};

job.onclick = function() {
    title.innerHTML = "1e métier";
    date.innerHTML = "Un jour...";
    text.innerHTML = "> Comment je l'ai dit précédement, je suis encore au lycée. Cependant, j'ai un objectif tres précsi qui est d'avoir un métier qui me plait, c'est donc pour cette raison que je vais donner le meilleur de moi même pour atteindre cet objectif <br> <br>> Je ne sais pas encore si je souhaite travailler dans l'informatique ou dans la science comme la physique qui m'interesse également.";
    document.querySelector('.line2').style.marginTop = "280px";
    tab.forEach(tabulation => {
        tabulation.style.color = "#7e7e7e";
        formation.style.fontWeight = "400";
    })
    job.style.fontWeight = "500";
    job.style.color = "#383838";
};