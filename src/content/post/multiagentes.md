---
title: "Sistemas Multiagentes y Gráficas Computacionales"
publishDate: "12/01/2023"
updatedDate: "12/01/2023"
description: "Modelación de sistemas multiagentes con gráficas computacionales en un escenario de simulación de tráfico."
---

## Resumen

En este reto se tuvo como objetivo modelar un sistema multiagente en un escenario de simulación de tráfico. Se utilizó el software de simulación de tráfico <code>mesa</code> para modelar el tráfico de una ciudad y se implementaron agentes que tomaran decisiones de rutas para llegar a su destino. Se utilizó el lenguaje de programación Python para implementar los agentes y posteriormente se hizo una visualización en Unity que tomaba las posiciones de los agentes y tiempo cuasi-real para mostrar el tráfico en la ciudad.

## Retos

Esta evidencia tuvo distintos retos, el primero fue la implementación de los agentes en Python ya que debía mantener un balance entre la simplicidad de las acciones y la complejidad de los resultados para un flujo eficiente de vehículos. El segundo reto fue la visualización de los agentes en Unity y la sincronización de los agentes con el tiempo de la simulación.

## Relevancia con el proyecto

Este proyecto es relevante para el proyecto de El Castillo Dorado ya que se necesita una comunicación entre cliente y servidor en tiempo real (o casi real) para poder visualizar las ventas de los puntos de venta. Por
esta razón el uso de Web Sockets o una estrategia de _polling_ es fundamental para poder visualizar las ventas dentro del tiempo deseado. Además, la visualización de datos es fundamental para poder tomar decisiones de campañas futuras y un entendimiento de las gráficas computacionales puede enriquecer el tipo de visualizaciones que se pueden hacer.

## Entregable

Repositorio de GitHub con el código fuente de la simulación de tráfico: [https://github.com/JoaquinBadillo/DuckCity](github.com/JoaquinBadillo/DuckCity)

Documento de propuesta de agentes:

<a href="/pdfs/multiagentes.pdf"> Descargar PDF </a>

<object
  data="/pdfs/multiagentes.pdf"
  type="application/pdf"
  width="100%"
  height="600px"
/>