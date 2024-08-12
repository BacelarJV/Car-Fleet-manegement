"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = __importDefault(require("./Vehicle"));
class Motorcycle extends Vehicle_1.default {
    constructor(plate, model, color, type, km, chassi) {
        super(plate, model, color, type, km, chassi);
    }
    typeVehicle() {
        return (this.type);
    }
}
exports.default = Motorcycle;
