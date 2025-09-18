# 🎠 Ejercicio 2 — Invertir una cadena

## ¿Qué tienes que hacer?

Vas a escribir un programa que tome una palabra o frase y devuelva esa cadena escrita al revés.

### Ejemplo:

- Entrada: `"Hola mundo"`  
- Salida: `"odnum aloH"`

---

## 🎯 Objetivo del ejercicio

Practicar el uso de:

- Bucles
- Manipulación de strings
- Control de índices
- Construcción de una nueva cadena paso a paso

---

### ✅ Criterios de evaluación

- Toma una cadena y devuelve correctamente el texto invertido.
- No utilices funciones automáticas de inversión como `.reverse()`.  
  > El objetivo del reto es aprender a usar bucles, índices y lógica manual, no depender de funciones que lo hagan por ti.  
  > Es como aprender a sumar sin usar una calculadora, te ayuda a entender cómo funciona la lógica por dentro.
- Código limpio y comentado.
- Funciona para cualquier texto (frases cortas, números, incluso cadenas vacías).

---

## ⚙️ Instrucciones

### 🔹 *Paso 1 — Entender el requisito*

- Necesitas recorrer la cadena desde el último carácter hasta el primero.
- Por cada carácter encontrado, ir construyendo una nueva cadena en orden inverso.

### 🔹 *Paso 2 — Pensar la lógica*

- Averigua la longitud de la cadena.
- Identifica el índice del último carácter (recuerda que los índices comienzan en 0).
- Usa un bucle para ir de atrás hacia adelante.
- En cada iteración, agrega el carácter actual a una nueva variable que representará la cadena invertida.

### 🔹 *Paso 3 — Estructura básica (algoritmo)*

- Guardar el texto original en una variable.
- Crear una variable vacía donde guardarás el texto invertido.
- Usar un bucle que vaya desde longitud - 1 hasta 0.
- Ir añadiendo cada carácter a la nueva variable.
- Mostrar en consola el resultado.

---

## 📚 Recursos recomendados

### 🔁 Bucles y Strings

- 📘 [Invertir un string - Stack Overflow)](https://es.stackoverflow.com/questions/226746/invertir-un-string-sin-reverse-en-js)
- 📘 [Bucles en JavaScript — MDN Web Docs (español)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
- 📘 [Strings en JavaScript — MDN Web Docs (español)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
- 📘 [Invertir una cadena sin reverse — FreeCodeCamp en español](https://www.freecodecamp.org/espanol/news/tres-formas-de-invertir-una-cadena-en-javascript/)

---

> Si necesitas apoyo, consulta con tu formadora/or.
