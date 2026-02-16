const {readData, writeData} = require("../model/empmodel");
function listData(){
    return readData();
}

function getData(id){
    return readData().find(u=> u.id === id);
}

function createEmp(x){
    const emp = readData();
    x.id = emp.length ? emp[emp.length - 1].id + 1 : 1;
    emp.push(x);
    writeData(emp);
    return x;
}

function updateData(id, ud){
    const emp = readData();
    const i = emp.findIndex(u=> u.id === id);
    if(i === -1) return null;
    emp[i] = {...emp[i],...ud};
    writeData(emp);
    return emp[i]
}

function deleteData(id){
    const emp = readData();
    const filter = emp.filter(u=>u.id !== id);
    if(emp.length === filter.length) return false;
    writeData(filter);
    return true;
}

module.exports = {
    listData,
    getData,    
    createEmp,
    updateData,
    deleteData
}



