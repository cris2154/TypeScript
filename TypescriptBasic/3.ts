/**
 * TEMA 1: HERENCIA DE INTERFACES 
 * La herencia permite reutilizar estructuras. Al usar 'extends', la interfaz hija
 * hereda todas las propiedades de la madre y añade las suyas propias.
 */

interface Estadisticas {
    hp: number;
}

interface Personaje extends Estadisticas {
    nombre: string;
    nivel: number;
}

// Interfaz final que combina Estadisticas + Personaje + mana
interface MagoI extends Personaje {
    tipo: "mago"; // Literal de tipo para discriminación
    mana: number;
}

/**
 * TEMA 2: TYPE GUARDS (Guardianes de Tipo) 
 * Sirven para confirmar el tipo de un objeto en tiempo de ejecución.
 * El operador 'is' le dice a TS: "Si esta función devuelve true, trata al objeto como MagoI".
 */

function esMago(obj: any): obj is MagoI {
    return (
        obj !== null &&
        typeof obj === "object" &&
        "mana" in obj // Verificamos si existe la propiedad clave del mago
    );
}

/**
 * TEMA 3: CLASES Y MODIFICADORES DE ACCESO 
 * Las clases son plantillas para crear objetos con lógica propia.
 */

class HeroeBase {
    // 'public': accesible desde fuera.
    // 'private': SOLO accesible dentro de esta clase.
    // 'protected': accesible aquí y en clases que hereden (hijos).
    constructor(
        public nombre: string,
        private id: number,
        protected poderSecreto: string
    ) {}

    public saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

class Aprendiz extends HeroeBase {
    public usarSecreto() {
        // Puede acceder a 'poderSecreto' por ser protected, pero NO a 'id' por ser private.
        console.log(`Usando mi secreto: ${this.poderSecreto}`);
    }
}

/**
 * TEMA 4: FUNCIONES GENÉRICAS 
 * Permiten crear funciones que funcionan con múltiples tipos sin perder la seguridad.
 * La <T> es una variable que captura el tipo que le pasamos.
 */

// Esta función recibe una lista y un guardián, y devuelve la lista filtrada con el tipo correcto.
function filtrarEntidades<T>(lista: any[], guardian: (item: any) => item is T): T[] {
    return lista.filter(guardian);
}

/**
 * TEMA 5: GENÉRICOS CON RESTRICCIONES (CONSTRAINTS) 
 * A veces no queremos CUALQUIER tipo, sino uno que cumpla ciertos requisitos.
 * 'T extends Icosa' obliga a que el tipo tenga al menos las propiedades de 'Icosa'.
 */

interface Icosa {
    nombre: string;
}

class Contenedor<T extends Icosa> {
    constructor(public contenido: T) {}

    // Gracias al 'extends', TS sabe con seguridad que 'contenido' tiene un '.nombre'
    imprimirNombre() {
        console.log(`El objeto se llama: ${this.contenido.nombre}`);
    }
}