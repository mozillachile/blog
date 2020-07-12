---
id: 670
title: Mozilla permitirá reproducir contenido con DRM en Firefox
date: 2014-05-14T20:52:45-04:00
author: Javier Martínez Ortiz
layout: post
permalink: /blog/2014/05/14/mozilla-permitira-reproducir-contenido-con-drm-en-firefox/
categories:
  - Firefox
  - Firefox OS
tags:
  - Adobe
  - CDM
  - DRM
---
_<a title="Mozilla permitirá reproducir contenido con DRM en Firefox" href="http://unojoenelcielo.com.ar/2014/05/14/mozilla-permitira-reproducir-contenido-con-drm-en-firefox/" target="_blank">Entrada original</a> por Guillermo Movia, Community Manager de Mozilla para Latinoamérica (cedido bajo Creative Commons)_

Este post será largo, porque hay mucho que explicar para que no haya confusiones. Pero para los que tienen poco tiempo, el resumen es:<!--more-->

Mozilla anunció hoy su asociación con Adobe para obtener una plataforma que le permita reproducir contenido con DRM que se empezará a usar en breve para transmitir contenido multimedia por la Web.

Mozilla está en contra de la implementación del DRM en el estándar de la Web, pero cree que si no encuentra una forma en que sus usuarios puedan reproducir el contenido, los usuarios elegirán otro navegador. Y para influir en los estándares y continuar ofreciendo otras soluciones a la reproducción de contenido en la Web, es necesario que el número de usuarios siga siendo grande.

Es una situación en que ninguna solución es completamente positiva, pero creemos que la mejor respuesta para seguir cumpliendo nuestra misión, es la anunciada en el día de hoy.

Antes de pasar a la explicación, algunas aclaraciones rápidas a algunas de las preguntas más urgentes (más abajo encontrarán el enlace a un artículo que contiene más respuestas a preguntas frecuentes):

  * Firefox seguirá siendo software libre y de código abierto
  * La posibilidad de ver archivos con DRM será opcional (quienes quieran hacerlo deberán descargar un componente externo)
  * Todavía no está disponible, se empezará a trabajar en breve
  * Esta solución será multiplataforma (es decir estará disponible para Firefox en Windows, Mac y Linux)

## Quién es quién en esta discusión

Con el riesgo de simplificar algunos procesos, podemos decir que hay tres actores principales:

### Dueños de contenido

Principalmente los estudios cinematográficos y de música (muchas veces las mismas empresas) quienes son los que crean el contenido. Si bien la mayoría de ellas son de EE.UU., estas empresas además producen contenido en otros países. También entran en esta categoría servicios como Netflix (que ahora produce algunas series de televisión) y productoras de televisión.

### Distribuidores de contenido

Son los intermediarios entre los dueños del contenido y los usuarios. A veces, como en el caso de Netflix y otros, dueños y distribuidores se mezclan. También entran en esta categoría Google, Apple y Microsoft, ya que tienen acuerdos para distribuir contenidos con los dueños de ellos (por ejemplo a través de iTunes, Google Play, etc.)

### Cliente que usa el usuario para reproducir el contenido

El usuario debe utilizar una aplicación para ver el contenido. Puede ser su navegador, una aplicación externa en su computadora o tableta o un dispositivo de hardware específico (por ejemplo Google Chromecast o Hulu).

## ¿Qué es el DRM y por qué es malo para el usuario?

