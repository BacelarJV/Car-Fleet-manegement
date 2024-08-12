import Car from "../model/Car";
import Maintenance from "../model/Maintenance";
import Motorcycle from "../model/Motorcycle";

export default class DataBase {
    public cars: Car[] = [];
    public motorcycles: Motorcycle[] = [];
    public maintenance: Maintenance[] = [];

    constructor(){
        this.cars = [];
    }

    public addNewCar(car: Car): void {
        this.cars.push(car);
    }

    public addNewMotorcycle(motorcycle: Motorcycle): void {
        this.motorcycles.push(motorcycle);
    }   

    public addNewMaintenance(maintenance: Maintenance): void {
        this.maintenance.push(maintenance);
    }       

    public removeCar(car:Car): void {
        const index = this.cars.indexOf(car);
        this.cars.splice(index, 1);
    }
    public removeMotorcycle(motorcycle:Motorcycle): void {
        const index = this.motorcycles.indexOf(motorcycle);
        this.motorcycles.splice(index, 1);
    }
    public removeMaintenance(maintenance:Maintenance): void {
        const index = this.maintenance.indexOf(maintenance);
        this.maintenance.splice(index, 1);
    }
    public getCar(id: number): Car|undefined {
        return this.cars.find((car) => car.getId() === id);
    }
    public getMotorcycle(id: number): Motorcycle {
        return this.motorcycles[id];
    }
    public getMaintenance(id: number): Maintenance {
        return this.maintenance[id];
    }
    public listAllCars():Car[]{
        return this.cars;
    }
    public listAllMotorcycle():Motorcycle[]{
        return this.motorcycles;
    }
    public ListAllMaintenance():Maintenance[]{
        return this.maintenance;
    }

}