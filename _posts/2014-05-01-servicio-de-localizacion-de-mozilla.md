---
id: 608
title: Servicio de localización de Mozilla
date: 2014-05-01T20:22:33-04:00
author: ravmn
layout: post
guid: http://www.mozillachile.cl/?p=608
permalink: /blog/2014/05/01/servicio-de-localizacion-de-mozilla/
image: /images/2014/05/MLS.png
categories:
  - Hacks
  - Otros Productos
tags:
  - gps
  - localizacion
  - mls
---
<p style="text-align: justify;">
  <em><a href="https://blog.mozilla.org/services/2014/04/17/mls-the-next-wave/">Articulo original</a> por Hanno Schlichting</em>
</p>

<p style="text-align: justify;">
  <strong>Mozilla Location Service</strong> (MLS) es un experimento que busca entregar un <strong>servicio de localización abierto, confiable y transparente</strong> a la comunidad del software libre. Hoy en día la mayoría de las bases de datos de esta clase de servicios pertenecen a empresas privadas. Es por esto que <strong>Mozilla lo creó hace ya un año</strong>, como un proyecto que depende del aporte de voluntarios cómo tú. <strong>¡Ayudanos a hacer de MLS un servicio de localización usable!</strong><br /> <!--more-->
</p>

Pero, **¿qué es un servicio de localización?  A-GPS,** otro nombre con el que se le conoce, es **cómo tu dispositivo sabe donde se encuentra en base a lo que le rodea**: puntos de acceso **WiFi** **y torres de telefonía celular**. Un servicio de localización es crucial al no contar con señal de satélites GPS (cómo **dentro de los edificios**) o en dispositivos que no cuentan con un chip GPS (cómo **tu computador**).

Es de suma importancia el desarrollo de este servicio para el **futuro de la internet**, donde cada vez más **dispositivos móviles con conexión** a internet están apareciendo y siendo una parte crítica de nuestras vidas. Si tomamos en cuenta que **los servicios de localización actuales son propietarios y cerrados**, pertenecientes a **Google, Apple, Skyhook** y otras pocas compañías, los sistemas operativos de código abierto no cuentan con un sistema que sea abierto, transparente y confiable para brindarle al usuario su ubicación.

**MLS** no puede ubicar los teléfonos sin **saber primero dónde están ubicados los elementos de referencia**. Dependemos de la comunidad para recolectar estos datos, proceso llamado «**stumbling**«. Esto significa **dar una vuelta con un dispositivo con GPS** (como un celular que cuente con esta capacidad) y «escuchar» señales WiFi y de celular. **Las señales encontradas son pareadas con su ubicación GPS y almacenadas** en la base de datos del servicio. Una vez en línea, **si otro dispositivo encuentra esa señal, el servidor MLS podrá entregarle los datos de la ubicación aproximada.**

Puedes ayudar a **mejorar MLS** contribuyendo [código en GitHub](https://github.com/mozilla/MozStumbler) o instalando la app [**Stumbler para Android**](https://github.com/mozilla/MozStumbler/releases) y recolectando datos. ¡Ayúdanos a [**iluminar el mapa**](https://location.services.mozilla.com/map)!