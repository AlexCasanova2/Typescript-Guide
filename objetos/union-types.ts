(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: string | number | Hero = 'Fernando';
    console.log(myCustomVariable);

    myCustomVariable = 20;
    console.log(myCustomVariable);

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['None']
    }
    console.log(myCustomVariable);

    
})()