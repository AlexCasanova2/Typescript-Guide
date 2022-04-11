(() => {

    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress(id: string): string,
    }

    interface Address {
        direction: string,
        city: string,
        floor: number,
        door: number,
        cp: number
    }

    const client: Client = {
        name: 'Alex',
        age: 26,
        address: {
            direction: 'Direction text',
            city: 'City',
            floor: 4,
            door: 1,
            cp: 78123
        },
        getFullAddress(id: string){
            return this.address.city;
        }
    }

})()