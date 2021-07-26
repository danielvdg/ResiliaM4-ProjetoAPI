const express = require('express');
const app = express();
const port = 40001;

app.listen(port, () =>
{
    console.log("Server rodando na porta: " + port)
})