import DataBase from '../db/DataBase';
import Motorcycle from '../model/Motorcycle';

export default class MotorcycleController {
        private dataBase: DataBase;

        constructor(dataBase: DataBase){
                this.dataBase = dataBase  
            }
        public getNewMotorcycle(plate: string, model: string, color: string, type: string, km: number, chassi: number): Motorcycle {
        const  motorcycle= new Motorcycle (plate, model, color, "Moto", km, chassi);
        this.dataBase.addNewMotorcycle(motorcycle);
        return motorcycle;
        }

        public listAllMotorcycle(): Motorcycle[] {
                return this.dataBase.listAllMotorcycle();
                }
        }
