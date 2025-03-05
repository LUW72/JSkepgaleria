import { KEPLISTA } from "./adatok.js";
import { nagykepMegjelenit, kiskepMegjelenit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */

const felsoGaleria = document.getElementsByClassName("nagykep");
const alsoGaleria = document.getElementsByClassName("kiskepek");

/* írd bele az összeálíltott html képsorozatot */

nagykepMegjelenit(KEPLISTA, felsoGaleria[0]);
kiskepMegjelenit(KEPLISTA, alsoGaleria[0])

/*2. feladat  A .nagykep divben lévő img elem megfogása */

let nagykep = document.querySelector("nagykep")

/* A .nagykep div megfogása */

const AKTUALISKEP = 0;

/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */



/* eseménykezelő hozzáadása a kisképekhez, ciklussal */




/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */




/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
