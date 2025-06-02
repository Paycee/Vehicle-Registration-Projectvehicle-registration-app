
const express = require('express');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.post('/unosPodataka', (req, res)=>{
  console.log("test...");
  console.log(req.body.godiste);
  console.log(req.body.snaga);
  console.log(req.body.zapremina);
  res.send(JSON.stringify({"godine": req.body.godiste}, {"snaga": req.body.snaga}, {"zapremina": req.body.zapremina}));
});


app.listen(3033, () => console.log("server runing..."));
