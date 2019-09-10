const { Router } = require('express');
const path = require('path');
const { unlink } = require('fs-extra');
const router = Router();
const Product = require('../models/product')

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.post('/', async (req, res) => {
    const product = new Product({
        codigo: req.body.codigo,
        title: req.body.title,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precio: req.body.precio,
        filename: req.file.filename,
        path: '/productos/' + req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
    });

    await product.save();
    res.json({
        'status': 'Producto Saved'
    });
});
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const product = {
        codigo: req.body.codigo,
        title: req.body.title,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precio: req.body.precio,
        filename: req.file.filename,
        path: '/productos/' + req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
    };

    await Product.findByIdAndUpdate(id, { $set: product }, { new: true });
    res.json({ status: 'Producto Updated' });
});

router.delete('/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./server/uploads/' + product.path));
    res.json({ status: 'Producto Deleted' });
});

router.get('/imagen/:filename', async (req, res) => {
    const ruta = path.join(__dirname, '../uploads/productos/', req.params.filename);

    return res.sendFile(ruta);
});

module.exports = router;