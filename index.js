const express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())


app.post('/paid', (req, res) => {
    try {
        console.log(res.body)
    } catch (error) {
        console.log(error)
    }
  })

  app.listen(3000, function(){
    console.log("Server is at 3000")
  })

  