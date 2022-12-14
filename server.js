
const express = require("express")
const app = express();

app.use(express.static(__dirname + '/dist/'));

//Add endpoint here
app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);