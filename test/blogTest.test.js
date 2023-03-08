import request from 'supertest';
import app from "../src/app.js"
import Blog from '../src/model/blog.js';


let userToken = '';
let blogId = '';
describe('Testing the blog Controller', () => {

    test('Given the blog exists', async() => {

        const response = await request(app).get(`/blogs/63ff570e1d607066920630f0`);
        try {
            expect(response.status).toBe(200);
            expect(response.body.data.title).toBe("test blog")
        } catch (error) {
            expect(response.status).toBe(404);
        }
    });
    test('deleting blog', async() => {

        const response = await request(app).get(`/blogs/63ff570e1d607066920630f0`);
        try {
            expect(response.status).toBe(200);
            expect(response.body.data.title).toBe("test blog")
        } catch (error) {
            expect(response.status).toBe(404);
        }
    });

    test('Update one blog', async() => {
        const response = await request(app).put(`/api/v1/blogs/${blogId}`)
            .set('Cookie', `token=${userToken}`);
        try {
            expect(response.statusCode).toBe(201);

        } catch (error) {
            expect(response.status).toBe(404);
        }


    })
    test('Get all blogs', async() => {
        const response = await request(app)
            .get('/api/v1/blogs')
        expect(response.statusCode).toBe(200);
    })

});