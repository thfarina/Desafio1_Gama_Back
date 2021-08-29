const { log } = require('debug');
const mongoose = require('mongoose');
const Forms = mongoose.model('Forms');
// const model = require('../models/forms');

// list
exports.listForms = async (req, res) => {
  try {
    const data = await Forms.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar respostas do formulário.'});
  }
};

// create
exports.createForms = async (req, res) => {
  try {
    if (await Forms.findOne({ email: req.body.email })) {
      return res.status(400).send({message: 'EMAIL JÁ CADASTRADO!'});
    }
    if (await Forms.findOne({ CPF: req.body.CPF })) {
      return res.status(400).send({message: 'CPF JÁ CADASTRADO!'});
    }

    await Forms.create(req.body);

    res.status(201).send({message: 'Currículo cadastrado com sucesso!'});
  } catch (e) {
    console.log(e);
    res.status(500).send({message: 'Falha ao cadastrar currículo.'});
  }
};

