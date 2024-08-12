"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarController_1 = __importDefault(require("./control/CarController"));
const MaintenanceController_1 = __importDefault(require("./control/MaintenanceController"));
const DataBase_1 = __importDefault(require("./db/DataBase"));
const PrimaryScreen_1 = __importDefault(require("./view/PrimaryScreen"));
const database = new DataBase_1.default();
const carController = new CarController_1.default(database);
const maintenanceController = new MaintenanceController_1.default(database);
const primaryScreen = new PrimaryScreen_1.default(carController, maintenanceController);
primaryScreen.getFirstScreen();
