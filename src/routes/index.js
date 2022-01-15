const { Router } = require('express')
const LoginController = require('../controllers/LoginController')
const UserController = require('../controllers/UserController')
const DoctorController = require('../controllers/DoctorController')
const ClinicController = require('../controllers/ClinicController')

const AuthMiddleware = require('../middlewares/AuthMiddleware')
const routes = new Router()

/* o que vou fazer pra consertar isso */

routes.post('/register_doctor', AuthMiddleware, DoctorController.store)
routes.post('/register_clinic', AuthMiddleware, ClinicController.store)

routes.get('/doctors', AuthMiddleware, DoctorController.show)
routes.get('/doctor/:id',AuthMiddleware, DoctorController.showOne)
routes.get('/clinics', AuthMiddleware, ClinicController.show)
routes.get('/clinic/:id', AuthMiddleware, ClinicController.showOne)

routes.delete('/delete_doctor/:id', AuthMiddleware, DoctorController.delete)
routes.delete('/delete_clinic/:id', AuthMiddleware, ClinicController.delete)

routes.patch('/update_doctor/:id', AuthMiddleware, DoctorController.update)
routes.patch('/update_clinic/:id', AuthMiddleware, ClinicController.update)

routes.post('/user', UserController.store)
routes.get('/hello', UserController.hello),
routes.get('/users', AuthMiddleware, UserController.show)
routes.get('/users', AuthMiddleware, UserController.showOne)

routes.post('/login', LoginController.index)

module.exports = routes
