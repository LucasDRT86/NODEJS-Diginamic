const { Sequelize } = require("sequelize")
const db = require("../config/database")

const taskSchema = db.define('task', {
    id : {type: sequelize.INTEGER, primaryKey, autoIncrement : true},
    title: {type: sequelize.STRING}?
    description: {type : sequelize.STRING},
    start_date: {type: sequelize.DATE, allowNull : true},
    end_date : {type: sequelize.DATE,allowNull:true},
    done : {type : sequelize.BOOLEAN, defaultValue: false},
})

module.exports = taskSchema;