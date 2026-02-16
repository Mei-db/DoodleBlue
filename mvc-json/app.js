const express = require("express");
const fs = require("fs")
const app = express();

let y = 'data.json';
 
function createFile() {
  if (fs.existsSync(y)) {
  } else {
    fs.writeFile(y, "[]");
    console.log(`${y} id created`);
  }
}
createFile()


app.use(express.json());

app.use("/emp",require("./routes/emproutes"));

app.listen(3000, ()=> console.log("sever running in port 3000"))