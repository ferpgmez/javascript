export default class Cliente {
    constructor(nombre, apellido, edad, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.saldo = saldo;
    }

    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}