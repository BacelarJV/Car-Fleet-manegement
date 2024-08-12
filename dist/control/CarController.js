"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("../model/Car"));
class CarController {
    constructor(dataBase) {
        this.dataBase = dataBase;
    }
    getNewCar(plate, model, color, type, km, chassi) {
        try {
            const car = new Car_1.default(plate, model, color, "carro", km, chassi);
            if (!car) {
                throw new Error("Informações insuficientes");
            }
            this.dataBase.addNewCar(car);
            return car;
        }
        catch (error) {
            console.log(`Erro ao cadastrar carro: ${error.message}`);
            return error;
        }
    }
    listAllCars() {
        return this.dataBase.listAllCars();
    }
    getCarById(id) {
        return this.dataBase.getCar(id);
    }
}
exports.default = CarController;
