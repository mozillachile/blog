---
id: 633
title: Herramientas para el desarrollo web con Firefox y similares
date: 2014-05-02T11:58:54-04:00
author: lourcastillo
layout: post
guid: http://www.mozillachile.cl/?p=633
permalink: /blog/2014/05/02/herramientas-para-el-desarrollo-web-con-firefox-y-similares/
categories:
  - Comunidad
  - Hacks
tags:
  - adblock
  - addons
  - debug
  - desarrollo web
  - development
  - Firefox
  - firefox os
  - FreeSoftware
  - iceweasel
  - indexeddb
  - restful
  - sqlite
  - web
  - webservices
---
<p style="margin-bottom: 0cm;line-height: 100%">
  <a href="/images/2014/05/central.png"><img class="size-large wp-image-634 aligncenter" src="/images/2014/05/central-600x332.png" alt="central" width="600" height="332" srcset="/images/2014/05/central-600x332.png 600w, /images/2014/05/central-252x139.png 252w, /images/2014/05/central.png 672w" sizes="(max-width: 600px) 100vw, 600px" /></a>Parte importante para un desarrollador web es poder hacer debug del html, js, etc. Revisar código, poder identificar librerías y trabajar con ellas, entre otras. Firefox y sus distintos forks (como Iceweasel, que uso) tienen una gama de herramientas que nos pueden ayudar en esta tarea.<!--more-->
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  Mis recomendados son:
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <img class="aligncenter size-full wp-image-1051" src="http://www.psep.cl/wp-content/uploads/2014/05/imagen1.png" alt="tamper data" width="600" height="322" />
</p>

<p style="margin-bottom: 0cm;line-height: 100%">
  <strong><a title="Tamper Data" href="https://addons.mozilla.org/es/firefox/addon/tamper-data/" target="_blank">Tamper Data</a></strong>: Es un complemento que te permite ver y modificar las cabeceras HTTP/HTTPS tanto POST como GET. Es de mucha utilidad para identificar vulnerabilidades y para realizar ingeniería inversa (me fue útil para desarrollar las apis-servicio, por ejemplo).
</p>

<p style="margin-bottom: 0cm;line-height: 100%">
  Se especifica al momento de instalarle que depende de ti por como utilices esto, ya que también se puede emplear en malas intenciones (hacking no ético).
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <a title="Colorzilla" href="https://addons.mozilla.org/es/firefox/addon/colorzilla/" target="_blank"><strong>Colorzilla</strong></a>: Este es demasiado imprescindible al momento del diseño. Colorzilla te permite con un simple click copiar el código html del color seleccionado.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <strong><a title="Firebug" href="https://addons.mozilla.org/es/firefox/addon/firebug/" target="_blank">Firebug</a></strong>: “Viejo conocido”. Permite realizar el debug al código HTML generado, a la ejecución del javascript mediante consola, despliegue de CSS y hasta realizar breakpoints, entre otras características de este complemento para los desarrolladores web.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <img class="aligncenter size-full wp-image-1056" src="http://www.psep.cl/wp-content/uploads/2014/05/imagen4.png" alt="SQLite Manager" width="600" height="396" />
</p>

<p style="margin-bottom: 0cm;line-height: 100%">
  <strong><a title="SQLite Manager" href="https://addons.mozilla.org/es/firefox/addon/sqlite-manager/" target="_blank">SQLite Manager</a></strong>: ¿Te suenan conocidas las bases de datos embebidas?, ¿has desarrollado en Android? Si la respuesta es sí, entonces debes tener este complemento. SQLite Manager actúa como un completo cliente SQL para manejar SQLite.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <strong><a title="SOA Client" href="https://addons.mozilla.org/es/firefox/addon/soa-client/" target="_blank">SOA Client</a></strong>: Si trabajas con WebServices, éste es indicado para ti. Es un completo y sencillo cliente portable para webservices y UDDI Registry.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <a title="REST Client" href="https://addons.mozilla.org/es/firefox/addon/restclient/" target="_blank"><strong>RESTClient</strong></a>: Un cliente RESTful que permite tanto el consumo como el debug del servicio (header, body, etc).
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <a title="IndexedDB Browser" href="https://addons.mozilla.org/es/firefox/addon/indexeddb-browser/" target="_blank"><strong>IndexedDB Browser</strong></a>: IndexedDB es la base de datos embebida nativa de HTML5 (importante para quienes desarrollamos apps para Firefox OS). Este complemento te provee de un sencillo cliente para las db.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <img class="aligncenter size-full wp-image-1059" src="http://www.psep.cl/wp-content/uploads/2014/05/imagen8.png" alt="APP Manager" width="600" height="481" />
</p>

