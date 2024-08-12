"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(plate, model, color, type, km, chassi) {
        this.plate = "";
        this.model = "";
        this.color = "";
        this.type = "";
        this.km = 0;
        this.id = 0;
        this.id++;
        this.plate = plate;
        this.model = model;
        this.color = color;
        this.chassi = chassi;
        this.type = type;
        this.km = km;
    }
    getPlate() {
        return this.plate;
    }
    setPlate(plate) {
        this.plate = plate;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getKm() {
        return this.km;
    }
    setKm(km) {
        this.km = km;
    }
    getId() {
        return this.id;
    }
}
exports.default = Vehicle;
