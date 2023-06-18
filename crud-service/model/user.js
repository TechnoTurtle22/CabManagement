import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    // name: {
    //     type: String,
    //     index: {unique: true} 
    // },
    // username: {
    //     type: String,
    //     index: {unique: true}
    // },
    // email: {
    //     type: String,
    //     index: {unique: true} 
    // },
    // phone: {
    //     type: String,
    //     index: {unique: true} 
    // },
    cabID: {
        type: String,
        index: {unique: true} 
    },
    cabName: {
        type: String,
    },
    cabColor: {
        type: String,
    },
    cabNumber: {
        type: String,
        index: {unique: true} 
    },
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;