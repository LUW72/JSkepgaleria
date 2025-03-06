


export function kepMegjelenit(lista, tartalomElem) 
{
    tartalomElem.innerHTML += ` <div class="kep">
                                    <img src="${lista.kep}" alt="${lista.cim}">
                                </div>`;
}



export function nagykepMegjelenit(keplista, index,tartalomElem)
{
    kepMegjelenit(keplista[index], tartalomElem);
    
}

export function kiskepMegjelenit(keplista, indexKezdet, tartalomElem)
{
    for (let index = indexKezdet; index < keplista.length; index++) 
    {
        kepMegjelenit(keplista[index], tartalomElem);
    }
}


