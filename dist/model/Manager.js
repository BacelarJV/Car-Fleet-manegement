"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    constructor(carro, usuario) {
        this.carro = carro;
        this.usuario = usuario;
    }
    getCarro() {
        return this.carro;
    }
    setCarro(carro) {
        this.carro = carro;
    }
    getUsuario() {
        return this.usuario;
    }
    setUsuario(usuario) {
        this.usuario = usuario;
    }
}
exports.default = Manager;
