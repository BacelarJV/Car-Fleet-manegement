"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor() {
        this.plate = "";
        this.model = "";
        this.color = "";
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
    displayInfo(format) {
        if (format === 'short') {
            return `Plate: ${this.plate}`;
        }
        else if (format === 'long') {
            return `Plate: ${this.plate}, Model: ${this.model}, Color: ${this.color}`;
        }
        return `${this.plate}, ${this.model}, ${this.color}`;
    }
}
exports.default = Vehicle;
