


export function kepMegjelenit(lista, tartalomElem) 
{
    tartalomElem.innerHTML += ` <div class="kep">
                                    <img src="${lista.kep}" alt="${lista.nev}">
                                </div>`;
}



export function nagykepMegjelenit(keplista, tartalomElem)
{
    kepMegjelenit(keplista[0], tartalomElem);
    
}

export function kiskepMegjelenit(keplista, tartalomElem)
{
    for (let index = 1; index < keplista.length; index++) 
    {
        kepMegjelenit(keplista[index], tartalomElem);
    }
}


