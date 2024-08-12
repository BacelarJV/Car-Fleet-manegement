import promptSync from "prompt-sync";
import CarController from "../control/CarController";
import MaintenanceController from "../control/MaintenanceController";
import Car from "../model/Car";
import Maintenance from "../model/Maintenance";
import { StatusAvalible } from "../model/StatusAvalible";

export default class PrimaryScreen {
  private carController: CarController;
  private maintenanceController: MaintenanceController;
  private prompt = promptSync();

  constructor(
    carController: CarController,
    maintenanceController: MaintenanceController
  ) {
    this.carController = carController;
    this.maintenanceController = maintenanceController;
  }

  public getFirstScreen(): void {
    let showScreen: boolean = false;
    while (!showScreen) {
      let choice = this.prompt(
        "Escolha:\n1 - Cadastro de Carro\n2 - Listar Carros\n3 - Cadastro de Manutenção\n4 - Listar Manutenções\n5 - Sair\n"
      );

      switch (choice) {
        case "1":
          this.registerCar();
          break;

        case "2":
          let newCars = this.carController.listAllCars();
          console.log(newCars);
          break;

        case "3":
          this.registerMaintenance();
          break;

        case "4":
          let addNewMaintenance = this.maintenanceController.ListMaintenance();
          console.log(addNewMaintenance);
          break;

        case "5":
          showScreen = true;
          break;

        default:
          console.log("Opção inválida!");
      }
    }
  }

  private registerCar(): void {
    try {
      const plate = this.prompt("Digite a placa do carro: ");
      const model = this.prompt("Digite o modelo do carro: ");
      const color = this.prompt("Digite a cor do carro: ");
      const km = Number(this.prompt("Digite a quilometragem do carro: "));
      const chassi = Number(
        this.prompt("Digite o número do Chassi (opcional)")
      );
      this.carController.getNewCar(plate, model, color, "carro", km, chassi);
      console.log("Carro registrado com sucesso!");
    } catch (error: any) {
      console.log("Erro ao registrar carro");
    }
  }

  private registerMaintenance(): void {
    try {
      let idcar = Number(this.prompt("digite o carro para manutenção"));
      let car = this.carController.getCarById(idcar);
      if (car === undefined) {
        console.log("Carro não encontrado");
        return;
      }
      const status = StatusAvalible.indisponivel;
      const date = new Date(
        this.prompt("Digite a data da manutenção (formato Dia/Mês/Ano): ")
      );
      const km = Number(this.prompt("Digite a quilometragem da manutenção: "));
      this.maintenanceController.registerNewMaintenance(date, km, status, car);
      console.log("Manutenção registrada com sucesso!");
    } catch (error: any) {
      console.log("Erro ao registrar manutenção");
    }
  }
}
