// // herencia de interfaces
// //en typescript la herencia se manja mejor con interfaces al decir la palabra reserbada de "extends"
// //typescrip agrega las propiedades de la interface de que biene a la nueva interface 
// //ejemplo :


// // 1. El plano base 🧱
// interface Estadisticas {
//     hp: number;
// }

// // 2. El plano intermedio 👤
// interface Personaje extends Estadisticas {
//     nombre: string;
//     nivel: number;
// }


// interface MagoI extends Personaje {
//     mana : number;
// }


// //ejercicio 1
// function esMago(obj: any): obj is MagoI {
//     return (
//         obj !== null &&
//         typeof obj === "object" &&
//         "mana" in obj &&           // Comprobamos si existe la propiedad única
//         typeof obj.mana === "number"
//     );
// }

// let dato :any = {nombre : "juan",
//                 nivel : 24,
//                 hp : 50 ,
//                 mana : 50
// }

// // Si solo hacemos esto, TS sigue viendo a 'dato' como 'any'
// esMago(dato); 

// // Pero si lo usamos en un bloque condicional:
// if (esMago(dato)) {
//     // ✨ Aquí ocurre la magia: TS sabe que 'dato' es 'MagoI'
//     console.log(`El mago ${dato.nombre} tiene ${dato.mana} de mana.`);
// } else {
//     // Aquí TS sabe que NO es un mago
//     console.log("Este personaje no tiene poderes mágicos.");
// }


// // 1. Definimos el Guerrero
// interface Guerrero extends Personaje {
//     fuerza: number;
// }

// // 2. Creamos un tipo de unión
// type Heroe = MagoI | Guerrero;

// interface MagoI extends Personaje {
//     tipo: "mago"; // Valor literal fijo
//     mana: number;
// }

// interface Guerrero extends Personaje {
//     tipo: "guerrero"; // Valor literal fijo
   
// }

// let aventurero : Heroe = {
//     nombre: "pepe",
//     nivel: 52,
//     hp : 100,
//     tipo : "guerrero",
//     fuerza : 25
// }

// if (esMago(aventurero)) {
//     // ✨ Aquí ocurre la magia: TS sabe que 'dato' es 'MagoI'
//     console.log(`El mago ${dato.nombre} tiene ${dato.mana} de mana.`);
// } else {
//     console.log (aventurero.fuerza);
// }

// interface Volador {
//     velocidad: number;
//     volar(): void;
// }

// // La clase se compromete a cumplir con 'Volador'
// class Avion implements Volador {
//     velocidad: number = 800;

//     volar() {
//         console.log("El avión está despegando...");
//     }
// }

// // 1. El Contrato (Interfaz) 📜
// // Define qué debe tener cualquier entidad que actúe como un Guerrero.
// interface IGuerrero {
//     fuerza: number;
//     atacar(): void; // Un método que no devuelve nada
// }

// // 2. La Fábrica (Clase) 🏗️
// // La clase 'Guerrero' implementa la interfaz, obligándonos a escribir la lógica.
// class Guerrero implements IGuerrero {
//     // Propiedades con modificadores de acceso
//     public nombre: string;
//     public nivel: number;
//     public fuerza: number;

//     constructor(nombre: string, nivel: number, fuerza: number) {
//         this.nombre = nombre;
//         this.nivel = nivel;
//         this.fuerza = fuerza;
//     }

//     // Implementación del método de la interfaz
//     atacar() {
//         console.log(`${this.nombre} ataca con una fuerza de ${this.fuerza}! ⚔️`);
//     }
// }

// // 3. Uso de la clase
// const miGuerrero = new Guerrero("Conan", 10, 85);
// miGuerrero.atacar();


// paramete properties 
// class tanke {
//     constructor(public nombre: string) {} // ✅ ¡TS hace todo el trabajo por ti!
// }



class Personaje {
    constructor(
        public nombre: string,        // Cualquiera lo ve
        private id: number,          // Solo Personaje lo conoce
        
        protected secreto: string ,   // Personaje y sus hijos (como Mago) lo conocen
    ) 
    
    {
        
    }
    revelarid(){
        console.log(this.id)
    }
}
class Mago extends Personaje {
    constructor(nombre: string, id: number, secreto: string) {
        super(nombre, id, secreto);
    }

    revelarSecreto() {
        // ✅ Esto funciona porque es 'protected'
        this.secreto = "He cambiado el secreto familiar"; 
        console.log(this.secreto)
        // ❌ Esto daría ERROR porque es 'private' en el padre
        // this.id = 999; 
    }
}

const merlin = new Mago("Merlín", 1, "Vuelo");
// ❌ Esto daría ERROR: 'secreto' no es accesible fuera de la clase
// merlin.secreto = "Hacker";
