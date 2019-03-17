const cors = require('cors')
const express = require('express')
const server = express()
const personsQuery = require('./database')

server.use(cors())

server.get('/persons', (req, res) => {
    personsQuery(req.query)
      .then(persons => res.status(200).json({
        ok: true,
        persons
      }))
      .catch(err => res.status(500).json({
        ok: false,
        error: err.message
      }))
  })

module.exports = server  