## ANGULAR V. 18
## Proyecto Angular de Autenticación con JWT
Este proyecto es una aplicación Angular que consume una API de backend para implementar un sistema de autenticación y registro de usuarios utilizando JSON Web Tokens (JWT). También se han implementado guards para garantizar la seguridad de las rutas. La aplicación está diseñada con un enfoque responsivo, lo que significa que se adapta de manera óptima a diferentes dispositivos y tamaños de pantalla.

## Descripción
El proyecto se ha desarrollado utilizando Angular, y además hace uso de las siguientes tecnologías y librerías:

Bootstrap 5: Se ha utilizado Bootstrap 5 para la creación de algunos componentes de la interfaz de usuario, como botones, facilitando el diseño responsive y la maquetación de los mismos.

SweetAlert 2: se ha integrado para proporcionar notificaciones y mensajes de alerta personalizados en la aplicación, mejorando la experiencia del usuario durante el proceso de autenticación y registro.

Ionicons: Los iconos utilizados en la aplicación son de Ionicons, una librería de iconos de alta calidad y totalmente personalizables.

## Instalación
Clona este repositorio en tu máquina local utilizando el siguiente comando:
git clone https://ruta/al/repo.git

Navega hasta el directorio del proyecto:
cd nombre_del_proyecto

Instala las dependencias utilizando npm:
npm install

## Configuración
Antes de ejecutar la aplicación, asegúrate de configurar correctamente la URL de la API backend en el archivo de configuración correspondiente. Normalmente se encuentra en src/environments/environment.ts.

export const environment = {
  baseUrl: 'http://localhost:3000/api' // Cambia esta URL por la de tu API backend
};

## Uso
Una vez que hayas configurado la URL de la API backend, puedes ejecutar la aplicación utilizando el siguiente comando:

ng serve -o

Esto iniciará el servidor de desarrollo de Angular en http://localhost:4200/. Puedes abrir esta URL en tu navegador para ver la aplicación en funcionamiento.

## Características
Autenticación: Permite a los usuarios autenticarse utilizando un formulario de inicio de sesión. Los usuarios autenticados recibirán un token JWT que se utilizará para autorizar las solicitudes subsiguientes a la API.

Registro de Usuarios: Los usuarios pueden registrarse utilizando un formulario de registro. La información del usuario se enviará a la API backend para su procesamiento.

Guards de Rutas: Se han implementado guards para proteger ciertas rutas de la aplicación. Por ejemplo, se puede configurar un guard para asegurar que solo los usuarios autenticados puedan acceder a ciertas páginas.

## Contribuir
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Realiza un fork del repositorio.

Crea una nueva rama para tu contribución: 
git checkout -b mi-contribucion

Realiza tus cambios y haz commit de los mismos: 
git commit -am 'Añadir nueva característica'

Sube tus cambios a tu repositorio fork:
git push origin mi-contribucion
Crea un nuevo Pull Request en este repositorio.

## Vistas
![image](https://github.com/DIEGO-ORE-ENCISO/Login-Angular-JWT/assets/173582694/282beaa8-151a-49bd-bd2f-8f30b4124ceb)
![image](https://github.com/DIEGO-ORE-ENCISO/Login-Angular-JWT/assets/173582694/e438a98d-dd21-4be6-abe5-92a6fd801f89)
![image](https://github.com/DIEGO-ORE-ENCISO/Login-Angular-JWT/assets/173582694/caa6ba54-302b-44f7-9a6d-9d2830f6a6c5)
![image](https://github.com/DIEGO-ORE-ENCISO/Login-Angular-JWT/assets/173582694/f2db664a-f58e-43db-85b7-d8fe9bbc2aec)

## Créditos
Este proyecto fue desarrollado por DIEGO ANTONIO ORE ENCISO.



