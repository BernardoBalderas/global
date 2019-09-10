const express = require('express');
const router = express.Router();

const rol = require('../controllers/rol.controller');

router.get('/', rol.getRoles);
router.post('/', rol.createRoles);
router.get('/:id', rol.getRol);
router.put('/:id', rol.editRol);
router.delete('/:id', rol.deleteRol);

module.exports = router;