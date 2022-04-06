(() => {

    const batman: string = 'batman';
    const linternaVerde: string = "linterna verde";
    const flash: string = `flash`;

    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}`);

    console.log(batman[10]?.toUpperCase || 'No esta batman');

})()