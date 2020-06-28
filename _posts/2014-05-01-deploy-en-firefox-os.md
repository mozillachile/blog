---
id: 622
title: “Deploy” en Firefox OS
date: 2014-05-01T21:34:08-04:00
author: lourcastillo
layout: post
guid: http://www.mozillachile.cl/?p=622
permalink: /blog/2014/05/01/deploy-en-firefox-os/
categories:
  - Firefox OS
  - Hacks
tags:
  - firefox os
  - FreeSoftware
  - Geeksphone
  - mozilla
---
<div class="entry-content">
  <p>
    <img class="aligncenter size-full wp-image-898" src="http://www.psep.cl/wp-content/uploads/2013/12/Seleccion_008.png" alt="" width="552" height="240" />
  </p>
  
  <p>
    Este no será la entrada indicada para describir los pros y contra de este nuevo sistema operativo para móviles. La verdad es que al momento estoy maravillado por su simpleza y ya tengo unas aplicaciones en el marketplace de Firefox (pueden ver en “Apps”).
  </p>
  
  <p>
    <!--more-->
  </p>
  
  <p>
    <span id="more-897"></span>Una de las cosas especiales de este S.O. es la facilidad de desarrollo sin necesidad de contar con un IDE, como deben saber, está orientado a la Web (ahora ¿qué no lo está?) por lo que por ejemplo, si queremos probar nuestras aplicaciones sólo basta con descargar el simulador de la página de complementos de <a href="https://addons.mozilla.org/es/firefox/addon/firefox-os-simulator/" target="_blank">Firefox</a> y lo tendremos “automágicamente” en nuestro navegador si es que estamos usando un “Mozilla-like” (como Firefox y forks: GNU IceCat, Iceweasel, etc).
  </p>
  
  <p>
    Cuando ya contamos y podemos testear nuestras aplicaciones en el simulador, ¿qué pasa si queremos probar en nuestro dispositivo móvil? La solución es muy simple. Firefox OS usa como núcleo el kernel linux, el mismo de Android, por lo que sólo debemos cambiar algunas reglas comprobando primero si nuestra distro (Debian GNU/Linux) detecta el dispositivo con Firefox OS (en mi caso el Geeksphone Peak).
  </p>
  
  <p>
    Para comprobar si es detectado nuestro teléfono (es lo más probable):
  </p>
  
  <div>
    <div id="highlighter_113483" class="syntaxhighlighter notranslate bash">
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td class="gutter">
            <div class="line number1 index0 alt2">
              1
            </div>
          </td>
          
          <td class="code">
            <div class="container">
              <div class="line number1 index0 alt2">
                <code class="bash plain">$ lsusb                                                                   &lt;a class="toolbar_item command_help help" href="http://www.psep.cl/2013/12/08/deploy-en-firefox-os/#">?&lt;/a></code>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
  
  <p>
    <img class="aligncenter size-full wp-image-900" src="http://www.psep.cl/wp-content/uploads/2013/12/Seleccion_005.png" alt="" width="603" height="180" />
  </p>
  
  <p>
    En la imagen aparece seleccionado el dispositivo, por lo que podemos avanzar. Lo siguiente es modificar el archivo /etc/udev/rules.d/51-android.rules donde la estructura es:
  </p>
  
  <p style="text-align: center">
    SUBSYSTEM==”usb”, ATTR{idVendor}==”ID_VENDEDOR”, MODE=”0666″, GROUP=”plugdev”
  </p>
  
  <p>
    Lo editamos con nuestro editor favorito (yo uso Emacs):
  </p>
  
  <p>
    <img class="aligncenter size-full wp-image-901" src="http://www.psep.cl/wp-content/uploads/2013/12/Seleccion_006.png" alt="Selección_006" width="479" height="27" />
  </p>
  
  <p>
    Donde ID_VENDEDOR es el correspondiente a nuestro equipo. El ID del Geeksphone es el 05c6, esto irá variando según sea el fabricante. El fichero 51-android.rules debería quedar así:
  </p>
  
  <p>
    <img class="aligncenter size-full wp-image-902" src="http://www.psep.cl/wp-content/uploads/2013/12/Seleccion_007.png" alt="" width="593" height="57" />
  </p>
  
  <p>
    Guardamos y reiniciamos el servicio udev:
  </p>
  
  <div>
    <div id="highlighter_18040" class="syntaxhighlighter notranslate bash">
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td class="gutter">
            <div class="line number1 index0 alt2">
              1
            </div>
          </td>
          
          <td class="code">
            <div class="container">
              <div class="line number1 index0 alt2">
                <code class="bash comments"># /etc/init.d/udev restart                                     &lt;a class="toolbar_item command_help help" href="http://www.psep.cl/2013/12/08/deploy-en-firefox-os/#">?&lt;/a></code>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
  
  <p>
    Con ello nuestro simulador ya estará conectado con nuestro móvil con Firefox OS y podremos “deployar” nuestras apps en el dispositivo sólo con buscar la ruta de su manifiesto y apretando el botón “Push”.
  </p>
  
  <p>
    <img class="size-full wp-image-903 aligncenter" src="http://www.psep.cl/wp-content/uploads/2013/12/Seleccion_009.png" alt="" width="641" height="268" />
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    Fuente: <a href="https://developer.mozilla.org/en-US/Firefox_OS/Debugging/Connecting_a_Firefox_OS_device_to_the_desktop" target="_blank">https://developer.mozilla.org/en-US/Firefox_OS/Debugging/Connecting_a_Firefox_OS_device_to_the_desktop</a>
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    <em>Artículo original en <a title="&quot;Deploy&quot; en Firefox OS - Psep.cl" href="http://www.psep.cl/2013/12/08/deploy-en-firefox-os/" target="_blank">Psep.cl</a>, puede ser distribuido y modificado mientras incluya esta nota según <a title="CC BY-SA 3.0" href="http://creativecommons.org/licenses/by-sa/3.0/cl/" target="_blank">Licencia CC</a></em>
  </p>
</div>