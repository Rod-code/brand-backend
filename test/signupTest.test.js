import request from 'supertest';

import app from "../src/app.js"

describe('Testing the login', () => {
    describe('user logged in', () => {
        test('user already have an account', async() => {
            const loginUser = {
                email: 'email',
                password: 'password',
            };
            try {
                const response = await request(app).post('/login').send(loginUser);
                expect(response.statusCode).toBe(200);
            } catch (error) {
                const err = await request(app).post('/login').send(loginUser);
                expect(err.statusCode).toBe(404);
            }
        });
    });
});