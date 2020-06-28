---
id: 186
title: 'Charla Firefox OS en el #DSL2013 Santiago'
date: 2013-10-23T23:32:13-03:00
author: lourcastillo
layout: post
guid: http://www.mozillachile.cl/?p=186
permalink: /blog/2013/10/23/charla-firefox-os-en-el-dsl2013-santiago/
categories:
  - Comunidad
  - Firefox OS
tags:
  - Chile
  - DSL2013
  - firefox os
  - Santiago
  - SFD
---
El pasado 19 de octubre estuvimos con la comunidad Mozilla Chile, participando del Día de la libertad del Software en la Universidad DUOC UC Sede Alonso Ovalle. [<img class="aligncenter size-full wp-image-583" alt="1376648_10151973373932340_340407661_n" src="http://lourcastillo.files.wordpress.com/2013/10/1376648_10151973373932340_340407661_n.jpg" width="640" height="360" />](http://lourcastillo.files.wordpress.com/2013/10/1376648_10151973373932340_340407661_n.jpg)En dicha actividad, presentamos en una charla de 45 minutos, el sistema operativo para móviles Firefox OS.

<!--more-->

  * Firefox OS es el único sistema operativo móvil completamente abierto basado en estándares web.
  * Está pensado para mercados que no tengan acceso a los sistemas operativos líderes actuales.
  * Está basado completamente en la Web, no hay una capa nativa. Tanto el sistema operativo como las aplicaciones están escritas en HTML5. El acceso al hardware ocurre a través de un núcleo Linux que es el mismo que utiliza Android.
  * HTML5 es un ciudadano de primera clase en Firefox OS, es el único SO que mantiene la promesa que otros dieron años atrás (No se necesita SDK).
  * Todo lo que necesitas saber para crear una aplicación para Firefox OS es conocer HTML5.
  * Firefox OS es una realidad, tenemos teléfonos vendidos en España, Polonia, Venezuela y Colombia.

La plataforma móvil que HTML5 merece:

HTML5 no es un ciudadano de segunda en Firefox OS, si no que el sistema mismo, la interfaz del SO, está escrita en HTML5. En lugar de pretender utilizar las características de HTML5, el SO depende de él.

Soporte del navegador predecible:

Firefox OS usa el motor de renderizado del navegador como el componente principal para crear las interfaces. Por eso es que no puedes tener los mismos problemas que existen en otros sistemas operativos como Android, por ejemplo, cuando un navegador más moderno no está disponible para una versión anterior del sistema operativo. Con Firefox OS, tienes un soporte de navegador predecible, en lugar de tener que brindar soporte para versiones viejas de los navegadores y encontrar soluciones alternativas.

Un nuevo mercado:

Firefox OS, y esto es importante decirlo, no se enfoca en los mismos mercados que iOS y Android. Su objetivo principal es llevar la conectividad a la web a mercados que no pueden permitirse otras plataformas o ni siquiera tienen acceso a ellas. Es es la razón por la que los usuarios de Firefox OS no están comparando lo que realizan como desarrolladores de Aplicaciones con las últimas desarrolladas para Andoird e iOS. Tu trabajo como desarrollador de aplicaciones para Firefox OS es brindar la primera impresión de la Web a muchos nuevos usuarios. No es una tarea sencilla, pero si muy fructífera y reconfortante. En lugar de copiar Angry Birds y no tener el rendimiento de hardware que necesitas, puedes ser el nuevo Angry Birds para una audiencia totalmente nueva.

Mejorando el mundo móvil:

  * Enfocado a mercados emergentes y nuevos
  * Hardware muy accesible
  * No se necesita tarjeta de crédito, se paga con la factura
  * Tecnologías web por todos lados
  * 18 telefónicas asociadas, 4 fabricantes asociados

Firefox OS fue creado para llevar usuarios de los teléfonos simples al mundo móvil de la Web. Está destinado a los mercados que no tienen cobertura de iOS y Android. Si, puedes comprar teléfonos con Android baratos, pero la versión de Android que tienen no tiene una navegador instalado que te permita hacer cosas interesantes en la Web. Asi como Firefox y Opera para Android permiten que más usuarios en el mundo tengan una mejor experiencia Web en los teléfonos que no tienen el hardware más moderno, Firefox Os va más allá. Su objetivo principal es llevar millones de nuevos usuarios a la web en sus teléfonos móviles sin que tenga una experiencia de segunda categoría.

Todo lo que forma parte del SO es tecnología web abierta y propuesto para estándar:

Firefox OS no es otra plataforma cerrada. Todas las partes del SO están basadas en tecnologías web abiertas y son propuestas al cuerpo del estándar web. Esto muestra que nuestra búsqueda al crear Firefox OS y la investigación que realizas como desarrollador para crear aplicaciones para este sistema operativo, vuelve a Firefox para escritorio y a todos los otros navegadores web, logrando que la Web sea un mejor lugar para todos.

APLICIACIONES DE LA WEB ABIERTA

¿Qué hace que una aplicación sea genial?

Las aplicaciones son «lo nuevo», salvo que no lo son. Esencialmente una aplicación es una cosa que realiza una sola tarea bien y es autosuficiente. En lugar de abrir un sitio web y tenerlo abierto junto a otras pestañas, abres una aplicación y es el foco principal de tu atención. Las personas aman esto. Le da al usuario una experiencia de una sola tarea sin que se distraigan. La buena noticia es que las tecnologías que rodean al HTML5 son lo suficientemente flexibles como para brindar ambos casos: puedes crear un sitio web pero también puedes convertirlo fácilmente en una aplicación.

¿Aplicaciones Firefox OS?

  * Las aplicaciones de Firefox OS son aplicaciones de HTML5 con un archivo extra de manifiesto.
  * El manifiesto define el acceso al hardware que necesitas, los íconos y la ubicación del código.
  * Están resguardados por un modelo de seguridad de tres capas, permitiendo más o menos acceso dependiendo de la ubicación de la aplicación (alojada vs. enviada desde el marketplace).
  * Funcionan cuando no tienes conexión y funcionan a través de otras plataformas (cuando se preparan para eso).
  * Puedes encontrarlas e instalarlas desde la web o desde el marketplace.<header> 

## Definido en el manifiesto</header> 

    {
              "name": "Mi Aplicación",
              "description": "La descripción del uso",
              "launch_path": "/",
              "icons": { "128": "/img/icon-128.png" },
              "developer": {
                "name": "Tu nombre u organización",
                "url": "http://your-homepage-here.org"
              }
            }
    
    [Manifiesto de la App](https://developer.mozilla.org/docs/Apps/Manifest)

## Tres niveles de acceso…

  * Aplicaciones alojadas &#8211; guardadas en tu servidor, fácil de actualizar, acceso limitado.
  * Aplicaciones privilegiadas &#8211; revisadas por el marketplace, empaquetadas y firmadas
  * Aplicaciones certificadas &#8211; parte del SO, solo de Mozilla y asociados

[App permissions](https://developer.mozilla.org/en-US/docs/Apps/App_permissions)

Hay tres tipos de aplicaciones en Firefox OS: Aplicaciones alojadas, privilegiadas y certificadas. El primer tipo está alojado en tu propio servidor y tiene acceso a una cantidad limitada de funcionalidad. Las aplicaciones privilegiadas tienen más acceso al hardware y deben ser alojadas por Mozilla. Las aplicaciones certificadas son parte del sistema operativo y solamente son creadas por Mozilla y/o sus asociados.

## Instalar aplicaciones desde la Web

    1. var installapp = navigator.mozApps.install(manifestURL);
    2. installapp.onsuccess = function(data) {
    3.  // La aplicación está instalada
    4. };
    5. installapp.onerror = function() {
    6.  // La aplicación no está instalada, la información está en
    7. // installapp.error.name
    8. };

<p align="JUSTIFY">
  Instalar aplicaciones desde la web es posible al usar la API para las aplicaciones web abiertas, que es parte de la WebAPI que se trabajó en Mozilla. Puedes probar si navigator.mozApps está habilitado y después crear un botón que llame al método de instalación apuntando a la URl del archivo del manifiesto de la aplicación que debe ser instalada. Después tendrás los resultados onsuccess y onerror para manejar con los objetos que devuelve después de la instalación. Esto significa que cualquier sitio preparado para móviles puede ser convertido en una aplicación en minutos, y que todo el esfuerzo que pusiste en crear ese sitio web y que sea encontrable en los buscadores no está perdido, y que ne cambio te sirve ahora de promoción para tu aplicación.
</p>

<p align="JUSTIFY">
  WEB APIS
</p>

<p align="JUSTIFY">
  <a href="http://lourcastillo.files.wordpress.com/2013/10/webapiwiki.png"><img class="aligncenter size-full wp-image-585" alt="webapiwiki" src="http://lourcastillo.files.wordpress.com/2013/10/webapiwiki.png" width="608" height="474" /></a>
</p>

<p style="text-align: center;">
  <a href="https://wiki.mozilla.org/WebAPI">Wiki de las WebAPI</a>
</p>

<p style="text-align: left;">
  El trabajo de Mozilla en las WebAPI se cuenta e informa en el wiki.
</p><header> 

## Web APIs</header> 

  * Una especificación abierta para acceder al hardware de los dispositivos
  * Creadas con y enviadas a los estándares y otros desarrolladores de navegadores
  * Una forma de interactuar a través de JavaScript con el dispositivo
  * A través de eventos &#8211; cada acceso tiene un manejador de éxito o fracaso con un informe completo para saber qué salió mal
  * Protegido con un modelo de seguridad de tres capas que permite mayor o menor acceso dependiendo de la ubicación de la aplicación (alojada vs. brindada por el marketplace)

[Wiki de las WebAPI](https://wiki.mozilla.org/WebAPI)

El trabajo de Mozilla en las Web APIs es una forma de hacer que todo el hardware de los dispositivos esté accesible a través de JavaScript de una forma segura, predecible y abierta, y de forma concertada con otros creadores de navegadores y con los estándares.<header> 

## Web APIs (aplicaciones alojadas)</header> 

  * API vibración
  * Orientación de la pantalla
  * Geolocalización API
  * Control del mouse API
  * WebApps abiertas
  * Información de la red API
  * Estado de la batería API
  * Alarma API
  * Envio de notificaciones API
  * WebFM API / FMRadio
  * Pagos por Web
  * IndexedDB
  * Sensor de luz ambiente
  * Sensor de proximidad
  * Notificaciones

[Usar WebAPIs para hacer ampliar la capacidad de la capa web](https://hacks.mozilla.org/2013/02/using-webapis-to-make-the-web-layer-more-capable/)

Las aplicaciones alojadas, es decir las aplicaciones que funcionan en tu propio servidor, contienen toda la potencia de las aplicaciones HTML5 más las características adicionales que le agregan las API. Todas estas APIs están explicadas en la wiki de Mozilla y fueron propuestas al cuerpo del estándar. Algunas de ellas ya son implementadas por otros navegadores, como la geolocalización. Por ahora, sin embargo, solo Firefox OS brinda todas ellas. Estas APIs brinda mucha funcionalidad extra a las que tienen las aplicaciones HTML5.

## Batería API

1. `var b = navigator.battery;`

2. `if (b) {`

3.  `var level = Math.round(b.level * 100) + "%",`

4.  `charging = (b.charging) ? "" : "not ",`

5.  `chargeTime = parseInt(b.chargingTime / 60, 10),`

6. `dischargeTime = parseInt(b.dischargingTime/60,10);`

7. `b.addEventListener("levelchange", show);`

8. `b.addEventListener("chargingchange", show);`

9. `b.addEventListener("chargingtimechange", show);`

10. `b.addEventListener("dischargingtimechange", show);`

11. }

Este es un ejemplo de cómo usar una de estas APIs. Contienen propiedades, métodos y ejecutan muchos eventos que facilitan la inclusión de ellas en tus propias soluciones. Y como puedes ver, usando un simple bucle if en tu código puedes asegurarte que solo los ambientes que tienen habilitada esta capacidad, lo ejecuten.<header> 

## Web APIs (aplicaciones privilegiadas)</header> 

  * Memoria del dispositivo API
  * Navegador API
  * TCP Socket API
  * Contactos API
  * systemXHR

[Usar WebAPIs para hacer ampliar la capacidad de la capa web](https://hacks.mozilla.org/2013/02/using-webapis-to-make-the-web-layer-more-capable/)

Las aplicaciones privilegiadas tienen acceso a más APIs y aquellas que tienen acceso a información más sensible, como guardar información en la memoria de tu dispositivo, acceder a la lista de contactos o traer contenido de terceros de una página web. Las aplicaciones privilegiadas deben sern empaquetadas y enviadas al marketplace y ofrecidas por la arquitectura de Mozilla. No podemos permitir que cualquier servidor en la web tenga acceso a la libreta de contactos del usuario, ya que esto generaría el espacio para la creación de software malicioso en muchas formas.

[<img class="aligncenter size-full wp-image-586" alt="api" src="http://lourcastillo.files.wordpress.com/2013/10/api.png" width="640" height="352" />](http://lourcastillo.files.wordpress.com/2013/10/api.png)Para una aplicación privilegiada es simple crear un nuevo contacto. Esto te permite sincronizas libretas de direcciones entre servicios, por ejemplo. Nuevamente, tienes algunos métodos y manejadores de eventos disponibles para poder manejar los éxitos y fallas.<header> 

## Web APIs (aplicaciones certificadas)</header> 

  * WebTelephony
  * WebSMS
  * Espera API
  * Opciones API
  * Adminstración de energía API
  * Conexión móvil API
  * Información WiFi API
  * WebBluetooth
  * Permisos API
  * Estadísticas de red API
  * Cámara API
  * Fecha/Reloj API
  * Atención de la pantalla
  * Correo de voz

[Usar WebAPIs para hacer ampliar la capacidad de la capa web](https://hacks.mozilla.org/2013/02/using-webapis-to-make-the-web-layer-more-capable/)

Las aplicaciones certificadas son las aplicaciones que forman parte del sistema operativo en si mismo. Solo son creadas por Mozilla y los socios y tienen acceso completo al hardware del dispositivo, por ejemplo para hacer llamadas o cambiar los permisos del dispositivo.

WEB ACTIVITIES<header> 

## Web Activities</header> 

  * Una propuesta para tener acceso al hardware manteniendo al usuario con el control en lugar de autentificar en su nombre
  * Comparabl e a Android Intents, pero con un horizonte más limitado que tiene más sentido en la web
  * Una técnica para crear un ecosistema de aplicaciones en el dispositivo, las aplicaciones pueden registrarse como con la posibilidad de brindar ciertas tareas y otras aplicaciones pueden usarlas
  * Una forma simpre de acceder al hardware e información sin tener que empaquetar tu aplicación y enviarla al marketplace
  * Muy seguro ya que no sucede nada sin que el usuario lo inicie

[WebActivies Wiki](https://wiki.mozilla.org/WebAPI/WebActivities)<header> 

## Web activities</header> 

  * configure
  * costcontrol
  * dial
  * open
  * pick
  * record
  * save-bookmark
  * share
  * view
  * new, p.e type: “websms/sms” o “webcontacts/contact”

Si quieres acceder a la cámara o la libreta de direcciones sin tener que empaquetar tu aplicación, hay una alternativa llamada Web Activities. Son muy parecidas a lo que los Web Intents son para Chrome, pero enfocados en casos reales de uso, más que en Android. PUedes usar Web Activities para acceder al hardware sin tener que autentificarte en lugar del usuario. En cambio, se le pide al usuario que use alguna de las aplicaciones que ya conoce para devolverle a tu aplicación lo que quieres.

## Enviar un número al teléfono

1. `var call = new MozActivity({`

2. `name: "dial",`

3.  `data: {`

4. `number: "+1804100100"`

5. `}`

6. `});`

Este ejemplo nos muestra una actividad de llamado. Cuando se ejecuta el JavaScript, el usuario será derivado a la aplicación de llamadas (o a la aplicación que el usuario haya definido como predeterminadad), el número es enviado a la aplicación y el usuario puede iniciar la llamada. Esta es la mayor diferencia con las WebAPIs, el usuario es quien decide. Cunado la llamada es negada o se termine, el teléfono volverá a tu aplicación.

[<img class="aligncenter size-full wp-image-587" alt="telef" src="http://lourcastillo.files.wordpress.com/2013/10/telef.png" width="640" height="363" />](http://lourcastillo.files.wordpress.com/2013/10/telef.png)La actividad &#8216;pick&#8217; es probablemente una de las más útiles, porque le dice al usuario que quieres algo del dispositivo. En este caso definimos en la matriz de tipos MIME que estamos esperando una imagen. Esto puede terminar como la captura que se muestra a la derecha, se le pregunta al usuario si quiere darnos una imagen, ya sea de la carptea de fondos de pantalla o de fotos, o tomar una nueva foto con la cámara.  
[<img class="aligncenter size-full wp-image-588" alt="telef2" src="http://lourcastillo.files.wordpress.com/2013/10/telef2.png" width="640" height="331" />](http://lourcastillo.files.wordpress.com/2013/10/telef2.png) Para recibir la imagen, lo único que tienes que hacer es un evento que pueda manejar la respuesta que le llegue de las otras aplicaciones.

## Activities y aplicaciones alojadas en Android

La gran noticia es que si tienes Firefox para Android, está funcionalidad también está disponible fuera de Firefox OS, en cualquier dispositivo Android donde funcione Firefox para Android.

## Búsqueda dinámica de aplicaciones

  * La interfaz de búsqeuda de Firefox OS no solo busca nombres de aplicaciones o contenido en tu dispositivo
  * También busca coincidencias con aplicaciones por temática.
  * Por ejemplo, puedes escribir el título de una película y encontrarás aplicaciones relacionadas con películas
  * Estos resultados de aplicaciones están preparados para diferentes mercados, lo que significa que no encontrarás Netflix entre las opciones, si no está dispoinble en tu país.<header> 

## Búsqueda dinámica de aplicaciones para el usuario</header> 

  * Los usuarios no necesitan saber el nombre de la aplicación, si no que realizan la búsqeuda por lo que les interesa
  * Las aplicaciones son realmente «probar antes de comprar»: al hacer clic en uno de los resultados de la lista abrirá la versión preparada para dispositivos móviles de la aplicación. Sin necesidad de descargar, instalar o desinstalar.
  * Una vez que el usuario está contento con la aplicación, pueden hacer un clic largo para instalarla y obtener todos los beneficios de una aplicación de la web abierta
  * El usuario puede usar la aplicación una sola vez, sin que queden registros en el dispositivo<header> 

## Búsqueda dinámica de aplicaciones para desarrolladores</header> 

  * Tu aplicación se encontrará por lo que haga, no por el nombre o la publicidad cara que puedas haber puesto en ella.
  * La versión en HTML5 de tu aplicación es tu publicidad, nada se desperdicia
  * Encuentras usuarios rápidamente que prueban la aplicación sin tener que descargarla ni instalarla
  * Puedes convertirte en la aplicación local más importante de una temática, sin tener que competir con otros en mercados cerrados

[<img class="aligncenter size-full wp-image-589" alt="app" src="http://lourcastillo.files.wordpress.com/2013/10/app.png" width="640" height="424" />](http://lourcastillo.files.wordpress.com/2013/10/app.png)

## Caso de uso a aplicación

<div id="cover">
</div>

<div id="firefoxos">
</div>

<div id="deserves">
</div>

<div id="browser">
</div>

<div id="newmarket">
</div>

<div id="forall">
</div>

<div id="webtech">
</div>

<div id="fxapps">
</div>

<div id="webapis">
</div>

<div id="webapibullets">
</div>

<div id="webapilist">
</div>

<div id="android">
</div>

<div id="dynappimage">
</div>

<div id="everything">
  <div>
    <section> <header></header> </section> <section></section> <section> 
    
    <h2>
      Herramientas
    </h2></section>
  </div>
</div>

<div id="zomgtools">
</div><header> 

## Herramientas para Firefox OS / HTML5</header> 

  * Al contrario de iOS y Android, no hay un SDK o conjunto de IDEs/herramientas para Firefox OS.
  * Las aplicaciones de Firefox OS son aplicaciones de HTML5, y nunca tendremos un conjunto de herramientas definitivas para escribir HTML
  * Dicho esto, hay algunas cosas que harán tu vida más fácil y que te permitirán empezar más rápidamente
  * Muchas de ellas vienen con el navegador, o como complementos del navegador. De esa forma podrás usar la computadora con la que te sientes cómodo para desarrollar el código
  * No necesitas un un dispositivo con Firefox OS para empezar, posiblemente necesites uno para probar la interacción y el rendimiento
  * Esto es algo que evoluciona, más herramientas están en camino

  * Mozilla tiene algunas cosas en el espacio de las herramientas
  * Asegurate de mostrar las herramientas de desarrollo que se encuentran en Firefox (NO, y repito, NO Firebug) y la vista de modo adaptable que permite cambiar el tamaño del navegador al tamaño del teléfono
  * Muestra el simulador funcionando, cambai alguno de los CSS para mostrar que las aplicaciones son solo sitios web
  * Asegurate de comentar que los componentes del SO son para Gaia, no para cualquier aplicación externa.

## Los navegadores son editores

Ahora los navegadores son, también, herramientas de desarrollo. Las herramientas incluídas en Firefox te permiten crear aplicaciones en el navegador, comprobar qué está pasando en el teléfono y simular un dispositivo con Firefox OS en tu computadora.

## Simulador de Firefox OS

<p style="text-align: center;">
  <a href="http://lourcastillo.files.wordpress.com/2013/10/simulator.png"><img class="aligncenter size-full wp-image-590" alt="simulator" src="http://lourcastillo.files.wordpress.com/2013/10/simulator.png" width="640" height="492" /></a><a href="https://addons.mozilla.org/en-US/firefox/addon/firefox-os-simulator/">Simulador de Firefox OS </a>
</p>

<p style="text-align: left;">
  El simulador de Firefox OS es un complemento para Firefox que simula un teléfono en tu equipo. Puedes probar el proceso de instalación, comprar y vender aplicaciones y puedes enviar las aplicaciones directamente a un teléfono que esté conectado. También puedes probar las aplicaciones directamente desde tu equipo, permitiendo cambios en vivo del CSS.
</p><header> 

## Prototipos con JSFiddle</header> 

  1. Escribe tu código como harías normalmente con JSFiddle
  2. Agrega `/webapp.manifest` a la URL del Fiddle y pega el enlace en el simulador de Firefox OS para instalar la aplicación
  3. También puedes agregar `/fxos.html` a la URL del Fiddle para obtener una página de instalación como tendrías con una típica aplicación alojada de Firefox OS

 [Usar para prototipos de aplicaciones de Firefox OS](https://hacks.mozilla.org/2013/08/using-jsfiddle-to-prototype-firefox-os-apps/) 

JSFiddle es una forma simple de crear código de forma colaborativa. La última versión permite además publicar el código como una aplicación de Firefox OS para poder probarla.

## Componentes de la interfaz de Firefox

<p style="text-align: center;">
  <a href="http://lourcastillo.files.wordpress.com/2013/10/buildingfirefoxos.png"><img class="aligncenter size-full wp-image-591" alt="buildingfirefoxos" src="http://lourcastillo.files.wordpress.com/2013/10/buildingfirefoxos.png" width="640" height="460" /></a><a href="http://buildingfirefoxos.com">Crear FirefoxOS</a>
</p>

<p style="text-align: left;">
  Building Firefox OS es un recurso que muestra cómo se creó el sistema operativo. Es el código fuente de Gaia, la interfaz de usuario de Firefox OS, lo que prueba que nada en el SO es cerrado. Puedes usar estos principios para hacer que tu aplicación parezca «nativa» en Firefox OS, pero ten en cuenta que no están preparadas para aplicaciones de alto rendimiento.
</p><header> 

## Bloques de Firefox OS</header> 

<h2 style="text-align: center;">
  <img alt="Firefox OS UI components" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/buildingblocks.png" height="400" />
</h2>

<p style="text-align: center;">
  <a href="http://buildingfirefoxos.com/building-blocks/edit-mode.html">FirefoxOS edit mode</a>
</p>

Los bloques de Firefox OS son componentes reusables que forman parte del sistema operativo (aplicaciones certificadas). Puedes decir que son el diseño del sistema operativo. Sin embargo no están preparadas para aplicaciones de alto rendimiento, como canales de redes sociales o juegos. Puedes usar estos bloques para empezar, pero tienes que estar atento a que tu aplicación se verá como parte del sistema operativo, lo que puede confundir a los usuarios. Para otras opciones de más alto rendimiento o que no corran el peligro de confundirse con el sistema operativo, mira Mozilla Brick.<header> 

## Mozilla Brick</header> 

<p style="text-align: center;">
  <img alt="Mozilla Brick" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/brick.jpg" height="400" />
</p>

<p style="text-align: center;">
  <a href="http://mozilla.github.io/brick/">Brick</a> – <a href="https://hacks.mozilla.org/2013/08/introducing-brick-minimal-markup-web-components-for-faster-app-development/">Presentamos Brick</a>
</p>

Mozilla Brick es una forma más inteligente de lidiar con el problemas de los componentes de la iterfaz en la web. Es una biblioteca que permite crear aplicaciones desde componentes web incluidos en etiquetas peronalizadas. De esa forma tu marcado se hace mínimo, los componentes no tienen el problema de heredar estilos del documento principal y su rendimiento es mucho mejor que los componentes creados en el DOM, porque se muestran como parte del proceso de renderizado del navegador.<header> 

<h2 style="text-align: center;">
  Modelo de Web Activities
</h2></header> 

<p style="text-align: center;">
  <img alt="Firefox OS Boiler Plate" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/boilerplate.jpg" height="400" />
</p>

<p style="text-align: center;">
  <a href="https://github.com/robnyman/Firefox-OS-Boilerplate-App">Modelo de aplicaciones para Firefox OS</a>
</p>

El modelo de aplicaciones para Firefox OS creado por Robert Nyman es el comienzo perfecto para acostumbrarse a las actividades Web. Es un muestrario de botones que llaman a las diferentes actividades Web. Simplemente usa aquellas que necesites y borra las otras. El código está muy comentado para que veas donde poner esas funcionalidades.<header> 

## En breve: Mozilla Flathead</header> 

<p style="text-align: center;">
  <img alt="Mozilla Flathead" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/flathead.png" height="400" />
</p>

<p style="text-align: center;">
  <a href="http://flathead.herokuapp.com/designer"> URL de prueba de Flathead </a>
</p>

Flathead es un editor WYSIWYG para aplicaciones que permite arrastrar y soltar componentes, conectarlos en forma visual y después empaquetar y enviar tu aplicación con un simple clic. Es parte del proyecto Mozilla Webmaker y actualmente en producción.<header> 

## Conversión de HTML5 a código nativo</header> 

<p style="text-align: center;">
  <img alt="Phonegap" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/phonegapdiagram.png" height="400" />
</p>

<p style="text-align: center;">
  <a href="http://build.phonegap.com/">http://build.phonegap.com/</a>
</p>

Phonegap es una herramienta excelente para convertir aplicaciones de HTML5 en aplicaciones nativas para Android e iOS. La forma inversa no es posible, pero usando Phonegap puedes crear tu aplicación en HTML5 y todavía participar en los otros mercados.

## Recursos

  * <http://www.mozilla.org/en-US/firefox/os/> &#8211; el sitio oficial para usuarios finales de Firefox OS
  * <https://marketplace.firefox.com/> &#8211; donde conseguir aplicaciones de Firefox OS
  * <https://marketplace.firefox.com/developers/> &#8211; el centro de información para desarrolladores del marketplace, mucha información sobre cómo diseñar una aplicación, aplicaciones de demostración para descargar e información de cómo enviar tu aplicación.
  * <https://hacks.mozilla.org/category/firefox-os/> &#8211; El blog de Mozilla Hacks con mucha información sobre cómo escribir código para Firefox OS y cómo instalarlo
  * <https://hacks.mozilla.org/category/videoseries/> son una serie de entrevistas en videos que muestran las distintas características de Firefox OS
  * <https://developer.mozilla.org/en/docs/Mozilla/Firefox_OS> &#8211; la Wiki de Firefox OS<header> 

<h2 style="text-align: center;">
  Vistazo de Firefox OS
</h2></header> 

<p style="text-align: center;">
  <img alt="Firefox OS for end users" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/enduser-fxos.jpg" height="400" />
</p>

<p style="text-align: center;">
  <a href="http://www.mozilla.org/en-US/firefox/os/">http://www.mozilla.org/en-US/firefox/os/</a>
</p>

Esta es la página de información para el usuario final de Firefox OS. No hay notas ni información para los desarrolladores aquí, pero es útil para ver cómo los usuarios finales pueden beneficiarse con Firefox OS.<header> 

## Firefox OS Marketplace</header> 

<p style="text-align: center;">
  <img alt="Firefox OS Marketplace" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/marketplace.jpg" />
</p>

<p style="text-align: center;">
  <a href="https://marketplace.firefox.com">https://marketplace.firefox.com/</a>
</p>

El marketplace de Firefox OS es donde puedes conseguir aplicaciones para Firefox OS. Es el lugar para que el usuario final encuentre nuevas aplicaciones y tus aplicaciones se verán aquí.<header> 

<h2 style="text-align: left;">
  Centro para desarrolladores
</h2></header> 

<p style="text-align: center;">
  <img alt="Developer Hub" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/devhub.jpg" height="400" />
</p>

<p style="text-align: center;">
  <a href="https://marketplace.firefox.com/developers/">https://marketplace.firefox.com/developers/</a>
</p>

El centro para desarrolladores es la solución más rápida para todo lo relacionado con Firefox OS. Encontrarás información sobre qué hace útil a una aplicación HTML5, podrás descargar aplicaciones de demostración para modificarlas y podrás aprender como enviar tu aplicación al marketplace.<header> 

## El blog de Hacks</header> 

<img alt="Hacks Blog" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/hacksblog.jpg" height="400" /> 

<p style="text-align: center;">
  <a href="https://hacks.mozilla.org/category/firefox-os/">https://hacks.mozilla.org/category/firefox-os/</a>
</p>

El blog de hacks se actualiza casi semanalmente con noticias acerca de cómo crear por y con Firefox OS y con novedades de las herramientas para desarrolladores.<header> 

## Serie de videos sobre Firefox OS</header> 

<p style="text-align: center;">
  <img class="aligncenter" alt="Firefox OS Video Series" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/fxosvideos.jpg" width="658" height="400" />
</p>

<p style="text-align: center;">
  <a href="https://hacks.mozilla.org/category/videoseries/">https://hacks.mozilla.org/category/videoseries/</a>
</p>

La serie de videos «Firefox OS para desarrolladores: la plataforma que HTML5 merece» explica todas las de las soluciones técnicas en Firefox OS en la forma de pequeños videos con entrevistas (este contenido está en inglés).<header> 

## El Wiki de Firefox OS</header> 

<p style="text-align: center;">
  <img class="aligncenter" alt="Firefox OS Wiki" src="http://codepo8.github.io/mozilla-presentation-templates/html5/pictures/fxos/fxoswiki.jpg" width="854" height="400" />
</p>

<p style="text-align: center;">
  <a href="https://developer.mozilla.org/en/docs/Mozilla/Firefox_OS">https://developer.mozilla.org/en/docs/Mozilla/Firefox_OS</a>
</p>

El Wiki es donde encontrarás información detallada acerca de Firefox OS, desde cómo compilar el sistema operativo hasta crear tus propias aplicaciones para él.

    <strong>Artículo original: <a href="https://github.com/codepo8" target="_blank">https://github.com/codepo8</a></strong>