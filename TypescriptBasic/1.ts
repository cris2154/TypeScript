/**
 * ==========================================
 * 1. TIPOS BÁSICOS Y FUNCIONES
 * ==========================================
 */

// Tipos primitivos
let nombre: string = "Cristhian";
let numero: number = 42;
let boleano: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;

// Tipos de colecciones
let arreglo: string[] = ["maria", "pedro", "cris"];
let tupla: [string, number] = ["hola", 42]; // Orden y tipo fijos

// Funciones: Definimos tipos de parámetros y de retorno
function saludar({ nombre }: { nombre: string }): string {
    console.log(`Hola, ${nombre}!`);
    return nombre;
}

/**
 * ==========================================
 * 2. TIPOS PERSONALIZADOS Y ESTRUCTURAS
 * ==========================================
 */

// Template String Types para patrones de texto
type IdUsuario = `${string}-${string}-${number}`;

interface Personaje {
    nombre: string;
    vida: number;
}

// Intersección de tipos (combinar estructuras)
// type Guerrero = { ataque: number } & Personaje;

// const pedro: Guerrero = {
//     ataque: 55,
//     nombre: "Pedro",
//     vida: 100
// };

/**
 * ==========================================
 * 3. NARROWING (ESTRECHAMIENTO DE TIPOS)
 * ==========================================
 */

// Type Predicate: Función que ayuda a TS a identificar un tipo
function esGuerrero(obj: any): obj is Guerrero {
    return obj !== null && typeof obj.ataque === "number";
}

function activarHabilidad(entidad: Personaje | Guerrero) {
    if (esGuerrero(entidad)) {
        // Aquí TS sabe que es Guerrero y tiene 'ataque'
        console.log(`Ataque especial de ${entidad.ataque}`);
    } else {
        console.log(`${entidad.nombre} no puede atacar.`);
    }
}

/**
 * ==========================================
 * 4. CLASES Y MODIFICADORES DE ACCESO
 * ==========================================
 */

interface IEntidad {
    id: number;
}

class Rey implements IEntidad {
    constructor(
        public id: number,          // Accesible desde fuera
        private tesoro: number,     // Solo accesible en esta clase
        protected claveReal: string // Accesible aquí y en hijos (herencia)
    ) {}
}

class Principe extends Rey {
    verClave() {
        return this.claveReal; // OK: protected permite acceso a herederos
    }
    // verTesoro() { return this.tesoro; } // ERROR: id es privado del Rey
}

/**
 * ==========================================
 * 5. GENÉRICOS Y UTILIDADES AVANZADAS
 * ==========================================
 */

// Clase Genérica con restricción (T debe tener 'nombre')
interface Icosa {
    nombre: string;
}

// class Contenedor<T extends Icosa> {
//     constructor(public contenido: T) {}
// }

// Type Indexing: Extraer tipo de una propiedad
type Posicion = { x: number; y: number };
type CoordenadaX = Posicion["x"]; // El tipo es 'number'

// ReturnType: Obtener el tipo de retorno de una función
function crearConfig() {
    return { puerto: 3000, env: "prod" };
}
type Config = ReturnType<typeof crearConfig>;
