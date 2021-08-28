const { log } = require('debug');
const mongoose = require('mongoose');
const Forms = mongoose.model('Forms');

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
    if (await model.findOne({ cpf: req.body.CPF })) {
      return res.status(400).send({ erro: 'CPF JÁ CADASTRADO!' });
    }

    await model.create(req.body);

    res.status(201).send({message: 'Currículo cadastrada com sucesso!'});
  } catch (e) {
    console.log(e);
    res.status(500).send({message: 'Falha ao cadastrar currículo.'});
  }
};