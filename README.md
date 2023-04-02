# Weather API 

En este proyecto se utilizo la API  de OpenWeather, esta se consumio para poder traer el clima de la mayorias de la ciudades del pais (México).

## Utilizacion de un JSON:
Aunque la API de OpenWaether te permite saber los climas de la ciudades, algo que no puede hacer de una manera correcta es buscar la ciudad mediante solo el nombre de esta, si no que requiere su latitud y su longitud en el mapa cartesiano del mundo, es por esto que se utilizo un archivo JSON que contenia la mayoria de las ciudades de México, en este se puede encontrar la latitud y longitud de cada ciudad y con esto poder hacer la llamada la API.

El nombre del archivo es: 

```
citiesMexico.json
```

## Geolocalizacion con JavaScript

Tambien al iniciar el poryecto este te pedira permiso para poder acceder a tu ubicacion para poder traer el clima de el lugar donde te encuntras, esto es un plus referente al proyecto por que creo que es interesante utilizar las herramientas nativas que avaScript te proporciona, asi que al momento de cargar el proyecto este te dejara ver el clima de tu localidad y ya después en un buscador podras la ciudad que tu gustes.

Le herramienta para traer tu ubicacion con JavaScript es: 

```
navigator.geolocation.getCurrentPosition();
``` 
### Mas acerca de:

La aplicaion es pequeña pero se trata de hacer uso de "fetch",  "Promesas" y "Async / Await ", asi como el uso correcto de el lenguaje de programacion con la forma de programar mas actual y mas limpia que en este momento tengo conocimiento.

