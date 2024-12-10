const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'WebSocket API',
      version: '1.0.0',
      description: 'API documentation for the WebSocket application',
    },
    components: {
      schemas: {
        Message: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Message sent from the server',
            },
          },
        },
      },
    },
  },
  apis: ['./index.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *   get:
 *     description: Serve the index.html file
 *     responses:
 *       200:
 *         description: HTML file
 */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

/**
 * @swagger
 * /message:
 *   get:
 *     description: Get a hello message from the server
 *     parameters:
 *       - in: query
 *         name: user
 *         required: false
 *         schema:
 *           type: string
 *         description: The name of the user
 *     responses:
 *       200:
 *         description: "Hello message"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 */
app.get('/message', (req, res) => {
  const user = req.query.user ? req.query.user : 'World';
  res.json({ message: `Hello, ${user}!` });
});

/**
 * @swagger
 * /websocket:
 *   get:
 *     description: WebSocket connection to the server
 *     responses:
 *       200:
 *         description: WebSocket endpoint for communication
 */
app.get('/websocket', (req, res) => {
  res.send('Use WebSocket connection for real-time communication.');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('message', 'Hello World');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});