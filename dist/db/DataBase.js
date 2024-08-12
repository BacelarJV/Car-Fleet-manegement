"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataBase {
    constructor() {
        this.cars = [];
        this.motorcycles = [];
        this.maintenance = [];
        this.cars = [];
    }
    addNewCar(car) {
        this.cars.push(car);
    }
    addNewMotorcycle(motorcycle) {
        this.motorcycles.push(motorcycle);
    }
    addNewMaintenance(maintenance) {
        this.maintenance.push(maintenance);
    }
    removeCar(car) {
        const index = this.cars.indexOf(car);
        this.cars.splice(index, 1);
    }
    removeMotorcycle(motorcycle) {
        const index = this.motorcycles.indexOf(motorcycle);
        this.motorcycles.splice(index, 1);
    }
    removeMaintenance(maintenance) {
        const index = this.maintenance.indexOf(maintenance);
        this.maintenance.splice(index, 1);
    }
    getCar(id) {
        return this.cars[id];
    }
    getMotorcycle(id) {
        return this.motorcycles[id];
    }
    getMaintenance(id) {
        return this.maintenance[id];
    }
    listAllCars() {
        return this.cars;
    }
    listAllMotorcycle() {
        return this.motorcycles;
    }
    ListAllMaintenance() {
        return this.maintenance;
    }
}
exports.default = DataBase;
