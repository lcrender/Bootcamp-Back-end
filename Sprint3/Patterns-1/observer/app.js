var User = require('./usuarios.js');
var Tema = require('./temas.js');

var walter = new User('Walter');
//Intento crear otro usuario con el mismo nombre de usuario para forzar un error.
var walterb = new User('Walter');
var pochito = new User('Pochito');
var informatica = new Tema('Informatica');
informatica.suscribe(walter.name);
informatica.suscribe(pochito.name);
var fisica = new Tema('Fisica');
fisica.suscribe(walter.name);
//Envio un mensaje a los suscriptores de informatica (recibo 2 mensajes)
informatica.msg(walter.name, 'Saludos a todos los informaticos');
informatica.msg(pochito.name, 'Saludos Walter');
//El saludo de Pochito para los fisicos no se enviara ya que Pochito no esta suscripto al tema Fisica.
fisica.msg(pochito.name, 'Saludos Fisicos');
fisica.msg(walter.name, 'Hola, ¿Hay alguien en este tema?');
informatica.unsuscribe(walter.name);
//Dessuscribo a Walter de Informatica, ahora el mensaje de Walter no se envia
informatica.msg(walter.name, 'Hola?');
var mabel = new User('Mabel');
var verohotdog = new User('Vero Hot Dog');
informatica.suscribe(mabel.name);
informatica.suscribe(verohotdog.name);
informatica.unsuscribe(mabel.name);
informatica.unsuscribe(verohotdog.name);
informatica.msg(pochito.name, 'Saludos');


