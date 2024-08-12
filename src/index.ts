import CarController from './control/CarController';
import MaintenanceController from './control/MaintenanceController';
import PrimaryScreen from './view/PrimaryScreen';

const carController = new CarController();
const maintenanceController = new MaintenanceController();
const primaryScreen = new PrimaryScreen(carController, maintenanceController);

primaryScreen.getFirstScreen();
