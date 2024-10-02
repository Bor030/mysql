const db = require('../database')

const index = async (req,res) => {
    const sql = 'select * from users'
    const [data] = await db.query(sql)
    res.render('index',{data})

}

const create = async(req, res) => {
        
    await db.query(`insert into users (full_name, email) values('${req.body.full_name}','${req.body.email}')`)
    res.redirect('/')
}

const deleteProfile = async (req, res) => {

    const id = req.params.id
    const sql = `delete from users where id = ${id}`
    await db.query(sql)
    res.redirect('/')

}

const editProfile = async (req, res) => {
    const id = req.params.id
    
    const sql = `select * from users where id = ${id}`
    const [data ]= await db.query(sql)
    res.render('edit', {data})

}

const updateProfile = async (req, res) => {
    const id = req.params.id
    const sql = `update users set full_name = '${req.body.full_name}', email = '${req.body.email}' where id = ${id}`
    await db.query(sql)
    res.redirect('/')
}

module.exports = {
    index, create, deleteProfile, editProfile, updateProfile
}

