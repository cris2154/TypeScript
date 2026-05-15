const estado = {
    listaReproduccion: [],
    cancionActual: null
};
function obtenerElemento(id, clase) {
    const elemento = document.getElementById(id);
    if (elemento instanceof clase) {
        return elemento;
    }
    // Si no existe o es del tipo incorrecto, lanzamos un error descriptivo
    throw new Error(`El elemento con id "${id}" no se encontró o no es un ${clase.name} -_-`);
}
const inputArchivo = obtenerElemento('input-archivo', HTMLInputElement);
const listaContenedor = obtenerElemento('lista-canciones', HTMLUListElement);
const controlAudio = obtenerElemento('control-audio', HTMLAudioElement);
const tituloActual = obtenerElemento('titulo-actual', HTMLHeadingElement);
const caratulaActual = obtenerElemento('caratula-actual', HTMLImageElement);
const sinCaratula = obtenerElemento('sin-caratula', HTMLSpanElement);
const inputFondo = obtenerElemento('input-fondo', HTMLInputElement);
const fondoReproductor = obtenerElemento('fondo-reproductor', HTMLBodyElement);
function CargarCancion(cancion) {
    estado.cancionActual = cancion;
    tituloActual.textContent = cancion.nombre;
    const urltemp = URL.createObjectURL(cancion.archivo);
    controlAudio.src = urltemp;
    controlAudio.load();
    controlAudio.oncanplay = () => {
        controlAudio.play().catch(error => {
            // Esto evita que el error "aborted" o "play() request interrupted" rompa la app
            console.warn("La reproducción automática fue bloqueada o interrumpida:", error);
        });
    };
    if (cancion.caratula !== "") {
        caratulaActual.src = cancion.caratula;
        caratulaActual.classList.remove('hidden');
        sinCaratula.classList.add('hidden');
    }
    else {
        caratulaActual.classList.add('hidden');
        sinCaratula.classList.remove('hidden');
    }
}
function renderizarLista() {
    // Limpiamos lo que haya en el HTML
    listaContenedor.innerHTML = "";
    // Ordenamos: Los últimos agregados primero
    const cancionesOrdenadas = [...estado.listaReproduccion].sort((a, b) => b.fechaAgregado - a.fechaAgregado);
    cancionesOrdenadas.forEach(cancion => {
        // Creamos el elemento de lista
        const li = document.createElement('li');
        li.className = "p-3 bg-white/5 hover:bg-emerald-500/20 rounded-lg cursor-pointer transition-all border border-white/10 mb-2 flex flex-col";
        li.innerHTML = `
            <span class="text-sm font-semibold truncate text-white">${cancion.nombre}</span>
            <span class="text-xs text-gray-500">Agregado hace un momento</span>
        `;
        // 🎯 AQUÍ ES DONDE SE EJECUTA TU FUNCIÓN
        listaContenedor.appendChild(li);
        li.onclick = () => {
            CargarCancion(cancion);
        };
    });
}
// 1. Escuchar cuando el usuario selecciona archivos
inputArchivo.addEventListener('change', () => {
    const archivos = inputArchivo.files;
    // Si no hay archivos, no hacemos nada
    if (!archivos || archivos.length === 0)
        return;
    // Recorremos los archivos seleccionados (por si seleccionas varios)
    Array.from(archivos).forEach(archivo => {
        const nuevaCancion = {
            id: crypto.randomUUID(),
            nombre: archivo.name,
            archivo: archivo,
            caratula: "", // De momento vacío
            fechaAgregado: Date.now()
        };
        // Guardamos en el estado
        estado.listaReproduccion.push(nuevaCancion);
    });
    // 2. IMPORTANTE: Volvemos a dibujar la lista para que aparezcan los nuevos items
    renderizarLista();
    // Limpiamos el input para poder subir el mismo archivo otra vez si se desea
    inputArchivo.value = "";
});
export {};
//# sourceMappingURL=index.js.map