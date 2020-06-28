---
id: 1264
title: Utilizando dispositivos 2FA con la API WebAuthn
date: 2018-06-01T17:50:23-04:00
author: lourcastillo
layout: post
guid: http://www.mozillachile.cl/?p=1264
permalink: /blog/2018/06/01/utilizando-dispositivos-2fa-con-la-api-webauthn/
image: /images/2018/06/2fastud-fullsize-300x165.jpg
categories:
  - Desarrolladores
  - Firefox
  - Hacks
  - Privacidad
tags:
  - 2fa
  - Chile
  - dispositivos
---
_Esta es una traducción del [artículo original](https://hacks.mozilla.org/2018/01/using-hardware-token-based-2fa-with-the-webauthn-api/) publicado en el blog de Mozilla Hacks. Traducción por Emmanuel Sanchez.  
_ 

Para proveer una seguridad mayor al momento de iniciar sesiones, los sitios web utilizan la autenticación de dos pasos (2FA, _two-factor authentication_), comúnmente utilizando una aplicación de smartphone o mensajes de texto. Estos mecanismos hacen que los usuarios sean menos susceptibles a los ataques de [phishing](https://developer.mozilla.org/es/docs/Mozilla/Phishing), pero no son perfectos (los usuarios pueden ser engañados para que entreguen sus códigos y los mensajes de texto pueden ser interceptados de varias maneras).

Firefox 60 llegará con [la API WebAuthn](https://www.w3.org/TR/webauthn/) activada por defecto, proporcionando autenticación de dos factores basada en [criptografía pública](https://es.wikipedia.org/wiki/Criptograf%C3%ADa_asim%C3%A9trica) inmune al phishing como lo conocemos el día de hoy. A continuación daremos una introducción para aprender la forma de proteger a millones de usuarios que ya poseen dispositivos [USB U2F FIDO](https://en.wikipedia.org/wiki/Universal_2nd_Factor).

### Creando una nueva credencial

Empecemos con un ejemplo simple: vamos a requerir credenciales compatibles con el estándar de dispositivos USB FIDO U2F; existen muchos dispositivos compatibles con nombre como Yubikey, U2F Zero, y otros:

<pre lang="javascript">const cose_alg_ECDSA_w_SHA256 = -7;

/* El reto debe de iniciarse en el servidor */
let challenge = new Uint8Array([21,31,105 /* 29 bytes más de números aleatorios generados por el servidor */]);
let pubKeyCredParams = [{
  type: "public-key",
  alg: cose_alg_ECDSA_w_SHA256
}];
let rp = {
  name: "Test Website"
};
let user = {
  name: "Firefox User &lt;firefox @example.com&gt;",
  displayName: "Firefox User",
  id: new TextEncoder("utf-8").encode("firefox@example.com")
};

let publicKey = {challenge, pubKeyCredParams, rp, user};
navigator.credentials.create({publicKey})
  .then(decodeCredential);
</pre>

En el caso de dispositivos U2F USB, esto hace que todos los dispositivos conectados esperen a algún tipo de interacción por parte del usuario. Tan pronto como el usuario toca el dispositivo este genera una nueva credencial y la promesa (Promise) se resuelve.

El función `decodeCredential()` descifrará la respuesta para recibir una referencia a una llave, ya sea  una referencia un par de llaves ECDSA almacenadas en el dispositivo, o las mismas llaves ECDSA cifradas con una llave del dispositivo secreta. La llave pública se envía sin cifrar.

La referencia de la llave, la llave pública, y la firma deben de ser verificadas por el servidor utilizando un reto generado al azar. Debido a que la información está relacionada criptográficamente con el servidor, la verificación fallará si el servidor origen no coincide. Esto evita que se utilicen credenciales de otros sitios web.

La referencia de la llave y la llave pública ahora estarán asociadas al usuario actual. La api WebAuthn no exige algún tipo de interfaz en el navegador, por lo que es responsabilidad del sitio web indicarle al usuario el momento en el que debe de conectar y registrar su dispositivo.

### Obtener evidencia de una credencial ya existente

La siguiente ocasión que un usuario trate de autenticarse en un sitio web, este le solicitará que pruebe que aún posee el “segundo factor” que se creó en la sección anterior. El backend obtendrá la referencia de la llave y le enviará un nuevo desafío al usuario. Debido a que `allowCredentials` es un array, permite el envío de más de un token, en caso de un usuario tenga varios tokens (dispositivos) registrados en la misma cuenta.

<pre lang="javascript">/* El reto debe de realizarse en el servidor */
let challenge = new Uint8Array([42,42,33 /* 29 bytes más de números aleatorios generados por el servidor */]);
let key = new Uint8Array(/* … obtener referencia de llave … */);

let allowCredentials = [{
  type: "public-key",
  id: key,
  transports: ["usb"]
}];

let publicKey = {challenge, allowCredentials};

navigator.credentials.get({publicKey})
  .then(decodeAssertion);
</pre>

De nuevo, todos los dispositivos USB U2F van a esperar alguna interacción por parte del usuario. Cuanto el usuario toca un token este va a tratar de encontrar la llave que se encuentra en el dispositivo a través de su referencia, o tratará de desencriptarla en base a su llave secreta. En caso exitoso, entregará una firma. Sino, la autenticación fallará y se deberá de iniciar de nuevo el proceso para ingresar al sitio.

Después de decodificar, la firma y la llave son enviados al servidor. Si la clave almacenada con el manejador de llaves es capaz de resolver el desafío, se considera que fue exitoso y se le permite al usuario ingresar.

### Autenticación de primer factor

La especificación Web Authentication también contiene mecanismos para poder autenticar a usuarios sin utilizar un usuario o una contraseña, solo un dispositivo seguro, como un entorno de ejecución seguro dentro de tu smartphone. En este modo, tu dispositivo no solo verifica que tienes posesión de él, sino que además lo desbloqueaste cib una contraseña (algo que tú conoces) y/o seguridad biométrica (algo que tú eres).

Esto le permitirá a los sitios web verificar tu identidad a su web desde tu computadora respondiendo a un mensaje que te aparecería en tu smartphone.

Los dispositivos FIDO U2F aún no son tan avanzados para permitir que esto ocurra, pero la siguiente generación sí lo será y los desarrolladores web podrán interactuar con esos dispositivos FIDO 2.0 usando Web Authentication.

### WebAuthn, disponible en tu Firefox más cercano

Ésta fue una introducción muy pequeña al mundo de la autenticación Web e intencionalmente ignora muchos detalles como lo son [la codificación CBOR](https://tools.ietf.org/html/rfc7049) y los [formatos COSE_KEY](https://tools.ietf.org/html/rfc8152#section-7), así como los parámetros que pueden ser utilizados para las funciones `.create()` y `.get()`.

Nos gustaría fomentar que los desarrolladores empiecen a experimentar con WebAuthn, y permitirle a sus usuarios proteger sus sesiones con autenticaciones de dos factores tan pronto como estén disponibles. Al momento de escribir esto no conocemos bibliotecas para la utilización de WebAuthn-U2F, pero esperamos que estén disponilbes pronto. Si tú llegas a ver algo prometedor no dudes en avisarnos por los comentarios.

Es muy emocionate traer la estandarización de la autenticación de dos factores a la web; la criptografía de llave pública también protege nuestra información cuando viaja a través de internet a través del protocolo TLS, y ahora permite que los ataques phishing sean más difíciles de realizar. Prueba WebAuthn en Firefox ([firefox.com](http://firefox.com)).

[<img class="aligncenter size-full wp-image-41672" src="https://www.mozilla-hispano.org/wp-content/uploads/20180111_162351.jpg" sizes="(max-width: 650px) 100vw, 650px" srcset="https://www.mozilla-hispano.org/wp-content/uploads/20180111_162351.jpg 650w, https://www.mozilla-hispano.org/wp-content/uploads/20180111_162351-300x247.jpg 300w, https://www.mozilla-hispano.org/wp-content/uploads/20180111_162351-130x107.jpg 130w, https://www.mozilla-hispano.org/wp-content/uploads/20180111_162351-100x83.jpg 100w" alt="Autenticación con token" width="650" height="535" />](https://www.mozilla-hispano.org/wp-content/uploads/20180111_162351.jpg)

### Una nota final sobre pruebas

La autenticación Web es una poderosa característica. eso implica que solo puede ser utilizada en [entornos seguros](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) del navegador, y solo puede ser utilizado cuando el documento original tenga el mismo origen. Esto significa que puedes encontrar errores de seguridad cuando experimentes utilizando sitios web de pruebas (como jsfiddle.net).

**Fuente:** [Mozilla hispano](https://www.mozilla-hispano.org/utilizando-dispositivos-2fa-con-la-api-webauthn/)