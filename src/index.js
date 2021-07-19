const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET: busca informações do back-end
 * POST: criar informação no back-end
 * PUT/PATCH: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 * 
 */

app.get('/projects', ( request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([   
        'Projeto 1',   
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 3',
    ]);
});


app.listen(3333, () => {
    console.log('Back-end started!')
});