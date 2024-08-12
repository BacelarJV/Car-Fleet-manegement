import DataBase from '../db/DataBase';
import Car from '../model/Car';

export default class CarController {
        private dataBase: DataBase;

        constructor(dataBase: DataBase){
                this.dataBase = dataBase  
            }
        public getNewCar(plate: string, model: string, color: string, type: string, km: number, chassi: number): Car {
            
        try{ 
            const car= new Car (plate, model, color, "carro", km, chassi);
            if(!car){
                throw new Error("Informações insuficientes" );
            }
        this.dataBase.addNewCar(car);
        return car;}catch(error:any){
            console.log(`Erro ao cadastrar carro: ${error.message}`)
            return error;
        }

        }

        public listAllCars(): Car[] {
                return this.dataBase.listAllCars();
                }
        }
