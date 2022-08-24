const formation = document.querySelector('.nav-journey :nth-child(2)');
const middle = document.querySelector('.nav-journey :nth-child(3)');
const college = document.querySelector('.nav-journey :nth-child(4)');
const studies = document.querySelector('.nav-journey :nth-child(5)');
const job = document.querySelector('.nav-journey :nth-child(6)');
const text = document.querySelector('.txt-journey');
const line = document.querySelector('.line2');
const title = document.querySelector('.title-journey');
const date = document.querySelector('.date-journey');


formation.onclick = function() {
    title.innerHTML = "Training";
    date.innerHTML = "All time -";
    text.innerHTML = "> For the moment, I didn't do any professional formations because I'm too young. But, I listen podcast , I read programming book and I also do online lessons.";
    document.querySelector('.line2').style.marginTop = "0px";
    formation.style.fontWeight = "500";
    formation.style.color = "#383838";
};

middle.onclick = function() {
    text.innerHTML = "> Actually in middle school. I learn a lot about HTML, CSS, JavaScript, React, Node JS";
    title.innerHTML = "Starting";
    date.innerHTML = "September 2020 -";
    document.querySelector('.line2').style.marginTop = "70px";
    middle.style.fontWeight = "500";
    middle.style.color = "#383838";
};

college.onclick = function() {
    title.innerHTML = "High School";
    date.innerHTML = "September 2023 -";
    text.innerHTML = "> I'm not in high school yet, but i want to learn a lot about machine learning, python, and upgrade my english level !";
    document.querySelector('.line2').style.marginTop = "140px";
    college.style.fontWeight = "500";
    college.style.color = "#383838";
};

studies.onclick = function() {
    title.innerHTML = "Studies";
    date.innerHTML = "Somewhere in time";
    text.innerHTML = "> As I write this text I'm just in middle school, but I'm very pretentious about my future and I would like to work in our future life with technologies. <br> <br> > I would like to do a <i>PREPA mp2i</i>which is a special class where you work a lot about computer sciences and maths.";
    document.querySelector('.line2').style.marginTop = "210px";
    studies.style.fontWeight = "500";
    studies.style.color = "#383838";
};

job.onclick = function() {
    title.innerHTML = "Studies";
    date.innerHTML = "Somewhere in time";
    text.innerHTML = "> As I write this text I am just in college, but I am very pretentious about my future. <br> <br> > You will understand, my dream is to work at Google, I would very much like to work there because it is the place of future innovations.";
    document.querySelector('.line2').style.marginTop = "280px";
    job.style.fontWeight = "500";
    job.style.color = "#383838";
};