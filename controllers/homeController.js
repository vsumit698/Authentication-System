const userModel = require('../models/userModel');

module.exports.home = async function(req,res){
    res.render('home',{title:"Authentication"});
}
