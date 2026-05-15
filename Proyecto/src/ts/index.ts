interface Icacion {
    id : string,
    nombre : string,
    archivo : File,
    caratula : string,
    fechaAgregado : number,
}
const estado = {
    listaReproduccion: [] as Icacion[],
    cancionActual: null as Icacion | null
};

const inputArchivo =  obtenerElemento('input-archivo', HTMLInputElement) ;
// const listaContenedor = document.getElementById('lista-canciones') as HTMLUListElement;
// const controlAudio = document.getElementById('control-audio') as HTMLAudioElement;
// const tituloActual = document.getElementById('titulo-actual') as HTMLHeadingElement;
// const caratulaActual = document.getElementById('caratula-actual') as HTMLImageElement;
// const sinCaratula = document.getElementById('sin-caratula') as HTMLSpanElement;
// const inputFondo = document.getElementById('input-fondo') as HTMLInputElement;
// const fondoReproductor = document.getElementById('fondo-reproductor') as HTMLBodyElement;

function obtenerElemento<T extends HTMLElement>(id: string, clase: new () => T): T {
    const elemento = document.getElementById(id);

    if (elemento instanceof clase) {
        return elemento;
    }

    // Si no existe o es del tipo incorrecto, lanzamos un error descriptivo
    throw new Error(`El elemento con id "${id}" no se encontró o no es un ${clase.name} -_-`);
}
