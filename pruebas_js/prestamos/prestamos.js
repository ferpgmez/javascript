class Prestamo {
    constructor() {
        this._fecha = new Date();
        this._cantidad = 0;
        this._plazo = 0;
        this._tasaInteres = 0;
    }

    get fecha() {
        return this._fecha;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }

    get plazo() {
        return this._plazo;
    }

    set plazo(plazo) {
        this._plazo = plazo;
    }

    get tasaInteres() {
        return this._tasaInteres;
    }

    set tasaInteres(tasaInteres) {
        this._tasaInteres = tasaInteres;
    }

    calcularInteresCompuesto() {
        return this._cantidad * Math.pow(1 + (this._tasaInteres / 12), (this._plazo / 12));
    }

    fechaVencimiento() {
        return new Date(this._fecha.getFullYear(), this._fecha.getMonth() + this._plazo, this._fecha.getDate());
    }
}

export default Prestamo;