"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Maintenance_1 = __importDefault(require("../model/Maintenance"));
class MaintenanceController {
    constructor(dataBase) {
        this.dataBase = dataBase;
    }
    registerNewMaintenance(date, km, avaible, vehicle) {
        const maintenance = new Maintenance_1.default(date, km, avaible, vehicle);
        this.dataBase.addNewMaintenance(maintenance);
        return maintenance;
    }
    ListMaintenance() {
        return this.dataBase.ListAllMaintenance();
    }
}
exports.default = MaintenanceController;
