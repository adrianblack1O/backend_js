//Entrega 1 - Clases

class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [libros];
        this.mascotas = [mascotas];
    }

    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(animal){
        this.mascotas.push(animal)
    }

    countMascotas(){
        let cantM = this.mascotas.length;
        console.log(cantM)
    }

    addBook(titulo, nombre_autor){
        this.libros.push({nombre:titulo, autor:nombre_autor})
    }

    getBookNames(){
        let titulos = []
        this.libros.forEach(libro => {
            titulos.push(libro.nombre)
        })
        console.log(titulos)
    }
}

const usuario = new Usuario('Adrian','Sosa',{nombre:'1984', autor:'George Orwell'},'perro')

usuario.getFullName()
usuario.addMascota('gato')
usuario.countMascotas()
usuario.addBook('Farenheit 451', 'Ray Bradbury')
usuario.getBookNames()