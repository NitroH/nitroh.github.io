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
    title.innerHTML = "Training";
    date.innerHTML = "All the time.";
    text.innerHTML = "> In my free time, I try to make little projects in order to improve my computers knowledge, and to get ahead in my future studies.";
    document.querySelector('.line2').style.marginTop = "0px";
    tab.forEach(tabulation => {
        tabulation.style.color = "#7e7e7e";
        formation.style.fontWeight = "400";
    })
    formation.style.fontWeight = "500";
    formation.style.color = "#383838";   
};

middle.onclick = function() {
    title.innerHTML = "Middle School";
    date.innerHTML = "September 2020 -";
    text.innerHTML = "> I learnt a lot about HTML, CSS, JavaScript, React, Node JS";
    document.querySelector('.line2').style.marginTop = "70px";
    tab.forEach(tabulation => {
        tabulation.style.color = "#7e7e7e";
        formation.style.fontWeight = "400";
    })
    middle.style.fontWeight = "500";
    middle.style.color = "#383838";
};

high.onclick = function() {
    title.innerHTML = "High School";
    date.innerHTML = "September 2023 -";
    text.innerHTML = "> Currently in high school, I took a break in programming but I'm still ambtious on learning new things !<br> <br>> I learned a lot about network, server, and raspberry pi. ";
    document.querySelector('.line2').style.marginTop = "140px";
    tab.forEach(tabulation => {
        tabulation.style.color = "#7e7e7e";
        formation.style.fontWeight = "400";
    })
    high.style.fontWeight = "500";
    high.style.color = "#383838";
};

studies.onclick = function() {
    title.innerHTML = "Studies";
    date.innerHTML = "A day...";
    text.innerHTML = "> I'm still in high school but i'm very ambitious, and I'll do my best to do the best studies. <br> <br>> I'd like to integrate a preparatory class, which is, in a nutshell, the ELITE studies you can have in France.";
    document.querySelector('.line2').style.marginTop = "210px";
    tab.forEach(tabulation => {
        tabulation.style.color = "#7e7e7e";
        formation.style.fontWeight = "400";
    })
    studies.style.fontWeight = "500";
    studies.style.color = "#383838";
};

job.onclick = function() {
    title.innerHTML = "1st job";
    date.innerHTML = "A day...";
    text.innerHTML = "> As I wrote before, i'm currently in high school. My dream is to have a job that I love : this is why I'll do my best. <br> <br>> I don't know for the moment if i want to work on computer sciences or in sciences like physics.";
    document.querySelector('.line2').style.marginTop = "280px";
    tab.forEach(tabulation => {
        tabulation.style.color = "#7e7e7e";
        formation.style.fontWeight = "400";
    })
    job.style.fontWeight = "500";
    job.style.color = "#383838";
};