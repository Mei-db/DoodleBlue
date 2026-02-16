const service = require("../service/empservice");

exports.listEmp = (req,res) => {
    res.json(service.listData());
};

exports.getEmp = (req,res) => {
    const emp = service.getData(Number(req.params.id));
    if (!emp) return res.status(404).json({msg:"employee not found"});
    res.json(emp);
};

exports.addEmp = (req,res) => {
    const emp = service.createEmp(req.body);
    res.status(201).json(emp);
};

exports.updateEmp = (req,res) =>{
    const emp = service.updateData(Number(req.params.id),req.body);
    if(!emp) return res.status(404).json({msg: "empoyee not found"});
    res.json(emp);
};

exports.deleteEmp = (req,res) => {
const emp = service.deleteData(Number(req.params.id));
if (!emp) return res.status(404).json({msg: "empoyee not found"})
res.json({msg: "employee records have been deleted successfully"});
};