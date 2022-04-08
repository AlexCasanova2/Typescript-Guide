//Creamos el tipo
type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    power: number;
}
//Creamos un elemento del tipo
const avengers: Avengers = {
    nick: 'Samuel L Jackson',
    ironman: 'Robert Downey Jr',
    vision: 'Paul Bettany',
    activos: true,
    power: 1500.5262
}

//const {power, vision} = avengers;
//console.log(power.toFixed(2), vision.toUpperCase())

//Asignamos el tipo
const printAvenger = ({ironman}:Avengers) => {
    console.log(ironman);
}
//printAvenger(avengers);

//Desestructuración de un array para conseguir una posición en concreto
const avengersArr: [string, boolean, number] = ['Spiderman', true, 23];
const [ superhero, isHuman, age] = avengersArr;
//console.log({superhero, isHuman, age});