const express = require('express');
const app = express();
const productrouter = require("./router/productRouter")

app.use(express.json());

app.listen(3000, () => {
  console.log(`App running on port 3000`);
});

app.use(productrouter);


