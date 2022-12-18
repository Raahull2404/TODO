const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        immutable: true,
        default: () => {
            return Date.now()
        }
    }
})

module.exports = mongoose.model('todoModel', todoSchema)