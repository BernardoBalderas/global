const Rol = require('../models/rol');
const rolCtrl = {};

rolCtrl.getRoles = async ( req, res) => {
    const roles = await Rol.find();
    res.json(roles);
};

rolCtrl.createRoles = async (req, res) => {
   const rol = new Rol ({
        perfil_name: req.body.perfil_name
   });
   await rol.save()
   res.json({
       'status': 'Rol Saved'
   });
};

rolCtrl.getRol = async (req, res) => {
  const rol = await Rol.findById(req.params.id);
    res.json(rol);
}
rolCtrl.editRol = async (req, res) => {
    const { id } = req.params;
    const rol = {
        perfil_name: req.body.perfil_name
    };

   await Rol.findByIdAndUpdate(id, {$set: rol}, {new: true});
    res.json({status: 'Rol Updated'});
};

rolCtrl.deleteRol = async (req, res) => {
   await Rol.findByIdAndRemove(req.params.id);
    res.json({status: 'Rol Deleted'});
}
module.exports = rolCtrl;
