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
// que se rellenará con un tipo real cuando creemos una variable.
type Paquete<t> = {
    remitente: string;
    contenido: t; // El tipo de 'contenido' dependerá de lo que pasemos a <t>
};

// 2. DEFINICIÓN DE LOS DATOS ESPECÍFICOS
type Libro = { titulo: string; autor: string };
type Ropa = { tipo: string; talla: string };

// Creamos un objeto que sigue la estructura de Libro
let Libro1: Libro = {
    titulo: "La tregua", 
    autor: "Mario Benedetti"
};

// 3. USO DEL GENÉRICO
// Al poner <Libro>, le decimos a TypeScript: 
// "Para esta variable, la 't' de Paquete es un 'Libro'".
let paquete1: Paquete<Libro> = {
    remitente: "Carlos",
    contenido: Libro1 // TS valida que Libro1 coincida con el tipo Libro
};

console.log(paquete1);