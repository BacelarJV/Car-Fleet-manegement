"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PrimaryScreen {
    constructor(carController, maintenanceController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.carController = carController;
        this.maintenanceController = maintenanceController;
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            let choice = this.prompt("Escolha:\n1 - Cadastro de Carro\n2 - Listar Carros\n3 - Cadastro de Manutenção\n4 - Listar Manutenções\n5 - Sair\n");
            switch (choice) {
                case "1":
                    this.registerCar();
                    break;
                case "2":
                    this.carController.listAllCars();
                    break;
                case "3":
                    //this.registerMaintenance();
                    break;
                case "4":
                    this.maintenanceController.ListMaintenance();
                    break;
                case "5":
                    showScreen = true;
                    break;
                default:
                    console.log("Opção inválida!");
            }
        }
    }
    registerCar() {
        try {
            const plate = this.prompt("Digite a placa do carro: ");
            const model = this.prompt("Digite o modelo do carro: ");
            const color = this.prompt("Digite a cor do carro: ");
            const km = Number(this.prompt("Digite a quilometragem do carro: "));
            const chassi = Number(this.prompt("Digite o número do Chassi (opcional)"));
            this.carController.getNewCar(plate, model, color, "carro", km, chassi);
            console.log("Carro registrado com sucesso!");
        }
        catch (error) {
            console.log("Erro ao registrar carro");
        }
    }
}
exports.default = PrimaryScreen;
