# WebSocketHolaMundo - Node.js

Este es un proyecto de **"Hola Mundo"** utilizando **WebSocket** en **Node.js** con **Socket.IO**. La aplicación crea un servidor WebSocket que se conecta a los clientes y les envía un mensaje en tiempo real. Además, expone una API RESTful utilizando **Swagger** para documentar y probar la API.

## Características

- Implementación de un servidor WebSocket utilizando **Socket.IO**.
- Conexión en tiempo real con los clientes, enviando un mensaje de bienvenida "Hola Mundo".
- Exposición de una API RESTful con **Express**.
- **Swagger UI** para visualizar y probar la API.
- Conexión WebSocket para mensajes en tiempo real.

## Requisitos

- Node.js 14.x o superior
- Express
- Socket.IO
- Swagger-UI-Express
- Swagger-JSdoc para documentación automática

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/lessalcu/WebSocket-HolaMundo.git
   cd WebSocket-HolaMundo
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta la aplicación:
   ```bash
   npm start
   ```

4. La aplicación se ejecutará en `http://localhost:3000`. Puedes acceder a Swagger UI en `http://localhost:3000/api-docs/`.

## Uso

- **Ruta para el archivo HTML**:
   Al acceder a `http://localhost:3000/`, se servirá el archivo `index.html`

- **Endpoint RESTful**:
   La API tiene un endpoint disponible en `/` que responde a solicitudes **GET** y devuelve un mensaje `Hello, World!`:

   **Ejemplo de respuesta**:
   ```json
   {
     "message": "Hello, World!"
   }
   ```

- **WebSocket**:
   - La aplicación permite a los clientes conectarse al servidor WebSocket en `ws://localhost:3000`. Una vez conectados, los clientes recibirán un mensaje "Hola Mundo" a través de WebSocket en tiempo real.

## Swagger UI

La documentación de la API está disponible en **Swagger UI** a través de la ruta `http://localhost:3000/api-docs/`. Aquí podrás visualizar las rutas disponibles y probar las solicitudes GET.

## Docker

### Descargar la imagen desde Docker Hub

1. Para descargar la imagen desde Docker Hub:
   ```bash
   docker pull lssalas/hello-world-websocket:latest
   ```
2. Para ejecutar la imagen desde Docker Hub:
   ```bash
      docker run -p 3000:3000 --name hello-world-websocket-container lssalas/hello-world-websocket:latest
   ```

## Notas

Este proyecto sirve como ejemplo básico para entender cómo usar **WebSocket** en Node.js con **Socket.IO**, y cómo exponer una API RESTful utilizando **Swagger**. Los clientes pueden conectarse a través de WebSocket para recibir mensajes en tiempo real. Además, la documentación de la API está disponible a través de Swagger UI.