(() => {

    //Las clases abstractas sirven para poder crear otras classes y asegurarse de que implementan lo que nosotros queremos
    //Las clases abtractas NO sirven para crear instancias

    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    //Entonces si creamos otra clase y la extendemos de la superior estaremos revogiendo todos sus parametros
    class Xmen extends Mutant {
        //Dentro de cada clase se pueden tener metodos propios

        salvarMundo(){
            return 'Mundo salvado';
        }
    }

    //Creamos una variable y le decimos que es un nuevo Xmen
    //Para crearlo tenemos que introducir los valores obligatorios que hemos definido en el constructor de la clase abstracta
    const wolverine = new Xmen('Wolverine', 'Logan');
    //console.log(wolverine);
    //Ahora wolverine es una variable de tipo Xmen

    //No se puede hacer una instancia de una clase abstracta, por lo tanto no se podria hacer los siguiente:
    //const wolverine = new Mutant('Wolverine', 'Logan');

    //Más ejemplos

    class Villain extends Mutant{
        //Metodo propio de la clase
        conquistarMundo(){
            return 'Mundo conquistado';
        }
    };

    const magneto = new Villain('Magneto', 'Eric');
    //console.log(magneto);

    //Creamos una función para devolver el nombre de un personaje
    //Como parametro le especificamos que necesitamos un 'character' (puedes llamarlo como quieras) pero que tiene que ser de tipo Mutant (que es la clase abstracta)
    const printName = ( character : Mutant) =>{
        //Dentro podemos acceder a todos los parametro de cada clase
        //console.log(character.realName);
    }

    //ejecutamos la función pasandolo la variable wolverine que es de la classe Xmen que extiende de la clase abstracta de Mutant
    printName(wolverine);

})()