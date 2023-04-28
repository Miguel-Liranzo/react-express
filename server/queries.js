const Pool = require("pg").Pool;
const pool = Pool( {
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: 'me',
    port: 5432
});

const getLink = (req, res) => {
    pool.query('SELECT * FROM links')
}
const getLinkByID = (req, res) => {
    pool.query('SELECT ')
}

const postLink = (req, res) => {
    pool.query('INSERT INTO links ')
}

const putLink = (req, res) => {
    pool.query('SET ... WHERE id')
}

const deleteLink = (req, res) => {
    pool.query('')
}

module.exports = {
    
}

