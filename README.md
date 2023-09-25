# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Modularización de maquetación HTML

En este proyecto, se ha realizado la modularización de una maquetación HTML utilizando React en la herramienta de compilación Vite.

Pasos para modularizar la maquetación HTML:

- Crear un proyecto React.
- Crear una carpeta de componentes.
- Crear un componente HTML básico.
- Importar el componente HTML en el archivo App.js.
- Compilar el proyecto.
- Modularizar el componente HTML.
- Importar los componentes modularizados.
- Compilar el proyecto nuevamente.

Explicación:

La modularización de la maquetación HTML permite dividirla en componentes más pequeños y fáciles de mantener. Esto hace que el código sea más fácil de entender y reutilizar.

Este proyecto se dividió en: 
- Headers (llamado en este proyecto como Nav).
- Aside (Menu lateral izquierdo).
- Formulario.
- Footer.
Se colocaron las etiquetas correspondientes de cada componente en el archivo main.jsx. 

## Requisitos para iniciar el servidor Vite:

- Node.js versión 18+
- NPM o Yarn


## Instalación de Vite:

Para instalar Vite, puedes usar el comando npm install -g vite o yarn global add vite.

## Inicio del servidor Vite:

Para iniciar el servidor Vite, puedes usar el comando npm run dev, dentro del directorio src de la carpeta del repositorio.



