// 🎠 EJERCICIO 2 — Invertir una cadena

// Vamos a escribir un programa que tome una palabra o frase y la devuelva al revés.
// Ejemplo: "Hola mundo" → "odnum aloH"

// PASO 1 — Guardar el texto original en una variable
let texto = "Hola mundo"

// PASO 2 — Crear una variable vacía para construir el texto invertido
let 

// PASO 3 — Usar un bucle que recorra la cadena desde el final hasta el principio
// En programación, cada letra de una cadena tiene una posición llamada "índice".
// Los índices empiezan en 0. Por ejemplo, en "Hola":
// - H está en la posición 0
// - o en la 1
// - l en la 2
// - a en la 3

// La propiedad .length te dice cuántos caracteres tiene la cadena.
// Pero cuidado: el último índice no es igual a la longitud, sino a la longitud menos 1.
// Por ejemplo, si la cadena tiene 10 letras, el último índice será 9.

// Pista: investiga cómo usar .length para empezar el bucle desde el final.
// Usa esa idea para recorrer la cadena hacia atrás.


for (let i /* completa aquí */ i >= 0; i--) {
  // PASO 4 — Agrega el carácter actual a la variable 'invertido'
  // Pista: para acceder a un carácter usamos texto[i]

  // Escribe aquí la línea que añade el carácter a 'invertido'
  // Ejemplo: invertido += ...
}

// PASO 5 — Mostrar el resultado en consola
// Escribe aquí el console.log para ver el texto invertido
