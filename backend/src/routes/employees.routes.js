const { Router } = require('express');
const router = Router();


const employeesCtrl = require('../controllers/employees.controller.js');


router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);
// router.get('/hello', (req, res) => res.send('hello'))
// router.get('/hello', (req, res) => res.send('hello'))
// router.get('/hello', (req, res) => res.send('hello'))

module.exports = router;