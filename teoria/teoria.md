

## **Explicación paso a paso:**

### **1. Fase de ejecución inicial (Stack principal síncrono)**

Cuando el script se ejecuta, JavaScript procesa las instrucciones de arriba hacia abajo en el **Call Stack** (pila de llamadas).

1. **`console.log("Inicio de Programa");`**  
   - Se imprime inmediatamente: `Inicio de Programa`.

2. **`setTimeout(() => { funcionA() }, 0);`**  
   - El callback de `setTimeout` con tiempo `0` se envía a la **Task Queue (cola de tareas)** para ejecutarse después de que la pila esté vacía.

3. **`setTimeout(() => { funcionC(); console.log("Saliendo de la Funcion C"); }, 3000);`**  
   - Se programa otra función para ejecutarse después de 3 segundos, quedando en la **Task Queue**.

4. **`console.log("Finalizando el Programa");`**  
   - Se imprime inmediatamente: `Finalizando el Programa`.

---

### **2. Event Loop (manejo de la cola de tareas)**

Una vez que la ejecución síncrona termina y la pila está vacía, el **Event Loop** comienza a procesar las tareas pendientes de la cola.

#### Después de la ejecución síncrona, en la cola tenemos:
- `funcionA()` con retraso de 0 ms → se ejecutará lo antes posible.
- `funcionC()` con retraso de 3000 ms → se ejecutará después de 3 segundos.

---

### **3. Procesamiento de `funcionA()` (0 ms setTimeout)**

El temporizador con `0 ms` se ejecuta tan pronto como la pila principal está vacía:

1. **Se llama a `funcionA()`**, se imprime:  
   - `Entrando a la Funcion A`.

2. **Se llama a `funcionB()` desde `funcionA()`**, se imprime:  
   - `Entrando a la Funcion B`.

3. **`setTimeout(() => { console.log("Saliendo de la Funcion B"); }, 1500);`**  
   - Se programa una salida para dentro de 1.5 segundos (queda en la cola de tareas).

4. **Finaliza `funcionB()`**, vuelve el control a `funcionA()`, se imprime:  
   - `Saliendo de la Funcion A`.

---

### **4. Procesamiento de `funcionB()` (después de 1.5 segundos)**

Después de 1.5 segundos del inicio del programa:

1. **El temporizador de `funcionB()` se activa**, se imprime:  
   - `Saliendo de la Funcion B`.

---

### **5. Procesamiento de `funcionC()` (después de 3 segundos)**

Después de 3 segundos del inicio del programa:

1. **Se llama a `funcionC()`**, se imprime:  
   - `Entrando a la Funcion C`.

2. **Se imprime después de la función:**  
   - `Saliendo de la Funcion C`.

---

## **Orden de ejecución final en consola:**

1. `Inicio de Programa`  
2. `Finalizando el Programa`  
3. `Entrando a la Funcion A`  
4. `Entrando a la Funcion B`  
5. `Saliendo de la Funcion A`  
6. `Saliendo de la Funcion B` (después de 1.5 segundos)  
7. `Entrando a la Funcion C` (después de 3 segundos)  
8. `Saliendo de la Funcion C`  

---

## **Conclusión sobre la ejecución:**

1. **La ejecución síncrona** se completa primero (`Inicio de Programa`, `Finalizando el Programa`).
2. **Las tareas asíncronas** (setTimeout con 0 y 3000 ms) se colocan en la cola y se ejecutan cuando la pila está vacía.
3. **El Event Loop** se encarga de sacar las tareas programadas y ejecutarlas cuando corresponda.
4. **`setTimeout(fn, 0)`** no se ejecuta inmediatamente; espera a que la pila principal se vacíe.

---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)
