// //ejemplo de una funcion en ts 
// function saludar({nombre}:{nombre:string}):string {
//      console.log(`Hola, ${nombre}!`);
//      return nombre;
// }
// saludar({nombre: "Mundo"});

// // se especifica los tipos que recibe la función como el tipo de dato que devuelve si lo necesita en este ejemplo se lo añade por fines demostrativos 


// //Ejemplos de cada tipo de dato en ts

// let nombre: string = "Cristhian";

// let numero : number =42;
// let boleano : boolean = true;
// let arreglo : string[] = ["maria","pedro","cris"]
// let tupla : [string,number] = ["hola", 42];
// let objeto : {nombre: string, edad: number} = {nombre: "Cristhian", edad: 42};
// let nulo : null = null;
// let indefinido : undefined = undefined;
// let cualquiera : any = "puede ser cualquier cosa";
// let vacio : void = undefined;



// let valor : unknown = "hi";
// if(typeof valor === "string"){
//     console.log(valor.toLowerCase());
// }

// let nombre: string = "Cristhian";
// let numero : number =42;
// let boleano : boolean = true;
// let arreglo : string[] = ["maria","pedro","cris"]
// let tupla : [string,number] = ["hola", 42];
// let objeto : {nombre: string, edad: number} = {nombre: "Cristhian", edad: 42};
// let nulo : null = null;
// let indefinido : undefined = undefined;
// let cualquiera : any = "puede ser cualquier cosa";
// let vacio : void = undefined;

// type Idnunero = `${string}-${string}-${number}`;

// type Persona = {
//     nombre : string,
//     edad : number,
//     readonly id? : Idnunero,

// }

// let persona1 : Persona ={
//     nombre : "juan",
//     edad : 20 ,
// }

// let persona2 : Persona ={
//     nombre : "maria",
//     edad : 30,
//     id : "maria-palacios-42"
// }   


// //ejercisio de tipos personalizados get post

// type method = "GET" | "POST" ;
// type Resource  = "Users" | "Orsders";

// type apiroutes = `${method}/${Resource}`;


// type Getrequest= {
//     route : `GET/${Resource}`,
//     readonly id : string,
//     playload? : never; // en este caso se especifica que el playload no puede ser utilizado en
//     //  las peticiones GET ya que no se envian datos en el cuerpo de la solicitud, mientras que
//     //  en las peticiones POST si se pueden enviar datos en el cuerpo de la solicitud por lo que
//     //  se especifica como un objeto opcional.
//     };
// type Postrequest ={
// route : `POST/${Resource}`,
// readonly id : string,
// playload : object,
// };


// type request = Getrequest | Postrequest;

// let getUserRequest : request = {
//     route : "GET/Users",
//     id : "123",
// }

// let postOrderRequest : request = {
//     route : "POST/Orsders",
//     id : "456",
//     playload : {productId: "789", quantity: 2},
// }

// let errorRequest : request ={
//     route :"POST/Orsders",
//     id : "128",
// }
// //error señalado por type El tipo '{ route: "POST/Orsders"; id: string; }' no se puede asignar al tipo 'request'
// // La propiedad "playload" falta en el tipo "{ route: "POST/Orsders"; id: string; }", pero es obligatoria en el tipo "Postrequest".



//Gerenericos en type paquete<t>
// 1. DEFINICIÓN DEL GENÉRICO
// La <t> es un "parámetro de tipo". Funciona como un molde vacío
// // que se rellenará con un tipo real cuando creemos una variable.
// type Paquete<t> = {
//     remitente: string;
//     contenido: t; // El tipo de 'contenido' dependerá de lo que pasemos a <t>
// };

// // 2. DEFINICIÓN DE LOS DATOS ESPECÍFICOS
// type Libro = { titulo: string; autor: string };
// type Ropa = { tipo: string; talla: string };

// // Creamos un objeto que sigue la estructura de Libro
// let Libro1: Libro = {
//     titulo: "La tregua", 
//     autor: "Mario Benedetti"
// };

// // 3. USO DEL GENÉRICO
// // Al poner <Libro>, le decimos a TypeScript: 
// // "Para esta variable, la 't' de Paquete es un 'Libro'".
// let paquete1: Paquete<Libro> = {
//     remitente: "Carlos",
//     contenido: Libro1 // TS valida que Libro1 coincida con el tipo Libro
// };

// console.log(paquete1);
// ejercio en funciones 
// 1. Definimos la función indicando que recibe un arreglo de T
// function procesarLista<T>(lista: T[]): void {
    
