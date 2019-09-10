export class Rol {

    constructor (_id = '', perfil_name = ''){
        this._id =_id;
        this.perfil_name = perfil_name;
    }

    _id: string;
    perfil_name: string;

}
