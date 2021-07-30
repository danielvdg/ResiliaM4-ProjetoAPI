const app = require('./app')
const port = 40001;

app.listen(process.env.PORT || port, () =>
{
    console.log(`Server rodando na porta: ${process.env.PORT || port}`)
})