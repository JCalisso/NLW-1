import express from 'express';

const app = express();

app.use(express.json());


// Rota> endereco completo da requisição
// Recurso> Qual entidade estamos acessando do sistema 

// GET> Buscar uma ou mais informações do Backend
//  * Toda vez que o navegador acessa uma rota ele faz uma requisição do tipo GET

// POST> Criar uma nova informação no Backend

// PUT> Atualizar uma informação existente no Backend

// DELETE> Remover uma informação do Backend

// POST http://localhost:3333/users  -- Criar um usuário
// GET  http://localhost:3333/users  -- Listar usuários
// GET http://localhost:3333/users/5 -- Buscar dados do usuário com ID 5

// Request Param> Parâmetros que vem na própria rota que identificam um recurso
// Query Param>   Parâmetro que vem na própria rota, geralmente opcionais para filtros, paginação, etc
// Request Body>  Parâmetros para criação/atualização de informações

const users = [
    'Diego',      //0
    'Cleito',     //1
    'Robsu',      //2
    'Daniel',     //3
    'Michel Telo' //4
];


app.get('/users',(request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) =>{
    const id = Number(request.params.id);

    const user = users[id];
    

    return response.json(user);
});

app.post('/users', (request, response) =>{
    const data = request.body;

    console.log(data)

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});



app.listen(3333);