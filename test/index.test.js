import request from "supertest"


import signup from "./signupTest.js";
import login from "./loginTest.js";
import createQuery from "./queriesTest.js";
import app from "../src/app.js"

describe('Api Test', () => {

    test('Should respond with 200 status code', async() => {
        const response = await request(app)
            .post('/api/v1/signup')
            .send({ signup });
        expect(response.statusCode).toBe(200);

    });

    test('Should respond with 200 status code', async() => {
        const response = await request(app)
            .post('/api/v1/login')
            .send({ login });
        expect(response.statusCode).toBe(200);

    })
    test('Create Query', async() => {
        const response = await request(app)
            .post('/api/v1/queries')
            .send({ createQuery })
        expect(response.statusCode).toBe(201);
        // const Query = response.body.data;
        // queryId = Query._id;
    })


})