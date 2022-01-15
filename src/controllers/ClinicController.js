const Clinic = require('../models/clinic')
const yup = require('yup')
const mongoose = require('mongoose')

class ClinicController {
  async show(req, res) {
    const query = Clinic.find().select('-_id -__v -createdAt -updatedAt')
    query instanceof mongoose.Query // true
    const Clinics = await query
    return res.status(200).json({ error: false, Clinics })
  }

  async showOne(req, res) {
    const id = req.params.id
    const query = Clinic.findOne({ _id: id }).select(
      '-_id -__v -createdAt -updatedAt',
    )
    query instanceof mongoose.Query // true
    const clinic = await query
    return res.status(200).json({ error: false, clinic })
  }

  async store(req, res) {
    //todo: validação dos dados
    let schema = yup.object().shape({
      name: yup.string().required(),
      phone: yup.string().required(),
      address: yup.string().required(),
      cep: yup.string().required(),
      city: yup.string().required(),
      number: yup.number().required(),
    })

    !(await schema.isValid(req.body)) &&
      res.status(400).json({
        error: true,
        message: 'Invalid format data ',
      })

    // validação que verifica se o usuário existe

    let ClinicExist = await Clinic.findOne({
      name: req.body.name,
    })

    if (ClinicExist) {
      res.status(400).json({
        error: true,
        message: 'Existing product! please create a non-existing product  ',
      })
    } else {
      // Desestruturação dos dados da requisição
      const { name, phone, address, cep, city, number } = req.body

      const data = {
        name,
        phone,
        address,
        cep,
        city,
        number,
      }

      //Inserção de doutor no MongoDB

      await Clinic.create(data, (error) => {
        error
          ? res.status(400).json({
              error: true,
              message: 'Error when trying to enter a clinic in mongoDB  ',
            })
          : res.status(200).json({
              error: false,
              message: 'Successfully registered clinic ',
            })
      })
    }
  }
  async update(req, res) {
    const { name, phone, address, cep, city, number } = req.body

    const id = req.params.id

    const clinic = {
      name,
      phone,
      address,
      cep,
      city,
      number,
    }

    //todo: validação dos dados
    let schema = yup.object().shape({
      name: yup.string().required(),
      phone: yup.string().required(),
      address: yup.string().required(),
      cep: yup.string().required(),
      city: yup.string().required(),
      number: yup.number().required(),
    })

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({
        error: true,
        message: 'Invalid format data ',
      })
    } else {
      try {
        const updatedClinic = await Clinic.updateOne({ _id: id }, clinic)

        if (updatedClinic.matchedCount === 0) {
          res.status(422).json({ message: 'Clinica não encontrada!' })
          return
        }

        res.status(200).json({ clinic: clinic })
      } catch (err) {
        res.status(500).json({ message: `${err}` })
      }
    }
  }
  async delete(req, res) {
    const id = req.params.id

    try {
      const deleteClinic = await Clinic.deleteOne({ _id: id })

      if (deleteClinic.matchedCount === 0) {
        res.status(422).json({ message: 'Doutor não encontrado!' })
        return
      }

      res.status(200).json({ clinica: 'deletada com sucesso' })
    } catch (err) {
      res.status(500).json({ message: `${err}` })
    }
  }
}

module.exports = new ClinicController()
