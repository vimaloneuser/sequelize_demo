const Sequelize = require('sequelize')

const sequelize = new Sequelize('node_sequalize', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql',
    pool: { max: 5, min: 0, idle: 10000 }

})

sequelize.authenticate()
    .then(() => {
        console.log("connected")
    })
    .catch(err => {
        console.log("Error" + err)
    })