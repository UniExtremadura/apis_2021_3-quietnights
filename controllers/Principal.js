'use strict';

var utils = require('../utils/writer.js');
var Principal = require('../service/PrincipalService');

module.exports.getEstadistica = function getEstadistica (req, res, next, idUsuario) {
  Principal.getEstadistica(idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInforme = function getInforme (req, res, next, idUsuario) {
  Principal.getInforme(idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
