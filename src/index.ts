import CarController from './control/CarController';
import MaintenanceController from './control/MaintenanceController';
import DataBase from './db/DataBase';
import PrimaryScreen from './view/PrimaryScreen';

const database = new DataBase();
const carController = new CarController(database);
const maintenanceController = new MaintenanceController(database);
const primaryScreen = new PrimaryScreen(carController, maintenanceController);

primaryScreen.getFirstScreen();
