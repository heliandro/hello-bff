import request from 'supertest';
import app from '../../src/app';

describe('GET /hello', () => {
    
    it('should return success message', async () => {
        const agent = request(app)
        const response = await agent.get('/hello')

        expect(response.body).toEqual({ msg: 'Hi Mom!' })
    });
});