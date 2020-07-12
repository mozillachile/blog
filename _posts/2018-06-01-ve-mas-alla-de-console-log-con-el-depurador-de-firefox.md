---
id: 1255
title: Ve más allá de console.log con el depurador de Firefox
date: 2018-06-01T12:41:32-04:00
author: lourcastillo
layout: post
permalink: /blog/2018/06/01/ve-mas-alla-de-console-log-con-el-depurador-de-firefox/
image: /images/2018/06/Debugger_social-1-300x165.png
categories:
  - Comunidad
  - Desarrolladores
  - Firefox
  - Hacks
tags:
  - Chile
  - mozilla
  - Mozilla Chile
---
Esta es una traducción del [artículo original](https://hacks.mozilla.org/2017/11/go-beyond-console-log-with-the-firefox-debugger/) publicado en el blog de Mozilla Hacks. Traducción por Sergio Carlavilla Delgado._

`console.log` no es un depurador. Es genial para averiguar qué está haciendo tu aplicación JavaScript, pero se limita a escupir una cantidad mínima de información. Si tu código es complejo, necesitarás un depurador adecuado. Es por eso que hemos agregado una nueva sección a el Firefox DevTools Playground, que [trata sobre la depuración](https://mozilladevelopers.github.io/playground/debugger). Hemos creado cuatro lecciones básicas que usan el depurador de Firefox para examinar y arreglar una aplicación de tareas (_to-do_) en JavaScript.

### Presentamos el Debugger Playground

<a href="images/2018/03/Debugger_social-1.png" rel="attachment wp-att-1805"><img class="aligncenter size-large wp-image-1805" src="/images/2018/03/Debugger_social-1-600x307.png" sizes="(max-width: 600px) 100vw, 600px" srcset="/images/2018/03/Debugger_social-1-600x307.png 600w, /images/2018/03/Debugger_social-1-300x154.png 300w, /images/2018/03/Debugger_social-1-768x393.png 768w, /images/2018/03/Debugger_social-1.png 1000w" alt="" width="600" height="307" /></a>

Las lecciones son completamente gratuitas y el código de la aplicación de tareas está [disponible para descargar desde GitHub](https://mozilladevelopers.github.io/sample-todo/01-variables/).

Estas lecciones son un nuevo formato para nosotros y estamos muy emocionados de brindártelas. Siempre estamos buscando nuevas formas para ayudar a los desarrolladores a aprender cosas y mejorar el flujo de trabajo diario. Si tienes una idea, avísanos. Ampliaremos el Playground en los próximos meses y estamos encantados en escuchar de desarrolladores como tú.

Si no estas familiarizado con el depurador de Firefox, echa un vistazo a los [documentos de depuración en MDN](https://developer.mozilla.org/en-US/docs/Tools/Debugger) y mira este corto de introducción:



Ahora echemos un vistazo a una lección del nuevo Debugger Playground. ¿Alguna vez usaste `console.log` para saber el valor de una variable? Hay una manera más fácil y más precisa de hacerlo con el depurador.

### Usa el depurador para saber el valor de una variable

Es mucho más fácil encontrar una variable con el depurador de Firefox que con `console.log`. Así es cómo funciona:

Echemos un vistazo a una aplicación sencilla de tareas. <a href="https://mozilladevelopers.github.io/sample-todo/01-variables/" target="_blank" rel="noopener noreferrer">Abre la aplicación de tareas en una nueva pestaña</a>.

Esta aplicación tiene una función llamada `addTodo` que tomará el valor del formulario de entrada, creará un objeto y luego lo insertará en un array de tareas. Probémoslo agregando una nueva tarea. Esperarás tener esta nueva tarea agregada a la lista, pero en su lugar verás “[object HTMLInputElement]”.

Algo está roto, y tenemos que depurar el código. La tentación es comenzar a agregar `console.log` por toda la función, para identificar dónde está el problema. El enfoque podría ser algo como esto:

<pre lang="javascript">const addTodo = e =&gt; {
 e.preventDefault();
 const title = document.querySelector(".todo__input");
 console.log('title is: ', title);
 const todo = { title };
 console.log('todo is: ', todo');

items.push(todo);
 saveList();
 console.log(‘The updated to-do list is: ‘, items);
 document.querySelector(".todo__add").reset();
 };</pre>

Esto puede funcionar, pero es engorroso e incómodo. También debemos recordar eliminar estas líneas después de corregir el código. Hay una forma mucho mejor de hacerlo con el depurador utilizando lo que se llama un punto de interrupción…

### Aprende más en el Debugger Playground

El Debugger Playground cubre los aspectos básicos del uso del depurador de Firefox, examinar la pila de llamadas, establecer puntos de interrupción condicionales y más. Sabemos que hay una curva de aprendizaje abrupta para usar el depurador (y para depurar JavaScript), por lo que hemos creado una aplicación de tareas fácil de entender y decodificar. También es útil ejecutarlo en tu navegador web para mantener las cosas en orden durante tu día de trabajo. La aplicación está [disponible aquí para descargar](https://github.com/MozillaDevelopers/sample-todo) en GitHub. Tómalo y luego dirígete a el [Playground](https://mozilladevelopers.github.io/playground/) para ver las lecciones.

Haznos saber qué te gustaría ver a continuación. Estamos trabajando en nuevas lecciones sobre las últimas tecnologías web y nos gustaría saber de ti. Publica en los comentarios que hay a continuación.

<pre><strong>Fuente:</strong> <a href="http://www.mozillabolivia.org/ve-mas-alla-de-console-log-con-el-depurador-de-firefox/">Mozilla Bolivia</a></pre>