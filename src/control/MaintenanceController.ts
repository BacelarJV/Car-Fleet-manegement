import Maintenance from '../model/Maintenance';
import Vehicle from '../model/Vehicle';
import { StatusAvalible } from '../model/StatusAvalible';
import DataBase from '../db/DataBase';

export default class MaintenanceController {
    private dataBase: DataBase;

    constructor(dataBase: DataBase){
        this.dataBase = dataBase  
    }


    public registerNewMaintenance(date: Date, km: number, avaible: StatusAvalible, vehicle: Vehicle): Maintenance{
        const maintenance= new Maintenance (date, km, avaible, vehicle);
        this.dataBase.addNewMaintenance(maintenance);
        return maintenance;
    }

    public ListMaintenance():Maintenance[]{
        return this.dataBase.ListAllMaintenance();
    }
    }
