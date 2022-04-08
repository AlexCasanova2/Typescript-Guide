(() => {

    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Tony',
        weapon: 'Suit'
    }
    const spiderman: Avenger = {
        name: 'Peter',
        weapon: 'Spidersense'
    }
    const hulk: Avenger = {
        name: 'Bruce',
        weapon: 'Angry'
    }

    const avengers: Avenger[] = [ironman, spiderman, hulk];

    for (const avenger of avengers) {
        console.log(avenger.name);
    }

})()