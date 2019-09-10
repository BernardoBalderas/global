export class Product {
   
    constructor (_id = '', codigo = '', title = '', descripcion = '',  categoria ='', precio = 0, filename = '', path = '', originalname = '', mimetype = '', size = 0){
        this._id =_id;
        this.codigo = codigo;
        this.title = title;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.filename = filename;
        this.path = path;
        this.originalname = originalname,
        this.mimetype = mimetype,
        this.size = size
    }

    _id: string;
    codigo: string;
    title: string;
    descripcion: string;
    categoria: string;
    precio: number;
    filename: string;
    path:  string;
    originalname: string;
    mimetype: string;
    size: number;
}
