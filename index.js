const express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(express.json())


app.post('https://busy-pear-centipede-wear.cyclic.app/paid', (req, res) => {
    try {
        res.json(result)
    } catch (error) {
        console.log(error)
    }
  })

  app.listen(3000, function(){
    console.log("Server is at 3000")
  })

  