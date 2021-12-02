'use strict';


/**
 * obtenemos, para un usuario los datos de estadísticas
 * Para cada usuario recuperamos la información de las estadísticas
 *
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.getEstadistica = function(idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "datoEstadisticaPosicion" : 0,
  "datoEstadisticaPresion" : 2000,
  "resultadoMLSalud" : "Realizado el estudio de los datos obtenidos por los sensores este mes, se concluye que si se continúa con esta tendencia, el paciente tiene un 70% de posibilidades de sufrir un infarto en menos de 6 meses.",
  "datoEstadisticaFrecuencia" : 75,
  "datoEstadisticaOxigeno" : 98,
  "idUsuario" : 1,
  "mes" : "Los datos estadísticos indicados pertenecen al mes de Diciembre"
}, {
  "datoEstadisticaPosicion" : 0,
  "datoEstadisticaPresion" : 2000,
  "resultadoMLSalud" : "Realizado el estudio de los datos obtenidos por los sensores este mes, se concluye que si se continúa con esta tendencia, el paciente tiene un 70% de posibilidades de sufrir un infarto en menos de 6 meses.",
  "datoEstadisticaFrecuencia" : 75,
  "datoEstadisticaOxigeno" : 98,
  "idUsuario" : 1,
  "mes" : "Los datos estadísticos indicados pertenecen al mes de Diciembre"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * obtenemos, para un usuario los datos del informe
 * Para cada usuario recuperamos la información de los informes
 *
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.getInforme = function(idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "datoMediaOxigeno" : 98,
  "datoMediaFrecuencia" : 75,
  "datoMediaPresion" : 2000,
  "idUsuario" : 1,
  "datoMediaPosicion" : 0,
  "mes" : "Los datos indicados en el informe pertenecen al mes de Diciembre"
}, {
  "datoMediaOxigeno" : 98,
  "datoMediaFrecuencia" : 75,
  "datoMediaPresion" : 2000,
  "idUsuario" : 1,
  "datoMediaPosicion" : 0,
  "mes" : "Los datos indicados en el informe pertenecen al mes de Diciembre"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

