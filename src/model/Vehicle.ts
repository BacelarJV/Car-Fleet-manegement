export default abstract class Vehicle {
    protected plate: string = "";
    protected model: string = "";
    protected color: string = "";
    protected chassi;
    protected type: string = "";
    protected km: number = 0;
    protected id: number = 0;
    
    constructor(plate: string, model: string, color: string,type: string, km: number, chassi?: number) {
        this.id++;
        this.plate = plate;
        this.model = model;
        this.color = color;
        this.chassi = chassi; 
        this.type = type;  
        this.km = km;
    }

    public getPlate(): string {
        return this.plate;
    }
    public setPlate(plate: string): void {
        this.plate = plate;
    }
    public getModel(): string {
        return this.model;
    }
    public setModel(model: string): void {
        this.model = model;
    }
    public getColor(): string {
        return this.color;
    }
    public setColor(color: string): void {
        this.color = color;
    }

    public getKm(): number {
        return this.km;
    }
    public setKm(km: number): void {
        this.km = km;
    }

    public getId(): number {
        return this.id;
    }
    

    public abstract typeVehicle(): string; 

    }

