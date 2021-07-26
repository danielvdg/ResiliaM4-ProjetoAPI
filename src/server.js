const app = require('./app')
const port = 40001;

app.listen(port, () =>
{
    console.log("Server rodando na porta: " + port)
})