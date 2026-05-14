/**
 * TEMA 1: NARROWING (Estrechamiento de tipos)
 * Es la capacidad de TypeScript para deducir un tipo más específico 
 * dentro de una estructura de control (if, switch, etc.).
 */

// 1.1 Narrowing con typeof (Primitivos)
function procesarDato(valor: string | number): void {
    if (typeof valor === "string") {
        // Aquí TS sabe que 'valor' es estrictamente string
        console.log("Longitud del texto:", valor.length);
    } else {
        // Aquí TS sabe que 'valor' es number
        console.log("El número es:", valor);
    }
}

// 1.2 Narrowing por Veracidad (Truthiness)
function saludar(nombre: string | null) {
    if (nombre) {
        // Si entra aquí, 'nombre' no es null ni una cadena vacía
        console.log(`Hola ${nombre.toUpperCase()}`);
    }
}

// 1.3 Operador 'in' (Chequeo de propiedades en objetos)
type Pajaro = { volar: () => void };
type Pez = { nadar: () => void };

function mover(animal: Pajaro | Pez) {
    if ("volar" in animal) {
        // TS deduce que es un Pajaro
        animal.volar();
    } else {
        // TS deduce que es un Pez
        animal.nadar();
    }
}

/**
 * TEMA 2: ENUMS (Enumeradores)
 * Permiten definir un conjunto de constantes con nombre, 
 * facilitando la lectura del código.
 */

enum EstadoTransaccion {
    Pendiente = "Pendiente",
    Pagado = "Pagado",
    Error = "Error"
}

const miPago = EstadoTransaccion.Pagado;

/**
 * TEMA 3: INTERFACES VS TYPES
 * Las interfaces permiten "fusión de declaración", los tipos usan "intersecciones".
 */

// Fusión de interfaces: se unen automáticamente
interface Personaje {
    nombre: string;
}
interface Personaje {
    vida: number;
}

// Intersección de tipos: combina estructuras
type Guerrero = {
    ataque: number;
} & Personaje;

/**
 * TEMA 4: ASERCIONES Y GUARDIAS DE TIPO (Type Guards)
 * Se usan cuando necesitamos asegurar a TS que un objeto cumple un contrato.
 */

const enum Clase {
    Mago = "MAGO",
    Guerrero = "GUERRERO",
    Arquero = "ARQUERO"
}

interface Heroe {
    nombre: string;
    tipo: Clase;
}

// 4.1 Aserción de tipo (Type Assertion)
// Útil cuando recibimos datos externos (APIs) de tipo 'any'
const respuestaApi: any = { nombre: "Legolas", tipo: "ARQUERO" };
const nuevoHeroe = respuestaApi as Heroe;

// 4.2 Predicado de tipo (Type Predicate)
// Una función que confirma si un objeto es de un tipo específico
// function esHeroe(objeto: any): objeto is Heroe {
//     return (
//         objeto !== null &&
//         typeof objeto.nombre === "string" &&
//         Object.values(Clase).includes(objeto.tipo)
//     );
// }

// 4.3 Instanceof (Narrowing para clases y elementos del DOM)
const elemento = document.getElementById("mi-id");
if (elemento instanceof HTMLInputElement) {
    // Aquí TS habilita propiedades específicas de inputs
    console.log(elemento.value);
}