# STARMOVIES

Starmovies es un proyecto hecho en React que permite buscar información sobre películas, series y más del mundo del entretenimiento.

## Especificaciones

Starmovies es un sitio donde se puede consultar información sobre un extenso cátalogo de títulos. La aplicación cuenta con las siguientes características:

- Se cuenta con un buscador donde se introduce el titulo de una película y posteriormente se despliegan los resultados de películas con el mismo nombre o similar bajo el apartado de **Search**.
- Utilizando el cursor, al hacer click sobre alguna de las películas de los resultados se redirigirá hacia una nueva página donde se mostrará la información de dicha película, como su título, año de salida, duración, género, descripción, etcétera.
- Se pueden establecer películas como favoritas, para ello es necesario seleccionar la parte de _Add to Favourites_ cuando se posiciona el cursor sobre una película, posteriormente esta película quedara agregada a favoritos. También es posible eliminar películas que se hayan establecido como favoritas, para ello es necesario seleccionar la película en la sección de **Favorites** y seleccionar la parte de _Remove from Favourites_.
- Se cuenta con la posibilidad de registrar usuarios e iniciar sesión en la aplicación con ellos.

## Componentes utilizados en el proyecto

El proyecto de React cuenta con los siguientes componentes:

- App. En este componente se lleva a cabo toda la lógica la aplicación, incluyendo la obtención de la información de la API, el uso de estados y efectos, y el enrutamiento.
- Error404. Este componente nos permite mostrar un mensaje de error cuando no se encuentra el id de la película en la base de datos.
- Header. Este componente nos muestra el título de nuestra aplicación.
- Home. Este componente es la pantalla principal de nuestra aplicación, donde se incluyen muchos otros componentes como header, InputSearch, InfoMovie, etcétera.
- InfoMovie. Este componente se encarga de mostrar la información obtenida de la película seleccionada.
- InputSearch. Este componente es la barra de búsqueda de nuestra aplicación.
- ListOfMovies. Este componente se encarga de mostrar la lista de películas relacionadas a la palabra que se introdujo en el buscador.
- ListOfFavourite. Este componente muestra la lista de películas a las que se ha agregado a favoritos.
- MovieTitle. Este componente nos permite poner los títulos de “Search” y “Favourites” en la aplicación.
- AddToFavourite. Este componente añade al poster mostrado de la película la opción de añadir a favoritos.
- RemoveFavourite. Este componente añade al póster mostrado de la película la opción de remover de favoritos.
- SignIn. Este componente es la pantalla de inicio de sesión de nuestra aplicación, para que los usuarios puedan acceder.
- SignUp. Este componente es la pantalla de registro de usuarios de nuestra aplicación.

## Netlify

El sitio en funcionamiento se puede consultar en el siguiente [enlace](https://starmoviesreact.netlify.app/).

## Backend

El repositorio de nuestro Backend para el inicio de sesión de usuarios se puede consultar en el siguiente [enlace](https://github.com/DevGragy/StarMovies-Login).

## Autores

- Can Pérez Christian Alejandro
- García Ortega Jhonatan Elias

## Agradecimientos

Agradecemos a BEDU por darnos la oportunidad de compartir los conocimientos adquiridos durante este curso de Desarollo Web, muchas gracias por todo el apoyo.
