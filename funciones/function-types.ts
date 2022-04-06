(() => {

    const addNumbers = (a:number, b:number) => a + b;
    const greetings = (name: string) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved!`;


    let myFunction;

    myFunction = addNumbers;
    console.log(myFunction(1,2));

    myFunction = greetings;
    console.log(myFunction("Alex"));

    myFunction = saveTheWorld;
    console.log(myFunction());

})()