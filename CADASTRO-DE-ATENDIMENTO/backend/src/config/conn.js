import { Sequelize } from "sequelize"

const sequelize = new Sequelize('cadas', 'root', 'Sen@iDev77!.', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize