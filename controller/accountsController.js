const user = require('../model/user');
const { body, validationResult } = require('express-validator');

module.exports.login = (req, res, next)=>{
    res.render('login');
}

module.exports.loginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    const userFromDb = await user.findOne({
        where: {email: email, password: password}
    });
    
    if(userFromDb == null){
        res.render('login', {message: 'No user with this email or password was found.'})
    }

    res.render('login');
}

module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.registerPost = async (req, res, next)=>{
    const {firstName, lastName, email, password } = req.body;
    let existingUser = await user.findOne({
        where: {
            email: email
        }
    });

    if(existingUser){
        return res.render('register', {message: 'Already registered.'});
    }

    await user.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });

    res.redirect('/login');
}