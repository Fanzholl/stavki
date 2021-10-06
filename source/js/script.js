"user strict";

let chek = document.getElementsByClassName("r");
let slides = document.getElementsByClassName("slide");

chek[0].onclick = () => {
          slides[0].style.transform = "translateX(0%)";
}

chek[1].onclick = () => {
          slides[0].style.transform = "translateX(150%)";
}

chek[2].onclick = () => {
          slides[0].style.transform = "translateX(300%)";
}

chek[3].onclick = () => {
          slides[0].style.transform = "translateX(450%)";
}
