// app.test.js
const request = require('supertest');
const express = require('express');
const app = require('./app'); // Adjust this if app.js is exported differently

describe('GET /', () => {
    it('should return a welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello, CI/CD Pipeline!');
    });
});