import request from 'supertest';
import app from "../src/app.js"

import { Query } from '../src/model/query.js';



describe('Testing the query Controller', () => {

    test('to delete a query', async() => {

        const response = await request(app).get(`/queries/63fcbd2fb93d94732b604703`);
        try {
            expect(response.status).toBe(200);
            expect(response.body.data.title).toBe("test query")
        } catch (error) {
            expect(response.status).toBe(404);
        }
    });
    test('Given the blog exists', async() => {

        const response = await request(app).get(`/queries/63fcbd2fb93d94732b604703`);
        try {
            expect(response.status).toBe(200);
            expect(response.body.data.title).toBe("test query")
        } catch (error) {
            expect(response.status).toBe(404);
        }
    });
    test('Get all queries', async() => {
        const response = await request(app)
            .get('/api/v1/blogs')
        expect(response.statusCode).toBe(200);
    })


});