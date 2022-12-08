const express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())


app.post('https://busy-pear-centipede-wear.cyclic.app/paid', (req, res) => {
    try {
        console.log(req.body)
    } catch (error) {
        console.log(error)
    }
  })

  app.listen(3000, function(){
    console.log("Server is at 3000")
  })
  app.post('https://bored-jumpsuit-cod.cyclic.app/paid', async (req, res) => {
	const paid = true

	try {
		res.json({
			paid
		})
	} catch (error) {
		console.log(error)
	}
})
  