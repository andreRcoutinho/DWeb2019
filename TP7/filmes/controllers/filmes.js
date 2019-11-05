var Filme = require('../models/filme')
var mongoose = require('mongoose')

const Filmes = module.exports

Filmes.listar = () => {
    return Filme
        .find()
        .sort({ title: 1 })
        .exec()
}

Filmes.consultar = fid => {
    return Filme
        .findOne({ _id: fid })
        .exec()
}

Filmes.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

Filmes.projetar = campos => {
    return Filme
        .find({}, campos)
        .exec()
}

Filmes.agregar = campo => {
    return Filme
        .aggregate([{ $group: { _id: "$" + campo, contador: { $sum: 1 } } },
        { $sort: { contador: -1 } }])
        .exec()
}

Filmes.registar = body => {
    var nFilme = new Filme(body)
    return nFilme.save()
}

Filmes.apagar = fid => {
    return Filme
        .findByIdAndDelete(fid)
        .exec()
}

Filmes.atualizar = (fid, req) => {
    return Filme
        .findByIdAndUpdate(fid, {
            $set: {
                title: req.body.title,
                year: req.body.year
            }
        })
        .exec()
}
