const Doctor = require('../models/doctor')
const yup = require('yup')
const mongoose = require('mongoose')

class DoctorController {
  async show(req, res) {
    const query = Doctor.find().select('-_id -__v -createdAt -updatedAt')
    query instanceof mongoose.Query // true
    const doctors = await query
    return res.status(200).json({ error: false, doctors })
  }

  async showOne(req, res) {
    const id = req.params.id
    const query = Doctor.findOne({ _id: id }).select(
      '-_id -__v -createdAt -updatedAt',
    )
    query instanceof mongoose.Query // true
    const doctor = await query
    return res.status(200).json({ error: false, doctor })
  }

  async store(req, res) {
  
    //todo: validação dos dados
    let schema = yup.object().shape({
      idDoctor: yup.string(),
      name: yup.string().required(),
      sex: yup.string().required(),
      age: yup.number().required(),
      cpf: yup.string().required(),
      rg: yup.string().required(),
      phone: yup.string().required(),
      address: yup.string().required(),
      cep: yup.string().required(),
      city: yup.string().required(),
      number: yup.number().required(),
      speciality: yup.string().required(),
      crm: yup.number().required(),
    })

    !(await schema.isValid(req.body)) &&
      res.status(400).json({
        error: true,
        message: 'Invalid format data ',
      })

    // validação que verifica se o usuário existe

    let doctorExist = await Doctor.findOne({
      name: req.body.name,
    })

    if (doctorExist) {
      res.status(400).json({
        error: true,
        message: 'Existing Doctor! please create a non-existing doctor  ',
      })
    } else {
      // Desestruturação dos dados da requisição
     
      const {
        idDoctor = req.params.id,
        name,
        sex,
        age,
        cpf,
        rg,
        phone,
        address,
        cep,
        city,
        number,
        speciality,
        crm,
      } = req.body

      const data = {
        idDoctor,
        name,
        sex,
        age,
        cpf,
        rg,
        phone,
        address,
        cep,
        city,
        number,
        speciality,
        crm,
      }

      //Inserção de doutor no MongoDB

      Doctor.create(data, (error) => {
        error
          ? res.status(400).json({
              error: true,
              message: 'Error when trying to enter a doctor in mongoDB  ',
            })
          : res.status(200).json({
              error: false,
              message: 'Successfully registered doctor ',
            })
      })

      Doctor.updateOne({ _id: data.idDoctor }, data)
    
    }
  }
  async update(req, res) {
    const id_verify = req.params.id
    const {
      idDoctor = req.params.id,
      name,
      sex,
      age,
      cpf,
      rg,
      phone,
      address,
      cep,
      city,
      number,
      speciality,
      crm,
    } = req.body

    const doctor = {
      idDoctor,
      name,
      sex,
      age,
      cpf,
      rg,
      phone,
      address,
      cep,
      city,
      number,
      speciality,
      crm,
    }

    //todo: validação dos dados
    let schema = yup.object().shape({
      idDoctor: yup.string(),
      name: yup.string().required(),
      sex: yup.string().required(),
      age: yup.number().required(),
      cpf: yup.string().required(),
      rg: yup.string().required(),
      phone: yup.string().required(),
      address: yup.string().required(),
      cep: yup.string().required(),
      city: yup.string().required(),
      number: yup.number().required(),
      speciality: yup.string().required(),
      crm: yup.number().required(),
    })

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({
        error: true,
        message: 'Invalid format data ',
      })
    } else {
      try {
        const updatedDoctor = await Doctor.updateOne({ _id: id_verify }, doctor)

        if (updatedDoctor.matchedCount === 0) {
          res.status(422).json({ message: 'Doutor não encontrado!' })
          return
        }

        res.status(200).json({ doctor: doctor })
      } catch (err) {
        res.status(500).json({ message: `${err}` })
      }
    }
  }
  async delete(req, res) {
    const id = req.params.id

    try {
      const deleteDoctor = await Doctor.deleteOne({ _id: id })

      if (deleteDoctor.matchedCount === 0) {
        res.status(422).json({ message: 'Doutor não encontrado!' })
        return
      }

      res.status(200).json({ doctor: 'deletado com sucesso' })
    } catch (err) {
      res.status(500).json({ message: `${err}` })
    }
  }
}

module.exports = new DoctorController()
