(() => {

    class Avenger {

        //private name: string = 'Scott';
        //public team: string;
        //public realName?: string;

        //A las propiedades estaticas se puede acceder a través de la clase y es de manera global
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string
        ){}

        public bio(){
            return `${ this.name } (${ this.team })`
        }

    }//termina la clase

    //const antman: Avenger = new Avenger('antman', 'team cap', 'Scott');
    //console.log(antman.bio());

    //console.log(Avenger.getAvgAge());


})()