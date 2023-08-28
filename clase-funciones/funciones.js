// 

let arboles = ["Nandubay",  "Palma pindó",  "Paraíso",  "Peral",  "Peralillo",  "Piquillín",  "Radales",  "Sauce criollo",  "Sauce de hoja fina",  "Sauzalito",  "Tacuara",  "Tilo",  "Timbó colorado",  "Tipa",  "Tusca",  "Umbú",  "Viraró",  "Viraró de monte",  "Zarza",  "Álamo criollo",  "Balsa",  "Bambú",  "Boj",  "Caranday",  "Cauquén",  "Cebil",  "Chañar",  "Chicalá",  "Cola de zorro",  "Corona de cristo",  "Curupí",  "Duraznillo",  "Espinillo",  "Flor de ceibo",  "Fumo bravo",  "Garabato",  "Garabato blanco",  "Gomero",  "Goyavier",  "Hormiguillo",  "Inga",  "Jume",  "Lantana",  "Lapachillo",  "Liquen",  "Llantén",  "Malvavisco",  "Mimosa",  "Papaya",  "Parasita",  "Peral",  "Peredilla",  "Piquillín",  "Pirán",  "Pitanga",  "Porotillo",  "Rosa de río",  "Sarandí",  "Tasi",  "Tatán",  "Timbó",  "Timbó blanco",  "Tintitaco",  "Tranquera",  "Viraró blanco",  "Viraró de río"]

function lista(array){
    let longitudes = []
    for(let i = 0; i < array.length; i++){
        longitudes[i] = array[i].length
    }
    return array[longitudes.indexOf(Math.max(...longitudes))]
}

console.log(`La palabra más larga del array es: '${lista(arboles)}'`)