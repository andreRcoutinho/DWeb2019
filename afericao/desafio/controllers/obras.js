var Obra = require("../models/obra");

const Obras = module.exports;

Obras.listar = () => {
  return Obra.find().exec();
};

Obras.consultar = id => {
  return Obra.find({ id: id }).exec();
};

Obras.obrasDoAno = ano => {
  return Obra.find({ anoCriacao: ano }).exec();
};

Obras.obrasDoCompositorComDuracao = (comp, dur) => {
  return Obra.find({ compositor: comp, duracao: dur }).exec();
};

Obras.obrasDoPeriodo = peri => {
  return Obra.find({ periodo: peri }).exec();
};

Obras.compositores = () => {
  return Obra.distinct("compositor").exec();
};

Obras.periodos = () => {
  return Obra.distinct("periodo").exec();
};
