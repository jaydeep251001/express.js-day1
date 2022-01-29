const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html')
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
  })
  app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
  })

app.get("/process",(req,res)=> {
    var name = req.query.txt1;
    var age = req.query.txt2;
    var msg = "My name is " + name + "  age is " +age ;
    console.log(msg);
    res.send(msg);
}
)

app.listen(port, () => {
  console.log(`localhost:3000/home`)
})
