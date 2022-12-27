class Port {
    constructor(name){
        this.name = name;
        this.ships = [];
    };

    addShip(ship){
       this.ships.push(ship); 
    };

    removeShip(ship){
        const shipIndex = this.ships.indexOf(ship);
        if(shipIndex >= 0){
            this.ships.splice(shipIndex, 1);
        } else {
            throw new Error('No ships currently at dock');
        }
    };

}



module.exports = Port;