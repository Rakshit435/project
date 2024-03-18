const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

app.post("/bfhl", (req, res) => {
  const data = req.body.data;

  try {
    if (!data || !Array.isArray(data)) {
      res.status(400).send("Invalid data");
      return;
    }
    const evenNumber = data.filter((item) => item % 2 === 0);
    const oddNumber = data.filter((item) => item % 2 !== 0);

    const alphabet1 = data.filter(item.match(/[a-zA-Z]/));
    const alphabets = alphabet1.map((item) => item.toUpperCase());

    ("");
    res.status(200).json({
      status:"true",
      user_id:"john_doe_17091999",email:"john@xyz.com",
      roll_number:"ABCD123",
      odd_numbers:oddNumber,
      even_numbers:evenNumber,
      alaphabet:alphabets,
    })
  } catch (error) {
    console.log(err);
    res.status(500).send("internal server error");
  }
});
app.listen(3000, () => {
  console.log("server working on host 3000");
});
