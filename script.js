//Exercise 1

const texte = "Prout";
let currentCharacter = 0;

function NextCharacter() {
  document.write(texte[currentCharacter]);
  currentCharacter++;

  if (currentCharacter >= texte.length) {
    clearInterval(interval);
  }
}
const interval = setInterval(NextCharacter, 1000); 

//Exercise 2

let TimeSec=0;
let TimeMin=1;
let n=1
function getTime(){
    console.log(TimeSec);
    TimeSec++;
    if (TimeSec == n*60){
        document.write(TimeMin + " min have passed");
        n++;
        TimeMin++;
    }
}
setInterval(getTime, 1000)
