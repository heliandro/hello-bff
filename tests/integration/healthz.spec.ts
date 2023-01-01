import 'jest'
import request from 'supertest';
import app from '../../src/app';

describe('GET /healthz', () => {
    
    it('should return 200 OK', async () => {
        const agent = request(app)
        const response = await agent.get('/healthz')

        expect(response.status).toBe(200)
    });
});