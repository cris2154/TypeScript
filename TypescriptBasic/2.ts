 
// //norrowing o estrechamiento de tipo 
// //basicamente typescript deduce que tipo de dato es al momento de crear una llamada de funcion 


// function ProcesarDato(valor : string|number):void{
//     if(typeof valor === "string"){
//         console.log(valor.length)
//     }
// }

// ProcesarDato("pepe")
// function saludar(nombre: string | null) {
//   if (nombre) {
//     // Si 'nombre' existe (no es null ni ""), TS lo trata como string
//     console.log(`Hola ${nombre.toUpperCase()}`);
//   }
// }
// saludar("pepe")

// //en objetos 
// type Pajaro = { volar: () => void };
// type Pez = { nadar: () => void };

// function mover(animal: Pajaro | Pez) {
//   if ("volar" in animal ) {
//     // in si la propiedad volar esta en uno de los typos espesicifacos en animal
//     // Aquí TS sabe que es un Pajaro
//     animal.volar();
//   } else {
//     // Aquí sabe que es un Pez
//     animal.nadar();
//   }
// }

// //ejercisio
// function obtenerLongitud(dato: string | number) {
//     // 1. ¿Cómo comprobamos si 'dato' es un arreglo?
//     if (typeof dato === "number") {
//         // Aquí TS sabe que es string[] 
//         console.log("tu numero es :",dato);
//     } else {
//         // 2. ¿Qué sabe TS que es 'dato' aquí dentro?
//         console.log("Cantidad de letras:", dato.length);
//     }
// }

// let cosas = ["pepe","carlos"]
// let cosa = "peluquero"
// let numeroRandon = 88

// obtenerLongitud(numeroRandon)

// //enums o enumeradores 
// //genera una lista finita de datos enumerandorlos desde 0 o definiendo su respuesta con =
// enum EstadoTransaccion {
//     Pendiente="Pendiente", // 0
//     Pagado="Pagado",    // 1
//     Error = "errpr"     // 2
// }

// let miPago = EstadoTransaccion.Pagado;

// if (miPago === EstadoTransaccion.Pagado) {
//     console.log(EstadoTransaccion.Pagado);//"1"//ahora es "pagado" al definir su valor
// }

// // Con INTERFACE
// interface Personaje {
//     nombre: string;
// }

// interface Personaje { // Se fusiona con la anterior
//     vida: number;
// }

// // Con TYPE
// type Guerrero = {
//     ataque: number;
// } & Personaje; // Usamos intersección para "heredar"

// let carlos : Personaje = {
//     nombre : "pepe",
//     vida : 100
// }

// let pedro : Guerrero ={
//     ataque : 55,
//     nombre : "pedro",
//     vida : 100
// }

// //ejercisio 

//   const enum Clase {
//       Mago = "MAGO",
//       Guerrero = "GUERRERO",
//       Arquero = "ARQUERO"
//   }

//   interface Heroe {   
//       nombre: string;
//       tipo: Clase;
//  }

// // function activarHabilidad(personaje : Heroe) {
// //     if(personaje.tipo === "ARQUERO"){
// //         console.log("tu personaje es ",personaje.tipo)
// //     }else(console.log("tu personaje no es un arquero"))
// // }

// // let Martin : Heroe ={
// //     nombre: "martin",
// //     tipo : Clase.Arquero
// // }

// // activarHabilidad(Martin)


// // Imaginemos que esto viene de una base de datos externa
// const respuestaApi: any = { nombre: "Legolas", tipo: "ARQUERO" };

// // Le decimos a TS: "Confía en mí, esto es un Heroe"
// const nuevoHeroe = respuestaApi as Heroe; 

// console.log(nuevoHeroe.tipo); // Ahora TS nos da autocompletado

// let datoDesconocido : any = 100;
// let puntos = datoDesconocido as number


// const elemento = document.getElementById("mi-id");//el typo por defecto del elemento el htmlelement 
// //si yo quiera ejecutar funciones o propiedas de imputelement no me dejaria por eso usamos instanceof 


// if (elemento instanceof HTMLInputElement) {
//     // Narrowing exitoso: TS sabe que es un INPUT ⌨️
//     console.log(input.value); 
// } else if (elemento instanceof HTMLAnchorElement) {
//     // Narrowing exitoso: TS sabe que es un ENLACE 🔗
//     console.log(elemento.href);
// }

// // Type Predicate Type Guards (Guardias de Tipo)
// function esHeroe(objeto: any): objeto is Heroe {
//     return (
//         typeof objeto.nombre === "string" &&
//         (objeto.tipo === Clase.Mago || 
//          objeto.tipo === Clase.Guerrero || 
//          objeto.tipo === Clase.Arquero)
//     );
// }

// const datosRecibidos: any = { nombre: "Aragorn", tipo: "GUERRERO" };

// if (esHeroe(datosRecibidos)) {
//     // ✨ Aquí adentro, TypeScript sabe que datosRecibidos es Heroe
//     console.log(datosRecibidos.tipo); 
// } else {
//     console.log("Los datos no tienen el formato de un héroe");
// }

// //ejercicio 
// interface Estadisticas {
//     hp: number;
// }

// function esEstadistica(obj: any): obj is Estadisticas {
//     return (
//             typeof obj.hp ==="number"
//     );
// }

