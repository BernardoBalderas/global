export class Publicidad {

    constructor (_id = '', title = '', descripcion = '',  
    filename = '', path = '', originalname = '', mimetype = '', size = 0){
        this._id =_id;
        this.title = title;
        this.descripcion = descripcion;
        this.filename = filename;
        this.path = path;
        this.originalname = originalname,
        this.mimetype = mimetype,
        this.size = size
    }

    _id: string;
    title: string;
    descripcion: string;
    filename: string;
    path:  string;
    originalname: string;
    mimetype: string;
    size: number;
}
