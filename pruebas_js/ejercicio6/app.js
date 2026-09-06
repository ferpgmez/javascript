let procesador = document.querySelector('#proc_select');
let monitor = document.querySelector('#monitor_select');
let hardrive = document.querySelector('#hardrive');

function calcularPrecio() {
    let precio_proc = procesador.options[procesador.selectedIndex].value;
    let precio_monitor = monitor.options[monitor.selectedIndex].value;
    let precio_hd = hardrive.options[hardrive.selectedIndex].value;
    let uds_proc = document.querySelector('#uds_proc').value;
    let uds_monitor = document.querySelector('#monitor_uds').value;
    let uds_hd = document.querySelector('#hd_uds').value;
    let total = (precio_proc * uds_proc) + (precio_monitor * uds_monitor) + (precio_hd * uds_hd);
    document.querySelector('#total').value = total;
    let total_iva = total * 1.21;
    document.querySelector('#iva').value = total_iva;
}