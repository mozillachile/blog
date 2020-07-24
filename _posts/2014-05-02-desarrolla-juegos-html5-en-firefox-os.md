---
title: Desarrolla juegos HTML5 en Firefox OS
date: 2014-05-02T13:05:23-04:00
author: lourcastillo
layout: post
permalink: /blog/2014/05/02/desarrolla-juegos-html5-en-firefox-os/
categories:
  - Comunidad
  - Firefox OS
  - Hacks
tags:
  - Cocos2d-JS
  - Crafty JS
  - CreateJS
  - firefoxos
  - gamedev
  - HTML5
  - Impact JS
  - OpenGame
  - Phaser
  - Pixi JS
---
<div id="post_thumbnail">
  <img class="attachment-post-thumbnail wp-post-image" src="/images/2014/04/Curso-de-desarrollo-de-Aplicaciones-en-HTML5.jpg" alt="Curso-de-desarrollo-de-Aplicaciones-en-HTML5" width="595" height="470" />
</div>

<div class="entry-content">
  <div id="magicdomid702" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Las aplicaciones para Firefox OS están compuestas de una colección de HTML5/CSS/JS que pueden ser hosteadas en tu propio servidor o empaquetadas. Para entender un poco más sobre lo básico del desarrollo de apps para Firefox OS, puedes ingresar a los siguientes links:</span>
  </div>
  
  <p>
    <!--more-->
  </p>
  
  <ul>
    <li>
      <a href="https://developer.mozilla.org/es/docs/Web/Apps/Developing/Manifest/Manifest" target="_blank"><span class="author-g-3n5ygoyhbm83ge3f">Artículo sobre App Manifest en MDN</span></a>
    </li>
    <li>
      <a href="https://marketplace.firefox.com/developers/" target="_blank"><span class="author-g-3n5ygoyhbm83ge3f">Developer Hub</span></a>
    </li>
  </ul>
  
  <div id="magicdomid618" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Si eliges crear un juego hosteado vale la pena aprender más sobre appcache para hacerlo disponible como juego offline.</span></p> 
    
    <ul>
      <li>
        <a href="https://developer.mozilla.org/es/docs/Recursos_offline_en_firefox" target="_blank"><span class="author-g-3n5ygoyhbm83ge3f">Usando el app cache</span></a>
      </li>
    </ul>
  </div>
  
  <div id="magicdomid697" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Para validar tu <em>app manifest</em> utilice el <a href="https://marketplace.firefox.com/developers/validator" target="_blank">validador de este link</a>.</span>
  </div>
  
  <div id="magicdomid726" class="ace-line">
    <strong><span class="author-g-3n5ygoyhbm83ge3f u"><span style="text-decoration: underline">Probando tu juego</span></span></strong>
  </div>
  
  <div id="magicdomid728" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Utilice primero el <a href="https://ftp.mozilla.org/pub/mozilla.org/labs/fxos-simulator/" target="_blank">simulador disponible en los complementos de Firefox aquí</a>. Este complemento debe ser instalado en una versión actual de Firefox.</span>
  </div>
  
  <div id="magicdomid938" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Para probar en los teléfonos, puedes ver <a href="https://www.mozilla.org/en-US/firefox/os/devices/#alcatel_onetouchfire" target="_blank">donde conseguir uno aquí</a>.</span>
  </div>
  
  <div id="magicdomid1001" class="ace-line">
    <strong><span class="author-g-3n5ygoyhbm83ge3f u"><span style="text-decoration: underline">Libro sobre creación de aplicaciones para Firefox OS</span></span></strong>
  </div>
  
  <div id="magicdomid1130" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Para saber más sobre programación para Firefox OS, usted puede bajar la <a href="https://leanpub.com/quickguidefirefoxosdevelopment" target="_blank">Guía Rápida para Desarrollo en Firefox OS</a> [en].</span>
  </div>
  
  <div id="magicdomid1265" class="ace-line">
    <strong><span class="author-g-3n5ygoyhbm83ge3f u"><span style="text-decoration: underline">APIs interesantes para juegos</span></span></strong>
  </div>
  
  <div id="magicdomid1263" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Al contrario de las apps comunes, los juegos poseen necesidades bien específicas en términos de APIs.</span>
  </div>
  
  <div id="magicdomid1287" class="ace-line">
    <strong><span class="author-g-3n5ygoyhbm83ge3f u"><span style="text-decoration: underline">Canvas</span></span></strong>
  </div>
  
  <div id="magicdomid1409" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Para Firefox OS cuando se trata de la construcción de juegos con gráficos 2D, recomendamos la utilización del <a href="https://developer.mozilla.org/en-US/docs/HTML/Canvas" target="_blank">API canvas</a>.</span>
  </div>
  
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/HTML/Canvas" target="_blank"><span class="author-g-3n5ygoyhbm83ge3f">Canvas en el MDN</span></a>
    </li>
    <li>
      <a href="https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial" target="_blank"><span class="author-g-3n5ygoyhbm83ge3f">Tutorial de Canvas</span></a>
    </li>
    <li>
      <a href="https://www.udacity.com/course/cs255" target="_blank"><span class="author-g-3n5ygoyhbm83ge3f">Curso online gratuito de canvas/gamedev</span></a>
    </li>
  </ul>
  
  <div id="magicdomid1524" class="ace-line">
    <strong><span class="author-g-3n5ygoyhbm83ge3f u"><span style="text-decoration: underline">Entrada de datos</span></span></strong>
  </div>
  
  <div id="magicdomid1925" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Además de mostrar cosas en la pantalla del dispositivo, es necesario trabajar con la entrada de datos. La manera más común es utilizando los touch events que están documentados en <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Touch_events" target="_blank">Touch Events en el MDN</a>. Otras posibilidades son juegos controlados vía acelerómetro cuya API <a href="https://developer.mozilla.org/en-US/docs/WebAPI/Detecting_device_orientation#Processing_motion_events" target="_blank">esta en este artículo en el MDN</a>. Aviso, no prueben esa API en el Firefox OS ¡no!.</span>
  </div>
  
  <div id="magicdomid1957" class="ace-line">
    <strong><span class="author-g-3n5ygoyhbm83ge3f u"><span style="text-decoration: underline">localStorage</span></span></strong>
  </div>
  
  <div id="magicdomid2237" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Para guardar datos tales como</span><span class="author-g-3n5ygoyhbm83ge3f i"><i> high score</i></span><span class="author-g-3n5ygoyhbm83ge3f">, </span><span class="author-g-3n5ygoyhbm83ge3f i"><i>achievements </i></span><span class="author-g-3n5ygoyhbm83ge3f">usted puede utilizar <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage" target="_blank">localStorage </a>siendo que <em>localStorage</em> es una API blocking, su juego va a parar de procesar en cuanto los datos son escritos o leidos del storage. Para una mejor performance, utilice una API asíncrona como el <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" target="_blank">IndexedDB</a>.</span>
  </div>
  
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" target="_blank"><span class="author-g-3n5ygoyhbm83ge3f">IndexedDB en el MDN</span></a>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB" target="_blank"><span class="author-g-3n5ygoyhbm83ge3f">Utilizando IndexedDB</span></a>
    </li>
  </ul>
  
  <div id="magicdomid2507" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Existe una biblioteca para Firefox OS que es una versión de API similar a localStorage por eso es asíncrona y construida encima de IndexedDB, esa lib esta disponible <a href="https://github.com/mozilla-b2g/gaia/blob/master/shared/js/async_storage.js" target="_blank">aquí en Github</a>.</span>
  </div>
  
  <div id="magicdomid2535" class="ace-line">
    <strong><span class="author-g-3n5ygoyhbm83ge3f u"><span style="text-decoration: underline">Bibliotecas</span></span></strong>
  </div>
  
  <div id="magicdomid3075" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Para juegos sencillos, usted no necesita de nada además de las APIs que ya están disponibles en el Firefox OS. Para proyectos más ambiciosos vale la pena utilizar una biblioteca para evitar quedar reinventando la rueda. Claro que si usted es una empresa produciendo varios juegos con un equipo especializado usted va a preferir construir su propia biblioteca específica para sus necesidades pero para las otras personas que están interesadas en conocer las bibliotecas más famosas para la creación de juegos con HTML5, voy a colocar una lista abajo.</span>
  </div>
  
  <div class="ace-line">
    La utilización de las bibliotecas es a criterio de cada persona, pues no lo he probado, sólo hice la lista.
  </div>
  
  <ul>
    <li>
      <span class="author-g-3n5ygoyhbm83ge3f"><a href="http://phaser.io/" target="_blank">Phaser</a> es el framework del momento. Es open source, posee mucha gente contribuyendo y muchos juegos hechos en ella. Esta es una recomendación y funciona bien.<br /> </span>
    </li>
    <li>
      <span class="author-g-3n5ygoyhbm83ge3f"><a href="http://createjs.com/#%21/CreateJS" target="_blank">CreateJS</a> es una colección de bibliotecas muy completa, compuesta por libs independientes. El demo de EaselJS se ejecuta en Firefox OS.</span>
    </li>
    <li>
      <span class="author-g-3n5ygoyhbm83ge3f"><a href="http://impactjs.com/" target="_blank">Impact JS</a> es una biblioteca de pago, existe un <a href="http://shop.oreilly.com/product/0636920022633.do" target="_blank">libro de la editorial O’Reilly</a> sobre lo mismo que es súper bueno.</span>
    </li>
    <li>
      <a href="http://www.cocos2d-x.org/" target="_blank">Cocos2d-x </a>es un <a title="Framework" href="https://es.wikipedia.org/wiki/Framework">framework</a>, basado en (<a title="Pyglet" href="https://es.wikipedia.org/wiki/Pyglet">Pyglet</a>), escrito en <a title="Python" href="https://es.wikipedia.org/wiki/Python">Python</a> para crear juegos en 2d, y presentaciones gráficas. Para crear juegos HTML5 con Cocos2d, recomiendo <a href="http://www.cocos2d-x.org/wiki/Cocos2d-JS" target="_blank">Cocos2d-JS</a>.
    </li>
    <li>
      <a href="http://craftyjs.com/" target="_blank"><span class="author-g-3n5ygoyhbm83ge3f">Crafty JS</span></a>
    </li>
    <li>
      <a href="https://github.com/GoodBoyDigital/pixi.js" target="_blank"><span class="author-g-3n5ygoyhbm83ge3f">Pixi JS</span></a>
    </li>
  </ul>
  
  <div id="magicdomid3603" class="ace-line">
    <strong><span class="author-g-3n5ygoyhbm83ge3f u"><span style="text-decoration: underline">Herramientas</span></span></strong>
  </div>
  
  <div id="magicdomid3660" class="ace-line">
    <span class="author-g-3n5ygoyhbm83ge3f">Existen herramientas muy buenas para creación de juegos.</span>
  </div>
  
  <ul>
    <li>
      <span class="author-g-3n5ygoyhbm83ge3f"><a href="http://www.codeandweb.com/texturepacker" target="_blank">Texture Packer </a>es una herramienta óptima para la creación de spritesheets/texture atlas.</span>
    </li>
    <li>
      <span class="author-g-3n5ygoyhbm83ge3f"><a href="http://www.bfxr.net/" target="_blank">bfxr</a> es una herramienta para la creación de efectos sonoros para los juegos.</span>
    </li>
  </ul>
  
  <blockquote>
    <div id="magicdomid3876" class="ace-line">
      <strong><span class="author-g-3n5ygoyhbm83ge3f">Agradecimiento a Andre Garzia de Brasil por permitirme compartir este artículo con todos ustedes en nuestro idioma español: </span></strong><span class="author-g-3n5ygoyhbm83ge3f url"><a href="http://andregarzia.com">http://andregarzia.com</a></span>
    </div>
  </blockquote>
</div>