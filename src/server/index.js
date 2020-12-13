const express = require('express')

const app = express();
const port = 1980;

/*
app.get('/', (req, res) => {
  for (var i = 0; i < Number.MAX_SAFE_INTEGER / 2000000; i++) {} // ~10 sec delay
  res.send('Hello World!')
})
*/
app.use(express.json()) // for parsing application/json
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/process', function (req, res, next) {
  
  for (var i = 0; i < Number.MAX_SAFE_INTEGER / 2000000; i++) {} // ~10 sec delay
  //res.json(req.body)
  const result = req.body.input1.length + req.body.input2.length;
  res.json(result)
})

app.use(express.static('./build/public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})