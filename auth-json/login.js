const fs = require('fs');
let rollno= 12345688
let pwd= "Test@123"

function decryptPassword(encodedobj)
    {   const byteArray = new Uint8Array(Object.values(encodedobj));
        const decoder = new TextDecoder();
        return decoder.decode(byteArray);   
    }
function verify(e,p){
    const attribute = "rollno";
    const vaue = e;
    const file = fs.readFileSync('data.json', "utf8");
    const f = file.toString();
    if (f === "") {
        console.log("Register first");
    } else {
        let d = JSON.parse(f);
        const stu = d.find((dx) => dx[attribute] == vaue);
        if(stu==undefined){console.log("the student does not exist")}
        else{
        let pwd = stu["pwd"];
        const encryptpwd = decryptPassword(stu["pwd"])
        encryptpwd===p?console.log("User logged in sucessfully"):console.log("User Failed to login");
        } 
    }
    }
verify(rollno,pwd)