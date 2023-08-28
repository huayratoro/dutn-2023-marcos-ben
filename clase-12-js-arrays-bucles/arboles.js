let arboles = ["Nandubay",  "Palma pindó",  "Paraíso",  "Peral",  "Peralillo",  "Piquillín",  "Radales",  "Sauce criollo",  "Sauce de hoja fina",  "Sauzalito",  "Tacuara",  "Tilo",  "Timbó colorado",  "Tipa",  "Tusca",  "Umbú",  "Viraró",  "Viraró de monte",  "Zarza",  "Álamo criollo",  "Balsa",  "Bambú",  "Boj",  "Caranday",  "Cauquén",  "Cebil",  "Chañar",  "Chicalá",  "Cola de zorro",  "Corona de cristo",  "Curupí",  "Duraznillo",  "Espinillo",  "Flor de ceibo",  "Fumo bravo",  "Garabato",  "Garabato blanco",  "Gomero",  "Goyavier",  "Hormiguillo",  "Inga",  "Jume",  "Lantana",  "Lapachillo",  "Liquen",  "Llantén",  "Malvavisco",  "Mimosa",  "Papaya",  "Parasita",  "Peral",  "Peredilla",  "Piquillín",  "Pirán",  "Pitanga",  "Porotillo",  "Rosa de río",  "Sarandí",  "Tasi",  "Tatán",  "Timbó",  "Timbó blanco",  "Tintitaco",  "Tranquera",  "Viraró blanco",  "Viraró de río"]

// Dado el array de nombres de árboles, crea un bucle for que recorra el array y cuente la cantidad de nombres que comienzan con la letra "P". Luego, muestra el resultado por consola.

let j = 0;
let listaArboles = []

for(let i = 0; i < arboles.length; i = i + 1){
    if(arboles[i].includes("P")){
        j = j + 1
        listaArboles.push(arboles[i])
    }
};

console.log(`Existen ${j} árboles que contienen la letra P, los cuales son: ${listaArboles}`);