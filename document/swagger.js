import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My-Backend Project',
            version: '1.0.0',
        },
        components: {
            securitySchemes: {
                jwt: {
                    type: 'http',
                    scheme: 'bearer',
                    in: 'header',
                    bearerFormat: 'JWT',
                },
            },
        },

        swagger: '3.0',
    },
    apis: ['./document/*.yaml'],
};

const spec = swaggerJsdoc(options);

export default function swaggerDocs(app, port) {
    //Swagger page
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

    //Docs in JSON format
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(spec);
    });
}












































// import swaggerUi from "swagger-ui-express";
// import swaggerJsdoc from 'swagger-jsdoc';
// import express from "express"
// import app from "../app.js"
// app.use(express.json())

// const options = {
//     definition: {
//         openai: '3.0.0',
//         info: {
//             title: 'CRUD operation',
//             version: '1.0.0',
//             description: 'this is a CRUD operation documation with swagger'
//         },
//         servers: [{
//             url: 'http://localhost:6001/',
//             description: 'development server'

//         }],
//         components: {
//             schemas: {
//                 Blog: {
//                     type: 'object',
//                     require: ['title', 'author', 'content', 'imageUrl'],
//                     properties: {
//                         author: {
//                             type: 'string',
//                             description: 'the author of the blog'
//                         },
//                         title: {
//                             type: 'string',
//                             description: 'the title of the blog'
//                         },
//                         imageUrl: {
//                             type: 'string',
//                             description: 'the imageUrl of the blog'
//                         },
//                         content: {
//                             type: 'string',
//                             description: 'the content of the blog'
//                         }

//                     }


//                 }
//             },
//             responses: {
//                 400: {
//                     description: 'missing api-key',
//                     contents: 'application/json',
//                 },
//                 401: {
//                     description: 'unauthorized',
//                     contents: 'application/json',
//                 },
//                 400: {
//                     description: 'unauthorized',
//                     contents: 'application/json',
//                 }
//             },

//         }


//     },
//     apis: ['../src/routes/*.js']
// }


// const spec = swaggerJsdoc(options);

// export default function swaggerDocs(app, port) {

//     app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

//     app.get('/', (req, res) => {
//         res.setHeader('Content-Type', 'application/json');
//         res.send(spec);
//     });

//     const host = process.env.HOST;
//     const port = process.env.PORT;
//     console.log(` API-Docs are available at http://${host}:${port}/api-docs `);
// }