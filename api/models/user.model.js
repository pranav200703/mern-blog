import mongoose from 'mongoose';

/*creating user schema ( table data) */
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    },{timestamps: true}/*adding for time of updation and creation */
);
/*creating model */
const User = mongoose.model('User', userSchema);
/*export for using in other files/app */
export default User;
