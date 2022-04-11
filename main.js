"use strict";
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
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Alex',
        age: 26,
        address: {
            direction: 'Direction text',
            city: 'City',
            floor: 4,
            door: 1,
            cp: 78123
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map