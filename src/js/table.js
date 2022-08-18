const formation = document.querySelector('.nav-journey :nth-child(2)');
const middle = document.querySelector('.nav-journey :nth-child(3)');
const college = document.querySelector('.nav-journey :nth-child(4)');
const studies = document.querySelector('.nav-journey :nth-child(5)');
const job = document.querySelector('.nav-journey :nth-child(6)');
const text = document.querySelector('.txt-journey');
const line = document.querySelector('.line2');
const title = document.querySelector('.title-journey');
const date = document.querySelector('.date');


formation.onclick = function() {
    text.innerHTML = "> For the moment, I've didn't do any professional formations because I always find what I need in Internet. But, I listen podcast , I read programming book and I also do online lessons.";
    document.querySelector('.line2').style.marginTop = "0px";
    formation.style.fontWeight = "500";
    formation.style.color = "#383838";
};

middle.onclick = function() {
    text.innerHTML = "> I’ve starting programming when I was in middle school. I’ve learned HTML, CSS, JavaScript, React, PHP, SQL...<br> > When I was little, I was already interested about technologies.I always played video games. But a day, my friend who was in middle school says me what he did in maths lesson, and after that, I started programing.";
    document.querySelector('.line2').style.marginTop = "70px";
    middle.style.fontWeight = "500";
    middle.style.color = "#383838";
};

college.onclick = function() {
    text.innerHTML = "> I'm not in high school yet, but i've some objectives when I will be there <br> > Learn more programming language, upgrade my english, have a big project like create an application...";
    document.querySelector('.line2').style.marginTop = "140px";
    college.style.fontWeight = "500";
    college.style.color = "#383838";
};

studies.onclick = function() {
    text.innerHTML = "> As I write this text I'm just in middle school, but I'm very pretensious about my future. <br> > I would like to work in our future life on this world surrounded by technologies";
    document.querySelector('.line2').style.marginTop = "210px";
    studies.style.fontWeight = "500";
    studies.style.color = "#383838";
};

job.onclick = function() {
    text.innerHTML = "> As I write this text I'm just in middle school, but I'm very pretensious about my future. <br> > As you may have understood, my dream is to work in Google, I really like to work there because it's the place of the future inovations.";
    document.querySelector('.line2').style.marginTop = "280px";
    job.style.fontWeight = "500";
    job.style.color = "#383838";
};