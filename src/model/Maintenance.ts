
import Imaintenance from "./Imaintenance";
import { StatusAvalible } from "./StatusAvalible";
import Vehicle from "./Vehicle";

export default class Maintenance implements Imaintenance{
    private date: Date = new Date;
    private km: number = 0;
    public avaible: StatusAvalible;
    public vehicle: Vehicle;
    public id: number = 0;
    

    constructor(date: Date, km: number, avaible: StatusAvalible, vehicle: Vehicle) {
        this.date = date;
        this.km = km;
        this.avaible = avaible;
        this.vehicle = vehicle;
        this.id++;
    }
  
    public getDate(): Date {
        return this.date;
    }
    public setDate(date: Date): void {
        this.date = date;
    }
    public getKm(): number {
        return this.km;
    }
    public setKm(km: number): void {
        this.km = km;
    }
    public getAvaible():StatusAvalible{
        return this.avaible;
    }
    public setAvaible(avaible: StatusAvalible): void{
        this.avaible = avaible;
    }
    public getVehicle(): Vehicle{
        return this.vehicle;
    }
    public setVehicle(vehicle: Vehicle): void{
        this.vehicle = vehicle;
    }
    public getId(): number {
        return this.id;
    }



}
