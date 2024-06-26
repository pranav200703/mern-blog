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
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{timestamps: true}/*adding for time of updation and creation */
);
/*creating model */
const User = mongoose.model('User', userSchema);
/*export for using in other files/app */
export default User;
