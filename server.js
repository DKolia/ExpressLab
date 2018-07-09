const express = require("express")
const app = express();

//Greetings App
app.get('/greeting/:name', (req, res) => {
  // res.send({params: req.params, queries: req.query})

// building a string, we will res.send back to our user
  const output = "Stop " + req.params.name + "!";


  res.send (output)


});


app.listen(3000, () => {
  console.log("Server is running on port: 3000");
})
