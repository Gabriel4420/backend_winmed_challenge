const { Router } = require('express')
const LoginController = require('../controllers/LoginController')
const UserController = require('../controllers/UserController')
const DoctorController = require('../controllers/DoctorController')
const ClinicController = require('../controllers/ClinicController')

const AuthMiddleware = require('../middlewares/AuthMiddleware')
const routes = new Router()



routes.post('/register/doctor',AuthMiddleware, DoctorController.store)
routes.post('/register/clinic',AuthMiddleware, ClinicController.store)

routes.get('/doctors',AuthMiddleware,DoctorController.show)
routes.get('/clinics',AuthMiddleware,ClinicController.show)

routes.delete('/delete/doctor/:id',AuthMiddleware, DoctorController.delete)
routes.delete('/delete/clinic/:id',AuthMiddleware, ClinicController.delete)

routes.patch('/update/doctor/:id',AuthMiddleware, DoctorController.update)
routes.patch('/update/clinic/:id',AuthMiddleware, ClinicController.update)

routes.post('/user', UserController.store)
routes.get('/hello', UserControler.hello),
routes.get('/users', AuthMiddleware, UserController.show)

routes.post('/login', LoginController.index)


module.exports = routes
