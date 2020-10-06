<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Henry-App

## Tecnologias Usadas

- Front-End:
+ React
+ Redux
+ React-MaterialUi
+ HTML, CSS, javascript

- Back-End:
+ Node.js
+ Express
+ Sequelize
+ passport
+ SQL 

- Base de datos:
+ PostgreSQL

## Como iniciar el proyecto
Para iniciar el proyecto deberas:

- Clonar el repositorio
- Crear un archivo `.env ` dentro de la carpeta `api`, el archivo debe contener lo siguiente:

```
DB_USER={Your postgreSQL user}
DB_PASSWORD={Your postgreSQL password}
DB_HOST=localhost

```

Para administrar la pagina debes loguearte con el siguiente usuario:
```
email: admin@henry.com
password: 1234

```

Para agregar a un alumno, deberas ir a la seccion `Admin` luego hacer click en `administracion de cohortes`, `clickear un cohorte`, y por ultimo clickear en el lapiz que esta dentro de la tabla, alli podras agregar a un alumno utilizando su `mail`.

Le llegara un mail invitando a el alumno a que se registre, una vez registrado, podras comenzar a administrarlo, agregandole notas, poniendolo en un grupo de cohortes, y demas.

