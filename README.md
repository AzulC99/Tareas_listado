https://traeaslistado.netlify.app

Conceptos de Funciones en este Proyecto
En el desarrollo de esta aplicación, hemos pasado de funciones básicas a un enfoque modular y basado en eventos.

1. Arrow Functions (Funciones de Flecha)
Utilizadas en todo el proyecto (ej. const saveTodo = (obj) => { ... }).

Por qué las usamos: Tienen una sintaxis más corta y no crean su propio contexto de this, lo que las hace ideales para manejadores de eventos y callbacks.

2. Funciones de Orden Superior (Higher-Order Functions)
Son funciones que operan sobre otras funciones, ya sea tomándolas como argumentos o devolviéndolas.

Ejemplo en tu código: .filter(), .forEach() y .findIndex().

Uso real: Cuando filtramos las tareas para el contador: todos.filter(t => !t.completed). Aquí, filter recibe otra función como instrucción.

3. Callbacks y Event Listeners
Un Callback es una función que se ejecuta después de que otra ha terminado o cuando ocurre un evento.

Uso real: btn.onclick = () => { ... }. La función de flecha es el callback que el navegador "llama de vuelta" solo cuando el usuario hace clic.

4. Modularización (Export/Import)
Es el concepto de dividir el código en piezas lógicas e independientes.

Uso real: Separamos storage.js (datos) de ui.js (visual). Esto permite que el código sea reutilizable y fácil de testear.

📖 Glosario Técnico
Frontend & Estética
Glassmorphism: Estilo de diseño que simula el vidrio mediante transparencia, bordes finos y, fundamentalmente, el desenfoque de fondo (backdrop-filter).

OKLCH: Un espacio de color perceptualmente uniforme. A diferencia de RGB, permite cambiar el matiz (Hue) sin que el ojo perciba que el color es más brillante o más oscuro de lo que era originalmente.

Keyframes: Puntos clave en una animación CSS que definen cómo cambian los estilos en momentos específicos del tiempo.

JavaScript & Navegador
DOM (Document Object Model): La estructura de "árbol" que el navegador crea de tu HTML. JavaScript manipula este árbol para añadir o quitar tareas.

LocalStorage: Memoria persistente del navegador que guarda datos en formato clave-valor. No se borra al cerrar la pestaña.

JSON (JavaScript Object Notation): Formato ligero de intercambio de datos. Usamos JSON.stringify para guardar objetos y JSON.parse para leerlos.

Dataset: Atributos HTML que empiezan por data- (como data-filter). Permiten guardar información extra en las etiquetas para que JS la lea fácilmente.

CORS (Cross-Origin Resource Sharing): Un mecanismo de seguridad. Por eso los módulos de ES6 requieren un "servidor local" para funcionar, ya que el navegador restringe el acceso a archivos locales por seguridad.
