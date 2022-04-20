let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let numWho = Math.floor(Math.random()*4);
let numAction = Math.floor(Math.random()*4);
let numWhat = Math.floor(Math.random()*3);
let numWhen = Math.floor(Math.random()*5);

let msg = (who[numWho]+' '+action[numAction]+' '+what[numWhat]+' '+when[numWhen]);

console.log(msg);













const reload = document.getElementById('reload');

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});

document.getElementById("excuse").innerHTML = msg