<p style="margin-bottom: 0cm;line-height: 100%">
  <a title="ADB Helper y Firefox OS Simulator" href="https://ftp.mozilla.org/pub/mozilla.org/labs/fxos-simulator/" target="_blank"><strong>ADB Helper y Firefox OS Simulator</strong></a>: App manager add-ons, son los nuevos complementos para manejar las apps de Firefox OS en tu computador. Puedes simular el sistema operativo, subir apps a tu teléfono FFOS, debuguear aplicaciones, entre otras prestaciones. No puede no estar presente en tu equipo si eres o quieres ser un desarrollador Firefox OS.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <a href="https://addons.mozilla.org/es/firefox/addon/librejs/" target="_blank"><strong>GNU LibreJS</strong></a>: Este complemento, que viene por defecto en <a href="http://www.gnu.org/software/gnuzilla/" target="_blank">GNU IceCat</a>, es para bloquear el código javascript no libre.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <strong>Bonus</strong>
</p>

<p style="margin-bottom: 0cm;line-height: 100%">
  No son addons de desarrollo, pero las recomiendo de todas formas para facilitar la navegación diaria:
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <a href="https://addons.mozilla.org/es/firefox/addon/video-downloadhelper/" target="_blank"><strong>Video DownloadHelper</strong></a>: Complemento que permite descargar vídeos de distintos sitios como Youtube.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <a href="https://addons.mozilla.org/es/firefox/addon/chatzilla/" target="_blank"><strong>ChatZilla</strong></a>: Debe ser familiar para varios de nosotros. Un simple cliente IRC.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <a href="https://addons.mozilla.org/es/firefox/addon/lightbeam/" target="_blank"><strong>Lightbeam</strong></a>: “… es un complemento para Firefox que, a través de visualizaciones interactivas, muestra los sitios de origen y de terceros que interactúan contigo en la Web. Mientras navegas, Lightbeam te muestra la Web actual en toda su dimensión, incluyendo aquellas partes no tan claras para el usuario medio.”
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <a href="https://addons.mozilla.org/es/firefox/addon/flashblock/" target="_blank"><strong>FlashBlock</strong></a>: ¿No detestas todo ese flash que aparece de repente mientras navegas? Con este complemento puedes bloquear todo el flash de las webs y agregar reglas de visualización para las páginas que desees.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <img class="aligncenter size-full wp-image-1060" src="http://www.psep.cl/wp-content/uploads/2014/05/imagen9.png" alt="Adblock" width="281" height="235" />
</p>

<p style="margin-bottom: 0cm;line-height: 100%">
  <a href="https://addons.mozilla.org/es/firefox/addon/adblock-plus/" target="_blank"><strong>Adblock Plus</strong></a>: Si hay algo que me moleste más que el flash, es la publicidad tipo spam que aparecen cuando navegamos. Este complemento bloquea toda ese molesto SPAM.
</p>

&nbsp;

<p style="margin-bottom: 0cm;line-height: 100%">
  <em>Artículo original en <a title="Herramientas para el desarrollo web con Firefox y similares - Psep.cl" href="http://www.psep.cl/2014/05/02/herramientas-para-el-desarrollo-web-con-firefox-y-similares" target="_blank">Psep.cl</a>, puede ser distribuido y modificado mientras incluya esta nota según <a href="http://creativecommons.org/licenses/by-sa/3.0/cl/" target="_blank">Licencia CC</a>.</em>
</p>