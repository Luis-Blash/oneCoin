const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name:{
        type: String,
        required: [true, 'Name required']
    },
    email:{
        type: String,
        required: [true, 'Email required']
    },
    password:{
        type: String,
        required: [true, 'Password required']
    },
    status:{
        type: Boolean,
        default: true
    },
    savings_account:{
        type: Schema.Types.ObjectId,
        ref: 'SavingsAccount'
    }
})

UserSchema.methods.toJSON = function () {
    const {__v, _id, status, password,...data} = this.toObject();
    data.uid = _id;
    return data
}

module.exports = model('User', UserSchema);