import  Cliente  from "./clientes.js";

export default class Operaciones extends Cliente {
    constructor(fecha) {
        super();
        this.fecha = fecha;
    }
    depositar(monto) {
        this.saldo += monto;
    }
    retirar(monto) {
        this.saldo -= monto;
    }
}