import Car from "../model/Car";
import Vehicle from "../model/Vehicle";

describe("Carro", () =>{
    let carro: Car;

    

beforeEach(()=>{
    carro = new Car("pcx3050", "Corolla", "Preto", "Carro",105,4524155);
})

test("Deve criar um carro com as informações solicitadas", ()=> {
    expect(carro.getPlate()).toBe("pcx3050");
    expect(carro.getModel()).toBe("Corolla");
    expect(carro.getColor()).toBe("Preto");
    expect(carro.typeVehicle()).toBe("Carro");
    expect(carro.getKm()).toBe(105);
});
})