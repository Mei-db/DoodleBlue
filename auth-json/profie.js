const fs = require("fs");

obj = {
    name: "Mei",
    rollno: 12345678,
    phone: "8884338998",
    email: "smeiyammai@gmail.com",
    age: 20,
    sex: "f",
    mark: 86,
    branch: "pcm",
    board: "cbse",
    caste: null,
    address:"mylapore,chennai-04"
}

let password = "Test@123"

function admit(obj){

function setName(){
    if(obj.name==null){
        console.log("Please Enter the Name")
        return null;
    }
    else if(/^[a-zA-Z\s]+$/.test(obj.name)){
        return obj.name
    }
    else{
        console.log("Please Enter valid name");
        return null;
    }
}
function setRoll(){
    if(obj.rollno==null){
        console.log("Please Enter the Roll Number")
        return null;
    }
    else if(/^\d{8}$/.test(obj.rollno)){
        return Number(obj.rollno);
    }
    else{
        console.log("Please Enter valid Roll Number");
        return null;
    }
}
function setPhone(){
    if(obj.phone==null){
        console.log("Please Enter the Phone Number")
        return null;
    }
    else if(/^\d{10}$/.test(obj.phone)){
        return Number(obj.phone);
    }
    else{
        console.log("Please Enter valid Phone Number");
        return null;
    }
}
function setEmail(){
    if(obj.email==null){
        console.log("Please Enter the Email")
        return null;
    }
    else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email)){
        return obj.email;
    }
    else{
        console.log("Please Enter valid Email");
        return null;
    }
}
function setAddress(){
    if(obj.address==null){
        console.log(" Please Enter the Address")
        return null;
    }
    else if(/^(\d+\s)?[A-Za-z0-9\s,-]+$/.test(obj.address)){
        return obj.address;
    }
    else{
        console.log("Please Enter valid Address");
        return null;
    }
}
function setAge(){
    if(obj.age==null){
        console.log("Please Enter the Age")
        return null;
    }
    else if(/^\d+$/.test(obj.age) && obj.age >=18 && obj.age<=21){
        return Number(obj.age);
    }
    else{
        console.log("Please Enter valid Age");
        return null;
    }
}
function setSex(){
    if(obj.sex === null){
        return null;
    }
    else if(obj.sex.toLowerCase() ==="m" || obj.sex.toLowerCase() ==="f"){
        return obj.sex;
    }
    else{
        console.log("Please Enter valid Sex");
        return null;
    }
}
function setMark(){
    if(obj.mark == null ){
        console.log("Please fill the mark field");
        return null;
    }
    else if( 0 <= obj.mark && obj.mark<=100 ){
        return Number(obj.mark);
    }
     else{
        console.log("please enter the correct mark");
        return null;
    }
    }
function setBranch(){   
    if(obj.branch == null){
        console.log("Please enter the Branch");
        return null;
    }
    if(obj.branch.toLowerCase().trim() === "pcm" || obj.branch.toLowerCase().trim() === "pcb" || obj.branch.toLowerCase().trim() === "pcmb" || obj.branch.toLowerCase().trim() === "humanities" ){
        return obj.branch;
    }
    else{
        console.log("Please enter the corrct branch");
        return null;
    }
}
function setBoard(){   
    if(obj.board == null){
        console.log("Please enter the Board");
        return null;
    }
    else if(obj.board.toLowerCase().trim() === "cbse" || obj.board.toLowerCase().trim() === "icse" || obj.board.toLowerCase().trim() === "state board" ){
        return obj.board;
    }
    else{
        console.log("Please enter the correct Board");
        return null;
    }
}
function setCaste(){   
    if(obj.caste === null){
        return null;
    }
    else if(obj.caste.toLowerCase().trim() === "sc" || obj.caste.toLowerCase().trim() === "st" || obj.caste.toLowerCase().trim() === " bc"||obj.caste.toLowerCase().trim() === "obc" || obj.caste.toLowerCase().trim() === "mbc" || obj.caste.toLowerCase().trim() === "oc"){
        return obj.caste;
    }
    else{
        console.log("Please enter the correct Caste");
        return null;
    }

}

    let stu = {
    name: setName(),
    rollno: setRoll(),
    phone: setPhone(),
    email: setEmail(),
    age: setAge(),
    sex: setSex(),
    mark: setMark(),
    branch: setBranch(),
    board: setBoard(),
    caste: setCaste(),
    address: setAddress()
    };


    let y = "data.json";
function encryptpwd(pwd){
        const encoder = new TextEncoder();
        const bytes = encoder.encode(pwd);
        stu.pwd = bytes;
        const decoder = new TextDecoder();
        const op = decoder.decode(bytes);
        if (createFile(JSON.stringify(stu))){console.log("Your Password is",op)};
    }
    function createFile(x) {
    if (fs.existsSync(y)) {
        const file = fs.readFileSync(y, "utf8");
        let arr=[];
        if (file.trim() !== "") {
            arr = JSON.parse(file);
        }
        let exists = arr.find(u => u.rollno === stu.rollno);
        if (exists) {
            console.log("User already exists with this Roll Number");
            return false;
        } arr.push(stu);

        fs.writeFile(y, JSON.stringify(arr), (err) => {});
        console.log("Student admitted successfully");
        return true;
    } else {
        fs.writeFile(y, JSON.stringify([stu]), (err) => {});
        console.log("created");
        return true;
    }
    }
    if (
        stu.name == null ||
        stu.rollno == null ||
        stu.phone == null ||
        stu.email == null ||
        stu.age == null ||
        stu.mark == null ||
        stu.branch == null ||
        stu.board == null ||
        stu.address == null 
    ){console.log("The required fields is not filled correctly")}
    else{
        encryptpwd(password);
    }
}

admit(obj);

