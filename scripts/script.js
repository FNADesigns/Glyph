var portrait = document.querySelector('portrait');
var leftportrait = document.querySelector('left');
var descript = document.querySelector('description');
var description1 = document.getElementById('D1');
var name1 = document.getElementById('N1');
var portrait1 = document.getElementById('p1');
var portrait2 = document.getElementById('p2');
var portrait3 = document.getElementById('p3');
var character1 = document.getElementById('I1');
var character2 = document.getElementById('I2');
var character3 = document.getElementById('I3');
var border = document.getElementById('I4');
var border2 = document.getElementById('I5');
var border3 = document.getElementById('I6');

portrait1.onclick = function changeState() {
    border.style.opacity = 1;
    border2.style.opacity = 0;
    border3.style.opacity = 0;
    character1.style.opacity = 1;
    character2.style.opacity = 0;
    character3.style.opacity = 0;
    description1.style.opacity= 1;
    name1.style.opacity = 1;
    document.getElementById("N1").innerHTML = "TUTTLE";
    document.getElementById("D1").innerHTML = "Tuttle grew up studying all the ancient glyphs taking their newfound knowledge and bringing it on this new adventure.";

}
portrait2.onclick = function changeState() {
    border.style.opacity = 0;
    border2.style.opacity = 1;
    border3.style.opacity = 0;
    character1.style.opacity = 0;
    character2.style.opacity = 1;
    character3.style.opacity = 0;
    description1.style.opacity= 1;
    name1.style.opacity = 1;
    document.getElementById("N1").innerHTML = "HAX";
    document.getElementById("D1").innerHTML = "Growing up in the hardened marshlands never phased Hax. After a run-in with the law, his life has never been the same.";

}
portrait3.onclick = function changeState() {
    border.style.opacity = 0;
    border2.style.opacity = 0;
    border3.style.opacity = 1;
    character1.style.opacity = 0;
    character2.style.opacity = 0;
    character3.style.opacity = 1;
    description1.style.opacity= 1;
    name1.style.opacity = 1;
    document.getElementById("N1").innerHTML = "CANTU";
    document.getElementById("D1").innerHTML = "Cantu can't can't...wait to finish up his training at the darkest divination school in all of the land.";
}
