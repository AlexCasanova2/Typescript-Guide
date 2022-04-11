(() =>{

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
            //console.log('Constructor Avenger llamado');
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`
        }
        
    }

    class Xmen extends Avenger{ //Vamos a tener todos los campos de Avengers
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super(name, realName)
            //console.log('Constructor Xmen llamado');
        }

        //getter
        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        //setter
        set fullName(name: string){
            if(name.length < 5){
                throw new Error('El nombre: (' + name + ') debe tener más de 3 carácteres');
            }
            this.name = name;
        }

        getFullNameFromXmen(){
            //console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    //console.log(wolverine.fullName);

    wolverine.fullName = 'Alejandro';
    //console.log(wolverine.fullName);

    //wolverine.getFullNameFromXmen();

})()