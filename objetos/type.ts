(() => {

    type Hero = {
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