export class Service {
    
    constructor (_id = '', filename = '', path = '',  originalname ='',
    mimetype= '', size=0,  title= '', descripcion = '', precio = 0){
        this._id =_id;
        this.filename = filename;
        this.path = path;
        this.originalname = originalname;
        this.mimetype = mimetype;
        this.size = size;
        this.title = title;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    _id: string;
    filename : String;
    path: String;
    originalname: String;
    mimetype: String;
    size: Number;
    title: String;
    descripcion: String;
    precio: Number;

}
