const fs= require('fs');
const y = "./data.json";

function readData() {
  if (!fs.existsSync(y)) return [];
  let x = JSON.parse(fs.readFileSync(y))
  return x;
}

function writeData(data){
    let d=JSON.stringify(data)
    fs.writeFile(y, d, (err) => {});
}

module.exports = {readData,writeData};

