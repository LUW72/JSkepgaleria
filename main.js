import { KEPLISTA } from "./adatok.js";
import { nagykepMegjelenit, kiskepMegjelenit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */

const felsoGaleria = document.getElementsByClassName("nagykep");
const alsoGaleria = document.getElementsByClassName("kiskepek");

/* írd bele az összeálíltott html képsorozatot */

nagykepMegjelenit(KEPLISTA, 0, felsoGaleria[0]);
kiskepMegjelenit(KEPLISTA, 1, alsoGaleria[0])

/*2. feladat  A .nagykep divben lévő img elem megfogása */

let nagykep = document.querySelector(".nagykep img")

/* A .nagykep div megfogása */

let aktualisNagykepIndex = 0;

/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */

let kiskepek = document.querySelectorAll(".kiskepek img")



/* eseménykezelő hozzáadása a kisképekhez, ciklussal */

for (let i = 0; i < kiskepek.length; i++) 
    {
        kiskepek[i].addEventListener("click", csere)
    }

/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell 
cserélni a kiskép src attribútumában megadott elérési útvonalra  */


function csere(event) {
    let kijelolt = event.target; 

    let temp = nagykep.src; 

    nagykep.src = kijelolt.src; 
    kijelolt.src = temp;

    for (let index = 0; index < KEPLISTA.length; index++) 
    {
        if (kiskepek[index] === kijelolt)    
        {
            aktualisNagykepIndex = index
        }
    }


    console.log(`Nagykép (${aktualisNagykepIndex}) lecserélve!`);
}




function teszt(event)
{
    console.log(event.target)
}


/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */

let jobbGomb = document.querySelector(".jobb")
let balGomb = document.querySelector(".bal")


jobbGomb.addEventListener("click", leptetJobbra)
balGomb.addEventListener("click", leptetBalra)


function leptetJobbra()
{
    aktualisNagykepIndex++;

    if (aktualisNagykepIndex >= KEPLISTA.length) 
    {
        aktualisNagykepIndex = 0; 
    }

    nagykep.src = KEPLISTA[aktualisNagykepIndex].kep;

    console.log(`LÉPTET JOBBRA: Nagykép (${aktualisNagykepIndex}) lecserélve!`);

}

function leptetBalra()
{
    aktualisNagykepIndex--;

    if (aktualisNagykepIndex < 1) 
    {
        aktualisNagykepIndex = KEPLISTA.length -1; 
    }

    nagykep.src = KEPLISTA[aktualisNagykepIndex].kep;

    console.log(`LÉPTET BALRA: Nagykép (${aktualisNagykepIndex}) lecserélve!`);

}