const { Router } = require('express');
const path = require('path');
const { unlink } = require('fs-extra');
const router = Router();
const Service = require('../models/service')

router.get('/', async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

router.post('/', async (req, res) => {
    const service = new Service({
        title: req.body.title,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        filename: req.file.filename,
        path: '/productos/' + req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
    });

    await service.save();
    res.json({
        'status': 'Paquete Saved'
    });
});
router.get('/:id', async (req, res) => {
    const service = await Service.findById(req.params.id);
    res.json(service);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const service = {
        title: req.body.title,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        filename: req.file.filename,
        path: '/productos/' + req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
    };

    await Service.findByIdAndUpdate(id, { $set: service }, { new: true });
    res.json({ status: 'Paquete Updated' });
});

router.delete('/:id', async (req, res) => {
    const service = await Service.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./server/uploads/' + service.path));
    res.json({ status: 'Paquete Deleted' });
});

router.get('/img/:filename', async (req, res) => {
    const ruta = path.join(__dirname, '../uploads/productos/', req.params.filename);
    return res.sendFile(ruta);
});

module.exports = router;