//Entrega Nro. 2 - Manejo de archivos.
// NOTA: Los metodos deleteById y deleteAll fueron comentados adrede ya que crear y borrar sobre los mismos registros no tiene sentido.
// por favor tomese la libertad de crear suficientes registros con los metdos save y a partir de ahi puede jugar con el resto.

const fs = require('fs')

class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
    }

    save(title,price,thumbnail){
        let json_file = []
        let file_check = fs.statSync(`${this.archivo}`);

        if(file_check.size <= 0){
            json_file = [{"id":"0", "title":`${title}`,"price":`${price}`,"thumbnail":`${thumbnail}`}]
            fs.writeFileSync(`${this.archivo}`, JSON.stringify(json_file, null, 2))
            console.log("save: numero de id: 0")
        } else {
            const json_file = JSON.parse(fs.readFileSync(`${this.archivo}`))
                if(json_file.length > 0){
                    let id = parseInt(json_file.length - 1)
                    json_file.push({"id":`${++id}`,"title":`${title}`,"price":`${price}`,"thumbnail":`${thumbnail}`})
                    fs.writeFileSync(`${this.archivo}`, JSON.stringify(json_file, null, 2))
                    console.log("save: numero de id:"+id++)                
                } else { 
                    console.log("save: Archivo corrupto!")
                }
        }

    }

    getById(id){
        const json_file = JSON.parse(fs.readFileSync(`${this.archivo}`))
        const find_obj = json_file.find(obj => obj.id == id)

        if(find_obj){
            console.log(find_obj)
        } else {
            console.log("getById: Registro inexistente.")
        }
    }

    getAll(){
        const json_file = JSON.parse(fs.readFileSync(`${this.archivo}`))
        console.log(json_file)
    }

    deleteById(id){
        const json_file = JSON.parse(fs.readFileSync(`${this.archivo}`))
        const find_obj = json_file.findIndex(obj => obj.id == id)
        if(find_obj > -1){
        json_file.splice(find_obj, 1)
        fs.writeFileSync(`${this.archivo}`, JSON.stringify(json_file, null, 2))
        } else {
            console.log("deleteById: Registro inexistente.")
        }
    }

    deleteAll(){
        fs.writeFileSync(`${this.archivo}`, '')
        console.log("deleteAll: Se eliminaron todos los registros.")
    }
}

//Paso el nombre del archivo.
const escribo = new Contenedor('productos.json')

//Metodos.
//Para guardar un registro.
escribo.save('Libro X','23.12','imagen1.url')

//Para buscar un registro.
escribo.getById('23')

//Para traerme todos los registros.
escribo.getAll()

//Para borrar un registro por iD.
//escribo.deleteById(5)

//Para borrar todos los registros dentro del archivo.
//escribo.deleteAll()