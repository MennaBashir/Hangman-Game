let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let arr = Array.from(letters);
let ele = document.querySelector(".letters");
arr.forEach((letter) => {
    let el1 = document.createElement("span");
    let el2 = document.createTextNode(letter);
    el1.appendChild(el2);
    el1.classList.add("letter-box");
    ele.appendChild(el1);

});
//category
let word = {
    progrmming: ['javascript', 'php', 'go', 'python', 'mysql'],
    movies: ['Black Adam', 'Fast X', 'The Meg', 'The Batman'],
    people: ['Alpert Eintstein', 'Cleopatre', 'Ghandi', 'Alexander'],
    countries: ['Syria', 'Palestine', 'Egypt', 'Qatar', 'Bahrain']
}
//Get random property

let x = Object.keys(word);
let Rnum = Math.floor(Math.random() * x.length);//random number
let prop = x[Rnum];  //get random prop "key"
let values = word[prop];
let RnumValu = Math.floor(Math.random() * values.length);//randm number for value
let valu = values[RnumValu];//valu =>store random value
//Set Category Info
document.querySelector(".game-info .category span").innerHTML = prop;
//Guess Element
let gus = document.querySelector(".letters-guess");
let arrV = Array.from(valu);
let Nospace = arrV.map((el) => {
    return el === " " ? "" : el;

}).join("").toLowerCase();

let Newarr = Array.from(Nospace);
Newarr.forEach((s) => {
    let el1 = document.createElement("span");
    gus.appendChild(el1);

});
//Handle on click
let counter = 0,count=0;
let allLetter = document.querySelectorAll(".letters-guess span ");
document.addEventListener("click", (el) => {
    let cond=false;
    if (el.target.className === "letter-box") {
        counter++;
        el.target.classList.add("clicked");

        let y = el.target.innerHTML.toLowerCase();//letter convert to lower case
        Newarr.forEach((ele1, index1) => {
            if (y === ele1) {
                cond=true;
                document.getElementById("b").play();
                allLetter.forEach((ele2, index2) => {
                    if (index1 === index2) {
                        ele2.innerHTML = y;
                        count++;
                    }
                });
            }
        });
        if(!cond) {
            document.getElementById("c").play();
        }
    }
    if (counter > 8) {
        T=false;
        let ep = document.querySelector(".letters");
        ep.classList.add("Block");
        ep.style.cssText="display:none"
        let imag=document.querySelector("img");
        imag.style.cssText="display:block;width:400px";
        let s=document.querySelector(".letters-guess")
        s.style.cssText="display:none";

         document.getElementById("d").play();
         let e=document.querySelector(".finished");
         e.innerHTML=`Word is => ${valu}`;
         e.style.cssText="display:block";
    }
   if(counter<=8 && count===valu.length){
     document.getElementById("a").play();
     let q=document.querySelector(".succes");
     q.innerHTML=`Excellent`;
     q.style.cssText="display:block";

   }
  
});
