const Service = require('../models/service');
const serviceCtrl = {};

serviceCtrl.getServices = async ( req, res) => {
    const services = await Service.find();
    res.json(services);
};

serviceCtrl.createServices = async (req, res) => {
   const service = new Service ({
    paquete: req.body.paquete,
    cantidad: req.body.cantidad,
    date: req.body.date,
    direction: req.body.direction
   });
   await service.save()
   res.json({
       'status': 'Service Saved'
   });
};

serviceCtrl.getService = async (req, res) => {
  const service = await Service.findById(req.params.id);
    res.json(service);
}
serviceCtrl.editService = async (req, res) => {
    const { id } = req.params;
    const service = {
        paquete: req.body.paquete,
        cantidad: req.body.cantidad,
        date: req.body.date,
        direction: req.body.direction
    };

   await Service.findByIdAndUpdate(id, {$set: service}, {new: true});
    res.json({status: 'Service Updated'});
};

serviceCtrl.deleteService = async (req, res) => {
   await Service.findByIdAndRemove(req.params.id);
    res.json({status: 'Service Deleted'});
}
module.exports = serviceCtrl;
