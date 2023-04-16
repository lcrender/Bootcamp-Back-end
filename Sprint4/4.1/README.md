# Sprint4.1
## Como Probar el Proyecto:

`npm start` para comenzar el proyecto<br>

Importar Colección Postman<br>
La colección de Postman tiene 5 pruebas que funcionan con las siguientes peticiones HTTP:
```
GET http://localhost:4000/user
POST http://localhost:4000/upload
POST http://localhost:4000/time
GET http://localhost:4000/pokemon/ID
GET http://localhost:4000/paginasinexistentes
```

En el caso de la 2da peticion hay que adjuntar un archivo de imagen de tipo: jpg|jpeg|png|gif. Para esto debes ir dentro del Postman a la solapa Body - Form-data - "Key": image. "Tipo": File. y en el campo "Value" seleccionar una imagen.<br>

![Upload File Example](https://github.com/lcrender/Sprint4.1/blob/chaza/img/upload.png)

Para el 3er caso hay que hacer "Basic Auth"<br>
Renombrar el archivo ".env.template" por ".env", este se encuentra en a raiz del sitio. Modificar los parametros USERNAME y PASS con los valores deseados.<br>
Para probarlo desde el Postman: ir a la solapa authorization, seleccionar "Type": Basic Auth. Luego poner los mismos datos de usuario y contraseña que se pusieron en el archivo ".env"<br>

![Auth Example](https://github.com/lcrender/Sprint4.1/blob/chaza/img/auth1.png)

Pokeapi<br>
Para el 4to caso reemplazar el "ID" de la URL por el numero de ID del Pokemon deseado.<br>

![saludos](https://github.com/lcrender/Sprint4.1/blob/chaza/img/pikachu.webp)
