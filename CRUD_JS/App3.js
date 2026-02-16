const fs = require("fs");

const newobj = {
  fname: "Anas",
  lname: "Mohideen",
  id: "102",
  salary: "10000",
};

const Employee = [
  {
    fname: "Meiyammai",
    lname: "Shanmugam",
    id: "101",
    salary: "10000",
  },
  {
    fname: "Bala",
    lname: "Subramaniyan",
    id: "102",
    salary: "15000",
  },
  {
    fname: "Maneesha",
    lname: "Suburayalu",
    id: "103",
    salary: "20000",
  },
];

var x = JSON.stringify(Employee);

let y = "data.json";

function createFile() {
  if (fs.existsSync(y)) {
    console.log("file already exists");
  } else {
    fs.writeFile(y, x, (err) => {});
    console.log("created");
  }
}

function listData() {
  const file = fs.readFileSync("data.json");
  f = file.toString();
  if (f === "") {
    console.log("File is empty. No data to display.");
  } else {
    let rcdarr = JSON.parse(f);
    console.log(rcdarr);
  }
}
function updateinFile(obj) {
  const attribute = "id";
  const value = "101";
  const file = fs.readFileSync(y, "utf8");
  const f = file.toString();
  if (f === "") {
    console.log("File is empty. No data to display.");
  } else {
    let d = JSON.parse(f);
    const index = d.findIndex((k) => k[attribute] === value);
    if (index == -1) {
      console.log(`there is no ${attribute} having that ${value}`);
    } else {
      d.splice(index, 1, obj);
      fs.writeFile("./data.json", JSON.stringify(d), (err) => {});
      console.log("one object is updated sucessfully");
    }
  }
}

function getData(value) {
  const attribute = "id";
  const vaue = value;
  const file = fs.readFileSync(y, "utf8");
  const f = file.toString();
  if (f === "") {
    console.log("File is empty. No data to display.");
  } else {
    let d = JSON.parse(f);

    const empoyee = d.find((dx) => dx[attribute] === vaue);
    console.log(empoyee);
  }
}

function deleteUsingId(value) {
  const attribute = "id";
  const vaue = value;
  const file = fs.readFileSync(y, "utf8");
  const f = file.toString();
  if (f === "") {
    console.log("File is empty. No data to display.");
  } else {
    let d = JSON.parse(f);
    const index = d.findIndex((k) => k[attribute] === vaue);
    if (index == -1) {
      console.log(`there is no ${attribute} having that ${vaue}`);
    } else {
      d.splice(index, 1);
      fs.writeFile("./data.json", JSON.stringify(d), (err) => {});
      console.log("one object is deleted sucessfully");
    }
  }
}
function deleteFileContent() {
  const file = fs.readFileSync(y, "utf8");
  const f = file.toString();
  if (f === "") {
    console.log("File is empty. No data to display.");
  } else {
    fs.writeFileSync("data.json", "");
    console.log("data.json content deleted successfully");
  }
}
// updateinFile(newobj)
createFile();
// listData();
// getData("101");
// deleteUsingId("103");
// deleteFileContent();
