# STARMOVIES

Starmovies es un proyecto hecho en React que permite buscar información sobre películas.

## Especificaciones

Starmovies es un sitio donde se puede consultar información sobre un cátalogo extenso de películas del mundo del entretenimiento. La aplicación cuenta con las siguientes características:
-   Se cuenta con un buscador donde se introduce el titulo de una película y posteriormente se despliegan los resultados de películas con el mismo nombre o similar bajo el apartado de **Search**. 
-   Utilizando el cursor, al hacer click sobre alguna de las películas de los resultados se redirigirá hacia una nueva página donde se mostrará la información de dicha película, como su título, año de salida, duración, género, descripción, etcétera. 
-   Se pueden establecer películas como favoritas, para ello es necesario seleccionar la parte de *Add to Favourites* cuando se posiciona el cursor sobre una película, posteriormente esta película quedara agregada a favoritos. También es posible eliminar películas que se hayan establecido como favoritas, para ello es necesario seleccionar la película en la sección de **Favorites** y seleccionar la parte de *Remove from Favourites*.

## Componentes utilizados en el proyecto

El proyecto de React cuenta con los siguientes componentes:
-   App. En este componente se lleva a cabo toda la lógica la aplicación, incluyendo la obtención de la información de la API, el uso de estados y efectos, y el enrutamiento.
-   Error404. Este componente nos permite mostrar un mensaje de error cuando no se encuentra el id de la película en la base de datos.
-   Header. Este componente nos muestra el título de nuestra aplicación.
-   Home. Este componente es la pantalla principal de nuestra aplicación, donde se incluyen muchos otros componentes como header, InputSearch, InfoMovie, etcétera.
-   InfoMovie. Este componente se encarga de mostrar la información obtenida de la película seleccionada.
-   InputSearch. Este componente es la barra de búsqueda de nuestra aplicación.
-   ListOfMovies. Este componente se encarga de mostrar la lista de películas relacionadas a la palabra que se introdujo en el buscador.
-   ListOfFavourite.  Este componente muestra la lista de películas a las que se ha agregado a favoritos.
-   MovieTitle. Este componente nos permite poner los títulos de “Search” y “Favourites” en la aplicación.
-   AddToFavourite. Este componente añade al poster mostrado de la película la opción de añadir a favoritos. 
-   RemoveFavourite. Este componente añade al póster mostrado de la película la opción de remover de favoritos.

## Scripts

Antes de utilizar el proyecto es necesario instalar la libreria de Material UI y su paquete de iconos, para ello se abre la consola y se utilizan los siguientes comandos: 

### `npm install @material-ui/core`
### `npm install @material-ui/icons`

También es necesario instalar la librería de React Router DOM, para ello abrimos la consola y ejecutamos el siguiente comando:

### `npm install react-router-dom`

Para iniciar la aplicación se abre la consola y se utiliza el comando:

### `npm start`

Este comando inicia la aplicación en modo de desarollo y abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recargará si realiza modificaciones. \
También se verán los errores en la consola.

## Autores

-   Can Pérez Christian Alejandro
-   García Ortega Jhonatan Elias

## Agradecimientos

Agradecemos a BEDU por darnos la oportunidad de compartir los conocimientos adquiridos en la practica de un sistema backend, muchas gracias por todo el apoyo.
