# Entrega final CURSO CODERHOUSE REACT JS

![](https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_blackbg.png)
![](https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png)

## Herramientas utilizadas:

- React
- SweetAlerts
- Firebase
- Material UI

### Funciones:

- Utilización de rutas de navegación
- Utilización de técnicas de rendering
- Utilización de LocalStorage
- Utilización de contextos
- Utilización de contadores y tarjetas de presentación.
- Maquetado de pages con componentes segmentados (containers y presentacionales)
- Maquetado de pagina 404 Not Found.
- Rutas privadas

### Muestra de funciones:

- El producto Intel I7 tiene 0 unidades en stock, por lo que la tarjeta de presentación es diferente a quienes si poseen stock.
- Se almacenan direcciones de mail en LocalStorage a quienes quieren ser notificados cuando regrese el stock
- Se generan ordenes de compra que son obtenidas del carrito almacenado en LocalStorage
- El navbar y footer tienen items de navegación dinámicas con Firebase
- Se generan alertas cuando vaciamos el carrito, eliminamos items del carrito y colocamos la cantidad maxima de stock del producto.
- En src/routes hay un componente ProtectedRoutes donde se hardcodea el rol del usuario. Con "Admin" se habilita la ruta "./dashboard" que permite la actualización de la base de datos mediante productsMockup.js, con cualquier otro rol se bloquea el acceso.

#### SE ADJUNTA GIF DE MUESTRA EN CARPETA SRC
