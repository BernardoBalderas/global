const { Router } = require('express');
const path = require('path');
const { unlink } = require('fs-extra');
const router = Router();
const Image = require('../models/publicidad')

router.get('/', async (req, res) => {
    const images = await Image.find();
    res.json(images);
});

router.post('/', async (req, res) => {
    const image = new Image({
        title: req.body.title,
        descripcion: req.body.descripcion,
        filename: req.file.filename,
        path: '/productos/' + req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
    });

    await image.save();
    res.json({
        'status': 'Producto Saved'
    });
});
router.get('/:id', async (req, res) => {
    const image = await Image.findById(req.params.id);
    res.json(image);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const image = {
        title: req.body.title,
        descripcion: req.body.descripcion,
        filename: req.file.filename,
        path: '/productos/' + req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
    };

    await Image.findByIdAndUpdate(id, { $set: image }, { new: true });
    res.json({ status: 'Image Updated' });
});

router.delete('/:id', async (req, res) => {
    const image = await Image.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./server/uploads/' + image.path));
    res.json({ status: 'Image Deleted' });
});

router.get('/image/:filename', async (req, res) => {
    const ruta = path.join(__dirname, '../uploads/productos/', req.params.filename);

    return res.sendFile(ruta);
});

module.exports = router;