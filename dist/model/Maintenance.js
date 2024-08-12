"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Maintenance {
    constructor(date, km, avaible, vehicle) {
        this.date = new Date;
        this.km = 0;
        this.id = 0;
        this.date = date;
        this.km = km;
        this.avaible = avaible;
        this.vehicle = vehicle;
        this.id++;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }
    getKm() {
        return this.km;
    }
    setKm(km) {
        this.km = km;
    }
    getAvaible() {
        return this.avaible;
    }
    setAvaible(avaible) {
        this.avaible = avaible;
    }
    getVehicle() {
        return this.vehicle;
    }
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }
    getId() {
        return this.id;
    }
}
exports.default = Maintenance;
