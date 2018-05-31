Los puestos que se utilizan para levantar la parte Frontend los determina usted, mi recomendación es que use los que vienen despues
del 8080 ejemplo 8081 y 8082 y asi sucesivamente.

La version de node en el servidor es vieja, las librerias de las vistas si las soportan, no trate de cambiar la version del servidor 
por que si no lo joderia, mejor instale una version vieja en su computadora

en la carpeta gulp/server.js cambia el puerto

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser,
    ghostMode: false,
    port: 9001 //el puerto de su elección recomendacion las de arriba.
  });
}

El servicio (backend) tiene que estar corriendo en un puerto mayor a la app ejemplo 9002 o la recomendación de arriba.

