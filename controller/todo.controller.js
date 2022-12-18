const todoModel = require('../model/todo.model')
const bcrypt = require('bcryptjs')
const salt = 10

exports.singIn = async (req, res) => {

}

exports.signUp = async (req, res) => {
    const { email, password: plainTextPassword } = req.body;
    const password = await bcrypt.hash(plainTextPassword, salt);
    try {
        const response = await User.create({
            email,
            password
        })
        return res.redirect('/');
    } catch (error) {
        console.log(JSON.stringify(error));
        if (error.code === 11000) {
            return res.send({ status: 'error', error: 'email already exists' })
        }
        throw error
    }
}