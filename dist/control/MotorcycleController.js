"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Motorcycle_1 = __importDefault(require("../model/Motorcycle"));
class MotorcycleController {
    constructor(dataBase) {
        this.dataBase = dataBase;
    }
    getNewMotorcycle(plate, model, color, type, km, chassi) {
        const motorcycle = new Motorcycle_1.default(plate, model, color, "Moto", km, chassi);
        this.dataBase.addNewMotorcycle(motorcycle);
        return motorcycle;
    }
    listAllMotorcycle() {
        return this.dataBase.listAllMotorcycle();
    }
}
exports.default = MotorcycleController;
