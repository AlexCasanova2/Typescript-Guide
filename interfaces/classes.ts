(() =>{

    interface Xmen{
        name: string,
        realName: string,
        mutantPower(id:number):string;
    }

    interface Human{
        age: number 
    }

    //No podemos extender interfaces pero si podemos implementar
    class Mutant implements Xmen, Human {
        public age!: number;
        public name!: string;
        public realName!: string;

        mutantPower(id:number) {
            return this.name + ' ' + this.realName;
        }
    }

})()