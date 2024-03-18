const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

app.post('/bfhl',(req,res)=>{
  const data = req.body.data;

  const evenNumber = data.filter(item => item % 2 === 0)
  const oddNumber = data.filter(item => item % 2 !== 0)

  const alphabet = data.filter(item => item.match(/[a-zA-Z]/).test(item));
  const alphabets = alphabet.map(item => item.toUpperCase());

  app.listen(3000,()=>{
    console.log('server working on host 3000')
  })
  
})
