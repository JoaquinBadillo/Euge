---
title: "Construcción de Software"
publishDate: "06/16/2023"
updatedDate: "06/16/2023"
description: "Desarrollo de un videojuego en Unity a partir de los requerimientos de un cliente."
---

## Resumen

En este reto se tuvo como objetivo desarrollar un videojuego web en Unity a partir de los requerimientos de un cliente. El cliente solicitó un videojuego de tipo RPG en 2D con alta rejugabilidad a partir de aspectos único de cada _playthrough_. Este videojuego debia almacenar la información de los jugadores en una base de datos a través de un API REST.

## Cómo me retó esta evidencia

Después del levantamiento de requerimientos, propusimos el desarrollo de un _roguelite_ en 2D, que permitiera al usuario seleccionar una clase de personaje que se adaptara a distintos estilos de juego. Además, como elemento central de nuestro diseño porpusimos la generación procedural de mapas, de tal manera que un jugador experimentara un mapa distinto en sus partidas. Con el interés de generar parches de balance además de almacenar la clase preferida de un jugador en nuestra base de datos, creamos tablas de métricas que nos permitieran ajustar parámetros en los personajes, además de crear un tablero para competir en _leaderboards_.

## Relevancia con el proyecto

Este proyecto utiliza herramientas computacionales centrales en casi cualquier sistema de software moderno, como lo son las bases de datos, las APIs y un cliente que consume la información del servidor. El proyecto propuesto para _El Castillo Dorado_ no es una excepción, pues para sincronizar y transmitir la información de los puntos de venta las bases de datos, el desarrollo de APIs y de un _front-end_ es necesario.

## Entregable

Repositorio remoto con el código fuente del videojuego: [https://github.com/JoaquinBadillo/BreakIntoValhalla](github.com/JoaquinBadillo/BreakIntoValhalla).

Reposito remoto para el API: [https://github.com/JoaquinBadillo/ValhallaAPI](github.com/JoaquinBadillo/ValhallaAPI).

Documento de requerimientos de software:

<a href="/pdfs/construccion.pdf"> Descargar PDF </a>

<object
  data="/pdfs/construccion.pdf"
  type="application/pdf"
  width="100%"
  height="600px"
/>