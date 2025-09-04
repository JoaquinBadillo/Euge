---
title: "Conectando al Mundo Web"
publishDate: "10/27/2023"
updatedDate: "10/27/2023"
description: "Una aplicación con IA y funciones serverless en una semana"
---

## Resumen

En este reto se nos propuso crear una aplicación web que utilizara funciones serverless y el API de OpenAI para generar texto e imágenes de manera automática. Para ello, se utilizó el servicio de Cloud Functions de Azure y se implementaron 2 funciones, una para generar texto y otra para generar imágenes evitando exponer la llave de API.

Yo decidí que esta aplicación sirviera para crear diapositivas de presentaciones de manera automátia a partir de un párrafo de texto y debido a la versatilidad e impacto que tiene OSS (Open Source Software) decidí que la aplicación utilizara modelos de Hugging Face en lugar de OpenAI.

## Retos

El primer reto fue la implementación de las funciones serverless en Azure, ya que no había trabajado con este servicio antes y tuve que aprender a utilizarlo en poco tiempo. El segundo reto fue la integración con los modelos de Hugging Face, ya que tuve que investigar acerca de los endpoints de inferencia y cómo consumirlos de manera eficiente.

## Relevancia con el proyecto

Esta evidencia es relevante para el proyecto de El Castillo Dorado ya que me sirvió para aprender a utilizar funciones serverless. Además de que me demostró que es posible tener un TTM (Time to Market) muy corto si se utilizan servicios en la nube y de terceros (con las licencias apropiadas) para acelerar el desarrollo de una aplicación. Finalmente, el uso de modelos de inteligencia artificial además de ser una tendencia actual es útil para casi cualquier aplicación fundamentada en datos.

## Entregables

Repositorio de GitHub con el código fuente de la aplicación: [https://github.com/JoaquinBadillo/TC2002S](github.com/JoaquinBadillo/TC2002S)

