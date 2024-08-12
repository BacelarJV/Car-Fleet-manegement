import Vehicle from "./Vehicle";

export default class Car extends Vehicle {

    constructor(plate: string, model: string, color: string, type: string, km: number, chassi: number) {
        super(plate, model, color,type, km, chassi);
    }

    public typeVehicle(): string {
        return(this.type);
    }



}