DRM es la sigla de los términos ingleses Digital Rights Management (en castellano **[Gestión digital de derechos](https://es.wikipedia.org/wiki/Gesti%C3%B3n_digital_de_derechos "Definición de Gestión digital de derechos en Wikipedia")**), una serie de tecnologías que tienen por objetivo que los dueños de derechos de un contenido puedan controlar el uso que le dan los usuarios al mismo.

Por ejemplo, en el caso de la música comprada por iTunes, el usuario puede copiarla solamente entre cinco dispositivos simultáneos. Si le da esos archivos a un amigo, este no podrá reproducirlos. De esta forma, los estudios dueños del contenido pretenden controlar el uso no autorizado de sus archivos [1].

En el caso de los libros digitales, esta tecnología impide que pueda pasar el archivo que compré en una tienda (por ejemplo Amazon) a un dispositivo que sea de otra marca y por lo tanto incompatible.

Uno de los problemas es que estos sistemas suelen ser vulnerados rápidamente, y **terminan siendo un dolor de cabeza para quien lo adquirió legalmente**, y no para quien hace un uso no autorizado de esos contenidos.

Otro problema es que no podemos hacer copias de respaldo del contenido que hayamos adquirido, ya que eso no está habilitado por el sistema. Por eso es que en general se habla que _alquilamos_ un contenido, no que lo compramos. Si querés saber más ejemplos de lo inútil de esta tecnología, podés leer los artículos de la [Electronic Frontier Foundation](https://www.eff.org/issues/drm "Artículos de la Electronic Frotier Foundation acerca de DRM") o este [video de una exposición del escritor Cory Doctorow](http://www.amara.org/es-ar/videos/GmpBuHzEX8Jc/info/28c3-the-coming-war-on-general-computation/?tab=video "Charla de Cory Doctorow sobre Computación General") que enumera algunos de los problemas (en inglés con subtítulos en castellano).

## La oscuridad de la caja

A estos problemas se suma que la tecnología que permite el cifrado y descifrado del contenido a distribuir no es de código abierto, por lo tanto no podemos comprobar qué hace ni estar seguros de qué información comparte entre nuestros programas y los servidores.

Y tiene que ser de código cerrado porque los dueños del contenido no aceptarían una solución de código abierto, porque sería entonces fácil encontrar la forma de descifrarlo (y aunque se pudiera encontrar una forma que lo dificultara, son empresas que no confían en lo abierto).

## ¿Cómo vemos este contenido en la actualidad?

Los grandes dueños de contenido permiten la visualización del mismo a través de la Web utilizando DRM gracias a plugins de los navegadores, principalmente Adobe Flash o Microsoft Silverlight. Ambos plugins están dejando de ser utilizados y su mayor empleo actual es, justamente, para reproducir contenido con DRM (Netflix usa Silverlight y en YouTube y otras plataformas usan Flash).

Hasta hacía poco tiempo no había una solución basada en estándares Web. Esto cambió con la propuesta llevada adelante principalmente por _Netflix, Google y Microsoft_ conocida como **Encrypted media extensions** (EME) que si bien aún no es un estándar aprobado por la W3C, todo hace suponer que lo será en breve, y tanto Google como Microsoft como Apple, han empezado a incorporarlo a sus plataformas.

## ¿Qué es EME y cómo se incorpora en los estándares Web?

Con la introducción de las etiquetas _audio_ y _video_ en HTML5 se dio un gran paso para hacer que los contenidos multimedia sean entendidos por los navegadores Web. Ya no es necesario utilizar un plugin externo para poder reproducir contenido multimedia, salvo que el contenido tenga DRM, como hemos dicho. Y los grandes estudios cinematográficos no piensan en otra forma de controlar su contenido que no sea DRM.

Por lo tanto los distribuidores de contenido presentaron la propuesta de crear un estándar que permita la utilización de DRM en la Web. Para todas estas compañías, la distribución de contenidos es un gran negocio. El propio **Tim Berners-Lee**, creador de la Web, se mostró de acuerdo con este estándar, porque según él sería la forma de eliminar definitivamente los plugins.

Nuevamente a riesgo de simplificar EME es una API de JavaScript que permitirá que el navegador se relacione con un _Módulo de descifrado del contenido_ (Content Decryption Modules, CDM) que será el encargado de descifrar el contenido con DRM y enviárselo al navegador. El CDM puede ser un hardware externo, una aplicación diferente o estar dentro del mismo navegador, eso no es algo definido por el estándar. Pero para que este CDM funcione, tiene que ser aceptado por los dueños de contenido.

Como comentaba antes, Google, Apple y Microsoft ya comenzaron a llevar esta tecnología a sus plataformas, produciendo tanto el CDM como el cliente.

## La respuesta de Mozilla

El problema para Mozilla está en que los dueños de contenido no aceptan soluciones de código abierto, y Mozilla quiere que el código de Firefox sea abierto, y no está dispuesta a crear un CDM de código cerrado. Por lo tanto ha decidido asociarse con Adobe que será quien desarrolle el CDM que se relacionará con Firefox para permitir la reproducción de contenido con DRM.

De esta forma Mozilla podrá controlar qué información el navegador comparte con el CDM y por lo tanto, con los distribuidores de contenido. Y esto podrá ser, a su vez, revisado por la comunidad.

La descarga de este componente adicional de Adobe para poder reproducir el contenido con DRM será opcional, y no vendrá incluido de forma predeterminada en la descarga de Firefox. De esta forma quienes quieran tener un control total de la tecnología que hay instalada en su equipo, podrán hacerlo y continuar usando Firefox.

## El futuro (hay que hacerlo brillar)

El anuncio de hoy marca el comienzo del trabajo para agregar la API de JavaScript al navegador. Todavía no está disponible en ninguna de las versiones de Firefox, y aún no hay mucho contenido ofrecido con estas tecnologías. Pero se tomó la decisión de comenzar para estar preparados en caso de que llegue a ocurrir en breve. Y lamentablemente, parece muy difícil que podamos evitar que esta forma de DRM llegue a la Web.

Como Mozilla está en contra del DRM, está trabajando con algunos de los dueños de contenido para utilizar otra forma de control de los archivos multimedia, que sea menos molesta para el usuario. La propuesta de Mozilla es utilizar una marca de agua que permita, llegado el caso, saber quién ha distribuido ese contenido de forma no autorizada.

Y tal como había pasado en el caso del códec de video H.264, la lucha en contra de estos cambios no puede ser llevada adelante por una sola organización. Mozilla debe trabajar junto a la Electronic Frontier Foundation y otras organizaciones para lograr un método en que se respeten los derechos de los dueños de contenido, pero también los de los usuarios.

Quizás sea el momento de llevar adelante la propuesta de Brendan Eich de crear un gremio de usuarios de tecnologías que puedan enfrentarse con los dueños de contenido para lograr más respeto a sus derechos y libertades.

Para más información pueden leer el [escrito de Mitchell Baker](https://blog.mozilla.org/blog/2014/05/14/drm-and-the-challenge-of-serving-users/ "Comunicado de Mitchell Baker sobre DRM en Mozilla") (en inglés) y [el texto de Andreas Gal](https://hacks.mozilla.org/2014/05/reconciling-mozillas-mission-and-w3c-eme/ "Comentario sobre la solución técninca adoptada por Mozilla sobre EME y DRM") con la solución técnica adoptada por Mozilla.

También recomiendo [leer el escrito de Cory Doctorow](https://www.theguardian.com/technology/2014/may/14/firefox-closed-source-drm-video-browser-cory-doctorow "Cory Doctorow sobre la decisión de Mozilla") sobre la situación. Está en inglés y es largo, pero vale la pena.

[1] El término piratería no es correcto, por eso hablamos de usos no autorizados del contenido.