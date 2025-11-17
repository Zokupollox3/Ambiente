// 1. Función AQI (IF)
function clasificarCalidadAire(valorAQI) {
    if (valorAQI <= 50) {
        return "Bueno";
    } else if (valorAQI <= 100) {
        return "Moderado";
    } else if (valorAQI <= 150) {
        return "Dañino para grupos sensibles";
    } else if (valorAQI <= 200) {
        return "Dañino";
    } else if (valorAQI <= 300) {
        return "Muy dañino";
    } else {
        return "Peligroso";
    }
}
function ejecutarAQI() {
    var input = document.getElementById('aqiInput');
    var valor = parseFloat(input.value);
    var resultado = document.getElementById('resultadoAQI');
    if (!isNaN(valor)) {
        resultado.textContent = 'Clasificación: ' + clasificarCalidadAire(valor);
    } else {
        resultado.textContent = 'Por favor, ingrese un número válido.';
    }
}

// 2. Función Ruido (FOR)
function calcularPromedioRuido(mediciones) {
    var suma = 0;
    for (var i = 0; i < mediciones.length; i++) {
        suma = suma + mediciones[i];
    }
    var promedio = suma / mediciones.length;
    return promedio;
}
function ejecutarRuido() {
    var nivelesDB = [65.2, 72.1, 88.5, 54.0, 91.3];
    var promedio = calcularPromedioRuido(nivelesDB);
    document.getElementById('resultadoRuido').textContent = 
        'Datos usados: [' + nivelesDB.join(', ') + ']. Promedio de dB: ' + promedio.toFixed(2) + '.';
}

// 3. Función Calor (WHILE)
function contarFocosCalor(temperaturas) {
    var contador = 0;
    var i = 0;
    while (temperaturas[i] !== 0 && i < temperaturas.length) {
        if (temperaturas[i] > 45) {
            contador++;
        }
        i++;
    }
    return contador;
}
function ejecutarCalor() {
    var lecturas =[]; 
    var contador = contarFocosCalor(lecturas);
    document.getElementById('resultadoCalor').textContent = 
        'Datos usados (hasta 0): [' + lecturas.join(', ') + ']. Focos de calor (>45°C) contados: ' + contador + '.';
}

// 4. Función Residuo (SWITCH)
function clasificarTipoResiduo(codigo) {
    var tipoResiduo;
    switch (codigo) {
        case 1:
            tipoResiduo = 'orgánico';
            break;
        case 2:
            tipoResiduo = 'plástico';
            break;
        case 3:
            tipoResiduo = 'papel/cartón';
            break;
        case 4:
            tipoResiduo = 'vidrio';
            break;
        default:
            tipoResiduo = 'Código no válido';
    }
    return tipoResiduo;
}
function ejecutarResiduo() {
    var input = document.getElementById('residuoInput');
    var codigo = parseInt(input.value);
    var resultado = document.getElementById('resultadoResiduo');
    if (!isNaN(codigo)) {
        resultado.textContent = 'Tipo de residuo: ' + clasificarTipoResiduo(codigo);
    } else {
        resultado.textContent = 'Por favor, ingrese un código numérico (1-4).';
    }
}

// 5. Función Río (DO WHILE)
function ejecutarRio() {
    var log = 'Iniciando monitoreo del río...<br>';
    var respuestaUsuario = "";
    var iteracion = 0;
    var resultadoDiv = document.getElementById('resultadoRio');
    do {
        var nivel = Math.random() * 5; 
        log += 'Nivel registrado en iteración ' + iteracion + ': ' + nivel.toFixed(2) + ' m.';

        if (nivel > 3) {
            log += ' <strong>ALERTA: Nivel crítico!</strong>';
        }
        if (Math.random() > 0.7) { 
            respuestaUsuario = 'no';
            log += '<br>Usuario decidió salir (simulado).';
        }

        log += '<br>';
        iteracion++;
    } while (respuestaUsuario !== 'no' && iteracion < 10); 
    
    resultadoDiv.innerHTML = log + "Monitoreo finalizado.";
}