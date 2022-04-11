(() => {

    //Las interface se crean igual que los tipos, son la unica diferencia de que las interfaces son extendibles, se pueden añadir más cosas
    //Son más usadas para gestionar llamadas http pero son muy parecidas
    interface Hero {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen', 
        age: 25,
        powers: ['Super speed', 'Super force']
    }

    let superman: Hero = {
        name: 'Superman', 
        age: 23,
        powers: ['Flying', 'Super force'],
        getName(){
            return this.name;
        }
    }

})()