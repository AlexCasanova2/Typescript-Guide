(() => {

    //Los constructores privados sirve para controlar la manera en que las instacias son ejecutadas
    //Por ejemplo podemos manejar los singeltons que nos permiten tener una instancia para toda la aplicación

    //Creamos una clase normal
    class Apocalipsis {

        //Creamos una propiedad estatica de tipo Apocalipsis, en un inicio esto será o debería ser null
        static instance:Apocalipsis;

        private constructor(
            public name: string
        ) {}

        //Creamos otra propiedad estatica para llamar al apocalipsis 
        static callApocalipsis(): Apocalipsis{
            //Primero comprobamos si existe la instancia de Apocalipsis, si es la primera vez que entramos no existirá
            if(!Apocalipsis.instance){
                //Si no existe, la creamos y le asignamos el valor que va a tener
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único');
            }
            //La devolvemos de manera segura ya que sabemos que aquí ya va a tener un valor definido
            return Apocalipsis.instance;
        }

        //Se puede cambiar el valor de la instacia a través de un método
        changeName( newName: string ):void{
            this.name = newName;
        }

    }

    //Creamos una variable para devolver el valor único asignado a través de la instancia
    //Si se imprime más de una vez esta variable siempre tendrá el mismo valor.
    const apocal1 = Apocalipsis.callApocalipsis();
    const apocal2 = Apocalipsis.callApocalipsis();

    //Se puede cambiar el valor de la instacia a través de un método
    //apocal1.changeName('New value');

    //console.log(apocal1, apocal2);

})()