const filmovi = [
"Blade Runer",
"Terminator",
"Blade",
"Runer",
"Big bang theory",
"Rocky",
"Rambo",
"Bakersfield",
"Poirot",
"Scherlock Holmes",
"Avatar",
"Matrix",
"Povratak u buducnost",
"Povratak u buducnost II",
"Povratak u buducnost III"
]

let fraza = document.getElementById("fraza");
let prostor = document.getElementById("prostor");
const dugme = document.getElementById("dugme");

function probiranje(){
let noviNiz = [ ];

for (let i = 0; i < filmovi.length; i ++){
  if (filmovi[i].includes(fraza.value)){
    noviNiz.push(filmovi[i]);
    prostor.innerHTML = noviNiz;
  }
}
return noviNiz;
}

//fraza.addEventListener("change", (fraza.value))
dugme.addEventListener("click", probiranje)


//console.log(probiranje(filmovi));

//let noviNiz = [];  i to u funkciju
//let fraza = "Pov";  to ide u funkciju da radi
