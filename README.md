mozillachile-blog
===========

[![Netlify Status](https://api.netlify.com/api/v1/badges/47cddcaf-7183-47d8-b204-804c5a2ad953/deploy-status)](https://app.netlify.com/sites/mozillachile/deploys)


# Índice
1. [Prerrequisitos](#Prerrequisitos)
2. [Creación de artículos](#Creación-de-artículos)
3. [Publicación de artículos](#Publicación-de-artículos)


# Prerrequisitos

Este sitio está realizado utilizando Jekyll. Jekyll es un framework de Ruby, por lo que antes de continuar, deberás instalarlo en tu sistema operativo.

## Windows
Obtenga el instalador Ruby+Devkit (prefenrentemente 2.5.5-1) de su [sitio oficial](https://rubyinstaller.org/downloads/archives/)

---
**IMPORTANTE**

Instale ruby en un directorio cuyas carpetas en su ruta no contengan espacios (preferentemente C:/)

---

## Linux
Ruby a menudo se encuentra empaquetado en distribuciones Linux, por lo que las siguientes instrucciones deberían funcionar en la mayoría de los casos.

```bash
$ sudo apt install ruby-full
$ sudo apt install zlib1g-dev # dependencia requerida por nokogiri

```

## MacOS
En MacOS, Ruby se encuentra incluido en el administrador de paquetes brew.

```bash
$ brew install ruby
```

# Ejecución
```bash
$ git clone https://github.com/mozillachile/blog.git
$ cd blog-master
$ gem install bundler --user-install
$ bundle install --path vendor/bundle
$ bundle exec jekyll serve
$ Ingresa a http://localhost:4000
```

Flags

```bash

$ --no-watch (No esperar por cambios)
$ --watch (Para realizar cambios en ejecución)
$ --trace (Para depurar)
```

# Creación de artículos

Los artículos:

 - Son alojados en la carpeta _post 
 - Se encuentran escritos utilizando el lenguaje de demarcación Markdown, sin embargo pueden contener tags html
 - Deben tener un nombre con el siguiente formato: "yyyy-mm-dd-nombre.md" (2014-09-06-firefox.md). En donde yyyy-mm-dd repesenta la fecha del artículo
 - Deben contener las imagenes pertenecientes a estos dentro del mismo repositiorio en la carpeta images siguiendo el siguiente formato: images/yyyy/mm/nombre.jpg. En donde yyyy/mm representa la fecha del artículo
 

## Formato de un artículo

Un artículo contiene los siguientes elementos en su cabecera

| Elemento | Requerido | Ejemplo | Descripción
| --- | ----------- | -----------| -----------
| title | si |  Firefox 56 | Titulo del artículo
| date | si | 2014-11-30T23:34:10-03:00 | Fecha del artículo en formato ISO
| author | si | mozilla | Nombre de autor de artículo (definidos en '_config.yaml)'
| layout | si |  post | Estilo de plantilla, en este caso, siempre debe contener el valor 'post'
| permalink | si |  /blog/2014/11/30/firefox-56/ | Url de acceso al post, favor utilizar formato /blog/yyyy/mm/dd/titulo/
| image | no |  /images/2014/11/firefox-56.jpg | Ruta de imagen para portada de artículo
| categories | no | - Desarrolladores | Lista de categorías relacionadas al artículo

## Ejemplo completo

```bash
---
title: Firefox 56
date: 2014-11-30T23:34:10-03:00
author: mozilla
layout: post
permalink: /blog/2014/11/30/firefox-56/
image: /images/2014/11/firefox-56.jpg
categories:
  - Desarrolladores
  - Firefox
---

# Título de artículo

```

# Publicación de artículos
Este proyecto está configurado con integración continua por lo que solo basta enviar los cambios al repositorio para un despliegue automático.

```bash
$ git add .
$ git commit -m "descripción de cambio"
$ git push
```
