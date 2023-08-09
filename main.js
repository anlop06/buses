function calcular() {
    let tipo = document.querySelector("#tipo").value;
    let km = parseInt(document.querySelector("#km").value);
    let personas = parseInt(document.querySelector("#personas").value);
    let pago = 0;
    let cuota = 0;
    
    if (tipo == "a") {
        if (personas <= 20) {
            pago = 2 * km 
            cuota = pago / personas
            cuota = cuota.toFixed(2);
        }else {
            pago = 2 * km
            cuota = pago / personas
            cuota = cuota.toFixed(2);
        }
    }else if (tipo == "b") {
        if (personas <= 20) {
            pago = 2.5 * km 
            cuota = pago / personas
            cuota = cuota.toFixed(2);
        }else {
            pago = 2.5 * km
            cuota = pago / personas
            cuota = cuota.toFixed(2);
        }
    }else if (tipo == "c") {
        if (personas <= 20) {
            pago = 3 * km 
            cuota = pago / personas
            cuota = cuota.toFixed(2);
        }else {
            pago = 3 * km
            cuota = (pago / personas)
            cuota = cuota.toFixed(2);
        }
    }

    // escribir resultado
    document.querySelector("#total").innerHTML = `El costo del viaje será igual a $ ${pago}`;
    document.querySelector("#cuota").innerHTML = `La cuota por persona será igual a $ ${cuota}`;
}

document.querySelector("button").addEventListener("click", calcular);

