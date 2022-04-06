"use strict";
(() => {
    const a = 10;
    sayHello('hola que tal');
    function sayHello(msg) {
        console.log(msg);
    }
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no last name'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greetings = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved!`;
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greetings;
    console.log(myFunction("Alex"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatiSignal);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 25,
        powers: ['Super speed', 'Super force']
    };
    let superman = {
        name: 'Superman',
        age: 23,
        powers: ['Flying', 'Super force']
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 25,
        powers: ['Super speed', 'Super force']
    };
    let superman = {
        name: 'Superman',
        age: 23,
        powers: ['Flying', 'Super force'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = 'Fernando';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['None']
    };
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Doctor Strange';
    console.log(avenger.charAt(0));
    avenger = 150.8343242;
    console.log(avenger.toFixed(2));
})();
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const villains = ['Duende verde', 'Kraven', 'Thanos'];
villains.forEach(v => console.log(v.toUpperCase()));
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log("is superman: " + isSuperman);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Ayuda');
})();
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log("estamos en problemas");
    }
    else {
        console.log("nos salvamos");
    }
})();
(() => {
    var _a;
    const batman = 'batman';
    const linternaVerde = "linterna verde";
    const flash = `flash`;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase) || 'No esta batman');
})();
(() => {
    const hero = ['Doctor Strange', 100];
    hero[0] = 'Iron man';
    hero[1] = 50;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuoerman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map