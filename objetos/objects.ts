(() => {

    let flash: { name: string, age?:number, powers:string[], getName?: () => string } = {
        name: 'Barry Allen', 
        age: 25,
        powers: ['Super speed', 'Super force']
    }

    let superman: { name: string, age?:number, powers:string[], getName?: () => string } = {
        name: 'Superman', 
        age: 23,
        powers: ['Flying', 'Super force']
    }
    
    console.log(flash);

})()