//     for (const elemento of lista) {
//         console.log("Procesando:", typeof elemento);//devuelve un string con el tipo del tipo de dato 
//         if (typeof elemento === "number") {
//             console.log("Es un número", elemento);
//             break
//         } 
        
//         if (typeof elemento === "string") {
//             console.log("Es un texto", elemento);
//             break
//         }
//     }
// }

// // Pruebas
// const misNumeros = [1, 2, 3];
// procesarLista(misNumeros);

// const misNombres = ["Cris", "Maria"];
// procesarLista(misNombres);

// //INTERSECTION TYPE 
// // definimos un nuevo tipo que deve tener si o si las propiedades de los tipos que le pasemos ejemplo : 

// type Nombre ={nombre:string};
// type Edad={edad:number};
// type PersonaCompleta =Nombre & Edad

// let usuario : PersonaCompleta ={
//     nombre : "pepe",
//     edad : 21 
// }






// //Type Indexing
// //extrae una de los propiedades de un tipo ya creado para usarlo en otro indexandolo 
// type Producto = {
//     id: number,
//     info: {
//         nombre: string,
//         precio: number
//     }
// };

// // Queremos extraer el tipo de 'info'
// type ProductoInfo = Producto["info"]; 

// // Ahora puedo usarlo:
// const detalle: ProductoInfo = {
//     nombre: "Laptop",
//     precio: 1200
// };

// // otor ejemplo 

// type Pc ={
//     propietario : string,
//     componente : {
//         memoria : number
//         licencia : string
//     }
// }

// type PComponentes = Pc["componente"];

// let detalles : PComponentes = {
//     memoria :128,
//     licencia:"dvdfkmmv4"
// }


// //type of 
// //crea un tipo a parti de un objeto o dato ya creado 
// //al usarse en un dato devuelve un string con su tipo 
// //al usarse en un objeto devuelve un type con la composicion del objeto 

// const configuracionGlobal = {
//     env: "production",
//     puerto: 3000,
//     debug: false
// };

// // ¡TypeScript crea el tipo automáticamente mirando el objeto!
// type Config = typeof configuracionGlobal;

// const otraConfig: Config = {
//     env: "local",
//     puerto: 8080,
//     debug: true
// };
// // con un tipo de dato 

// let carro = "subaru"
// console.log(typeof carro )//string

//ejercios 

// const curso = {
//     titulo: "Master en TS",
//     duracion: 10,
//     clases: ["Intro", "Generics"]
// };
// //¿Cómo crearías un tipo llamado TipoCurso usando typeof?

// // ¿Cómo crearías un tipo llamado TipoClases que extraiga solo el tipo de la
// //  propiedad clases del objeto curso usando Type Indexing?

// type TipoCurso = typeof curso ;

// const Nuevocurso ={
    
//     titulo: "Master of the universe",
//     duracion: 100,
//     clases: ["Intro", "Generics"]
// }

// type TipoClases = TipoCurso["clases"]


//ReturnType
//A veces no te importa el objeto, sino lo que una función devuelve. T
// ypeScript tiene una utilidad llamada ReturnType.

// function CrearUsuario(){
//     return { id: 1, username: "Cris" };
// }

// type UsuarioNuevo = ReturnType<typeof CrearUsuario>;

// let usuario : UsuarioNuevo = {
//     id:1,
//     username:"pepe"
// }

// console.log(usuario)


//Arrays en type 
//para crear arrays como todo tipo de dato se tiene que definir que tipo de 
//dato tendra adentro ejemplo:
//por defecto crea un array con tipo any pero no apobrecha las ventajas del lenguaje

// let lenguajes =[]

// let lenguajes :string[] =[]  // solo strings dentro del array

// let lenguajes : string | number =[]  //toda el arreglo tiene que ser de uno de los tipos 


//let lenguajes :(string|number)[]=[] //el contenido de cada elementos puede ser cualquiere de los tipos


// lenguajes.push("ingles")

// lenguajes.push(21)

//ultimo ejercisio

// function obtenerEstado() {
//     return {
//         jugador: "Cris",
//         puntos: 100,
//         posicion: [5, 10] as [number, number] // Esto es una tupla
//     };
// }

// //Crea un tipo Estado usando ReturnType.

// //Crea un tipo Posicion usando Type Indexing sobre el tipo Estado.

// type Estado = ReturnType<typeof obtenerEstado>;
// type Posicion = Estado["posicion"];

