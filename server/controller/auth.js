const bcrypt = require('bcryptjs');
const User=new Array();
function user(name, password) {
    this.name = name;
    this.password = password;
}
User.__proto__.create =async function (username,password) {
    const newuser = new user(username,password);
    User.push(newuser);
    return newuser;
}
User.__proto__.getUser =async function (username) {
    return User.find(user => user.username === username);
}




async function login(req, res) {
    const { username, password } = req.body;
    const user = await User.getUser(username);
    if (!user) { throw new Error('This username does not exist'); }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { throw new Error('Password is incorrect'); }
    res.send({message:'User logged in successfully'})

}
async function register(req, res) {
    const { username, password } = req.body;
    const user = await User.getUser(username);
    if (user) { throw new Error('This username is not avaliable'); }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newuser = await User.create(username, hash);
    res.send({message:'User created successfully'})
}
module.exports = {login,register}