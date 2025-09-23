# 📝 Ejercicio 4 — Contador de Palabras

## ¿Qué tienes que hacer

Vas a escribir un programa que reciba un texto y cuente cuántas veces aparece cada palabra, el programa debe mostrar cada palabra junto con la cantidad de veces que aparece.

Por ejemplo, si el texto es:

> **`"Hola, hola mundo! Mundo mundo"`**

El resultado debería ser algo así:
> **hola: 2<br>**
> **mundo: 3**

---

## 🎯 Objetivo del ejercicio

Aprender a:

- Manipulación de strings en JavaScript (minúsculas, limpieza de texto, división por palabras).
- Uso de objetos o mapas para contar cosas.
- Pensar en algoritmos paso a paso: normalizar, separar, contar y mostrar
- Recorrer datos con bucles **`(for, for...of)`**

---

### ✅ Criterios de evaluación

- El programa debe ignorar signos de puntuación **(.,!?)**
- Las mayúsculas y minúsculas cuentan como la misma palabra
- No puedes usar funciones externas que hagan el conteo automáticamente (hazlo paso a paso)

---

## ⚙️ Instrucciones

### 🔹 *Paso 1 — Entender el requisito*

- Necesitamos un texto de entrada
- Debemos quitar signos de puntuación para que no se cuenten como parte de la palabra
- Debemos convertir todo a minúsculas para no contar "Hola" y "hola" como diferentes
- Luego tenemos que contar cuántas veces aparece cada palabra.

### 🔹 *Paso 2 — Pensar la lógica*

- Convertir el texto a minúsculas
- Quitar los signos de puntuación usando una expresión regular
- Dividir el texto en un array de palabras `(split(" "))`
- Crear un objeto vacío para guardar el conteo
- Recorrer cada palabra:
    -   Si no existe en el objeto → agregar con valor 1  
    -   Si ya existe → sumar 1  
- Mostrar el resultado: palabra + cantidad.

### 🔹Estructura básica (algoritmo)*

```javascript
function contarPalabras(texto):
    convertir texto a minúsculas
    quitar signos de puntuación
    dividir texto en lista de palabras
    crear objeto contador vacío
    para cada palabra en lista:
        if palabra no está en contador:
            contador[palabra] = 1
        si palabra ya está:
            contador[palabra] += 1
    mostrar cada palabra y su cantidad

}
```
---

## 📚 Recursos recomendados

### 🔁 Bucles y Strings

- 📘 [toLowerCase() Para normalizar](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- 📘 [replace() + regex -> Para quitar signos de puntuación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- 📘 [split() Para dividir en palabras](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split)

### 📑 Estructuras y Bucles
- 📘 [Objetos en JS Para almacenar el conteo ](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/Object_basics)
- 📘 [Bucles for ...of ](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of)

---
**📋 Consejo**

Prueba con frases pequeñas y revisa si el resultado es correcto. Si algo falla, imprime en consola las palabras intermedias para depurar.
