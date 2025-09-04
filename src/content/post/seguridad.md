---
title: "Seguridad Informática en Redes y Sistemas de Software"
publishDate: "09/16/2023"
updatedDate: "09/16/2023"
description: "Un sistema de tickets con autenticación y autorización basado en roles."
---

## Resumen

En este reto se tuvo como objetivo desarrollar un sistema de tickets con autenticación y autorización basado en roles. Se utilizó el framework de React y la librería React Admin para el _front-end_ y el framework de Express.js para el _back-end_. Se implementó un sistema de autenticación con JWT y un sistema de autorización con _middleware_ en Express.js, que asignaba permisos de creación, lectura, actualización y eliminación de a partir de roles: _administradores_ y _usuarios_.

Se configuró un servidor de base de datos en MongoDB Atlas y se utilizó un certificado SSL para la comunicación entre el _front-end_ y el _back-end_. Además, se implementó un sistema de _logging_ en el _back-end_ para registrar las peticiones y errores en documentos de MongoDB.

Como medida de seguridad también se creó _middleware_ para sanitizar las entradas de los usuarios y se implementó un sistema de _rate limiting_ con políticas de _CORS_ para evitar ataques de fuerza bruta.

Finalmente para facilitar el despliegue se utilizó Docker y Docker Compose para empaquetar y desplegar la aplicación.

## Retos

* Implementar un sistema de autenticación y autorización basado en roles.
* Configurar un servidor de base de datos en la nube y utilizar un certificado SSL para la comunicación.
* Implementar un sistema de _logging_ en el _back-end_.
* Crear _middleware_ para sanitizar las entradas de los usuarios.
* Diseño e implementación del tablero de tickets en React Admin.

## Relevancia con el proyecto

Esta evidencia es relevante para el proyecto de El Castillo Dorado ya que se necesita un sistema de autenticación y autorización para los usuarios de la aplicación. Además, la configuración de un servidor de base de datos en la nube y la comunicación segura entre el _front-end_ y el _back-end_ usando HTTPS es fundamental para proteger la información de los usuarios. Finalmente conocer acerca de buenas prácticas de seguridad como el registro de logs como herramienta de auditoría y monitoreo, la sanitización de entradas y el _rate limiting_ es fundamental para proteger la aplicación de posibles ataques maliciosos.

## Entregables

Repositorio de GitHub con el código fuente del front-end: [https://github.com/JoaquinBadillo/tickets.edu](github.com/JoaquinBadillo/tickets.edu).

Repositorio de GitHub con el código fuente del back-end: [https://github.com/JoaquinBadillo/TicketsAPI](github.com/JoaquinBadillo/TicketsAPI).