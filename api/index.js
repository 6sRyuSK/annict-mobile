import axios from 'axios'
const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const env = require('dotenv').config().parsed

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post("/annict/authenticate/", function(req, res) {
  if(req.body.code) {
    console.log(req.body.code)
    let params = new URLSearchParams();
    params.append('client_id', env.AnnictClient)
    params.append('client_secret', env.AnnictSecret)
    params.append('redirect_uri', 'http://localhost:3000')
    params.append('grant_type', 'authorization_code')
    params.append('code', req.body.code)
    axios.post('https://api.annict.com/oauth/token', params).then((val) => {
      return res.send(val.data.access_token)
    }).catch((err) => {
      console.log(err)
    })
  }
  
  // return res.status(400).json({
  //   error: {
  //     message: 'bad request'
  //   }
  // })
});

module.exports = {
  path: "/api/",
  handler: app
}