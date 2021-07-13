const { response } = require("express");


const getUser = (req, res =  response) => {
    res.json({msg: 'get User'})
}

const postUser = (req, res =  response) => {
    res.json({msg: 'post User'})
}

const putUser = (req, res =  response) => {
    res.json({msg: 'put User'})
}

const deleteUser = (req, res =  response) => {
    res.json({msg: 'delete User'})
}

module.exports = {
    deleteUser,
    getUser,
    postUser,
    putUser
}