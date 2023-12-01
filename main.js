
// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// get array from letters

let lettersArray = Array.from(letters);


// select letter Container

 let letterContainer = document.querySelector(".letters");

//  generate lettres using foreach for looping letter by letter and put in container

lettersArray.forEach((letter)=>{
    //Create span
let span =document.createElement("span");
  // put className for the span
span.className="letter-box";
 // create text node for put in span
 let txtspan = document.createTextNode(letter);
 // append  text Node in the span
   span.appendChild(txtspan);
//  append the span in letterContainer
letterContainer.appendChild(span);
})

//********************************************************** */

// object of words and categories

const words = {
    programing : ["php","javascript","gog","scala","fortran","css","mysql","python"],
    movies : ["the purg","anabelle","onepiece","fast x","the pol"],
    people : ["fares","wahab","anis","zaki","ishak"],
    countreis: ["algeria","maroco","qatar","egypt","New york"],
}
   // get random proprety
const allkeys = Object.keys(words);
 //  get random number depend on keys lenght rendom indes for catergory from keyes of object
let  rendomPropertyNumber = Math.floor(Math.random() * allkeys.length) ;
// category
let randompropName = allkeys[rendomPropertyNumber];
// array have category words
let randomProppValue =  words[randompropName];
//  get random number depend array of category words lenght random index for words
let randomValueNumber = Math.floor(Math.random()*randomProppValue.length)
//  get  word depend index 
let randomPropword = randomProppValue[randomValueNumber];
 // set category info
document.querySelector(".category span").innerHTML = randompropName;

//*************************************************************************** */


// select letters-guess element

let letterGuessContainer = document.querySelector(".letters-guess");
 
// convert  random word  to array
 let letterAndSpace = Array.from(randomPropword);


 // create spans depend on letters
 letterAndSpace.forEach((letr)=>{

    // create empty span
    let emptySpan = document.createElement("span");
    if(letr=== " "){
        emptySpan.className = "with-space"
    }

    // create txtx for span
   // let txtxspanlet = document.createTextNode(letr);
    // apend text to empty sapn
   // emptySpan.appendChild(txtxspanlet);

    //apende spans to lettre guess container
    letterGuessContainer.appendChild(emptySpan);

 })

  //set  wrongattemps
  let wrongattemps = 0;
  let theDraw = document.querySelector(".hangman-draw")
  

 //handle  click on lettre
 document.addEventListener("click",(e)=>{
    
   //set status
   let thestatus = false;

   // condition  for verefication
      
if( e.target.className === "letter-box"){
  
  e.target.classList.add("clicked");

  let mots = Array.from(randomPropword);
    let allspans = document.querySelectorAll(".letters-guess span ")
    
   mots.forEach((lettr,index)=>{

    if( lettr===e.target.innerHTML){
        
    }
    allspans.forEach((spann,ind)=>{

  if(ind === index && lettr.toLowerCase()===e.target.innerHTML.toLowerCase() ){
thestatus = true;
          spann.innerHTML = e.target.innerHTML.toLowerCase();
        }

    })

   })

    // out side the loop
    if(thestatus !== true){

      wrongattemps++;

      theDraw.classList.add(`wrong-${wrongattemps}`);
    }
   
    if(wrongattemps == 8){
      letterContainer.classList.add('finished');
      endGame();
    }

}
 })

  function endGame(){
  let div = document.createElement("div")
  let divtxtx = document.createTextNode(`Game Over,The Word Is ${randomPropword}`);
  div.appendChild(divtxtx);
  div.className="pop-up";
  let buton = document.createElement("button")
  let tt = document.createTextNode('replay');
  buton.appendChild(tt);
  buton.className ="button";
  div.appendChild(buton);
  document.body.appendChild(div);
  setTimeout(()=>{
    location.reload();
    // location.href ="http://127.0.0.1:5500/index.html"
  },3000)
 }

