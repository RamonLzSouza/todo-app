//define a porta do servidor HTTP
const port = 3003
//cria uma instancia de body-parse
const bodyParser = require('body-parser')
//cria uma instancia no express
const express = require('express')
//cria um servidor HTTP express
const server = express()
//cria instancia do arquivo 
const allowCors = require('./cors')
//configura o servidor para obter dados do formulario do usuario
server.use(bodyParser.urlencoded({ extended: true }))
//configura o servidor para dados chegarem no formato JSON
server.use(bodyParser.json())
server.use(allowCors)
//sobe o servidor
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server