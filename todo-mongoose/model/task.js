const mongoose = require("mongoose")

const TaskskSchema = mongoose.schema({
    title :String,
    description : String,
    start_date: Date,
    end_date: Date,
    done : Boolean
})

module.exports =mangoose.model("task",TaskskSchema)